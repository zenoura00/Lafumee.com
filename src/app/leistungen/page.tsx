import { Metadata } from "next";
import Link from "next/link";
import { services, subServices } from "@/lib/data";
import { ShishaIcon, CocktailIcon, DJIcon } from "@/components/icons/AnimatedIcons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Unsere Leistungen | Shisha, Cocktails & Events",
  description: "Entdecken Sie unser vielfältiges Angebot: Premium Shisha Lounge, exklusive Cocktail Bar und unvergessliche Events & DJ Nights in Nürnberg.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shisha-lounge": ShishaIcon,
  "cocktail-bar": CocktailIcon,
  "events-dj-nights": DJIcon,
};

export default function LeistungenPage() {
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
              Unser Angebot
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unsere <span className="text-gold-gradient">Leistungen</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Von Premium Shisha über exklusive Cocktails bis hin zu unvergesslichen Events –
              bei La Fumee erwartet Sie ein vielfältiges Erlebnis
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.slug] || ShishaIcon;
              const relatedSubServices = subServices.filter(s => s.parent === service.slug);

              return (
                <div
                  key={service.id}
                  className="glass rounded-3xl p-8 card-hover relative overflow-hidden group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-14 h-14 text-primary" />
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h2>

                    {/* Short description */}
                    <p className="text-primary/80 text-sm mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Full description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Related services */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                        Verwandte Angebote
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedSubServices.slice(0, 4).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/service/${sub.slug}`}
                            className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Sub-Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Alle <span className="text-gold-gradient">Angebote</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unser komplettes Angebot für Ihren perfekten Abend
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {subServices.map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-gold">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihren <span className="text-gold-gradient">Besuch</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Reservieren Sie jetzt Ihren Tisch und erleben Sie La Fumee
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
