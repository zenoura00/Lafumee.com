import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, subServices, allServices, cities, businessInfo, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShishaIcon, CocktailIcon, DJIcon, StarIcon } from "@/components/icons/AnimatedIcons";
import { Check, ArrowRight, Phone, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: `${service.name} in Nürnberg | La Fumee`,
    description: service.description,
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shisha-lounge": ShishaIcon,
  "cocktail-bar": CocktailIcon,
  "events-dj-nights": DJIcon,
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // Check if it's a main service
  const mainService = services.find((s) => s.slug === slug);
  const subService = subServices.find((s) => s.slug === slug);

  const service = mainService || subService;

  if (!service) {
    notFound();
  }

  // Get parent service for sub-services
  const parentService = subService
    ? services.find((s) => s.slug === subService.parent)
    : null;

  // Get related services
  const relatedServices = mainService
    ? subServices.filter((s) => s.parent === mainService.slug)
    : subServices.filter((s) => s.parent === subService?.parent && s.slug !== slug);

  // Get icon
  const Icon = mainService
    ? iconMap[mainService.slug]
    : parentService
      ? iconMap[parentService.slug]
      : ShishaIcon;

  // Get main cities
  const mainCities = cities.filter((c) => c.isMain).slice(0, 5);

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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Icon */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-14 h-14 md:w-20 md:h-20 text-primary" />
              </div>

              {/* Content */}
              <div>
                {parentService && (
                  <Link
                    href={`/service/${parentService.slug}`}
                    className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block hover:underline"
                  >
                    ← {parentService.name}
                  </Link>
                )}

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-gold-gradient">{service.name}</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt">
                    <Button className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full">
                      Jetzt Reservieren
                    </Button>
                  </Link>
                  <a href={`tel:${businessInfo.phone}`}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Anrufen
                    </Button>
                  </a>
                </div>
              </div>
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
                Was Sie <span className="text-gold-gradient">erwartet</span>
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Weitere <span className="text-gold-gradient">Angebote</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/service/${related.slug}`}
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

      {/* Testimonial */}
      <section className="py-20 md:py-28 bg-card">
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

      {/* Cities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {service.name} in <span className="text-gold-gradient">Ihrer Stadt</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {mainCities.map((city) => (
              <Link
                key={city.slug}
                href={`/stadt/${city.slug}/${slug}`}
                className="glass rounded-full px-6 py-3 card-hover group"
              >
                <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                <span className="font-medium group-hover:text-primary transition-colors">
                  {service.name} {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-gold">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bereit für <span className="text-gold-gradient">{service.name}</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Reservieren Sie jetzt Ihren Tisch und erleben Sie {service.name} bei La Fumee
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
