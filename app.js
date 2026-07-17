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

// --- TAVERNS & TREATS: curated food/coffee stops along the trail (organic, not sponsored) ---
// Coordinates are approximate (good enough for proximity sorting). Editable data, no ads.
const TAVERNS_DATA = [
  { name: "Thinking Cup", category: "Coffee", nearStop: 1, lat: 42.3547, lng: -71.0637, address: "165 Tremont St, Boston", website: "thinkingcup.info", blurb: "Beloved local espresso bar right on Boston Common — a perfect way to caffeinate before you set out." },
  { name: "JP Licks", category: "Ice Cream", nearStop: 2, lat: 42.3585, lng: -71.0705, address: "150 Charles St, Boston", website: "jplicks.com", blurb: "Boston's own ice-cream institution since 1981, a short stroll off Beacon Hill." },
  { name: "George Howell Coffee", category: "Coffee", nearStop: 8, lat: 42.3554, lng: -71.0603, address: "505 Washington St, Boston", website: "georgehowellcoffee.com", blurb: "Flagship specialty roaster in Downtown Crossing — serious coffee for the midtown stretch." },
  { name: "Sam LaGrassa's", category: "Deli & Sandwiches", nearStop: 10, lat: 42.3573, lng: -71.0596, address: "44 Province St, Boston", website: "samlagrassas.com", blurb: "Legendary counter-service sandwiches (since 1968) a block off the Trail. Cash-fast, tourist-approved." },
  { name: "Green Dragon Tavern", category: "Historic Tavern", nearStop: 11, lat: 42.3609, lng: -71.0575, address: "11 Marshall St, Boston", website: "greendragonboston.com", blurb: "Nicknamed the 'Headquarters of the Revolution' — patriots met at the original nearby. A must for tavern lore." },
  { name: "Bell in Hand Tavern", category: "Historic Tavern", nearStop: 11, lat: 42.3608, lng: -71.0568, address: "45 Union St, Boston", website: "bellinhand.com", blurb: "Established 1795 and billed as America's oldest continuously operating tavern, steps from Faneuil Hall." },
  { name: "Union Oyster House", category: "Seafood", nearStop: 11, lat: 42.3607, lng: -71.0570, address: "41 Union St, Boston", website: "unionoysterhouse.com", blurb: "America's oldest restaurant (1826), right on the Trail — oysters, chowder, and colonial atmosphere." },
  { name: "Neptune Oyster", category: "Seafood", nearStop: 12, lat: 42.3630, lng: -71.0567, address: "63 Salem St, Boston", website: "neptuneoyster.com", blurb: "Tiny, Michelin-noted North End oyster bar famous for its hot buttered lobster roll. Expect a line." },
  { name: "Modern Pastry", category: "Pastry & Cannoli", nearStop: 12, lat: 42.3634, lng: -71.0552, address: "257 Hanover St, Boston", website: "modernpastry.com", blurb: "North End cannoli royalty, filled to order. The classic Mike's-vs-Modern debate starts here." },
  { name: "Mike's Pastry", category: "Pastry & Cannoli", nearStop: 12, lat: 42.3639, lng: -71.0546, address: "300 Hanover St, Boston", website: "mikespastry.com", blurb: "The iconic 1946 pastry shop with 19 kinds of cannoli. Grab a string-tied blue box." },
  { name: "Mamma Maria", category: "Italian", nearStop: 12, lat: 42.3639, lng: -71.0538, address: "3 North Square, Boston", website: "mammamaria.com", blurb: "Upscale Italian in a historic townhouse overlooking North Square, by the Paul Revere House." },
  { name: "Bova's Bakery", category: "Bakery (24h)", nearStop: 13, lat: 42.3648, lng: -71.0560, address: "134 Salem St, Boston", website: "bovabakeryboston.net", blurb: "Family-run since 1926 and open around the clock — cannoli, cookies, and calzones any hour." },
  { name: "Monument Restaurant & Tavern", category: "Tavern", nearStop: 15, lat: 42.3760, lng: -71.0610, address: "251 Main St, Charlestown", website: "monumentcharlestown.com", blurb: "Craft beer and comfort food in Charlestown, handy between the USS Constitution and Bunker Hill." },
  { name: "Waverly Charlestown", category: "American", nearStop: 16, lat: 42.3770, lng: -71.0615, address: "231 Bunker Hill St, Charlestown", website: "waverlycharlestown.com", blurb: "Boston Magazine 'Best Brunch' pick near the Bunker Hill Monument — a fine reward at the Trail's end." }
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
  selectedCanvasSiteId: null,
  watchId: null,
  track: [], // recorded GPS breadcrumbs [{lat,lng,t}]
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

// --- GPS BREADCRUMB TRACK: record the real path walked, for the map + flyover (#8) ---
const TRACK_KEY = 'freedom_track';

function loadTrack() {
  try {
    const raw = localStorage.getItem(TRACK_KEY);
    state.track = raw ? JSON.parse(raw) : [];
  } catch (e) {
    state.track = [];
  }
}

// Append a breadcrumb, throttled by distance + time so GPS jitter doesn't bloat it.
function recordTrackPoint(lat, lng, acc) {
  if (acc && acc > 60) return; // ignore very fuzzy fixes (big jumps pollute the path)
  const track = state.track;
  const last = track[track.length - 1];
  const now = Date.now();
  if (last) {
    if (now - last.t < 4000) return; // >= 4s apart
    if (getDistance(last.lat, last.lng, lat, lng) < 12) return; // >= 12m moved
  }
  if (track.length >= 5000) return; // hard cap
  track.push({ lat: +lat.toFixed(5), lng: +lng.toFixed(5), t: now });
  try { localStorage.setItem(TRACK_KEY, JSON.stringify(track)); } catch (e) { /* quota */ }
  updateLeafletTrack();
}

function clearTrack() {
  state.track = [];
  try { localStorage.removeItem(TRACK_KEY); } catch (e) {}
  if (leaflet.userTrack) { leaflet.map.removeLayer(leaflet.userTrack); leaflet.userTrack = null; }
  if (state.currentTab === 'map-tab' && !canUseLeaflet()) drawMap();
}

// Thin a long track to at most `max` points for sharing (the flyover replays it).
function downsampleTrack(track, max) {
  if (!track || track.length <= max) return track || [];
  const step = Math.ceil(track.length / max);
  const out = [];
  for (let i = 0; i < track.length; i += step) out.push(track[i]);
  const lastPt = track[track.length - 1];
  if (out[out.length - 1] !== lastPt) out.push(lastPt);
  return out;
}

// Blue "your path" polyline on the Leaflet map.
function updateLeafletTrack() {
  if (!leaflet.map || !state.track.length) return;
  const latlngs = state.track.map((p) => [p.lat, p.lng]);
  if (!leaflet.userTrack) {
    leaflet.userTrack = L.polyline(latlngs, { color: '#3b82f6', weight: 4, opacity: 0.75, lineCap: 'round', lineJoin: 'round' }).addTo(leaflet.map);
  } else {
    leaflet.userTrack.setLatLngs(latlngs);
  }
}

// A "clear my recorded path" button in the map footer (local-only reset).
function setupTrackControls() {
  const footer = document.querySelector('.map-footer-actions');
  if (!footer || document.getElementById('clear-track-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'clear-track-btn';
  btn.className = 'secondary-btn';
  btn.innerHTML = '<i class="fa-solid fa-eraser" aria-hidden="true"></i> Clear my recorded path';
  btn.addEventListener('click', () => {
    if (state.track.length && !confirm("Clear the GPS path recorded on this walk? This only affects this device.")) return;
    clearTrack();
  });
  footer.appendChild(btn);
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

// Track blob object URLs per view so we can revoke them on re-render and avoid leaks.
let drawerPhotoUrls = [];
let journalPhotoUrls = [];
function revokeUrls(list) {
  list.forEach(u => URL.revokeObjectURL(u));
  list.length = 0;
}

// Escape user-controlled text before injecting into innerHTML (prevents stored XSS).
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Update header progress bar
function updateProgressUI() {
  const total = SITES_DATA.length;
  const visitedCount = state.visitedSites.size;
  const percent = total > 0 ? Math.round((visitedCount / total) * 100) : 0;
  
  document.getElementById('progress-text').textContent = `${visitedCount} of ${total} sites visited`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('progress-bar-fill').style.width = `${percent}%`;
}

// Build the status badges for a site card (shared by full render and in-place updates).
function getBadgesHtml(site) {
  const isVisited = state.visitedSites.has(site.id);
  const isNearby = (state.distances[site.id] && state.distances[site.id] <= 50);
  let badges = '';
  if (isVisited) {
    badges += `<span class="badge" style="background-color: var(--status-visited-glow); color: var(--status-visited);"><i class="fa-solid fa-check" aria-hidden="true"></i> Visited</span>`;
  }
  if (isNearby && !isVisited) {
    badges += `<span class="badge" style="background-color: var(--status-nearby-glow); color: var(--status-nearby);"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Nearby!</span>`;
  }
  if (site.fee === "Free") {
    badges += `<span class="badge"><i class="fa-solid fa-hand-holding-heart" aria-hidden="true"></i> Free</span>`;
  }
  return badges;
}

// Generate Timeline Card HTML
function createSiteCard(site) {
  const isVisited = state.visitedSites.has(site.id);
  const isNearby = (state.distances[site.id] && state.distances[site.id] <= 50);
  const distanceStr = state.distances[site.id] ? formatDistance(state.distances[site.id]) : '';

  const badges = getBadgesHtml(site);

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

// Update only the distance text and status badges/classes on existing cards.
// Called on every GPS tick so we don't wipe & rebuild the list (which would
// reset scroll position and interrupt any in-progress interaction).
function updateTimelineDistances() {
  const container = document.getElementById('sites-list');
  if (!container || !container.children.length) return;

  SITES_DATA.forEach(site => {
    const card = container.querySelector(`.site-card[data-site-id="${site.id}"]`);
    if (!card) return;

    const dist = state.distances[site.id];
    const isVisited = state.visitedSites.has(site.id);
    const isNearby = dist && dist <= 50 && !isVisited;
    const distanceStr = dist ? formatDistance(dist) : '';

    // Distance chip
    const titleRow = card.querySelector('.site-title-row');
    let chip = card.querySelector('.site-distance');
    if (distanceStr) {
      if (!chip && titleRow) {
        chip = document.createElement('span');
        chip.className = 'site-distance';
        titleRow.appendChild(chip);
      }
      if (chip) chip.textContent = distanceStr;
    } else if (chip) {
      chip.remove();
    }

    // Nearby highlight + badges
    card.classList.toggle('nearby', !!isNearby);
    const badgeWrap = card.querySelector('.site-meta-badges');
    if (badgeWrap) badgeWrap.innerHTML = getBadgesHtml(site);
  });
}

// --- TAVERNS & TREATS RENDERING ---
function tavernCategoryIcon(category) {
  const c = (category || '').toLowerCase();
  if (c.includes('coffee')) return 'fa-mug-saucer';
  if (c.includes('tavern')) return 'fa-beer-mug-empty';
  if (c.includes('pastry') || c.includes('bakery')) return 'fa-cookie-bite';
  if (c.includes('seafood')) return 'fa-fish';
  if (c.includes('ice cream')) return 'fa-ice-cream';
  if (c.includes('deli') || c.includes('sandwich')) return 'fa-bread-slice';
  if (c.includes('italian')) return 'fa-wine-glass';
  return 'fa-utensils';
}

function renderTaverns() {
  const list = document.getElementById('taverns-list');
  if (!list) return;

  const hasLoc = state.userLocation.lat !== null && state.userLocation.lng !== null;
  const items = TAVERNS_DATA.map((t) => ({
    ...t,
    dist: hasLoc ? getDistance(state.userLocation.lat, state.userLocation.lng, t.lat, t.lng) : null,
  }));
  // Nearest first when we have GPS; otherwise follow the trail order.
  items.sort((a, b) => (a.dist !== null && b.dist !== null ? a.dist - b.dist : a.nearStop - b.nearStop));

  list.innerHTML = '';
  items.forEach((t) => {
    const distStr = t.dist !== null ? formatDistance(t.dist) : '';
    const query = encodeURIComponent(`${t.name} ${t.address}`);
    const card = document.createElement('div');
    card.className = 'tavern-card';
    card.dataset.lat = t.lat;
    card.dataset.lng = t.lng;
    card.innerHTML = `
      <div class="tavern-icon"><i class="fa-solid ${tavernCategoryIcon(t.category)}" aria-hidden="true"></i></div>
      <div class="tavern-info">
        <div class="tavern-title-row">
          <h4>${escapeHtml(t.name)}</h4>
          ${distStr ? `<span class="tavern-distance">${distStr}</span>` : ''}
        </div>
        <div class="tavern-meta"><span class="tavern-cat">${escapeHtml(t.category)}</span> &middot; near stop #${t.nearStop}</div>
        <p class="tavern-blurb">${escapeHtml(t.blurb)}</p>
        <div class="tavern-actions">
          <a class="tavern-link" href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener"><i class="fa-solid fa-diamond-turn-right" aria-hidden="true"></i> Directions</a>
          ${t.website ? `<a class="tavern-link" href="https://${escapeHtml(t.website)}" target="_blank" rel="noopener"><i class="fa-solid fa-globe" aria-hidden="true"></i> Website</a>` : ''}
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

// Update distance chips in place on GPS ticks (no re-sort, to avoid cards jumping).
function updateTavernDistances() {
  if (state.userLocation.lat === null || state.userLocation.lng === null) return;
  document.querySelectorAll('#taverns-list .tavern-card').forEach((card) => {
    const lat = parseFloat(card.dataset.lat);
    const lng = parseFloat(card.dataset.lng);
    const d = getDistance(state.userLocation.lat, state.userLocation.lng, lat, lng);
    let chip = card.querySelector('.tavern-distance');
    if (!chip) {
      chip = document.createElement('span');
      chip.className = 'tavern-distance';
      const row = card.querySelector('.tavern-title-row');
      if (row) row.appendChild(chip);
    }
    chip.textContent = formatDistance(d);
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
          <button class="factoid-trigger" onclick="toggleFactoid(this)" aria-expanded="false">
            <span>Factoid #${index + 1}</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="factoid-content">
            ${fact}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="detail-section-title">My Journal & Reflections</div>
    <div class="journal-entry-container">
      <textarea id="drawer-journal-textarea" class="journal-textarea" placeholder="Write down your thoughts, memories, or stories about this historic site..."></textarea>
      <div class="autosave-indicator" id="autosave-indicator"><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Notes save automatically — no button needed</div>
    </div>

    <div class="detail-section-title">Site Photos</div>
    <div class="photo-capture-section">
      <div class="photo-grid" id="drawer-photo-grid">
        <!-- Render existing photos -->
        <label class="camera-input-wrapper" id="camera-btn-wrapper">
          <i class="fa-solid fa-camera"></i>
          <span>Add Photo</span>
          <input type="file" id="camera-file-input" accept="image/*">
        </label>
      </div>
    </div>
  `;
  
  // Bind Check-in Button
  document.getElementById('detail-checkin-btn').addEventListener('click', async () => {
    // Flush any in-flight journal draft first: the re-render below reloads the
    // textarea from the DB, so an unsaved draft (within the 800ms debounce)
    // would otherwise be lost when you check in.
    const ta = document.getElementById('drawer-journal-textarea');
    if (ta) {
      clearTimeout(saveTimeout);
      try { await saveJournal(siteId, ta.value); } catch (e) { /* keep going */ }
    }
    toggleSiteCheckin(siteId);
    openDetailsDrawer(siteId); // Refresh drawer content
  });
  
  // Bind Journal Auto-save on Input (Debounced)
  let saveTimeout = null;
  const textarea = document.getElementById('drawer-journal-textarea');
  // Set value via property (never via innerHTML) so entries can't break out of the element.
  textarea.value = journalText;
  textarea.addEventListener('input', () => {
    const text = textarea.value;
    const indicator = document.getElementById('autosave-indicator');
    indicator.classList.remove('saved');
    indicator.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Saving…`;
    
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
      try {
        await saveJournal(siteId, text);
        indicator.classList.add('saved');
        indicator.innerHTML = `<i class="fa-solid fa-circle-check"></i> Saved to this device`;
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
  const expanded = item.classList.toggle('expanded');
  button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
};

// Render photos in details drawer
async function renderDrawerPhotos(siteId) {
  const photos = await getPhotos(siteId);
  const grid = document.getElementById('drawer-photo-grid');
  if (!grid) return;

  // Revoke object URLs from the previous render before creating new ones.
  revokeUrls(drawerPhotoUrls);

  // Remove all photo items, keep only the add-photo label button
  const items = grid.querySelectorAll('.photo-item-container');
  items.forEach(i => i.remove());

  const cameraBtnWrapper = document.getElementById('camera-btn-wrapper');

  photos.forEach(p => {
    const url = URL.createObjectURL(p.blob);
    drawerPhotoUrls.push(url);
    const container = document.createElement('div');
    container.className = 'photo-item-container';
    container.innerHTML = `
      <img src="${url}" class="photo-item-img" alt="Trail photo">
      <button class="move-photo-btn" data-photo-id="${p.id}" title="Move to another stop" aria-label="Move photo to another stop"><i class="fa-solid fa-right-left"></i></button>
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

    // Move this photo to a different stop (e.g. a shot filed under the wrong site).
    container.querySelector('.move-photo-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openMovePhotoPicker(p, siteId);
    });
    
    // Insert before camera button
    grid.insertBefore(container, cameraBtnWrapper);
  });
}

// Pick a different stop for a photo and re-file it there (updates its siteId).
function openMovePhotoPicker(photo, currentSiteId) {
  let modal = document.getElementById('move-photo-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'move-photo-modal';
    modal.className = 'drawer-overlay hidden';
    modal.innerHTML = `
      <div class="share-modal-content">
        <div class="share-modal-header">
          <h3><i class="fa-solid fa-right-left" aria-hidden="true"></i> Move photo to…</h3>
          <button class="close-btn" id="move-photo-close" aria-label="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        </div>
        <div class="share-modal-body">
          <p class="share-hint">Pick the stop this photo belongs to.</p>
          <div id="move-photo-list" class="move-photo-list"></div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector('#move-photo-close').addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
  }

  const list = modal.querySelector('#move-photo-list');
  list.innerHTML = '';
  SITES_DATA.forEach((s) => {
    const isCurrent = s.id === currentSiteId;
    const btn = document.createElement('button');
    btn.className = 'move-photo-option';
    btn.disabled = isCurrent;
    btn.innerHTML = `<span class="mp-num">${s.id}</span> ${escapeHtml(s.name)}${isCurrent ? ' <span class="mp-current">(current)</span>' : ''}`;
    if (!isCurrent) {
      btn.addEventListener('click', async () => {
        try {
          await updatePhotoRecord({ ...photo, siteId: s.id });
        } catch (err) { console.error('Move photo failed', err); }
        modal.classList.add('hidden');
        renderDrawerPhotos(currentSiteId); // photo leaves this stop's grid
        if (state.currentTab === 'journal-tab') renderJournalTimeline();
      });
    }
    list.appendChild(btn);
  });

  modal.classList.remove('hidden');
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
    // Tap anywhere — backdrop or the photo itself — to dismiss.
    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
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
  if (leaflet.map) refreshStopMarkers();
}

// Render Journal Timeline View
async function renderJournalTimeline() {
  const container = document.getElementById('journal-timeline-container');
  const emptyState = document.getElementById('journal-empty-state');

  // Revoke object URLs from the previous render before rebuilding.
  revokeUrls(journalPhotoUrls);
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
        journalPhotoUrls.push(url);
        photosHtml += `<img src="${url}" class="journal-photo-thumbnail" alt="Journal Photo" onclick="openLightbox('${url}')">`;
      });
      photosHtml += `</div>`;
    }
    
    card.innerHTML = `
      <div class="journal-card-header">
        <h4>#${site.id} - ${site.name}</h4>
        <span class="journal-date">${dateStr}</span>
      </div>
      ${journal && journal.entryText.trim() ? `<p class="journal-text">${escapeHtml(journal.entryText)}</p>` : ''}
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
  // Release the temporary download URL.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// --- CLOUD SHARE & BACKUP ---
// Saves the adventure (visited stops + journal text + photos) to the backend so it
// can be shared via a read-only link and restored on another device.
const SHARE_ID_KEY = 'freedom_share_id';
const SHARE_TOKEN_KEY = 'freedom_share_token';
const SHARE_SAVED_KEY = 'freedom_share_saved_at';

function updatePhotoRecord(record) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error('Database not initialized'));
    const tx = db.transaction(['photos'], 'readwrite');
    tx.objectStore('photos').put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

// Upload a photo once; remember its Blob URL on the record to skip re-uploading.
async function ensurePhotoUrl(photo) {
  if (photo.uploadedUrl) return photo.uploadedUrl;
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'x-photo-type': photo.blob.type || 'image/jpeg',
    },
    body: photo.blob,
  });
  if (!res.ok) throw new Error('Photo upload failed');
  const { url } = await res.json();
  photo.uploadedUrl = url;
  try { await updatePhotoRecord(photo); } catch (e) { /* non-fatal */ }
  return url;
}

async function buildSharePayload(onProgress) {
  const journals = await getAllJournals();
  const allPhotos = await getAllPhotos();
  const total = allPhotos.length;
  let done = 0;
  const entries = {};

  for (const site of SITES_DATA) {
    const j = journals.find((x) => x.siteId === site.id);
    const sitePhotos = allPhotos.filter((p) => p.siteId === site.id);
    const hasText = j && j.entryText && j.entryText.trim();
    if (!hasText && sitePhotos.length === 0) continue;

    const photoUrls = [];
    for (const p of sitePhotos) {
      photoUrls.push(await ensurePhotoUrl(p));
      done++;
      if (onProgress) onProgress(done, total);
    }
    entries[site.id] = {
      name: site.name,
      text: hasText ? j.entryText : '',
      timestamp: j ? j.timestamp : (sitePhotos[0] ? sitePhotos[0].timestamp : Date.now()),
      photos: photoUrls,
    };
  }

  const visited = Array.from(state.visitedSites).map(Number);
  const track = downsampleTrack(state.track, 800).map((p) => [p.lat, p.lng]);
  return {
    version: 1,
    title: 'My Freedom Trail Adventure',
    savedAt: Date.now(),
    totalSites: SITES_DATA.length,
    visitedCount: visited.length,
    visited,
    entries,
    track,
  };
}

async function createNewShare(payload) {
  const res = await fetch('/api/share', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payload, email: localStorage.getItem('freedom_email') || undefined }),
  });
  if (!res.ok) throw new Error('Could not create cloud copy');
  const data = await res.json();
  localStorage.setItem(SHARE_ID_KEY, data.id);
  localStorage.setItem(SHARE_TOKEN_KEY, data.editToken);
  localStorage.setItem(SHARE_SAVED_KEY, String(payload.savedAt));
  return { id: data.id, token: data.editToken };
}

async function saveToCloud(onProgress) {
  const payload = await buildSharePayload(onProgress);
  const existingId = localStorage.getItem(SHARE_ID_KEY);
  const token = localStorage.getItem(SHARE_TOKEN_KEY);

  if (existingId && token) {
    const res = await fetch(`/api/share?id=${encodeURIComponent(existingId)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-edit-token': token },
      body: JSON.stringify({ payload, email: localStorage.getItem('freedom_email') || undefined }),
    });
    if (res.status === 404 || res.status === 403) {
      // Stale/invalid local reference — start a fresh cloud copy.
      return createNewShare(payload);
    }
    if (!res.ok) throw new Error('Could not update cloud copy');
    localStorage.setItem(SHARE_SAVED_KEY, String(payload.savedAt));
    return { id: existingId, token };
  }
  return createNewShare(payload);
}

async function deleteCloud() {
  const id = localStorage.getItem(SHARE_ID_KEY);
  const token = localStorage.getItem(SHARE_TOKEN_KEY);
  if (id && token) {
    try {
      await fetch(`/api/share?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-edit-token': token },
      });
    } catch (e) { /* ignore */ }
  }
  localStorage.removeItem(SHARE_ID_KEY);
  localStorage.removeItem(SHARE_TOKEN_KEY);
  localStorage.removeItem(SHARE_SAVED_KEY);
}

