// Generates seed data for the CategoryData and ArtData Mongoose models.
// Usage: node generate-art-data.js
// Output: categorydata.json, artdata.json  (import with mongoimport --jsonArray)
import fs from 'fs'

// ---------- deterministic PRNG so reruns produce identical files ----------
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261017);
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const between = (a, b) => a + Math.floor(rand() * (b - a + 1));
const round10 = (n) => Math.round(n / 10) * 10;

// ---------- fictional artists (name, country) ----------
const ARTISTS = [
  ["Elena Marchetti", "Italy"], ["Kenji Watanabe", "Japan"], ["Amara Okafor", "Nigeria"],
  ["Lucas Ferreira", "Brazil"], ["Sofia Lindqvist", "Sweden"], ["Rafael Ortega", "Spain"],
  ["Nadia Haddad", "Lebanon"], ["Oliver Bennett", "United Kingdom"], ["Mei Lin Zhao", "China"],
  ["Daniel Moreau", "France"], ["Zainab Qureshi", "Pakistan"], ["Tomas Novak", "Czech Republic"],
  ["Isabella Rossi", "Italy"], ["Arjun Mehta", "India"], ["Hannah Fischer", "Germany"],
  ["Mateo Silva", "Portugal"], ["Layla Rahman", "Bangladesh"], ["Noah Andersen", "Denmark"],
  ["Chloe Dubois", "Canada"], ["Samuel Adeyemi", "Nigeria"],
];

