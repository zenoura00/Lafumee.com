import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, services, subServices, allServices, businessInfo, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShishaIcon, CocktailIcon, DJIcon, StarIcon } from "@/components/icons/AnimatedIcons";
import { Check, ArrowRight, Phone, MapPin, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ city: string; service: string }> = [];

  for (const city of cities) {
    for (const service of allServices) {
      params.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = allServices.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  return {
    title: `${service.name} in ${city.name} | La Fumee`,
    description: `${service.name} in ${city.name} – ${service.description} Jetzt bei La Fumee buchen!`,
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shisha-lounge": ShishaIcon,
  "cocktail-bar": CocktailIcon,
  "events-dj-nights": DJIcon,
};

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const mainService = services.find((s) => s.slug === serviceSlug);
  const subService = subServices.find((s) => s.slug === serviceSlug);
  const service = mainService || subService;

  if (!city || !service) {
    notFound();
  }

  // Get parent service for sub-services
  const parentService = subService
    ? services.find((s) => s.slug === subService.parent)
    : null;

  // Get icon
  const Icon = mainService
    ? iconMap[mainService.slug]
    : parentService
      ? iconMap[parentService.slug]
      : ShishaIcon;

  // Get related services in this city
  const relatedServices = mainService
    ? subServices.filter((s) => s.parent === mainService.slug).slice(0, 8)
    : subServices.filter((s) => s.parent === subService?.parent && s.slug !== serviceSlug).slice(0, 8);

  // Get nearby cities
  const nearbyCities = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => Math.abs(a.distance - city.distance) - Math.abs(b.distance - city.distance))
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
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/staedte" className="hover:text-primary transition-colors">Städte</Link>
              <span>/</span>
              <Link href={`/stadt/${city.slug}`} className="hover:text-primary transition-colors">{city.name}</Link>
              <span>/</span>
              <span className="text-primary">{service.name}</span>
            </div>

            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.name} in <span className="text-gold-gradient">{city.name}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              {service.description} Erleben Sie erstklassigen Service bei La Fumee –
              nur {city.distance > 0 ? `${city.distance} km` : "im Herzen"} von {city.name}.
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

      {/* Features (for main services) */}
      {mainService && mainService.features && (
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
                {service.name} <span className="text-gold-gradient">Highlights</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mainService.features.map((feature) => (
                  <div key={feature} className="glass rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services in this City */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Weitere Angebote in <span className="text-gold-gradient">{city.name}</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/stadt/${city.slug}/${related.slug}`}
                  className="glass rounded-xl p-4 text-center card-hover group"
                >
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
                  Erleben Sie {service.name} bei La Fumee in Nürnberg. Von {city.name} erreichen
                  Sie uns in etwa {Math.max(10, city.distance * 2)} Minuten mit dem Auto.
                </p>
                <p className="font-medium">
                  {businessInfo.address.street}<br />
                  {businessInfo.address.zip} {businessInfo.address.city}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessInfo.address.street}, ${businessInfo.address.zip} ${businessInfo.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm mt-4 hover:underline"
                >
                  Route planen →
                </a>
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

      {/* Testimonial */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-primary" filled />
                ))}
              </div>
              <p className="font-elegant text-xl md:text-2xl text-foreground/90 mb-6 leading-relaxed">
                "{testimonials[0].text}"
              </p>
              <div>
                <div className="font-semibold">{testimonials[0].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same Service in Other Cities */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {service.name} in <span className="text-gold-gradient">anderen Städten</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/stadt/${nearbyCity.slug}/${serviceSlug}`}
                className="glass rounded-full px-6 py-3 card-hover group"
              >
                <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                <span className="font-medium group-hover:text-primary transition-colors">
                  {nearbyCity.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-gold">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {service.name} in <span className="text-gold-gradient">{city.name}</span> erleben
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Reservieren Sie jetzt Ihren Tisch bei La Fumee
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