// Pull a shared payload into this device's local storage (merge/overwrite).
async function importSharedPayload(payload, id, token) {
  if (!payload) return;

  state.visitedSites = new Set((payload.visited || []).map(Number));
  saveVisitedState();

  const entries = payload.entries || {};
  for (const key of Object.keys(entries)) {
    const siteId = Number(key);
    const e = entries[key];
    if (e.text && e.text.trim()) {
      await saveJournal(siteId, e.text);
    }
    if (Array.isArray(e.photos)) {
      const existing = await getPhotos(siteId);
      const existingUrls = new Set(existing.map((p) => p.uploadedUrl).filter(Boolean));
      for (const url of e.photos) {
        if (existingUrls.has(url)) continue; // idempotent re-import
        try {
          const resp = await fetch(url);
          const blob = await resp.blob();
          const newId = await addPhoto(siteId, blob);
          await updatePhotoRecord({ id: newId, siteId, blob, timestamp: e.timestamp || Date.now(), uploadedUrl: url });
        } catch (err) { console.warn('Photo import failed', err); }
      }
    }
  }

  if (id && token) {
    localStorage.setItem(SHARE_ID_KEY, id);
    localStorage.setItem(SHARE_TOKEN_KEY, token);
    localStorage.setItem(SHARE_SAVED_KEY, String(payload.savedAt || Date.now()));
  }

  if (Array.isArray(payload.track) && payload.track.length) {
    state.track = payload.track.map((p) => (Array.isArray(p) ? { lat: p[0], lng: p[1], t: 0 } : p));
    try { localStorage.setItem(TRACK_KEY, JSON.stringify(state.track)); } catch (e) {}
    updateLeafletTrack();
  }

  renderTimeline();
  updateProgressUI();
  if (state.currentTab === 'journal-tab') renderJournalTimeline();
}

