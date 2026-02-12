import { Metadata } from "next";
import Link from "next/link";
import { cities, businessInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Städte | La Fumee in Ihrer Nähe",
  description: `La Fumee - Ihre Premium Shisha & Cocktail Bar in ${businessInfo.address.city} und Umgebung. Wir beliefern auch Veranstaltungen in der Region.`,
};

export default function StaedtePage() {
  const mainCities = cities.filter((city) => city.isMain);
  const otherCities = cities.filter((city) => !city.isMain);

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
              Unser Einzugsgebiet
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              La Fumee in <span className="text-gold-gradient">Ihrer Nähe</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Besuchen Sie uns in {businessInfo.address.city} oder nutzen Sie unseren Catering-Service
              für Events in der gesamten Region
            </p>
          </div>
        </div>
      </section>

      {/* Main Cities */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Haupt<span className="text-gold-gradient">standorte</span>
            </h2>
            <p className="text-muted-foreground">
              Unsere wichtigsten Städte in der Metropolregion Nürnberg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mainCities.map((city, index) => (
              <Link
                key={city.slug}
                href={`/stadt/${city.slug}`}
                className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {city.slug === "nuernberg" && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Hauptstandort
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {city.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {city.population.toLocaleString("de-DE")} Einwohner
                      </span>
                      {city.distance > 0 && (
                        <span>{city.distance} km entfernt</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Weitere <span className="text-gold-gradient">Orte</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Auch in diesen Orten sind wir für Sie da – ob für Besuche in unserer Bar
              oder für Ihren Event vor Ort
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/stadt/${city.slug}`}
                className="glass rounded-xl p-4 text-center card-hover group"
              >
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors mb-1">
                  {city.name}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {city.distance} km
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                  Unser Standort
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Mitten im <span className="text-gold-gradient">Herzen</span> Nürnbergs
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  La Fumee befindet sich zentral in der Nürnberger Innenstadt.
                  Von allen umliegenden Städten sind wir bequem mit öffentlichen
                  Verkehrsmitteln oder dem Auto erreichbar.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{businessInfo.address.street}</p>
                      <p className="text-muted-foreground text-sm">
                        {businessInfo.address.zip} {businessInfo.address.city}
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/kontakt">
                  <Button className="shimmer bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-full">
                    Anfahrt & Kontakt
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="glass rounded-3xl overflow-hidden glow-gold aspect-square">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40000!2d11.0767!3d49.4521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sde!2sde!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Fumee Location"
                  className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
