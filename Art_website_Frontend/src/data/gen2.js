// Seed data for the remaining models. Run AFTER generate-art-data.js (it reads categorydata.json).
// Usage: node generate-all-seed-data.js
// Output: one JSON array per collection (extended JSON, importable with mongoimport --jsonArray).
import fs from 'fs'
import bcrypt from 'bcryptjs'

// ---------- helpers ----------
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261018);
const pick = (a) => a[Math.floor(rand() * a.length)];
const between = (a, b) => a + Math.floor(rand() * (b - a + 1));
const BASE = Date.parse("2026-10-17T10:00:00Z");
const date = (daysAgoMin, daysAgoMax) => ({ $date: new Date(BASE - between(daysAgoMin, daysAgoMax) * 86400000 - between(0, 86399) * 1000).toISOString() });
let oidCounter = 0x1000;
const oidHex = () => "67" + (oidCounter++).toString(16).padStart(22, "0");
const oid = () => ({ $oid: oidHex() });
const pic = (seed, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

const categoryData = JSON.parse(fs.readFileSync("categorydata.json", "utf8"));
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

// ---------- CategoryData: add created_at (mongoimport skips Mongoose defaults) ----------
categoryData.forEach((d) => { if (!d.created_at) d.created_at = date(5, 400); });
write("categorydata.json", categoryData);

// ---------- User ----------
const FIRST = ["Ayesha", "Bilal", "Carmen", "David", "Emily", "Farhan", "Grace", "Hamza", "Irene", "Jonas", "Karina", "Liam", "Maya", "Nikolai", "Olivia"];
const LAST = ["Khan", "Mitchell", "Alvarez", "Okoye", "Brandt", "Siddiqui", "Nakamura", "Petrov", "Hughes", "Lindgren", "Costa", "Raza", "Fontaine", "Kowalski", "Ahmed"];
const DEV_PASSWORD = "Password123!";
const devHash = bcrypt ? bcrypt.hashSync(DEV_PASSWORD, 10) : null;
const users = FIRST.map((firstName, i) => {
  const lastName = LAST[(i * 4 + 3) % LAST.length];
  const google = i >= 10 || !devHash;
  const doc = {
    _id: oid(),
    firstName,
    lastName,
    email: `${firstName}.${lastName}${i + 1}@example.com`.toLowerCase(),
    provider: google ? "google" : "manual",
    createdAt: date(10, 300),
  };
  if (!google) doc.password = devHash;
  return doc;
});
write("users.json", users);

// ---------- AuthorData (one profile per artist used in CategoryData) ----------
const ROLE_BY_CAT = { photography: "Photographer", sculptures: "Sculptor", drawings: "Illustrator", textures: "Mixed-media artist", "modern-arts": "Mixed-media artist", monochrome: "Mixed-media artist" };
const artists = new Map();
categoryData.forEach((d) => {
  if (!artists.has(d.author)) artists.set(d.author, { country: d.country, cats: {} });
  const c = d.category[0];
  artists.get(d.author).cats[c] = (artists.get(d.author).cats[c] || 0) + 1;
});
const GALLERIES = ["Harbor Lane Gallery", "Northlight Art Space", "The Ochre Room", "Meridian Contemporary", "Foundry Arts Centre", "Blue Door Gallery", "Atelier Seventeen", "Common Ground Museum"];
const CITIES = ["Milan, Italy", "Kyoto, Japan", "Lagos, Nigeria", "Sao Paulo, Brazil", "Stockholm, Sweden", "Madrid, Spain", "Beirut, Lebanon", "London, United Kingdom", "Shanghai, China", "Lyon, France", "Lahore, Pakistan", "Prague, Czech Republic", "Mumbai, India", "Berlin, Germany", "Lisbon, Portugal", "Dhaka, Bangladesh", "Copenhagen, Denmark", "Toronto, Canada"];
const EXH_TITLES = ["Quiet Surfaces", "Light, Slowly", "Between Seasons", "New Voices", "Material Memory", "Open Studio Selections", "Colour and Weight", "Small Works, Big Rooms", "Field Notes", "After the Rain"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Sep", "Oct", "Nov"];
const AWARDS = ["Emerging Artist Prize", "Regional Arts Council Grant", "Gallery Residency Award", "Critics' Choice Mention", "Young Collectors' Pick", "Studio Fellowship"];
const authors = [...artists.entries()].map(([name, info], i) => {
  const topCat = Object.entries(info.cats).sort((a, b) => b[1] - a[1])[0][0];
  const role = ROLE_BY_CAT[topCat] || "Painter";
  const joining = between(2012, 2024);
  const seed = slugify(name);
  const nExh = between(2, 4);
  const exhibitions = Array.from({ length: nExh }, () => {
    const year = between(Math.max(joining, 2014), 2025);
    const m1 = pick(MONTHS);
    return {
      _id: oid(),
      year,
      title: pick(EXH_TITLES),
      organization: pick(GALLERIES),
      location: pick(CITIES),
      date: `${between(1, 12)} ${m1} - ${between(13, 28)} ${pick(MONTHS)} ${year}`,
    };
  });
  return {
    name,
    country: info.country,
    about: `${name} is a ${role.toLowerCase()} based in ${info.country}. Their work explores light, material and everyday scenes, and is collected by private buyers in several countries. They have shown in group and solo exhibitions since ${joining}.`,
    profileImage: pic(`${seed}-profile`, 400, 400),
    images: [1, 2, 3, 4].map((k) => pic(`${seed}-work-${k}`)),
    thumbnail: pic(`${seed}-thumb`, 300, 300),
    recognization: [pick(AWARDS) + ` ${between(2016, 2025)}`, pick(AWARDS) + ` ${between(2016, 2025)}`],
    joining,
    role,
    followers: between(120, 48000),
    exhibitions,
    created_at: date(30, 500),
  };
});
write("authordata.json", authors);

// ---------- Cart ----------
const carts = users.slice(0, 8).map((u, i) => {
  const n = between(1, 4);
  const chosen = new Set();
  while (chosen.size < n) chosen.add(between(0, categoryData.length - 1));
  return {
    userId: u._id.$oid,
    items: [...chosen].map((idx) => {
      const a = categoryData[idx];
      return {
        _id: oid(),
        name: a.title,
        image: a.mainImage,
        category: a.category[0],
        author: a.author,
        shipping: a.shipping,
        delivery: between(5, 15),
        price: a.price,
        created_at: date(0, 20),
      };
    }),
  };
});
write("carts.json", carts);

// ---------- CuratorData ----------
const CURATORS = [
  ["paintings", "Colour That Holds a Room", "Marguerite Delacroix", "Senior Curator"],
  ["photography", "Seeing Cities Slowly", "Tobias Reinholt", "Photography Editor"],
  ["sculptures", "Form You Can Walk Around", "Adaeze Nwosu", "Guest Curator"],
  ["drawings", "The Honest Line", "Hiroshi Tanabe", "Works on Paper Specialist"],
  ["textures", "Surfaces Worth Touching", "Camila Duarte", "Associate Curator"],
  ["oil-paintings", "Depth in Oil", "Leonard Whitfield", "Senior Curator"],
  ["abstracts", "Feeling Without Subject", "Priya Venkataraman", "Contemporary Art Curator"],
  ["landscapes", "Open Country", "Gunnar Halvorsen", "Guest Curator"],
  ["acrylic-paintings", "Bold and Fast-Drying", "Sofia Marchetti", "Associate Curator"],
  ["modern-arts", "Geometry for Modern Homes", "Elias Brandt", "Design Curator"],
  ["portraits", "Faces Worth a Second Look", "Noor Al-Rashid", "Senior Curator"],
  ["seascapes", "Edge of the Water", "Mariana Costa", "Guest Curator"],
];
const curators = CURATORS.map(([category, title, curatorName, role]) => {
  const seed = slugify(curatorName);
  const works = categoryData.filter((d) => d.category[0] === category);
  return {
    title,
    images: works.slice(0, 4).map((w) => w.mainImage),
    profile: pic(`${seed}-profile`, 400, 400),
    curatorName,
    role,
    category,
    created_at: date(5, 200),
  };
});
write("curatordata.json", curators);

// ---------- Feedback ----------
const REVIEWERS = ["Ayesha K.", "Daniel M.", "Carmen A.", "Hamza R.", "Emily B.", "Jonas L.", "Maya F.", "Liam H.", "Grace N.", "Farhan S.", "Irene C.", "Nikolai P.", "Olivia K.", "Bilal A.", "Karina D.", "Tomas W.", "Sara J.", "Omar Q.", "Lena V.", "Peter G.", "Nadia Z.", "Henry T.", "Yuki S.", "Rosa M."];
const FB = [
  ["Arrived exactly as pictured", "The colours matched the listing, and the packaging was careful. It looks great in our living room.", "5"],
  ["Beautiful work, slow courier", "The piece itself is lovely, but the courier took a few days longer than quoted. The seller kept me updated.", "4"],
  ["Better in person", "Photos don't show the texture. Seeing the layers in daylight was a real surprise.", "5"],
  ["Great communication", "The artist answered my questions about framing within a day and sent extra photos before shipping.", "5"],
  ["Well packed", "Wrapped in archival paper and a rigid box. Not a scratch on it.", "5"],
  ["Slightly smaller than expected", "Lovely painting, but I misjudged the size from the listing. Check the dimensions carefully.", "4"],
  ["Certificate included", "Signed on the back with a certificate of authenticity, as promised. Good for the price.", "5"],
  ["Smooth return process", "The first piece didn't suit our wall, and the return was easy. Refund arrived within a week.", "4"],
  ["A gift that landed well", "Bought as an anniversary gift and it was a hit. Delivery was on time.", "5"],
  ["Good value", "Original work at this price is rare. Happy with the purchase overall.", "4"],
  ["Customs delay", "The artwork is great, but customs held it for a few days. Worth knowing for international orders.", "4"],
  ["Would buy again", "Second purchase from the platform and the process was just as easy as the first.", "5"],
];
const feedback = REVIEWERS.map((name, i) => {
  const [comment, detail, rating] = FB[i % FB.length];
  return { name, verification: "Verified", comment, detail, rating, days: between(1, 30), created_at: date(1, 120) };
});
write("feedbacks.json", feedback);

// ---------- Stories (categories exactly as in your schema comment) ----------
const STORY_CATS = {
  collectorsFav: ["Ten Pieces Collectors Keep Coming Back To", "A Collector's First Year", "Why Small Works Sell Out First", "Buying Art You Will Still Like in Ten Years", "The Quiet Appeal of Limited Editions"],
  DesignInsp: ["Hanging Art Above a Sofa", "Colour Palettes Borrowed from Paintings", "Mixing Textures in a Small Flat", "Gallery Walls That Do Not Look Cluttered", "Lighting Your Art Properly"],
  Exhibition: ["Inside a Pop-Up Show in Milan", "What Happens Before an Opening Night", "Three Group Shows Worth Following", "Curating a Room of Small Works", "How Galleries Choose What to Hang"],
  emergingArtist: ["Meet the Painter Selling Out in Weeks", "From Day Job to Full-Time Studio", "A Sculptor's First Solo Show", "Young Photographers to Watch", "How New Artists Price Their Work"],
  history: ["A Short History of Oil Painting", "How Photography Became Fine Art", "The Rise of Abstraction", "Where Landscape Painting Began", "Printmaking Through the Centuries"],
  livingwithart: ["Art in a Rented Apartment", "Bedrooms That Feel Like Galleries", "Sculpture on a Bookshelf", "Learning to Look at a Painting", "Caring for Art at Home"],
  losagles: ["Studio Visits Around Los Angeles", "Gallery Nights on the West Side", "Murals and Street Art Walks", "Where LA Collectors Shop", "Desert Light in Local Painting"],
};
const stories = [];
for (const [category, titles] of Object.entries(STORY_CATS)) {
  titles.forEach((name, i) => {
    const slug = slugify(name);
    stories.push({
      name,
      images: [1, 2, 3].map((k) => pic(`story-${slug}-${k}`, 1000, 700)),
      detail: `A short read from our ${category} series.`,
      description: `${name}. We talked to artists, collectors and gallery staff to put together a practical look at the subject, with examples from works currently on the site.`,
      link: `/stories/${slug}`,
      linkName: "Read the story",
      category,
      created_at: date(i * 6, i * 6 + 40),
    });
  });
}
write("stories.json", stories);

// ---------- Support (discriminator key: userType) ----------
const ARTIST_REASONS = {
  "Account / Profile Settings": ["Change profile photo", "Update bio", "Change payout email"],
  "Uploading Artworks": ["Image upload fails", "Edit a listing", "Change price"],
  "Sales & Payments": ["Payment not received", "Payout schedule", "Fee question"],
  "Shipping & Delivery": ["Courier pickup", "Shipping label", "Lost parcel"],
  "Technical Issues": ["Page not loading", "Cannot log in", "Dashboard error"],
  Other: ["General question"],
};
const BUYER_REASONS = {
  Orders: ["Track my order", "Cancel my order", "Item damaged", "Wrong item received"],
  Billing: ["Wrong charge", "Invoice request", "Need payment method help"],
  Delivery: ["Delivery delayed", "Change address", "Customs question"],
  "Returns & Refunds": ["Start a return", "Refund not received"],
  "Account Help": ["Reset password", "Change email"],
  Other: ["General question"],
};
const reasonKeys = (obj) => Object.keys(obj);
const supports = [];
for (let i = 0; i < 10; i++) {
  const reason = reasonKeys(ARTIST_REASONS)[i % 6];
  const subReason = pick(ARTIST_REASONS[reason]);
  const art = pick(categoryData);
  const [first, last] = [pick(FIRST), pick(LAST)];
  supports.push({
    userType: "I am an Artist",
    email: `${first}.${last}.studio${i + 1}@example.org`.toLowerCase(),
    subject: `${reason}: ${subReason}`,
    description: `Hello, I need help with "${subReason.toLowerCase()}". I have already tried again after refreshing the page. Please let me know what else you need from me.`,
    attachment: rand() > 0.6 ? [pic(`support-artist-${i}`, 800, 600)] : [],
    created_at: date(0, 60),
    reason,
    subReason,
    gallery: `${last} Studio Gallery`,
    artId: rand() > 0.3 ? art.artId : undefined,
  });
}
for (let i = 0; i < 10; i++) {
  const reason = reasonKeys(BUYER_REASONS)[i % 6];
  const subReason = pick(BUYER_REASONS[reason]);
  const [first, last] = [FIRST[(i + 3) % FIRST.length], LAST[(i + 7) % LAST.length]];
  supports.push({
    userType: "I am a Buyer",
    email: `${first}.${last}${i + 1}@example.com`.toLowerCase(),
    subject: `${reason}: ${subReason}`,
    description: `Hi, I'd like some help with "${subReason.toLowerCase()}". My order number is below. Thanks for your time.`,
    attachment: rand() > 0.7 ? [pic(`support-buyer-${i}`, 800, 600)] : [],
    created_at: date(0, 60),
    reason,
    subReason,
    buyerCountry: pick(CITIES).split(", ")[1],
    fullName: `${first} ${last}`,
    orderNumber: `ORD-${between(10000, 99999)}`,
  });
}
supports.forEach((s) => Object.keys(s).forEach((k) => s[k] === undefined && delete s[k]));
write("supports.json", supports);

// ---------- Accessibility ----------
const ACC = [
  ["Ayesha Khan", "The product images have no alt text, which makes browsing hard with a screen reader."],
  ["Daniel Mitchell", "Text on the category pages is low contrast against the cream background."],
  ["Carmen Alvarez", "I can't reach the cart button using only the keyboard."],
  ["Hamza Raza", "Please add captions to the artist interview videos."],
  ["Emily Brandt", "The font is too small on mobile and doesn't scale with browser settings."],
  ["Jonas Lindgren", "The image carousel moves too fast and can't be paused."],
  ["Maya Fontaine", "Form errors on checkout are shown only in red with no text."],
  ["Liam Hughes", "Please add a skip-to-content link for keyboard users."],
];
const accessibilities = ACC.map(([name, message], i) => ({
  name,
  email: `${name.split(" ")[0]}.${name.split(" ")[1]}.a11y${i + 1}@example.com`.toLowerCase(),
  message,
  createdAt: date(0, 90),
}));
write("accessibilities.json", accessibilities);

// ---------- Inquiry ----------
const BUDGETS = ["Under $500", "$500 - $1000", "$1000 - $2000", "$2000 - $5000", "$5000 - $10000"];
const INQ = [
  "Looking for a large abstract piece for an office lobby.",
  "I'd like a commissioned portrait of my grandparents.",
  "Interested in a pair of matching landscapes for a hallway.",
  "Do you have sculptures suitable for outdoor use?",
  "I need three small works for a gallery wall in a rented flat.",
  "Looking for a monochrome piece to match a grey living room.",
  "Can an artist paint a custom seascape in blue and cream?",
  "Searching for a limited-edition photograph as a wedding gift.",
  "I'd like to start a collection and need advice on where to begin.",
  "Interested in textured works for a restaurant dining room.",
];
const inquiries = INQ.map((detail, i) => {
  const created = date(0, 70);
  return {
    firstName: FIRST[(i * 2 + 1) % FIRST.length],
    lastName: LAST[(i * 3 + 2) % LAST.length],
    email: `inquiry${i + 1}.${FIRST[(i * 2 + 1) % FIRST.length]}@example.com`.toLowerCase(),
    budget: BUDGETS[i % BUDGETS.length],
    detail,
    createdAt: created,
    updatedAt: created,
  };
});
write("inquiries.json", inquiries);

console.log("done:", {
  users: users.length, carts: carts.length, authordata: authors.length, curatordata: curators.length,
  feedbacks: feedback.length, stories: stories.length, supports: supports.length,
  accessibilities: accessibilities.length, inquiries: inquiries.length, hashedPasswords: !!devHash,
});