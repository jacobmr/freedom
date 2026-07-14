// Boston Freedom Trail Companion - Application Code

// --- STATIC SITE DATA ---
const SITES_DATA = [
  {
    id: 1,
    name: "Boston Common",
    lat: 42.3551,
    lng: -71.0657,
    address: "Boston Common Visitor Information Center – 139 Tremont Street",
    hours: "Daily, 8:30 am – 4:45 pm (Park open 24/7)",
    fee: "Free",
    description: "America’s oldest public park, the Boston Common, began as a common grazing ground for sheep and cattle. Eccentric Anglican William Blackstone settled on Beacon Hill with only his books for company in 1622. In 1630, Puritans joined him, and by 1635 Blackstone sold his 44 acres of land back to the townspeople. It has served as a training field for the militia, a British Army camp, a place of public executions, and a historic center for public speech.",
    factoids: [
      "Began as a common grazing ground for sheep and cattle in 1634, with each household paying six shillings.",
      "Used as a British Army camp during the military occupation of Boston prior to the Revolution.",
      "Its varied history includes being a place to publicly hang pirates, Quakers, and accused witches.",
      "Hosted historic public speeches by Dr. Martin Luther King, Jr., Pope John Paul II, and Gloria Steinem."
    ]
  },
  {
    id: 2,
    name: "Massachusetts State House",
    lat: 42.3582,
    lng: -71.0637,
    address: "Beacon Street (Beacon Hill)",
    hours: "Mondays – Fridays, 8:45 am – 5:00 pm (Closed weekends & holidays)",
    fee: "Free",
    description: "Designed by Charles Bulfinch, the 'new' State House was completed on January 11, 1798. Today, it stands as one of the oldest buildings on Beacon Hill. The land for the State House was originally used as John Hancock’s cow pasture. The building represents the seat of Massachusetts government, where state representatives, senators, and the governor conduct the daily business of the Commonwealth.",
    factoids: [
      "The land was purchased from John Hancock's estate and was originally his cow pasture.",
      "The famous golden dome was originally made of wood, later sheathed in copper by Paul Revere, and first gilded in 23-karat gold leaf in 1874.",
      "The building is a masterpiece of Federal architecture, designed by Charles Bulfinch, who also worked on the US Capitol."
    ]
  },
  {
    id: 3,
    name: "Park Street Church",
    lat: 42.3569,
    lng: -71.0620,
    address: "Corner of Park and Tremont Streets",
    hours: "July – August, Hours vary. Worship services: Sundays 8:30 am, 11:00 am, 4:00 pm",
    fee: "Free",
    description: "Founded as a beacon of Trinitarian congregationalism in 1809, the church featured an iconic 217-foot steeple, which was the tallest structure in the United States when completed. The site is famously nicknamed 'Brimstone Corner' because the basement was used to store gunpowder during the War of 1812. The church has a rich history of social justice advocacy, notably hosting the first major anti-slavery address of William Lloyd Garrison.",
    factoids: [
      "The 217-foot steeple was the tallest structure in the United States when it was completed in 1810.",
      "Nicknamed 'Brimstone Corner' because gunpowder was stored in the church crypts during the War of 1812.",
      "William Lloyd Garrison gave his first major public address against slavery here on July 4, 1829.",
      "The patriotic hymn 'America' (My Country 'Tis of Thee) was first performed here on July 4, 1831."
    ]
  },
  {
    id: 4,
    name: "Granary Burying Ground",
    lat: 42.3575,
    lng: -71.0617,
    address: "Tremont Street",
    hours: "Daily, 10:00 am – 4:00 pm",
    fee: "Free",
    description: "Established in 1660, the Granary Burying Ground is the final resting place of some of America's most notable citizens and patriots. An elaborately embellished obelisk marks the site of John Hancock's tomb. Benjamin Franklin's parents, Paul Revere, Samuel Adams, James Otis, Peter Faneuil, and all five victims of the Boston Massacre are buried here.",
    factoids: [
      "Contains 2,345 headstones, but it is estimated that over 5,000 people are buried here.",
      "Groundskeepers arranged the headstones into neat rows during the 19th century to make grass-cutting easier.",
      "Over 400 children are buried in the cemetery's central Infant's Tomb.",
      "Resting place of three signers of the Declaration of Independence: John Hancock, Samuel Adams, and Robert Treat Paine."
    ]
  },
  {
    id: 5,
    name: "King’s Chapel & Burying Ground",
    lat: 42.3569,
    lng: -71.0607,
    address: "Corner of Tremont and School Streets",
    hours: "May – September: Tue – Sat, 10:00 am – 5:00 pm; October – March: Fri – Sat, 10:00 am – 4:00 pm",
    fee: "Free (Donations welcome; tours have fee)",
    description: "Founded as New England's first Anglican Church in 1686, the current 1754 Stone Chapel is considered one of the finest examples of Georgian Neoclassical architecture in North America. It features high box pews, a 1717 wineglass pulpit, and a historic crypt. King's Chapel Burying Ground is Boston's oldest cemetery, containing the graves of historical figures like Governor John Winthrop.",
    factoids: [
      "Built of solid Quincy granite, the stone chapel was constructed around the original wooden church so services could continue during building.",
      "Contains an 1816 Paul Revere bell—the largest bell ever cast by Revere's foundry—which still rings today.",
      "The burying ground is Boston's oldest (1630) and holds John Winthrop (first governor) and Mary Chilton (first woman off the Mayflower).",
      "Joseph Tapping's headstone in the burying ground features a skeleton fighting Father Time over the hour of death, a classic Puritan emblem."
    ]
  },
  {
    id: 6,
    name: "Boston Latin School Site / Benjamin Franklin Statue",
    lat: 42.3582,
    lng: -71.0593,
    address: "School Street",
    hours: "Open 24/7 (Outdoor site)",
    fee: "Free",
    description: "Founded in 1635, Boston Latin School is the oldest public school in the United States. It offered free education to boys, rich or poor, and was attended by many revolutionary leaders. A mosaic on the sidewalk marks the original schoolhouse site, and a bronze statue of alumnus Benjamin Franklin stands in front of the location.",
    factoids: [
      "Founded in 1635, it is the oldest public school in continuous operation in America.",
      "Four signers of the Declaration of Independence attended: Franklin, Adams, Hancock, and Paine. (Franklin dropped out).",
      "On April 19, 1775, the headmaster reportedly closed the school saying, 'Close your books. School's done, and war's begun!'",
      "The statue of Benjamin Franklin was erected in 1856 and is Boston's oldest portrait statue."
    ]
  },
  {
    id: 7,
    name: "Old Corner Bookstore",
    lat: 42.3571,
    lng: -71.0583,
    address: "3 School Street",
    hours: "Open during business hours (Commercial retail)",
    fee: "Free",
    description: "Constructed in 1718, the Old Corner Bookstore is downtown Boston’s oldest commercial building. It is most famous for housing Ticknor and Fields, the 19th-century publishing giant. During that era, the bookstore was a literary hub where authors like Henry David Thoreau, Nathaniel Hawthorne, Harriet Beecher Stowe, and Henry Wadsworth Longfellow gathered.",
    factoids: [
      "Constructed in 1718, it is the oldest commercial brick building in downtown Boston.",
      "Thoreau's Walden, Hawthorne's The Scarlet Letter, and Stowe's Uncle Tom's Cabin were all published here.",
      "The Atlantic Monthly magazine was founded and edited in this building.",
      "Saved from demolition in 1960 by local preservationists who purchased it for $100,000."
    ]
  },
  {
    id: 8,
    name: "Old South Meeting House",
    lat: 42.3569,
    lng: -71.0586,
    address: "310 Washington Street",
    hours: "Daily, 10:00 am – 5:00 pm (Closed Thanksgiving, Christmas, New Year's)",
    fee: "Admission Fee (Includes Old State House access)",
    description: "Built in 1729 as a Puritan house of worship, the Old South Meeting House was the largest building in colonial Boston. Its massive capacity made it the natural gathering place for angry colonial protests. It was here, on December 16, 1773, that 5,000 colonists gathered to debate the tea tax, leading directly to the Boston Tea Party.",
    factoids: [
      "The Boston Tea Party was launched from here when Samuel Adams gave the signal to the crowded meeting room.",
      "Enslaved poet Phillis Wheatley, the first African-American woman to publish a book, was a member of this congregation.",
      "During the Revolutionary War, the British occupied the church, removed the pews, filled it with dirt, and used it as a horse stable."
    ]
  },
  {
    id: 9,
    name: "Old State House",
    lat: 42.3587,
    lng: -71.0575,
    address: "206 Washington Street",
    hours: "Daily, 10:00 am – 5:00 pm (Closed Thanksgiving, Christmas, New Year's)",
    fee: "Admission Fee (Includes Old South Meeting House access)",
    description: "Built in 1713, the Old State House served as the seat of British royal government in the colony of Massachusetts. It was the site of the Boston Massacre outside its doors in 1770, and on July 18, 1776, the Declaration of Independence was first read to the citizens of Boston from its east balcony.",
    factoids: [
      "Built in 1713, it is the oldest surviving public building in Boston.",
      "The lion and unicorn statues on the roof are replicas; the originals were torn down and burned in 1776 as symbols of the King.",
      "Served as the Capitol of Massachusetts from 1776 until the new State House was completed on Beacon Hill in 1798."
    ]
  },
  {
    id: 10,
    name: "Boston Massacre Site",
    lat: 42.3585,
    lng: -71.0574,
    address: "Corner of State and Congress Streets (Outside Old State House)",
    hours: "Open 24/7 (Sidewalk plaza)",
    fee: "Free",
    description: "A cobblestone ring in the sidewalk marks the site of the Boston Massacre on March 5, 1770. On that night, a skirmish erupted between British redcoats and Boston residents, leading to soldiers firing into the mob and killing five civilians. The event was immortalized by Paul Revere's propaganda engraving, and the soldiers were defended in court by John Adams.",
    factoids: [
      "Crispus Attucks, a man of African and Native American descent, was killed here and is remembered as the first casualty of the Revolution.",
      "John Adams successfully defended the soldiers in court, arguing that the law must remain objective and just.",
      "The tragedy is marked by a circular cobblestone ring that sits in the middle of a busy Boston intersection."
    ]
  },
  {
    id: 11,
    name: "Faneuil Hall",
    lat: 42.3600,
    lng: -71.0561,
    address: "Faneuil Hall Square",
    hours: "Mondays – Saturdays, 10:00 am – 7:00 pm; Sundays, 10:00 am – 6:00 pm",
    fee: "Free",
    description: "Built in 1742 by merchant Peter Faneuil, Faneuil Hall was a gift to the city to serve as a public marketplace and meeting hall. Often called the 'Cradle of Liberty,' it hosted fiery speeches by Samuel Adams, James Otis, and others protesting British rule. The second floor features the Great Hall, which still hosts public debates and naturalization ceremonies.",
    factoids: [
      "The first floor has functioned continuously as a public market bazaar for over 280 years.",
      "Features a historic copper grasshopper weather vane, which has sat atop the cupola since 1742.",
      "During the War of 1812, residents used the grasshopper weather vane as a security test: asking strangers what was on Faneuil Hall's roof to spot British spies."
    ]
  },
  {
    id: 12,
    name: "Paul Revere House",
    lat: 42.3638,
    lng: -71.0537,
    address: "19 North Square (North End)",
    hours: "Daily, 10:00 am – 5:15 pm (November – April: 10:00 am – 4:15 pm)",
    fee: "Admission Fee (Cash/Check preferred)",
    description: "Built around 1680, the Paul Revere House is the oldest building in downtown Boston and the only residential home on the Freedom Trail. Paul Revere, a silversmith and patriot, purchased this house in 1770 and lived here with his family during his famous midnight ride on April 18, 1775. The house was restored in 1908 and operates as a museum.",
    factoids: [
      "Built around 1680, it is the oldest remaining residential structure in downtown Boston.",
      "Revere lived here with his large family, which included his mother, his wife, and many of his 16 children.",
      "The home was sold in 1800 and served as a tenement, a candy store, a cigar factory, and a bank before being preserved."
    ]
  },
  {
    id: 13,
    name: "Old North Church",
    lat: 42.3665,
    lng: -71.0545,
    address: "193 Salem Street (North End)",
    hours: "Tuesday – Saturday, 10:00 am – 5:00 pm; Sunday, 12:30 pm – 5:00 pm",
    fee: "Admission Fee",
    description: "Officially known as Christ Church, Old North was built in 1723 and is Boston's oldest surviving church building. It gained fame on April 18, 1775, when sexton Robert Newman hung two lanterns in its 191-foot steeple to signal that British troops were moving 'by sea' to Lexington and Concord, alerting Paul Revere and initiating the midnight ride.",
    factoids: [
      "Boston's oldest active church, completed in 1723, and inspired by the designs of Sir Christopher Wren.",
      "The 'One if by land, two if by sea' lantern signal was displayed in the steeple for less than a minute to avoid British sentry detection.",
      "The historic crypt contains the tombs of over 1,100 people buried beneath the church floors."
    ]
  },
  {
    id: 14,
    name: "Copp’s Hill Burying Ground",
    lat: 42.3675,
    lng: -71.0563,
    address: "Hull Street (North End)",
    hours: "Daily, 10:00 am – 4:00 pm",
    fee: "Free",
    description: "Established in 1659, Copp's Hill is the final resting place of many merchants, craftspeople, and residents of Boston's North End. Preachers Cotton and Increase Mather are buried here, along with Robert Newman. Due to its elevated position overlooking the harbor, British troops used this hill to place artillery during the Battle of Bunker Hill.",
    factoids: [
      "The second oldest burying ground in Boston, established in 1659 on the site of a windmill.",
      "British soldiers used Daniel Malcolm's tombstone for target practice during the Siege of Boston, and bullet scars remain visible.",
      "Contains a large number of unmarked graves of free and enslaved African-Americans in a designated potter's field."
    ]
  },
  {
    id: 15,
    name: "USS Constitution & Museum",
    lat: 42.3725,
    lng: -71.0566,
    address: "Charlestown Navy Yard (Charlestown)",
    hours: "Ship: Wednesday – Sunday, 10:00 am – 4:00 pm. Museum: Daily, 10:00 am – 5:00 pm",
    fee: "Free (Ship entry; photo ID required for ages 18+). Museum: Donation-based.",
    description: "Launched in Boston in 1797, the USS Constitution is the world's oldest commissioned warship still afloat. She earned the nickname 'Old Ironsides' during the War of 1812 when British cannonballs appeared to bounce off her thick wooden hull. Today, she is crewed by active-duty US Navy personnel and serves as a floating museum of American naval history.",
    factoids: [
      "Nicknamed 'Old Ironsides' because cannonballs bounced off her hull, which is made of three layers of dense white and live oak.",
      "Paul Revere's foundry supplied the copper bolts and sheathing that protect the wooden hull from water damage.",
      "She remains a fully commissioned, active-duty US Navy warship that sails under her own power once a year."
    ]
  },
  {
    id: 16,
    name: "Bunker Hill Monument",
    lat: 42.3763,
    lng: -71.0603,
    address: "43 Monument Square (Charlestown)",
    hours: "Museum: Wednesday – Sunday, 10:00 am – 5:00 pm. Monument climb: check current hours.",
    fee: "Free",
    description: "A towering 221-foot granite obelisk commemorates the Battle of Bunker Hill, fought on June 17, 1775. This battle was the first major clash of the American Revolution, during which colonial forces held their ground against multiple charges by the British Army. The monument stands on Breed's Hill, where most of the combat actually occurred.",
    factoids: [
      "The 221-foot obelisk is made of Quincy granite blocks, which were hauled to the site via the Granite Railway, one of America's first railroads.",
      "The battle was actually fought on Breed's Hill, which was lower and closer to the water than Bunker Hill.",
      "Colonial commander William Prescott famously ordered, 'Don't fire until you see the whites of their eyes!' to conserve limited gunpowder."
    ]
  }
];

