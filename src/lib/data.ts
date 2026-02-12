// Business Information
export const businessInfo = {
  name: "La Fumee",
  tagline: "Shisha & Cocktail Bar",
  phone: "0176 2329 6860",
  email: "info@lafumee.com",
  whatsapp: "01762329860",
  address: {
    street: "Königstraße 23",
    city: "Nürnberg",
    zip: "90402",
    country: "Deutschland",
  },
  hours: {
    "Mo–Do": "18:00 – 02:00",
    "Fr–Sa": "18:00 – 03:00",
    "So": "18:00 – 02:00",
  },
  since: 2020,
  experience: 5,
  events: 300,
  region: "Bayern",
};

// Cities within 10km of Nürnberg
export const cities = [
  {
    name: "Nürnberg",
    slug: "nuernberg",
    distance: 0,
    population: 518000,
    description: "Die zweitgrößte Stadt Bayerns und unser Hauptstandort",
    isMain: true,
  },
  {
    name: "Fürth",
    slug: "fuerth",
    distance: 7,
    population: 130000,
    description: "Direkt angrenzend an Nürnberg mit eigenem Charme",
    isMain: true,
  },
  {
    name: "Erlangen",
    slug: "erlangen",
    distance: 17,
    population: 112000,
    description: "Universitätsstadt mit jungem Publikum",
    isMain: true,
  },
  {
    name: "Schwabach",
    slug: "schwabach",
    distance: 12,
    population: 41000,
    description: "Die Goldschlägerstadt südlich von Nürnberg",
    isMain: true,
  },
  {
    name: "Stein",
    slug: "stein",
    distance: 8,
    population: 14000,
    description: "Heimat des berühmten Faber-Castell",
    isMain: true,
  },
  {
    name: "Zirndorf",
    slug: "zirndorf",
    distance: 9,
    population: 26000,
    description: "Spielzeugstadt mit Geschichte",
    isMain: false,
  },
  {
    name: "Oberasbach",
    slug: "oberasbach",
    distance: 10,
    population: 18000,
    description: "Gemütliche Wohnstadt im Süden",
    isMain: false,
  },
  {
    name: "Röthenbach",
    slug: "roethenbach",
    distance: 11,
    population: 12000,
    description: "Am Rande des Lorenzer Reichswalds",
    isMain: false,
  },
  {
    name: "Lauf an der Pegnitz",
    slug: "lauf-an-der-pegnitz",
    distance: 12,
    population: 26000,
    description: "Malerische Stadt an der Pegnitz",
    isMain: false,
  },
  {
    name: "Wendelstein",
    slug: "wendelstein",
    distance: 14,
    population: 16000,
    description: "Zwischen Nürnberg und Schwabach",
    isMain: false,
  },
  {
    name: "Heroldsberg",
    slug: "heroldsberg",
    distance: 10,
    population: 8000,
    description: "Historischer Markt nördlich von Nürnberg",
    isMain: false,
  },
  {
    name: "Kalchreuth",
    slug: "kalchreuth",
    distance: 12,
    population: 3000,
    description: "Bekannt für Kirschen und Obstanbau",
    isMain: false,
  },
  {
    name: "Cadolzburg",
    slug: "cadolzburg",
    distance: 15,
    population: 11000,
    description: "Burgstadt mit mittelalterlichem Flair",
    isMain: false,
  },
  {
    name: "Langenzenn",
    slug: "langenzenn",
    distance: 18,
    population: 10000,
    description: "Historische Kleinstadt westlich",
    isMain: false,
  },
  {
    name: "Herzogenaurach",
    slug: "herzogenaurach",
    distance: 20,
    population: 24000,
    description: "Die Sportschuh-Hauptstadt",
    isMain: false,
  },
  {
    name: "Rückersdorf",
    slug: "rueckersdorf",
    distance: 9,
    population: 4000,
    description: "Ruhige Gemeinde östlich",
    isMain: false,
  },
  {
    name: "Schwarzenbruck",
    slug: "schwarzenbruck",
    distance: 15,
    population: 8000,
    description: "Zwischen Wald und Wasser",
    isMain: false,
  },
  {
    name: "Feucht",
    slug: "feucht",
    distance: 12,
    population: 14000,
    description: "Am Rande des Lorenzer Reichswalds",
    isMain: false,
  },
  {
    name: "Altdorf bei Nürnberg",
    slug: "altdorf-bei-nuernberg",
    distance: 18,
    population: 15000,
    description: "Ehemalige Universitätsstadt",
    isMain: false,
  },
  {
    name: "Kornburg",
    slug: "kornburg",
    distance: 10,
    population: 5000,
    description: "Stadtteil mit dörflichem Charakter",
    isMain: false,
  },
];