// ---------- categories: slug must match your /category/<slug> routes ----------
const CATEGORIES = [
  {
    slug: "paintings", prefix: "PNT", also: [], sculptural: false,
    mediums: ["Oil on canvas", "Acrylic on canvas", "Mixed media on canvas"],
    styles: ["Contemporary", "Expressionism", "Impressionism", "Realism"],
    subjects: ["Everyday life", "Memory", "Light and weather", "Interiors"],
    blurb: "A confident, painterly piece with visible brushwork and a balanced palette.",
    titles: ["Morning Light on Quiet Water", "The Long Way Home", "Terracotta Afternoon", "Between Two Rains", "Harvest of Small Things", "Blue Hour Market", "Window Seat, Late Train", "Orchard in Memory", "Salt and Ember", "A Room Without Walls"],
  },
  {
    slug: "photography", prefix: "PHO", also: [], sculptural: false,
    mediums: ["Archival pigment print", "Silver gelatin print", "Digital C-type print"],
    styles: ["Documentary", "Fine art photography", "Street photography", "Minimalism"],
    subjects: ["Urban life", "Travel", "Nature", "Architecture"],
    blurb: "Printed on museum-grade paper, with deep tonal range and sharp detail.",
    titles: ["Fog Over Terraced Fields", "Neon Rain, Empty Street", "Last Ferry at Dusk", "Concrete Cathedral", "Desert Road, 5 a.m.", "Laundry Lines of the Old Town", "Winter Light in the Station", "Salt Flats Mirror", "The Fisherman's Hands", "Rooftops After Snow"],
  },
  {
    slug: "sculptures", prefix: "SCU", also: [], sculptural: true,
    mediums: ["Bronze", "Carrara marble", "Cast resin", "Welded steel", "Glazed ceramic"],
    styles: ["Contemporary", "Minimalism", "Abstract", "Organic modernism"],
    subjects: ["Form and balance", "Nature", "Movement", "Human scale"],
    blurb: "A tactile three-dimensional work that changes with the light and the viewing angle.",
    titles: ["Rising Tide Form", "Lattice No. 4", "The Listening Stone", "Fold in Bronze", "Balanced Departure", "Hollow Bloom", "Quiet Monolith", "Spiral of Hours", "Woven Steel Heron", "Weight of Air"],
  },
  {
    slug: "drawings", prefix: "DRW", also: [], sculptural: false,
    mediums: ["Graphite on paper", "Charcoal on paper", "Ink on paper", "Pastel on paper"],
    styles: ["Realism", "Gestural", "Line art", "Figurative"],
    subjects: ["Figure study", "Urban sketches", "Nature", "Still life"],
    blurb: "A direct, confident drawing where every line is visible and intentional.",
    titles: ["Study of Hands at Rest", "Sleeping City, Ink", "Charcoal Horses", "Branches in Winter Wind", "The Tailor's Table", "Cross-Hatched Harbor", "Figure Leaning", "Pencil Garden", "Market Crowd, Quick Lines", "Night Train Sketch"],
  },
  {
    slug: "textures", prefix: "TEX", also: [], sculptural: false,
    mediums: ["Mixed media on board", "Plaster and pigment on panel", "Sand and acrylic on canvas"],
    styles: ["Texture art", "Abstract", "Minimalism", "Relief"],
    subjects: ["Surface and material", "Erosion", "Landscape abstraction", "Layers"],
    blurb: "Built up in heavy layers, the surface casts shifting shadows through the day.",
    titles: ["Cracked Earth Relief", "Sandstorm Layers", "Linen and Lime", "Oxidized Horizon", "Ridge and Furrow", "Weathered Door Study", "Plaster Waves", "Burnt Paper Field", "Gravel Tide", "Stitched Surface No. 7"],
  },
  {
    slug: "oil-paintings", prefix: "OIL", also: ["paintings"], sculptural: false,
    mediums: ["Oil on canvas", "Oil on linen", "Oil on panel"],
    styles: ["Classical realism", "Impressionism", "Tonalism", "Post-impressionism"],
    subjects: ["Still life", "Portraiture", "Rural life", "Light"],
    blurb: "Rich oil colour with thick impasto passages and a lasting, glossy depth.",
    titles: ["Cobalt Evening, Heavy Impasto", "The Violinist's Rest", "Amber Harvest Table", "Still Life with Pears and Brass", "Storm Over the Barley", "Portrait in Umber", "Lamplight on Wet Cobbles", "Winter Orchard, Thick Palette", "Harbor in Ochre", "The Quiet Kitchen"],
  },
  {
    slug: "abstracts", prefix: "ABS", also: ["paintings"], sculptural: false,
    mediums: ["Acrylic on canvas", "Oil and cold wax on panel", "Mixed media on canvas"],
    styles: ["Abstract expressionism", "Geometric abstraction", "Colour field", "Lyrical abstraction"],
    subjects: ["Emotion", "Rhythm", "Colour", "Structure"],
    blurb: "An abstract composition that rewards slow looking, with layered colour and rhythm.",
    titles: ["Fragments of Tuesday", "Tension in Magenta", "Orbit No. 12", "Static Garden", "The Color of Almost", "Rhythm Section", "Molten Grid", "Echo Field", "Blue Collapse", "Unfinished Symmetry"],
  },
  {
    slug: "landscapes", prefix: "LND", also: ["paintings"], sculptural: false,
    mediums: ["Oil on canvas", "Acrylic on canvas", "Watercolour on paper"],
    styles: ["Romanticism", "Impressionism", "Realism", "Contemporary landscape"],
    subjects: ["Mountains", "Rivers and lakes", "Countryside", "Seasons"],
    blurb: "A wide, atmospheric landscape that carries the mood of the hour it depicts.",
    titles: ["Valley of Slow Mornings", "Pine Ridge in Mist", "Golden Plains, Last Light", "Mountain Pass in Spring", "River Bend at Noon", "Lake Under Storm Clouds", "Alpine Meadow", "Autumn Road to Nowhere", "Highland Sheep Fields", "Snowfall on the Ridge"],
  },
  {
    slug: "acrylic-paintings", prefix: "ACR", also: ["paintings"], sculptural: false,
    mediums: ["Acrylic on canvas", "Acrylic on wood panel", "Acrylic and ink on canvas"],
    styles: ["Pop", "Contemporary", "Fauvism", "Naive art"],
    subjects: ["Colour", "City life", "Gardens", "Play"],
    blurb: "Bold, fast-drying acrylic colour with crisp edges and a lively surface.",
    titles: ["Citrus Skies", "Pop of Afternoon", "Fast Lines, Bright Garden", "Coral Rooftops", "Neon Orchard", "Bold Blue Study", "Sunday Market Bursts", "Playground at Dusk", "Saturated Summer", "Green Room Variations"],
  },
  {
    slug: "modern-arts", prefix: "MOD", also: [], sculptural: false,
    mediums: ["Acrylic on canvas", "Digital print on aluminium", "Mixed media collage", "Screenprint on paper"],
    styles: ["Modernism", "Constructivism", "Bauhaus-inspired", "Neo-geometric"],
    subjects: ["Geometry", "Technology", "Urban systems", "Minimal form"],
    blurb: "A clean, graphic composition that sits comfortably in contemporary interiors.",
    titles: ["Grid of Possibilities", "Pixel Garden", "Concrete Poetry No. 3", "Geometry of Commutes", "Layered Signals", "Minimal Horizon II", "Bauhaus Morning", "Interface", "Cut Paper City", "Shift Left"],
  },
  {
    slug: "portraits", prefix: "POR", also: ["paintings"], sculptural: false,
    mediums: ["Oil on canvas", "Acrylic on canvas", "Charcoal and oil on paper"],
    styles: ["Realism", "Expressionism", "Contemporary portraiture", "Figurative"],
    subjects: ["Character", "Family", "Identity", "Everyday people"],
    blurb: "A quiet, observed portrait that focuses on expression, posture and light.",
    titles: ["Woman with Folded Letter", "Boy at the Bus Stop", "The Baker's Daughter", "Self-Portrait, Half Turned", "Grandfather's Pipe", "Girl in Yellow Scarf", "The Violin Teacher", "Man by the Window", "Two Sisters, Evening", "Elder with Red Shawl"],
  },
  {
    slug: "flowers", prefix: "FLW", also: ["paintings"], sculptural: false,
    mediums: ["Oil on canvas", "Watercolour on paper", "Acrylic on canvas"],
    styles: ["Botanical", "Impressionism", "Realism", "Still life"],
    subjects: ["Botanicals", "Gardens", "Seasons", "Still life"],
    blurb: "A fresh floral study with soft light and a lively, natural colour range.",
    titles: ["Peonies in a Blue Jar", "Wild Poppies at Noon", "Sunflowers Leaning Home", "Lilies After Rain", "Dahlia Study in Rust", "Marigold Garden", "Jasmine at the Gate", "Tulips, Morning Table", "Lavender Rows", "Cherry Blossom Drift"],
  },
  {
    slug: "seascapes", prefix: "SEA", also: ["paintings"], sculptural: false,
    mediums: ["Oil on canvas", "Acrylic on canvas", "Oil on panel"],
    styles: ["Marine art", "Romanticism", "Impressionism", "Contemporary realism"],
    subjects: ["Coastlines", "Weather at sea", "Harbours", "Tides"],
    blurb: "A moving seascape with convincing water, sky and a sense of open air.",
    titles: ["Grey Swell at Dawn", "Harbor of Small Boats", "Rolling Surf, Copper Sky", "Lighthouse in Fog", "Tide Pools at Noon", "Evening Calm, Open Water", "Storm Breaking Over the Bay", "Sailboats at Anchor", "The Long Shoreline", "Midnight Waves"],
  },
  {
    slug: "monochrome", prefix: "MNO", also: [], sculptural: false,
    mediums: ["Charcoal on paper", "Ink on canvas", "Acrylic on canvas", "Graphite on panel"],
    styles: ["Minimalism", "Tonal abstraction", "Noir", "Contemporary"],
    subjects: ["Shadow", "Silence", "Contrast", "Form"],
    blurb: "A restrained black, white and grey work built entirely on tone and contrast.",
    titles: ["Black Sun", "White on White Study", "Charcoal Tide", "Ink Cloud", "Silver Forest", "Shadow Play No. 2", "Grey Corridor", "Ash and Bone", "Noir Harbor", "Quiet Static"],
  },
];