// --- INDEXEDDB IMPLEMENTATION ---
const DB_NAME = 'FreedomTrailDB';
const DB_VERSION = 1;
let db = null;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onupgradeneeded = (e) => {
      const dbInstance = e.target.result;
      
      // Journals store: key is siteId
      if (!dbInstance.objectStoreNames.contains('journals')) {
        dbInstance.createObjectStore('journals', { keyPath: 'siteId' });
      }
      
      // Photos store: key is autoIncrement, index is siteId
      if (!dbInstance.objectStoreNames.contains('photos')) {
        const photoStore = dbInstance.createObjectStore('photos', { keyPath: 'id', autoIncrement: true });
        photoStore.createIndex('siteId', 'siteId', { unique: false });
      }
    };
    
    request.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };
    
    request.onerror = (e) => {
      console.error('IndexedDB opening error:', e.target.error);
      reject(e.target.error);
    };
  });
}

// Journal CRUD
function getJournal(siteId) {
  return new Promise((resolve) => {
    if (!db) return resolve(null);
    const transaction = db.transaction(['journals'], 'readonly');
    const store = transaction.objectStore('journals');
    const request = store.get(Number(siteId));
    
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => resolve(null);
  });
}

function saveJournal(siteId, text) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not initialized"));
    const transaction = db.transaction(['journals'], 'readwrite');
    const store = transaction.objectStore('journals');
    const record = {
      siteId: Number(siteId),
      entryText: text,
      timestamp: Date.now()
    };
    const request = store.put(record);
    
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject(e.target.error);
  });
}

