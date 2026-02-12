import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, services, subServices, businessInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShishaIcon, CocktailIcon, DJIcon } from "@/components/icons/AnimatedIcons";
import { MapPin, ArrowRight, Phone, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "Stadt nicht gefunden",
    };
  }

  return {
    title: `Shisha & Cocktail Bar in ${city.name} | La Fumee`,
    description: `La Fumee – Ihre Premium Shisha & Cocktail Bar für ${city.name} und Umgebung. ${city.description}. Jetzt reservieren!`,
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shisha-lounge": ShishaIcon,
  "cocktail-bar": CocktailIcon,
  "events-dj-nights": DJIcon,
};

export default async function StadtPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  // Get nearby cities
  const nearbyCities = cities
    .filter((c) => c.slug !== city.slug && Math.abs(c.distance - city.distance) <= 10)
    .slice(0, 5);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                {city.distance > 0 ? `${city.distance} km von Nürnberg` : "Hauptstandort"}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shisha & Cocktails in <span className="text-gold-gradient">{city.name}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              {city.description}. Besuchen Sie La Fumee in der Nürnberger Innenstadt
              oder buchen Sie unseren Catering-Service für Ihre Veranstaltung in {city.name}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt">
                <Button className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full">
                  Jetzt Reservieren
                </Button>
              </Link>
              <a href={`tel:${businessInfo.phone}`}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Unsere Leistungen für <span className="text-gold-gradient">{city.name}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ob vor Ort bei uns oder für Ihre Veranstaltung – wir bieten Premium-Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = iconMap[service.slug] || ShishaIcon;
              return (
                <Link
                  key={service.id}
                  href={`/stadt/${city.slug}/${service.slug}`}
                  className="group glass rounded-2xl p-6 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.name} {city.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services for this City */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Alle Angebote in <span className="text-gold-gradient">{city.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {subServices.map((service) => (
              <Link
                key={service.slug}
                href={`/stadt/${city.slug}/${service.slug}`}
                className="glass rounded-xl p-4 text-center card-hover group"
              >
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Anfahrt von {city.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  La Fumee erreichen Sie von {city.name} in etwa {Math.max(10, city.distance * 2)} Minuten
                  mit dem Auto. Unsere Bar befindet sich zentral in der Nürnberger Innenstadt.
                </p>
                <p className="font-medium">
                  {businessInfo.address.street}<br />
                  {businessInfo.address.zip} {businessInfo.address.city}
                </p>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className="font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Weitere <span className="text-gold-gradient">Städte</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/stadt/${nearbyCity.slug}`}
                  className="glass rounded-full px-6 py-3 card-hover group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {nearbyCity.name}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {nearbyCity.distance} km
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
