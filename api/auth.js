// Magic-link "get back to my adventure" endpoint.
//   POST /api/auth   { email }        -> emails a resume link (always 200; no existence leak)
//   GET  /api/auth?token=TOKEN        -> validates the link, rotates the edit token,
//                                        returns { id, editToken, payload } for this device
import {
  db,
  ensureSchema,
  makeToken,
  hashToken,
  normalizeEmail,
  getAccountShareId,
  mintResumeToken,
  verifyResumeToken,
  checkRateLimit,
  clientIp,
} from "../lib/db.js";

function getBody(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body))
    return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  if (Buffer.isBuffer(req.body)) {
    try {
      return JSON.parse(req.body.toString("utf8"));
    } catch {
      return null;
    }
  }
  return null;
}

function baseUrl(req) {
  const host =
    req.headers["x-forwarded-host"] || req.headers.host || "freedom-trail.org";
  const proto = req.headers["x-forwarded-proto"] || "https";
  return `${proto}://${host}`;
}

async function sendResumeEmail(to, link) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not set");
  const from =
    process.env.RESEND_FROM || "Freedom Trail <hello@freedom-trail.org>";
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:480px;margin:0 auto;color:#0f172a">
      <h2 style="color:#a61c1c">Your Freedom Trail adventure</h2>
      <p>Tap the button below to return to your adventure on this device — your check-ins, notes, and photos come with you, and you can keep saving.</p>
      <p style="margin:24px 0">
        <a href="${link}" style="background:#a61c1c;color:#fff;padding:12px 20px;border-radius:10px;text-decoration:none;font-weight:600">Open my adventure</a>
      </p>
      <p style="color:#64748b;font-size:13px">This link works for 30 minutes. If you didn't request it, you can ignore this email.</p>
    </div>`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: "Your Freedom Trail adventure link",
      html,
    }),
  });
  if (!res.ok) throw new Error("email send failed: " + res.status);
}

export default async function handler(req, res) {
  try {
    await ensureSchema();

    // Request a resume link.
    if (req.method === "POST") {
      if (!(await checkRateLimit(`auth:${clientIp(req)}`, 20))) {
        return res.status(429).json({ error: "rate limited" });
      }
      const body = getBody(req) || {};
      const email = normalizeEmail(body.email);
      // Always 200 so we never reveal whether an email has an adventure.
      if (email) {
        const shareId = await getAccountShareId(email);
        if (shareId) {
          try {
            await sendResumeEmail(
              email,
              `${baseUrl(req)}/?resume=${encodeURIComponent(mintResumeToken(shareId))}`,
            );
          } catch (e) {
            console.error("resume email failed", e);
          }
        }
      }
      return res.status(200).json({ ok: true });
    }

    // Verify a resume link -> hand this device edit access.
    if (req.method === "GET") {
      const token =
        req.query && req.query.token
          ? String(req.query.token)
          : new URL(req.url, "http://localhost").searchParams.get("token");
      const shareId = verifyResumeToken(token);
      if (!shareId)
        return res.status(400).json({ error: "invalid or expired link" });
      const r = await db().execute({
        sql: "SELECT id, payload FROM shares WHERE id = ?",
        args: [shareId],
      });
      if (!r.rows.length)
        return res.status(404).json({ error: "adventure not found" });
      // Rotate the edit token so this device can save again (old plaintext is unrecoverable).
      const newToken = makeToken();
      await db().execute({
        sql: "UPDATE shares SET edit_token_hash = ? WHERE id = ?",
        args: [hashToken(newToken), shareId],
      });
      return res
        .status(200)
        .json({
          id: shareId,
          editToken: newToken,
          payload: JSON.parse(r.rows[0].payload),
        });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    console.error("auth handler error", e);
    return res.status(500).json({ error: "server error" });
  }
}