function getAllJournals() {
  return new Promise((resolve) => {
    if (!db) return resolve([]);
    const transaction = db.transaction(['journals'], 'readonly');
    const store = transaction.objectStore('journals');
    const request = store.getAll();
    
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => resolve([]);
  });
}

// Photos CRUD
function getPhotos(siteId) {
  return new Promise((resolve) => {
    if (!db) return resolve([]);
    const transaction = db.transaction(['photos'], 'readonly');
    const store = transaction.objectStore('photos');
    const index = store.index('siteId');
    const request = index.getAll(Number(siteId));
    
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => resolve([]);
  });
}

function addPhoto(siteId, blob) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not initialized"));
    const transaction = db.transaction(['photos'], 'readwrite');
    const store = transaction.objectStore('photos');
    const record = {
      siteId: Number(siteId),
      blob: blob,
      timestamp: Date.now()
    };
    const request = store.add(record);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

function deletePhoto(photoId) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not initialized"));
    const transaction = db.transaction(['photos'], 'readwrite');
    const store = transaction.objectStore('photos');
    const request = store.delete(Number(photoId));
    
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject(e.target.error);
  });
}

function getAllPhotos() {
  return new Promise((resolve) => {
    if (!db) return resolve([]);
    const transaction = db.transaction(['photos'], 'readonly');
    const store = transaction.objectStore('photos');
    const request = store.getAll();
    
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => resolve([]);
  });
}