// 5 price buckets matching your UI filters; each category gets 2 works per bucket.
const BUCKETS = [[150, 490], [500, 990], [1000, 1990], [2000, 4990], [5000, 9990]];

const SIZES_FLAT = ["12 x 16 in", "16 x 20 in", "18 x 24 in", "24 x 30 in", "24 x 36 in", "30 x 40 in", "36 x 48 in", "40 x 60 in"];
const SIZES_3D = ["H 12 x W 6 x D 6 in", "H 18 x W 10 x D 8 in", "H 24 x W 12 x D 12 in", "H 30 x W 14 x D 10 in", "H 36 x W 18 x D 14 in"];

const img = (slug, n, k) => `https://picsum.photos/seed/${slug}-${n}-${k}/800/1000`;

const categoryData = [];
const artData = [];

for (const cat of CATEGORIES) {
  cat.titles.forEach((title, i) => {
    const n = i + 1;
    const [author, country] = ARTISTS[(i * 3 + cat.slug.length) % ARTISTS.length];
    const medium = pick(cat.mediums);
    const style = pick(cat.styles);
    const subject = pick(cat.subjects);
    const [lo, hi] = BUCKETS[i % BUCKETS.length];
    const price = Math.min(hi, Math.max(lo, round10(between(lo, hi))));
    const size = cat.sculptural ? pick(SIZES_3D) : pick(SIZES_FLAT);
    const quantity = cat.sculptural ? between(1, 5) : 1;
    const artId = `${cat.prefix}-${String(n).padStart(3, "0")}`;
    const freeShipping = rand() > 0.3;
    const year = between(2010, 2025);
    const detail = `${title} is an original ${medium.toLowerCase()} by ${author}, made in a ${style.toLowerCase()} style. ${cat.blurb}`;

    const images = [1, 2, 3, 4].map((k) => img(cat.slug, n, k));

    categoryData.push({
      artId,
      title,
      price,
      author,
      detail,
      size,
      quantity,
      image: images,
      mainImage: images[0],
      country,
      shipping: freeShipping ? "Included" : "$40",
      trustScore: `${between(92, 100)}%`,
      category: [cat.slug, ...cat.also],
      likes: between(20, 2400),
    });

    artData.push({
      artId,
      aboutArtWork: {
        about: detail,
        year,
        subject,
        styles: [style, pick(cat.styles.filter((s) => s !== style))],
        mediums: [medium],
      },
      detailAndDimensions: {
        rarity: quantity > 1 ? `Limited edition of ${quantity}` : "Unique work",
        size,
        readyToHang: cat.sculptural ? "Not applicable" : pick(["Yes", "Yes", "No, unframed"]),
        frame: cat.sculptural ? "Not applicable" : pick(["Framed in solid oak", "Framed in black aluminium", "Not included"]),
        authenticity: "Signed, with a certificate of authenticity",
        packaging: cat.sculptural ? "Shipped in a custom wooden crate with foam insert" : "Wrapped in archival paper and shipped in a rigid box",
      },
      shippingsAndReturns: {
        cost: freeShipping ? "Included" : "$40",
        time: pick(["5-8 business days", "7-14 business days", "10-15 business days"]),
        returns: "14-day return policy if the work arrives damaged or not as described",
        handling: "Prepared and handed to the courier within 3 business days",
        shipsFrom: country,
        customs: "Import duties and taxes, if any, are paid by the buyer",
      },
      artistStory: `${author} is an artist based in ${country}. Their work focuses on ${subject.toLowerCase()}, and they have been selling original pieces online for several years. ${title} is part of an ongoing series in ${medium.toLowerCase()}.`,
    });
  });
}

fs.writeFileSync("categorydata.json", JSON.stringify(categoryData, null, 2));
fs.writeFileSync("art.json", JSON.stringify(artData, null, 2));
console.log(`categorydata.json: ${categoryData.length} docs, artdata.json: ${artData.length} docs`);