async function restoreFromCode(code) {
  const trimmed = (code || '').trim();
  if (!trimmed) throw new Error('Enter a sync code first');
  const [id, token] = trimmed.split('.');
  const res = await fetch(`/api/share?id=${encodeURIComponent(id)}`);
  if (res.status === 404) throw new Error('No adventure found for that code');
  if (!res.ok) throw new Error('Could not fetch that adventure');
  const data = await res.json();
  await importSharedPayload(data.payload, id, token || null);
  return data;
}

// --- SHARE MODAL UI ---
function shareLinkFor(id) {
  return `${location.origin}/s/${id}`;
}

function renderShareStatus() {
  const status = document.getElementById('share-status');
  const result = document.getElementById('share-result');
  if (!status) return;
  const id = localStorage.getItem(SHARE_ID_KEY);
  const token = localStorage.getItem(SHARE_TOKEN_KEY);
  const savedAt = Number(localStorage.getItem(SHARE_SAVED_KEY));

  if (id && token) {
    const when = savedAt ? new Date(savedAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'previously';
    status.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--status-visited)" aria-hidden="true"></i> Cloud copy saved ${escapeHtml(when)}.`;
    document.getElementById('share-link-input').value = shareLinkFor(id);
    document.getElementById('sync-code-input').value = `${id}.${token}`;
    result.classList.remove('hidden');
    document.getElementById('save-cloud-btn').innerHTML = `<i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i> Update cloud copy`;
  } else {
    status.textContent = 'Not saved to the cloud yet.';
    result.classList.add('hidden');
    document.getElementById('save-cloud-btn').innerHTML = `<i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i> Save to cloud`;
  }
}