// --- IMAGE COMPRESSION UTILITY ---
function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      
      img.onload = () => {
        const maxDim = 1280;
        let width = img.width;
        let height = img.height;
        
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Canvas compression blob failed"));
          }
        }, 'image/jpeg', 0.82); // High-quality compression
      };
      
      img.onerror = (err) => reject(err);
    };
    
    reader.onerror = (err) => reject(err);
  });
}

// --- STATE MANAGEMENT ---
const state = {
  visitedSites: new Set(), // Set of siteIds
  userLocation: { lat: null, lng: null, accuracy: null },
  distances: {}, // siteId -> distance in meters
  currentTab: 'timeline-tab',
  activeDetailSiteId: null,
  closestSiteId: null,
  watchId: null,
  mapConfig: {
    zoomScale: 1.0,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    projector: null
  }
};

// Load visited sites from localStorage
function loadState() {
  const saved = localStorage.getItem('freedom_visited_sites');
  if (saved) {
    try {
      const ids = JSON.parse(saved);
      state.visitedSites = new Set(ids);
    } catch (e) {
      console.error("Error loading visited state", e);
    }
  }
}

function saveVisitedState() {
  localStorage.setItem('freedom_visited_sites', JSON.stringify(Array.from(state.visitedSites)));
  updateProgressUI();
}

// --- DISTANCE CALCULATION ---
// Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const phi1 = lat1 * Math.PI / 180;
  const phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in meters
}

function formatDistance(meters) {
  if (meters === null || meters === undefined) return '';
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  }
  // Convert to miles
  const miles = meters / 1609.34;
  return `${miles.toFixed(2)} mi`;
}

// --- UI RENDERING & HANDLERS ---

// Update header progress bar
function updateProgressUI() {
  const total = SITES_DATA.length;
  const visitedCount = state.visitedSites.size;
  const percent = total > 0 ? Math.round((visitedCount / total) * 100) : 0;
  
  document.getElementById('progress-text').textContent = `${visitedCount} of ${total} sites visited`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('progress-bar-fill').style.width = `${percent}%`;
}