// Main Services
export const services = [
  {
    id: "shisha-lounge",
    name: "Shisha Lounge",
    slug: "shisha-lounge",
    shortDescription: "Premium Tabak & moderne Pfeifen",
    description: "Erleben Sie unsere exklusive Shisha Lounge mit Premium-Tabaksorten aus aller Welt und handgefertigten modernen Pfeifen in entspannter Atmosphäre.",
    icon: "shisha",
    features: [
      "Premium Tabak Marken",
      "Moderne handgefertigte Pfeifen",
      "Entspannte Lounge-Atmosphäre",
      "Individuelle Mischungen",
      "VIP-Bereiche verfügbar",
    ],
    category: "main",
  },
  {
    id: "cocktail-bar",
    name: "Cocktail Bar",
    slug: "cocktail-bar",
    shortDescription: "Klassische & Signature Cocktails",
    description: "Unsere erfahrenen Barkeeper kreieren klassische Cocktails und einzigartige Signature Drinks mit den besten Spirituosen.",
    icon: "cocktail",
    features: [
      "Klassische Cocktails",
      "Signature Drinks",
      "Premium Spirituosen",
      "Fresh Ingredients",
      "Personalisierte Kreationen",
    ],
    category: "main",
  },
  {
    id: "events-dj-nights",
    name: "Events & DJ Nights",
    slug: "events-dj-nights",
    shortDescription: "Regelmäßige Partys & Special Events",
    description: "Erleben Sie unvergessliche Nächte mit unseren regelmäßigen DJ-Events, Themenpartys und exklusiven Veranstaltungen.",
    icon: "dj",
    features: [
      "Wöchentliche DJ Nights",
      "Themenpartys",
      "Private Events",
      "Geburtstagsfeier",
      "Firmenevents",
    ],
    category: "main",
  },
];

// Sub-Services for SEO
export const subServices = [
  // Shisha Services
  { name: "Premium Shisha", slug: "premium-shisha", parent: "shisha-lounge", description: "Exklusive Premium-Shisha mit ausgewählten Tabaksorten" },
  { name: "Shisha Catering", slug: "shisha-catering", parent: "shisha-lounge", description: "Mobiler Shisha-Service für Ihre Veranstaltung" },
  { name: "VIP Shisha Lounge", slug: "vip-shisha-lounge", parent: "shisha-lounge", description: "Privater VIP-Bereich für besondere Anlässe" },
  { name: "Hookah Party", slug: "hookah-party", parent: "shisha-lounge", description: "Shisha-Partys für Gruppen" },
  { name: "Shisha Bar", slug: "shisha-bar", parent: "shisha-lounge", description: "Klassische Shisha Bar Erfahrung" },
  { name: "Wasserpfeife", slug: "wasserpfeife", parent: "shisha-lounge", description: "Traditionelle Wasserpfeife genießen" },
  { name: "Shisha Rauchen", slug: "shisha-rauchen", parent: "shisha-lounge", description: "Entspanntes Shisha Rauchen in stilvoller Umgebung" },
  { name: "Orientalische Shisha", slug: "orientalische-shisha", parent: "shisha-lounge", description: "Authentische orientalische Shisha-Kultur" },

  // Cocktail Services
  { name: "Cocktail Abend", slug: "cocktail-abend", parent: "cocktail-bar", description: "Genießen Sie einen stilvollen Cocktailabend" },
  { name: "Cocktail Kurse", slug: "cocktail-kurse", parent: "cocktail-bar", description: "Lernen Sie die Kunst des Mixens" },
  { name: "Signature Cocktails", slug: "signature-cocktails", parent: "cocktail-bar", description: "Einzigartige Hauskreationen" },
  { name: "Whisky Bar", slug: "whisky-bar", parent: "cocktail-bar", description: "Erlesene Whisky-Auswahl" },
  { name: "Gin Bar", slug: "gin-bar", parent: "cocktail-bar", description: "Premium Gin Sorten und Tonic" },
  { name: "Longdrinks", slug: "longdrinks", parent: "cocktail-bar", description: "Klassische Longdrinks" },
  { name: "Aperitif Bar", slug: "aperitif-bar", parent: "cocktail-bar", description: "Perfekt für den Abendstart" },
  { name: "Mocktails", slug: "mocktails", parent: "cocktail-bar", description: "Alkoholfreie Cocktail-Alternativen" },

  // Event Services
  { name: "DJ Events", slug: "dj-events", parent: "events-dj-nights", description: "Regelmäßige DJ-Abende mit Top-DJs" },
  { name: "Geburtstagsfeier", slug: "geburtstagsfeier", parent: "events-dj-nights", description: "Feiern Sie Ihren Geburtstag bei uns" },
  { name: "Junggesellenabschied", slug: "junggesellenabschied", parent: "events-dj-nights", description: "Unvergesslicher JGA" },
  { name: "Firmenfeier", slug: "firmenfeier", parent: "events-dj-nights", description: "Professionelle Firmenevents" },
  { name: "Private Events", slug: "private-events", parent: "events-dj-nights", description: "Exklusive private Veranstaltungen" },
  { name: "Themenpartys", slug: "themenpartys", parent: "events-dj-nights", description: "Kreative Motto-Partys" },
  { name: "Live Musik", slug: "live-musik", parent: "events-dj-nights", description: "Live-Auftritte und Konzerte" },
  { name: "Ladies Night", slug: "ladies-night", parent: "events-dj-nights", description: "Spezielle Damenabende" },
  { name: "Happy Hour", slug: "happy-hour", parent: "events-dj-nights", description: "Vergünstigte Getränke" },
  { name: "After Work Party", slug: "after-work-party", parent: "events-dj-nights", description: "Entspannen nach der Arbeit" },
];

