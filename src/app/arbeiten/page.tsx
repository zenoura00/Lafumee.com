import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Galerie | Impressionen aus La Fumee",
  description: "Entdecken Sie die einzigartige Atmosphäre von La Fumee in unserer Bildergalerie. Shisha Lounge, Cocktail Bar und Events in Nürnberg.",
};

// Extended gallery for the full gallery page
const extendedGallery = [
  ...galleryImages,
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop", alt: "Cocktail Kreation", category: "cocktails" },
  { src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&h=400&fit=crop", alt: "Shisha Lounge Ambiente", category: "lounge" },
  { src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&h=400&fit=crop", alt: "Premium Spirituosen", category: "cocktails" },
  { src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop", alt: "Signature Drinks", category: "cocktails" },
  { src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&h=400&fit=crop", alt: "Event Atmosphäre", category: "events" },
  { src: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop", alt: "Party Night", category: "events" },
  { src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&h=400&fit=crop", alt: "VIP Bereich", category: "lounge" },
  { src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600&h=400&fit=crop", alt: "Bar Bereich", category: "cocktails" },
];

export default function ArbeitenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Impressionen
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unsere <span className="text-gold-gradient">Galerie</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Tauchen Sie ein in die Welt von La Fumee und erleben Sie unsere
              einzigartige Atmosphäre in Bildern
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {extendedGallery.map((image, index) => {
              // Vary heights for visual interest
              const heightClasses = [
                "aspect-square",
                "aspect-[4/5]",
                "aspect-[4/3]",
                "aspect-[3/4]",
              ];
              const heightClass = heightClasses[index % heightClasses.length];

              return (
                <div
                  key={`${image.src}-${index}`}
                  className={`group relative ${heightClass} rounded-2xl overflow-hidden break-inside-avoid card-hover`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-medium text-lg">{image.alt}</p>
                  </div>

                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-gold">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Folgen Sie uns
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Mehr auf <span className="text-gold-gradient">Instagram</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Entdecken Sie täglich neue Eindrücke und bleiben Sie über unsere Events informiert
            </p>
            <a
              href="https://instagram.com/lafumee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="shimmer bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full">
                @lafumee folgen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Erleben Sie es <span className="text-gold-gradient">selbst</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Bilder können nur einen kleinen Einblick geben. Besuchen Sie uns und
              erleben Sie die Atmosphäre von La Fumee live.
            </p>
            <Link href="/kontakt">
              <Button className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full">
                Jetzt Reservieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