// Generate Timeline Card HTML
function createSiteCard(site) {
  const isVisited = state.visitedSites.has(site.id);
  const isNearby = (state.distances[site.id] && state.distances[site.id] <= 50);
  const distanceStr = state.distances[site.id] ? formatDistance(state.distances[site.id]) : '';
  
  let badges = '';
  if (isVisited) {
    badges += `<span class="badge" style="background-color: var(--status-visited-glow); color: var(--status-visited);"><i class="fa-solid fa-check"></i> Visited</span>`;
  }
  if (isNearby && !isVisited) {
    badges += `<span class="badge" style="background-color: var(--status-nearby-glow); color: var(--status-nearby);"><i class="fa-solid fa-location-dot"></i> Nearby!</span>`;
  }
  if (site.fee === "Free") {
    badges += `<span class="badge"><i class="fa-solid fa-hand-holding-heart"></i> Free</span>`;
  }

  const card = document.createElement('div');
  card.className = `site-card ${isVisited ? 'visited' : ''} ${isNearby && !isVisited ? 'nearby' : ''}`;
  card.dataset.siteId = site.id;
  card.innerHTML = `
    <div class="site-node">${site.id}</div>
    <div class="site-info">
      <div class="site-title-row">
        <h4>${site.name}</h4>
        ${distanceStr ? `<span class="site-distance">${distanceStr}</span>` : ''}
      </div>
      <p class="site-snippet">${site.description}</p>
      <div class="site-meta-badges">
        ${badges}
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => openDetailsDrawer(site.id));
  return card;
}

function renderTimeline() {
  const container = document.getElementById('sites-list');
  container.innerHTML = '';
  SITES_DATA.forEach(site => {
    container.appendChild(createSiteCard(site));
  });
}

// Open Details Sheet/Drawer
async function openDetailsDrawer(siteId) {
  state.activeDetailSiteId = siteId;
  const site = SITES_DATA.find(s => s.id === siteId);
  if (!site) return;
  
  const isVisited = state.visitedSites.has(siteId);
  const distanceStr = state.distances[siteId] ? formatDistance(state.distances[siteId]) : '';
  const journal = await getJournal(siteId);
  const journalText = journal ? journal.entryText : '';
  
  const drawerBody = document.getElementById('drawer-body-content');
  drawerBody.innerHTML = `
    <div class="detail-header">
      <div class="detail-title-badge-row">
        <h3>#${site.id} - ${site.name}</h3>
      </div>
      <div class="detail-meta-list">
        <div class="meta-item"><i class="fa-solid fa-location-dot"></i> <span>${site.address}</span></div>
        <div class="meta-item"><i class="fa-solid fa-clock"></i> <span>${site.hours}</span></div>
        <div class="meta-item"><i class="fa-solid fa-ticket"></i> <span>Cost: ${site.fee}</span></div>
        ${distanceStr ? `<div class="meta-item"><i class="fa-solid fa-person-walking"></i> <span>Distance from you: ${distanceStr}</span></div>` : ''}
      </div>
    </div>

    <!-- Visit Checklist Status Card -->
    <div class="detail-action-card ${isVisited ? '' : 'unvisited'}">
      <div class="status-info">
        <span class="status-lbl">Trail Status</span>
        <span class="status-val">${isVisited ? '<i class="fa-solid fa-circle-check" style="color: var(--status-visited)"></i> Visited' : '<i class="fa-regular fa-circle" style="color: var(--text-muted)"></i> Unvisited'}</span>
      </div>
      <button id="detail-checkin-btn" class="primary-btn sm-btn" style="background: ${isVisited ? 'var(--bg-tertiary)' : ''}; color: ${isVisited ? 'var(--text-primary)' : ''}; border: ${isVisited ? '1px solid var(--border-color)' : ''}; box-shadow: ${isVisited ? 'none' : ''}">
        ${isVisited ? 'Mark Unvisited' : 'Check In Here'}
      </button>
    </div>

    <div class="detail-section-title">History & Significance</div>
    <p class="detail-desc">${site.description}</p>

    <div class="detail-section-title">Historical Factoids</div>
    <div class="factoid-list">
      ${site.factoids.map((fact, index) => `
        <div class="factoid-item">
          <button class="factoid-trigger" onclick="toggleFactoid(this)">
            <span>Factoid #${index + 1}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="factoid-content">
            ${fact}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="detail-section-title">My Journal & Reflections</div>
    <div class="journal-entry-container">
      <textarea id="drawer-journal-textarea" class="journal-textarea" placeholder="Write down your thoughts, memories, or stories about this historic site...">${journalText}</textarea>
      <div class="autosave-indicator" id="autosave-indicator">All edits auto-saved locally</div>
    </div>

    <div class="detail-section-title">Site Photos</div>
    <div class="photo-capture-section">
      <div class="photo-grid" id="drawer-photo-grid">
        <!-- Render existing photos -->
        <label class="camera-input-wrapper" id="camera-btn-wrapper">
          <i class="fa-solid fa-camera"></i>
          <span>Add Photo</span>
          <input type="file" id="camera-file-input" accept="image/*" capture="environment">
        </label>
      </div>
    </div>
  `;
  
  // Bind Check-in Button
  document.getElementById('detail-checkin-btn').addEventListener('click', () => {
    toggleSiteCheckin(siteId);
    openDetailsDrawer(siteId); // Refresh drawer content
  });
  
  // Bind Journal Auto-save on Input (Debounced)
  let saveTimeout = null;
  const textarea = document.getElementById('drawer-journal-textarea');
  textarea.addEventListener('input', () => {
    const text = textarea.value;
    const indicator = document.getElementById('autosave-indicator');
    indicator.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Saving draft...`;
    
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
      try {
        await saveJournal(siteId, text);
        indicator.innerHTML = `<i class="fa-solid fa-circle-check"></i> Draft saved locally`;
        if (state.currentTab === 'journal-tab') renderJournalTimeline();
      } catch (err) {
        indicator.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error saving`;
      }
    }, 800);
  });

  // Load photos into grid
  renderDrawerPhotos(siteId);

  // Bind Camera Input
  const fileInput = document.getElementById('camera-file-input');
  fileInput.addEventListener('change', async (e) => {
    if (e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    const indicator = document.getElementById('autosave-indicator');
    indicator.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing image...`;
    
    try {
      const compressedBlob = await compressImage(file);
      await addPhoto(siteId, compressedBlob);
      indicator.innerHTML = `<i class="fa-solid fa-circle-check"></i> Photo added!`;
      
      // Re-render photo grid
      renderDrawerPhotos(siteId);
      if (state.currentTab === 'journal-tab') renderJournalTimeline();
    } catch (err) {
      console.error(err);
      indicator.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Failed to save photo`;
    }
  });
  
  // Slide up drawer
  document.getElementById('details-drawer').classList.remove('hidden');
}

// Helper to open accordion factoids
window.toggleFactoid = function(button) {
  const item = button.closest('.factoid-item');
  item.classList.toggle('expanded');
};

// Render photos in details drawer
async function renderDrawerPhotos(siteId) {
  const photos = await getPhotos(siteId);
  const grid = document.getElementById('drawer-photo-grid');
  
  // Remove all photo items, keep only the add-photo label button
  const items = grid.querySelectorAll('.photo-item-container');
  items.forEach(i => i.remove());
  
  const cameraBtnWrapper = document.getElementById('camera-btn-wrapper');
  
  photos.forEach(p => {
    const url = URL.createObjectURL(p.blob);
    const container = document.createElement('div');
    container.className = 'photo-item-container';
    container.innerHTML = `
      <img src="${url}" class="photo-item-img" alt="Trail photo">
      <button class="delete-photo-btn" data-photo-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
    `;
    
    // Lightbox image preview
    container.querySelector('.photo-item-img').addEventListener('click', () => {
      openLightbox(url);
    });

    // Delete photo trigger
    container.querySelector('.delete-photo-btn').addEventListener('click', async (e) => {
      e.stopPropagation();
      if (confirm('Delete this photo?')) {
        await deletePhoto(p.id);
        renderDrawerPhotos(siteId);
        if (state.currentTab === 'journal-tab') renderJournalTimeline();
      }
    });
    
    // Insert before camera button
    grid.insertBefore(container, cameraBtnWrapper);
  });
}