// First-run modal: optionally capture an email for a magic "get back" link.
function maybeShowOnboarding() {
  if (localStorage.getItem('freedom_onboarded')) return;
  let modal = document.getElementById('onboarding-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'onboarding-modal';
    modal.className = 'drawer-overlay';
    modal.innerHTML = `
      <div class="share-modal-content">
        <div class="share-modal-header">
          <h3><i class="fa-solid fa-envelope" aria-hidden="true"></i> Save your progress</h3>
          <button class="close-btn" id="onboard-skip-x" aria-label="Skip"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        </div>
        <div class="share-modal-body">
          <p class="share-intro">Add your email and we'll send you a private link to get back to your adventure on any device. Totally optional — you can walk the Trail without it.</p>
          <div class="copy-row">
            <input id="onboard-email" class="share-input" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com">
          </div>
          <div id="onboard-msg" class="share-hint"></div>
          <button id="onboard-save" class="primary-btn"><i class="fa-solid fa-check" aria-hidden="true"></i> Save my email</button>
          <button id="onboard-skip" class="secondary-btn sm-btn share-full">Maybe later</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    const done = () => { localStorage.setItem('freedom_onboarded', '1'); modal.classList.add('hidden'); };
    document.getElementById('onboard-skip').addEventListener('click', done);
    document.getElementById('onboard-skip-x').addEventListener('click', done);
    modal.addEventListener('click', (e) => { if (e.target === modal) done(); });
    document.getElementById('onboard-save').addEventListener('click', () => {
      const email = (document.getElementById('onboard-email').value || '').trim().toLowerCase();
      const msg = document.getElementById('onboard-msg');
      if (!EMAIL_RE.test(email)) { msg.textContent = 'Please enter a valid email.'; msg.style.color = 'var(--accent-crimson)'; return; }
      localStorage.setItem('freedom_email', email);
      done();
    });
  }
  modal.classList.remove('hidden');
}

// Adds an "email me a link to get back" control to the bottom of the share modal.
function addGetBackSection() {
  const body = document.querySelector('#share-modal .share-modal-body');
  if (!body || document.getElementById('getback-email')) return;
  const div = document.createElement('div');
  div.innerHTML = `
    <hr class="share-divider">
    <label class="share-label">Get back to your adventure</label>
    <p class="share-hint">We'll email you a private link to return to this adventure — and keep editing it — on any device.</p>
    <div class="copy-row">
      <input id="getback-email" class="share-input" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com">
      <button id="getback-btn" class="secondary-btn sm-btn">Email me</button>
    </div>
    <div id="getback-msg" class="share-hint"></div>`;
  body.appendChild(div);
  const emailInput = document.getElementById('getback-email');
  emailInput.value = localStorage.getItem('freedom_email') || '';
  document.getElementById('getback-btn').addEventListener('click', async () => {
    const email = (emailInput.value || '').trim().toLowerCase();
    const msg = document.getElementById('getback-msg');
    if (!EMAIL_RE.test(email)) { msg.textContent = 'Please enter a valid email.'; msg.style.color = 'var(--accent-crimson)'; return; }
    localStorage.setItem('freedom_email', email);
    msg.textContent = 'Saving your adventure & sending the link…'; msg.style.color = 'var(--text-muted)';
    try {
      await saveToCloud();               // ensure a cloud copy exists and is tied to this email
      const res = await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error('failed');
      msg.textContent = 'Check your inbox for your get-back link.'; msg.style.color = 'var(--status-visited)';
    } catch (e) {
      msg.textContent = 'Could not send right now — please try again.'; msg.style.color = 'var(--accent-crimson)';
    }
  });
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function setupShareUI() {
  const modal = document.getElementById('share-modal');
  const openBtn = document.getElementById('share-journal-btn');
  const closeBtn = document.getElementById('close-share-btn');
  if (!modal || !openBtn) return;

  const open = () => { renderShareStatus(); modal.classList.remove('hidden'); };
  const close = () => modal.classList.add('hidden');
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

  const setMsg = (el, text, kind) => {
    el.textContent = text;
    el.style.color = kind === 'error' ? 'var(--accent-crimson)' : (kind === 'ok' ? 'var(--status-visited)' : 'var(--text-muted)');
  };

  document.getElementById('save-cloud-btn').addEventListener('click', async () => {
    const btn = document.getElementById('save-cloud-btn');
    const status = document.getElementById('share-status');
    btn.disabled = true;
    const original = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i> Saving…`;
    try {
      await saveToCloud((done, total) => {
        if (total) status.textContent = `Uploading photos… ${done}/${total}`;
      });
      renderShareStatus();
    } catch (err) {
      console.error(err);
      status.innerHTML = `<i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> ${escapeHtml(err.message || 'Save failed')}`;
      btn.innerHTML = original;
    } finally {
      btn.disabled = false;
    }
  });

  const copyFrom = async (inputId, btnId) => {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    try {
      await navigator.clipboard.writeText(input.value);
    } catch (e) {
      input.select(); document.execCommand('copy');
    }
    const label = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = label; }, 1500);
  };
  document.getElementById('copy-link-btn').addEventListener('click', () => copyFrom('share-link-input', 'copy-link-btn'));
  document.getElementById('copy-code-btn').addEventListener('click', () => copyFrom('sync-code-input', 'copy-code-btn'));

  document.getElementById('native-share-btn').addEventListener('click', async () => {
    const url = document.getElementById('share-link-input').value;
    if (navigator.share) {
      try { await navigator.share({ title: 'My Freedom Trail Adventure', text: 'Follow my walk along the Boston Freedom Trail:', url }); } catch (e) { /* cancelled */ }
    } else {
      copyFrom('share-link-input', 'native-share-btn');
    }
  });

  document.getElementById('delete-cloud-btn').addEventListener('click', async () => {
    if (!confirm('Delete the cloud copy and its shared link? Your local journal stays on this device.')) return;
    await deleteCloud();
    renderShareStatus();
  });

  document.getElementById('restore-btn').addEventListener('click', async () => {
    const input = document.getElementById('restore-code-input');
    const msg = document.getElementById('restore-msg');
    const btn = document.getElementById('restore-btn');
    btn.disabled = true;
    setMsg(msg, 'Restoring…');
    try {
      await restoreFromCode(input.value);
      setMsg(msg, 'Restored! Your adventure is now on this device.', 'ok');
      input.value = '';
      renderShareStatus();
    } catch (err) {
      setMsg(msg, err.message || 'Restore failed', 'error');
    } finally {
      btn.disabled = false;
    }
  });
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
      recordTrackPoint(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
      
      document.getElementById('map-gps-status').innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--status-visited)"></i> GPS Active`;
      document.getElementById('map-gps-status').classList.add('active');
      
      calculateDistances();
    },
    (error) => {
      console.error("GPS Watch error", error);
      document.getElementById('map-gps-status').innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--status-nearby)"></i> GPS Offline`;
    },
    // High accuracy is required for the 50m proximity checks, but at a walking pace a
    // fix every ~10s (vs 5s) is plenty and roughly halves GPS battery use.
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
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
  // Skip the auto-prompt when the GPS fix is too fuzzy to trust: downtown stops sit
  // ~10-15m apart, so a >100m-accuracy reading can't tell them apart and would prompt
  // the wrong one. ponytail: 100m ceiling is a heuristic — tune if prompts misfire.
  const acc = state.userLocation.accuracy;
  const proximityBanner = document.getElementById('proximity-banner');
  if (closestSite && minDistance <= 50 && (!acc || acc <= 100) && !state.visitedSites.has(closestSite.id)) {
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
  
  // Update distances in place (no full rebuild) so the list keeps its scroll
  // position, and only redraw the map when it's the visible tab.
  updateTimelineDistances();
  if (state.currentTab === 'taverns-tab') updateTavernDistances();
  if (state.currentTab === 'map-tab') drawMap();
  updateLeafletUser();
}