// Combine all services
export const allServices = [...services, ...subServices];

// Testimonials
export const testimonials = [
  {
    name: "Michael K.",
    role: "Stammgast",
    text: "Beste Shisha Bar in Nürnberg! Die Atmosphäre ist einzigartig und das Team super freundlich.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Event-Gast",
    text: "Wir haben hier meinen Geburtstag gefeiert - alles perfekt organisiert. Die Cocktails sind fantastisch!",
    rating: 5,
  },
  {
    name: "Thomas B.",
    role: "Geschäftskunde",
    text: "Für unsere Firmenfeier der ideale Ort. Professioneller Service und tolle Location.",
    rating: 5,
  },
];

// Stats for Trust Section
export const stats = [
  { value: "5+", label: "Jahre Erfahrung", icon: "calendar" },
  { value: "300+", label: "Events veranstaltet", icon: "party" },
  { value: "50+", label: "Premium Tabaksorten", icon: "tobacco" },
  { value: "100+", label: "Cocktailkreationen", icon: "drink" },
];

// Features for Why Us section
export const features = [
  {
    title: "Premium Qualität",
    description: "Nur die besten Tabaksorten und Spirituosen für unsere Gäste",
    icon: "quality",
  },
  {
    title: "Zentrale Lage",
    description: "Mitten in der Nürnberger Innenstadt, bestens erreichbar",
    icon: "location",
  },
  {
    title: "Moderne Atmosphäre",
    description: "Stilvolles Ambiente mit elegantem Design",
    icon: "design",
  },
  {
    title: "Erfahrenes Team",
    description: "Professionelle Barkeeper und aufmerksamer Service",
    icon: "team",
  },
  {
    title: "Regelmäßige Events",
    description: "DJ Nights, Themenpartys und exklusive Veranstaltungen",
    icon: "events",
  },
  {
    title: "VIP Bereiche",
    description: "Private Lounges für besondere Anlässe",
    icon: "vip",
  },
];

// How it works steps
export const howItWorks = [
  {
    step: 1,
    title: "Reservieren",
    description: "Buchen Sie online oder rufen Sie uns an für Ihre Reservierung",
  },
  {
    step: 2,
    title: "Genießen",
    description: "Entspannen Sie in unserer exklusiven Atmosphäre",
  },
  {
    step: 3,
    title: "Feiern",
    description: "Erleben Sie unvergessliche Momente mit Freunden",
  },
];

// Gallery images (using placeholder URLs)
export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop", alt: "Cocktails an der Bar" },
  { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop", alt: "Elegante Bar Atmosphäre" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop", alt: "Signature Cocktail" },
  { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop", alt: "Bar Interieur" },
  { src: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=600&h=400&fit=crop", alt: "DJ Night Event" },
  { src: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=600&h=400&fit=crop", alt: "Lounge Bereich" },
];

// Navigation links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Events", href: "/events" },
  { name: "Galerie", href: "/arbeiten" },
  { name: "Städte", href: "/staedte" },
  { name: "Kontakt", href: "/kontakt" },
];

// Generate SEO pages combinations
export function generateSEOPages() {
  const pages: Array<{
    city: typeof cities[0];
    service: typeof allServices[0];
    slug: string;
  }> = [];

  for (const city of cities) {
    for (const service of allServices) {
      pages.push({
        city,
        service,
        slug: `${city.slug}/${service.slug}`,
      });
    }
  }

  return pages;
}

export const seoPages = generateSEOPages();