// Lightbox utility
function openLightbox(imgUrl) {
  let lightbox = document.getElementById('app-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'app-lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close"><i class="fa-solid fa-xmark"></i></button>
      <img src="" class="lightbox-img" alt="Enlarged photo">
    `;
    document.body.appendChild(lightbox);
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
  
  lightbox.querySelector('.lightbox-img').src = imgUrl;
  lightbox.classList.add('active');
}

// Handle Check-in updates
function toggleSiteCheckin(siteId) {
  siteId = Number(siteId);
  if (state.visitedSites.has(siteId)) {
    state.visitedSites.delete(siteId);
  } else {
    state.visitedSites.add(siteId);
  }
  saveVisitedState();
  renderTimeline();
  drawMap();
}

// Render Journal Timeline View
async function renderJournalTimeline() {
  const container = document.getElementById('journal-timeline-container');
  const emptyState = document.getElementById('journal-empty-state');
  
  container.innerHTML = '';
  
  const journals = await getAllJournals();
  const photos = await getAllPhotos();
  
  // Filter sites that have either a journal entry or photos
  const sitesWithNotes = SITES_DATA.filter(site => {
    const hasText = journals.some(j => j.siteId === site.id && j.entryText.trim().length > 0);
    const hasPhotos = photos.some(p => p.siteId === site.id);
    return hasText || hasPhotos;
  });
  
  if (sitesWithNotes.length === 0) {
    emptyState.style.display = 'flex';
    container.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  container.style.display = 'flex';
  
  sitesWithNotes.forEach(site => {
    const journal = journals.find(j => j.siteId === site.id);
    const sitePhotos = photos.filter(p => p.siteId === site.id);
    const dateStr = journal ? new Date(journal.timestamp).toLocaleDateString(undefined, {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : 'Photo entry';
    
    const card = document.createElement('div');
    card.className = 'journal-card';
    
    let photosHtml = '';
    if (sitePhotos.length > 0) {
      photosHtml = `<div class="journal-photos">`;
      sitePhotos.forEach(p => {
        const url = URL.createObjectURL(p.blob);
        photosHtml += `<img src="${url}" class="journal-photo-thumbnail" alt="Journal Photo" onclick="openLightbox('${url}')">`;
      });
      photosHtml += `</div>`;
    }
    
    card.innerHTML = `
      <div class="journal-card-header">
        <h4>#${site.id} - ${site.name}</h4>
        <span class="journal-date">${dateStr}</span>
      </div>
      ${journal && journal.entryText.trim() ? `<p class="journal-text">${journal.entryText}</p>` : ''}
      ${photosHtml}
      <button class="secondary-btn sm-btn" style="margin-top: 10px; font-size: 0.72rem; padding: 6px 10px; border-radius: 6px;" onclick="openDetailsDrawer(${site.id})">
        <i class="fa-solid fa-edit"></i> Edit Entry
      </button>
    `;
    
    container.appendChild(card);
  });
}

// Export journal as Markdown file
async function exportJournal() {
  const journals = await getAllJournals();
  const photos = await getAllPhotos();
  
  let mdContent = `# Boston Freedom Trail Travel Journal\n`;
  mdContent += `Generated on ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n\n`;
  mdContent += `Total Visited: ${state.visitedSites.size} of 16 sites\n\n`;
  mdContent += `--- \n\n`;
  
  SITES_DATA.forEach(site => {
    const journal = journals.find(j => j.siteId === site.id);
    const sitePhotos = photos.filter(p => p.siteId === site.id);
    const isVisited = state.visitedSites.has(site.id);
    
    if ((journal && journal.entryText.trim()) || sitePhotos.length > 0 || isVisited) {
      mdContent += `## Site #${site.id}: ${site.name}\n`;
      mdContent += `- **Status**: ${isVisited ? 'Visited' : 'Not Visited'}\n`;
      mdContent += `- **Address**: ${site.address}\n\n`;
      
      if (journal && journal.entryText.trim()) {
        mdContent += `### Thoughts & Reflections:\n`;
        mdContent += `${journal.entryText}\n\n`;
      }
      
      if (sitePhotos.length > 0) {
        mdContent += `### Photos Captured:\n`;
        mdContent += `_Captured ${sitePhotos.length} photo(s) at this site. (Saved locally in app databases)_\n\n`;
      }
      
      mdContent += `--- \n\n`;
    }
  });
  
  const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `freedom_trail_journal_${new Date().toISOString().slice(0,10)}.md`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- GPS TRACKING & PROXIMITY ENGINE ---
function initGeolocation() {
  if (!navigator.geolocation) {
    document.getElementById('map-gps-status').innerHTML = `<i class="fa-solid fa-location-pin-slash" style="color: var(--accent-crimson)"></i> GPS Unsupported`;
    return;
  }
  
  state.watchId = navigator.geolocation.watchPosition(
    (position) => {
      state.userLocation.lat = position.coords.latitude;
      state.userLocation.lng = position.coords.longitude;
      state.userLocation.accuracy = position.coords.accuracy;
      
      document.getElementById('map-gps-status').innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--status-visited)"></i> GPS Active`;
      document.getElementById('map-gps-status').classList.add('active');
      
      calculateDistances();
    },
    (error) => {
      console.error("GPS Watch error", error);
      document.getElementById('map-gps-status').innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--status-nearby)"></i> GPS Offline`;
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 5000 }
  );
}

function calculateDistances() {
  if (state.userLocation.lat === null || state.userLocation.lng === null) return;
  
  let closestSite = null;
  let minDistance = Infinity;
  
  SITES_DATA.forEach(site => {
    const dist = getDistance(state.userLocation.lat, state.userLocation.lng, site.lat, site.lng);
    state.distances[site.id] = dist;
    
    if (dist < minDistance) {
      minDistance = dist;
      closestSite = site;
    }
  });
  
  state.closestSiteId = closestSite ? closestSite.id : null;
  
  // Check if closest site is within 50m (Proximity checklist activation)
  const proximityBanner = document.getElementById('proximity-banner');
  if (closestSite && minDistance <= 50 && !state.visitedSites.has(closestSite.id)) {
    document.getElementById('proximity-site-name').textContent = closestSite.name;
    proximityBanner.classList.remove('hidden');
    
    // Bind proximity checkin button
    const bannerBtn = document.getElementById('proximity-checkin-btn');
    bannerBtn.onclick = () => {
      toggleSiteCheckin(closestSite.id);
      proximityBanner.classList.add('hidden');
    };
  } else {
    proximityBanner.classList.add('hidden');
  }
  
  // Re-render timeline and map with distances
  renderTimeline();
  drawMap();
}