// --- MAP VIEW CONTROLLER: Leaflet street map (online) with canvas diagram fallback (offline) ---
const leaflet = {
  map: null, tiles: null, trail: null, stopLayer: null, tavernLayer: null,
  userMarker: null, userTrack: null, stopMarkers: {}, tavernsVisible: false, initialized: false,
};

function cartoTileUrl() {
  const isLight = !document.body.classList.contains('dark-mode');
  return isLight
    ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
}

function canUseLeaflet() {
  return navigator.onLine && typeof window.L !== 'undefined';
}

// Decide which map to show whenever the Map tab is opened or connectivity changes.
function showMapView() {
  const leafletEl = document.getElementById('leaflet-map');
  const canvas = document.getElementById('map-canvas');
  const controls = document.querySelector('.map-controls');
  const caption = document.getElementById('map-caption');
  const tavToggle = document.getElementById('toggle-taverns-btn');
  if (!leafletEl || !canvas) return;

  if (canUseLeaflet()) {
    leafletEl.style.display = 'block';
    canvas.style.display = 'none';
    if (controls) controls.style.display = 'none';
    if (caption) caption.classList.add('hidden');
    if (tavToggle) tavToggle.style.display = '';
    initLeafletMap();
  } else {
    leafletEl.style.display = 'none';
    canvas.style.display = 'block';
    if (controls) controls.style.display = '';
    if (tavToggle) tavToggle.style.display = 'none';
    setupMapCanvas();
    recenterMap();
  }
}