// --- MAP CANVAS RENDER ENGINE ---
function setupMapCanvas() {
  const canvas = document.getElementById('map-canvas');
  if (!canvas) return;
  
  const resizeCanvas = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    drawMap();
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Drag / Pan Controls
  canvas.addEventListener('mousedown', (e) => {
    state.mapConfig.isDragging = true;
    state.mapConfig.dragStart.x = e.clientX - state.mapConfig.panX;
    state.mapConfig.dragStart.y = e.clientY - state.mapConfig.panY;
  });
  
  window.addEventListener('mousemove', (e) => {
    if (!state.mapConfig.isDragging) return;
    state.mapConfig.panX = e.clientX - state.mapConfig.dragStart.x;
    state.mapConfig.panY = e.clientY - state.mapConfig.dragStart.y;
    drawMap();
  });
  
  window.addEventListener('mouseup', () => {
    state.mapConfig.isDragging = false;
  });

  // Mobile Touch Drag Support
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      state.mapConfig.isDragging = true;
      state.mapConfig.dragStart.x = e.touches[0].clientX - state.mapConfig.panX;
      state.mapConfig.dragStart.y = e.touches[0].clientY - state.mapConfig.panY;
    }
  });

  canvas.addEventListener('touchmove', (e) => {
    if (!state.mapConfig.isDragging || e.touches.length !== 1) return;
    state.mapConfig.panX = e.touches[0].clientX - state.mapConfig.dragStart.x;
    state.mapConfig.panY = e.touches[0].clientY - state.mapConfig.dragStart.y;
    drawMap();
  });

  canvas.addEventListener('touchend', () => {
    state.mapConfig.isDragging = false;
  });
  
  // Control Bindings
  document.getElementById('map-zoom-in').addEventListener('click', () => {
    state.mapConfig.zoomScale *= 1.25;
    drawMap();
  });
  
  document.getElementById('map-zoom-out').addEventListener('click', () => {
    state.mapConfig.zoomScale /= 1.25;
    drawMap();
  });
  
  document.getElementById('map-recenter').addEventListener('click', () => {
    recenterMap();
  });
  
  // External Map Button
  document.getElementById('external-map-btn').addEventListener('click', () => {
    // Open in native Google Maps
    // Route from Boston Common to Bunker Hill containing coordinates
    const routeUrl = `https://www.google.com/maps/dir/?api=1&origin=42.3551,-71.0657&destination=42.3763,-71.0603&waypoints=42.3582,-71.0637%7C42.3569,-71.0620%7C42.3575,-71.0617%7C42.3569,-71.0607%7C42.3582,-71.0593%7C42.3571,-71.0583%7C42.3569,-71.0586%7C42.3587,-71.0575%7C42.3585,-71.0574%7C42.3600,-71.0561%7C42.3638,-71.0537%7C42.3665,-71.0545%7C42.3675,-71.0563%7C42.3725,-71.0566&travelmode=walking`;
    window.open(routeUrl, '_blank');
  });
}

function recenterMap() {
  state.mapConfig.zoomScale = 1.0;
  state.mapConfig.panX = 0;
  state.mapConfig.panY = 0;
  drawMap();
}

function drawMap() {
  const canvas = document.getElementById('map-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dark/Light Colors
  const isLight = document.body.classList.contains('light-mode');
  const pathColor = isLight ? '#a61c1c' : '#c22e2e';
  const gridColor = isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)';
  const labelColor = isLight ? '#1e293b' : '#f1f5f9';
  const labelSubColor = isLight ? '#64748b' : '#94a3b8';
  
  // Initialize projection logic if needed
  state.mapConfig.projector = getProjector(canvas.width, canvas.height);
  const proj = state.mapConfig.projector;
  
  ctx.save();
  // Apply zoom and panning transformations
  ctx.translate(canvas.width / 2 + state.mapConfig.panX, canvas.height / 2 + state.mapConfig.panY);
  ctx.scale(state.mapConfig.zoomScale, state.mapConfig.zoomScale);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  
  // 1. Draw Grid Lines for depth
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = -canvas.width * 2; x < canvas.width * 3; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, -canvas.height * 2);
    ctx.lineTo(x, canvas.height * 3);
    ctx.stroke();
  }
  for (let y = -canvas.height * 2; y < canvas.height * 3; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(-canvas.width * 2, y);
    ctx.lineTo(canvas.width * 3, y);
    ctx.stroke();
  }
  
  // 2. Draw The Brick Trail Path Connecting all 16 stops
  ctx.beginPath();
  SITES_DATA.forEach((site, index) => {
    const pt = proj.project(site.lat, site.lng);
    if (index === 0) {
      ctx.moveTo(pt.x, pt.y);
    } else {
      ctx.lineTo(pt.x, pt.y);
    }
  });
  ctx.strokeStyle = pathColor;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([4, 6]); // Stylized dashed red brick line
  ctx.stroke();
  ctx.setLineDash([]); // Reset dash
  
  // 3. Draw site node circles & labels
  SITES_DATA.forEach(site => {
    const pt = proj.project(site.lat, site.lng);
    const isVisited = state.visitedSites.has(site.id);
    const isClosest = (state.closestSiteId === site.id);
    
    // Draw Node Core
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 8, 0, 2 * Math.PI);
    
    if (isVisited) {
      ctx.fillStyle = '#10b981'; // green
      ctx.strokeStyle = '#059669';
    } else if (isClosest) {
      ctx.fillStyle = '#fbbf24'; // gold
      ctx.strokeStyle = '#d97706';
      
      // Pulsing outer halo for closest
      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 14 + Math.sin(Date.now() / 200) * 3, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = isLight ? '#ffffff' : '#141b2d';
      ctx.strokeStyle = pathColor;
    }
    
    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();
    
    // Draw Node Label Text
    ctx.font = `600 9px ${varName('--font-family-sans')}`;
    ctx.fillStyle = labelColor;
    ctx.fillText(`${site.id}`, pt.x - 3.5, pt.y + 3);
    
    // Label details (Show only for alternate nodes or on hover, but since simple canvas, render clean names nearby)
    ctx.font = `500 8px ${varName('--font-family-sans')}`;
    ctx.fillStyle = labelSubColor;
    
    // Position labels dynamically to avoid collision (alternate left/right)
    const labelOffset = site.id % 2 === 0 ? 12 : -12;
    ctx.textAlign = site.id % 2 === 0 ? 'left' : 'right';
    ctx.fillText(site.name, pt.x + labelOffset, pt.y + 3);
  });
  
  // 4. Draw User Location Dot
  if (state.userLocation.lat !== null && state.userLocation.lng !== null) {
    const userPt = proj.project(state.userLocation.lat, state.userLocation.lng);
    
    // Check if user is inside canvas bounds
    if (userPt.x >= 0 && userPt.x <= canvas.width && userPt.y >= 0 && userPt.y <= canvas.height) {
      // Pulse animation outer circle
      const pulseRadius = 10 + Math.sin(Date.now() / 150) * 4;
      ctx.beginPath();
      ctx.arc(userPt.x, userPt.y, pulseRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'; // Semi-transparent blue
      ctx.fill();
      
      // Core Blue Dot
      ctx.beginPath();
      ctx.arc(userPt.x, userPt.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();
    }
  }
  
  ctx.restore();
}

// Projection coordinator bounds
function getProjector(width, height) {
  const refLat = 42.3551;
  const refLng = -71.0657;
  const COS_LAT = Math.cos(refLat * Math.PI / 180);
  
  const projected = SITES_DATA.map(s => {
    const dy = (s.lat - refLat) * 111139;
    const dx = (s.lng - refLng) * 111139 * COS_LAT;
    return { dx, dy };
  });
  
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  projected.forEach(p => {
    if (p.dx < minX) minX = p.dx;
    if (p.dx > maxX) maxX = p.dx;
    if (p.dy < minY) minY = p.dy;
    if (p.dy > maxY) maxY = p.dy;
  });
  
  const pad = 120; // 120 meters padding
  minX -= pad; maxX += pad;
  minY -= pad; maxY += pad;
  
  const spanX = maxX - minX;
  const spanY = maxY - minY;
  
  const margin = 32;
  const wAvail = width - 2 * margin;
  const hAvail = height - 2 * margin;
  
  const scale = Math.min(wAvail / spanX, hAvail / spanY);
  
  const offX = margin + (wAvail - spanX * scale) / 2;
  const offY = margin + (hAvail - spanY * scale) / 2;
  
  return {
    project: (lat, lng) => {
      const dy = (lat - refLat) * 111139;
      const dx = (lng - refLng) * 111139 * COS_LAT;
      return {
        x: offX + (dx - minX) * scale,
        y: offY + (maxY - dy) * scale
      };
    }
  };
}

// Utility to read CSS variable values safely
function varName(cssVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || 'Outfit';
}

// Dynamic Map Pulsing loop for GPS pulse animation
setInterval(() => {
  if (state.currentTab === 'map-tab') {
    drawMap();
  }
}, 300);

// --- TAB ROUTING ENGINE ---
function setupTabRouting() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;
  
  // Update Navbar Active Style
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Show / Hide Views
  document.querySelectorAll('.tab-view').forEach(view => {
    if (view.id === tabId) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });
  
  // Perform tab-specific setup
  if (tabId === 'map-tab') {
    setTimeout(() => {
      setupMapCanvas();
      recenterMap();
    }, 50);
  } else if (tabId === 'journal-tab') {
    renderJournalTimeline();
  }
}

// --- SETUP THEME SWITCHER ---
function setupThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('freedom_theme');
  
  if (storedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
  
  toggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      localStorage.setItem('freedom_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      localStorage.setItem('freedom_theme', 'light');
    }
    // Re-draw map if open to update colors
    if (state.currentTab === 'map-tab') drawMap();
  });
}

// Drawer overlay closure binding
function setupDrawerClose() {
  const overlay = document.getElementById('details-drawer');
  const closeBtn = document.getElementById('close-drawer-btn');
  
  const closeDrawer = () => {
    overlay.classList.add('hidden');
    state.activeDetailSiteId = null;
  };
  
  closeBtn.addEventListener('click', closeDrawer);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeDrawer();
  });
  
  // Support swipe/drag down to close
  let touchStart = 0;
  const content = overlay.querySelector('.drawer-content');
  
  content.addEventListener('touchstart', (e) => {
    touchStart = e.touches[0].clientY;
  });
  
  content.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientY - touchStart;
    // Allow closing if dragging down from the top handle bar
    if (diff > 120 && e.target.closest('.drawer-handle-bar')) {
      closeDrawer();
    }
  });
}

// --- BOOTSTRAP INITIALIZATION ---
window.addEventListener('DOMContentLoaded', async () => {
  loadState();
  updateProgressUI();
  renderTimeline();
  
  // Register database
  try {
    await initDB();
    console.log("IndexedDB Initialized successfully");
  } catch (e) {
    console.error("IndexedDB failed", e);
  }
  
  // Bind UI modules
  setupTabRouting();
  setupThemeSwitcher();
  setupDrawerClose();
  
  // Start GPS Watcher
  initGeolocation();
  
  // Export Journal Bind
  document.getElementById('export-journal-btn').addEventListener('click', exportJournal);
  
  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker Registered!', reg.scope))
      .catch(err => console.warn('Service Worker registration failed:', err));
  }
});