function stopDivIcon(site) {
  const visited = state.visitedSites.has(site.id);
  const closest = state.closestSiteId === site.id;
  const mod = visited ? 'visited' : (closest ? 'closest' : '');
  return L.divIcon({
    html: `<div class="map-stop-marker ${mod}">${site.id}</div>`,
    className: '', iconSize: [28, 28], iconAnchor: [14, 14],
  });
}

function stopPopupHtml(site) {
  const visited = state.visitedSites.has(site.id);
  return `<div class="map-popup"><strong>#${site.id} ${escapeHtml(site.name)}</strong><br>` +
    `<span class="mp-status">${visited ? '&#10003; Visited' : 'Not visited yet'}</span><br>` +
    `<button class="mp-btn" data-checkin="${site.id}">${visited ? 'Mark unvisited' : 'Check in here'}</button></div>`;
}

function refreshStopMarkers() {
  SITES_DATA.forEach((site) => {
    const m = leaflet.stopMarkers[site.id];
    if (m) { m.setIcon(stopDivIcon(site)); m.setPopupContent(stopPopupHtml(site)); }
  });
}

function initLeafletMap() {
  if (leaflet.initialized) {
    refreshStopMarkers();
    updateLeafletUser();
    updateLeafletTrack();
    setTimeout(() => leaflet.map.invalidateSize(), 60);
    return;
  }
  const map = L.map('leaflet-map', { zoomControl: false, attributionControl: true });
  leaflet.map = map;
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  leaflet.tiles = L.tileLayer(cartoTileUrl(), {
    maxZoom: 19, subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap &copy; CARTO',
  }).addTo(map);

  // Real Freedom Trail brick line (OSM); falls back to straight stop-to-stop if the data didn't load.
  const trailGeom = (typeof TRAIL_SEGMENTS !== 'undefined' && TRAIL_SEGMENTS.length)
    ? TRAIL_SEGMENTS
    : SITES_DATA.map((s) => [s.lat, s.lng]);
  leaflet.trail = L.polyline(trailGeom, { color: '#bd2f2f', weight: 4, opacity: 0.9, lineCap: 'round', lineJoin: 'round' }).addTo(map);

  // Stop markers
  leaflet.stopLayer = L.layerGroup().addTo(map);
  SITES_DATA.forEach((site) => {
    const m = L.marker([site.lat, site.lng], { icon: stopDivIcon(site) });
    m.bindPopup(stopPopupHtml(site));
    m.on('popupopen', () => {
      const btn = document.querySelector(`.mp-btn[data-checkin="${site.id}"]`);
      if (btn) btn.addEventListener('click', () => { toggleSiteCheckin(site.id); leaflet.map.closePopup(); });
    });
    leaflet.stopLayer.addLayer(m);
    leaflet.stopMarkers[site.id] = m;
  });

  // Tavern markers (hidden until toggled on)
  leaflet.tavernLayer = L.layerGroup();
  TAVERNS_DATA.forEach((t) => {
    const m = L.marker([t.lat, t.lng], { icon: L.divIcon({ html: '<div class="map-tavern-marker"><i class="fa-solid fa-mug-saucer"></i></div>', className: '', iconSize: [24, 24], iconAnchor: [12, 12] }) });
    const q = encodeURIComponent(`${t.name} ${t.address}`);
    m.bindPopup(`<div class="map-popup"><strong>${escapeHtml(t.name)}</strong><br><span class="mp-cat">${escapeHtml(t.category)}</span><br><a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Directions</a></div>`);
    leaflet.tavernLayer.addLayer(m);
  });

  map.fitBounds(leaflet.trail.getBounds().pad(0.12));
  updateLeafletUser();
  updateLeafletTrack();
  leaflet.initialized = true;
  setTimeout(() => map.invalidateSize(), 60);
}

function updateLeafletUser() {
  if (!leaflet.map || state.userLocation.lat === null) return;
  const ll = [state.userLocation.lat, state.userLocation.lng];
  if (!leaflet.userMarker) {
    leaflet.userMarker = L.circleMarker(ll, { radius: 7, color: '#fff', weight: 2, fillColor: '#3b82f6', fillOpacity: 1 }).addTo(leaflet.map);
  } else {
    leaflet.userMarker.setLatLng(ll);
  }
}

function updateLeafletTheme() {
  if (leaflet.map && leaflet.tiles) leaflet.tiles.setUrl(cartoTileUrl());
}

function toggleTaverns() {
  const btn = document.getElementById('toggle-taverns-btn');
  if (!leaflet.map) return;
  leaflet.tavernsVisible = !leaflet.tavernsVisible;
  if (leaflet.tavernsVisible) leaflet.tavernLayer.addTo(leaflet.map);
  else leaflet.map.removeLayer(leaflet.tavernLayer);
  if (btn) { btn.classList.toggle('active', leaflet.tavernsVisible); btn.setAttribute('aria-pressed', String(leaflet.tavernsVisible)); }
}

// --- MAP CANVAS RENDER ENGINE (offline fallback) ---
function setupMapCanvas() {
  const canvas = document.getElementById('map-canvas');
  if (!canvas) return;

  const resizeCanvas = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    drawMap();
  };

  // Wire listeners only once to avoid accumulating duplicates on repeat tab opens.
  if (canvas.dataset.wired === '1') { resizeCanvas(); return; }
  canvas.dataset.wired = '1';

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Tap a node to reveal its name in the caption bar (fixes the old label pile-up).
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const proj = getProjector(canvas.width, canvas.height);
    const cw = canvas.width, ch = canvas.height, z = state.mapConfig.zoomScale;
    let best = null, bestD = Infinity;
    SITES_DATA.forEach((site) => {
      const pt = proj.project(site.lat, site.lng);
      const sx = (pt.x - cw / 2) * z + cw / 2 + state.mapConfig.panX;
      const sy = (pt.y - ch / 2) * z + ch / 2 + state.mapConfig.panY;
      const d = Math.hypot(sx - cx, sy - cy);
      if (d < bestD) { bestD = d; best = site; }
    });
    if (best && bestD <= 18) {
      state.selectedCanvasSiteId = best.id;
      const cap = document.getElementById('map-caption');
      if (cap) { cap.textContent = `#${best.id} · ${best.name}`; cap.classList.remove('hidden'); }
      drawMap();
    }
  });
  
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
    pinchStartDist = 0;
  });

  // Scroll / trackpad wheel zoom (the footer hint promises "scroll to zoom").
  const clampZoom = (z) => Math.max(0.5, Math.min(8, z));
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
    state.mapConfig.zoomScale = clampZoom(state.mapConfig.zoomScale * factor);
    drawMap();
  }, { passive: false });

  // Two-finger pinch zoom (the footer hint promises "pinch to zoom").
  let pinchStartDist = 0;
  let pinchStartZoom = 1;
  const pinchDist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      pinchStartDist = pinchDist(e.touches);
      pinchStartZoom = state.mapConfig.zoomScale;
      state.mapConfig.isDragging = false; // don't also pan mid-pinch
    }
  });
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 2 || !pinchStartDist) return;
    e.preventDefault();
    state.mapConfig.zoomScale = clampZoom(pinchStartZoom * (pinchDist(e.touches) / pinchStartDist));
    drawMap();
  }, { passive: false });
  
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
    // The `api=1&waypoints=` form caps at ~9 waypoints and errors with all 16 stops.
    // The path-based /maps/dir/ form accepts every stop as a segment; the trailing
    // data token requests walking mode.
    const path = SITES_DATA.map(s => `${s.lat},${s.lng}`).join('/');
    const routeUrl = `https://www.google.com/maps/dir/${path}/data=!4m2!4m1!3e2`;
    window.open(routeUrl, '_blank', 'noopener');
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
  
  // 2. Draw the real Freedom Trail brick line (OSM segments); fall back to straight
  //    stop-to-stop lines if the trail data didn't load.
  ctx.strokeStyle = pathColor;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (typeof TRAIL_SEGMENTS !== 'undefined' && TRAIL_SEGMENTS.length) {
    ctx.beginPath();
    TRAIL_SEGMENTS.forEach((seg) => {
      seg.forEach((p, i) => {
        const pt = proj.project(p[0], p[1]);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
    });
    ctx.stroke();
  } else {
    ctx.beginPath();
    SITES_DATA.forEach((site, index) => {
      const pt = proj.project(site.lat, site.lng);
      if (index === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.setLineDash([4, 6]);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  // 2b. Draw the user's recorded path (breadcrumbs) in blue.
  if (state.track && state.track.length > 1) {
    ctx.beginPath();
    state.track.forEach((p, i) => {
      const tp = proj.project(p.lat, p.lng);
      if (i === 0) ctx.moveTo(tp.x, tp.y);
      else ctx.lineTo(tp.x, tp.y);
    });
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.75;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

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

    // Highlight the tapped node with an outer ring (its name shows in the caption bar).
    if (state.selectedCanvasSiteId === site.id) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 13, 0, 2 * Math.PI);
      ctx.strokeStyle = pathColor;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Node number only — no always-on name labels (they used to collide badly in dense clusters).
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 9px ${varName('--font-family-sans')}`;
    ctx.fillStyle = isVisited ? '#ffffff' : labelColor;
    ctx.fillText(`${site.id}`, pt.x, pt.y);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
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
  if (state.currentTab === 'map-tab' && !canUseLeaflet()) {
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
  try { localStorage.setItem('freedom_tab', tabId); } catch (e) { /* private mode */ }
  
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
      showMapView();
    }, 60);
  } else if (tabId === 'taverns-tab') {
    renderTaverns();
  } else if (tabId === 'journal-tab') {
    renderJournalTimeline();
  }
}

// --- SETUP THEME SWITCHER ---
// Keep the browser UI (status bar / address bar) tint in sync with the theme.
function applyThemeColorMeta() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  const isLight = document.body.classList.contains('light-mode');
  meta.setAttribute('content', isLight ? '#f8fafc' : '#0b0f19');
}

function setupThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle-btn');

  // The inline pre-paint script (in index.html) normally sets the theme class
  // before first paint, respecting a saved choice, then the OS preference,
  // defaulting to light. Resolve here too as a fallback in case it didn't run.
  if (!document.body.classList.contains('light-mode') && !document.body.classList.contains('dark-mode')) {
    const stored = localStorage.getItem('freedom_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
  }

  // Reflect current theme on the toggle: show the icon of the theme you'd switch TO.
  const syncToggleUI = () => {
    const isLight = document.body.classList.contains('light-mode');
    toggleBtn.innerHTML = isLight
      ? `<i class="fa-solid fa-moon" aria-hidden="true"></i>`
      : `<i class="fa-solid fa-sun" aria-hidden="true"></i>`;
    toggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    applyThemeColorMeta();
  };

  syncToggleUI();

  toggleBtn.addEventListener('click', () => {
    const goingLight = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', !goingLight);
    document.body.classList.toggle('light-mode', goingLight);
    localStorage.setItem('freedom_theme', goingLight ? 'light' : 'dark');
    syncToggleUI();
    // Re-draw map if open to update colors (canvas) or tiles (Leaflet).
    if (state.currentTab === 'map-tab') drawMap();
    updateLeafletTheme();
  });
}

// Drawer overlay closure binding
function setupDrawerClose() {
  const overlay = document.getElementById('details-drawer');
  const closeBtn = document.getElementById('close-drawer-btn');
  
  const closeDrawer = () => {
    overlay.classList.add('hidden');
    state.activeDetailSiteId = null;
    // Release any photo object URLs created for the drawer.
    revokeUrls(drawerPhotoUrls);
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
  loadTrack();
  updateProgressUI();
  renderTimeline();
  
  // Register database
  try {
    await initDB();
    console.log("IndexedDB Initialized successfully");
  } catch (e) {
    console.error("IndexedDB failed", e);
  }
  
  // Magic-link resume: /?resume=TOKEN restores this device's adventure + edit access.
  const _resumeToken = new URLSearchParams(location.search).get('resume');
  if (_resumeToken) {
    try {
      const rres = await fetch(`/api/auth?token=${encodeURIComponent(_resumeToken)}`);
      if (rres.ok) {
        const rdata = await rres.json();
        await importSharedPayload(rdata.payload, rdata.id, rdata.editToken);
        localStorage.setItem('freedom_onboarded', '1');
      }
    } catch (e) { console.warn('resume failed', e); }
    history.replaceState(null, '', location.pathname); // strip token from the URL
  }

  // Bind UI modules
  setupTabRouting();
  setupThemeSwitcher();
  setupDrawerClose();
  
  // Start GPS Watcher
  initGeolocation();
  
  // Export Journal Bind
  document.getElementById('export-journal-btn').addEventListener('click', exportJournal);

  // Cloud share / backup UI
  setupShareUI();
  addGetBackSection();
  // First run: gently offer to save an email for a get-back link (skippable).
  if (!localStorage.getItem('freedom_onboarded')) setTimeout(maybeShowOnboarding, 900);

  setupTrackControls();
  // Map: taverns toggle + switch between street map / offline diagram on connectivity change
  const tavBtn = document.getElementById('toggle-taverns-btn');
  if (tavBtn) tavBtn.addEventListener('click', toggleTaverns);
  const onConnectivityChange = () => { if (state.currentTab === 'map-tab') showMapView(); };
  window.addEventListener('online', onConnectivityChange);
  window.addEventListener('offline', onConnectivityChange);

  // Escape closes the topmost open overlay (lightbox > share modal > drawer).
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const lightbox = document.getElementById('app-lightbox');
    if (lightbox && lightbox.classList.contains('active')) { lightbox.classList.remove('active'); return; }
    const shareModal = document.getElementById('share-modal');
    if (shareModal && !shareModal.classList.contains('hidden')) { shareModal.classList.add('hidden'); return; }
    const drawer = document.getElementById('details-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
      state.activeDetailSiteId = null;
      revokeUrls(drawerPhotoUrls);
    }
  });
  
  // Persist an in-flight journal draft the moment the app is backgrounded or the
  // page is hidden (iOS often unloads a suspended PWA), bypassing the 800ms debounce.
  const flushJournalDraft = () => {
    const ta = document.getElementById('drawer-journal-textarea');
    if (ta && state.activeDetailSiteId != null) saveJournal(state.activeDetailSiteId, ta.value);
  };
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushJournalDraft();
  });
  window.addEventListener('pagehide', flushJournalDraft);

  // Return to the tab you left when the app reloads after being backgrounded.
  const savedTab = localStorage.getItem('freedom_tab');
  if (savedTab && savedTab !== 'timeline-tab' && document.getElementById(savedTab)) switchTab(savedTab);

  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker Registered!', reg.scope))
      .catch(err => console.warn('Service Worker registration failed:', err));
  }
});
