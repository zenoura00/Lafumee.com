import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Music, Users, Sparkles, PartyPopper, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & DJ Nights | Unvergessliche Abende",
  description: "Erleben Sie unvergessliche Events, DJ Nights und Themenpartys bei La Fumee in Nürnberg. Perfekt für Geburtstage, JGA und Firmenfeiern.",
};

const upcomingEvents = [
  {
    title: "Latin Night",
    date: "Jeden Freitag",
    time: "22:00 - 03:00",
    description: "Heiße Rhythmen und tropische Cocktails",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&h=400&fit=crop",
    type: "Wöchentlich",
  },
  {
    title: "Urban Beats",
    date: "Jeden Samstag",
    time: "22:00 - 03:00",
    description: "HipHop, R&B und die besten Beats der Stadt",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
    type: "Wöchentlich",
  },
  {
    title: "Oriental Vibes",
    date: "Jeden Donnerstag",
    time: "20:00 - 02:00",
    description: "Authentische orientalische Musik & Premium Shisha",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&h=400&fit=crop",
    type: "Wöchentlich",
  },
];

const eventTypes = [
  {
    icon: PartyPopper,
    title: "Geburtstagsfeier",
    description: "Feiern Sie Ihren besonderen Tag mit exklusivem Service und unvergesslicher Atmosphäre",
    features: ["VIP-Bereich reservieren", "Personalisierte Deko", "Shisha & Cocktail Pakete"],
  },
  {
    icon: Users,
    title: "Firmenevents",
    description: "Professionelle Veranstaltungen für Ihr Team oder Ihre Kunden",
    features: ["After-Work Events", "Team Building", "Kundenevents"],
  },
  {
    icon: Sparkles,
    title: "JGA & Junggesellenabschied",
    description: "Der perfekte Start in einen unvergesslichen Abend",
    features: ["Exklusive Pakete", "Besondere Überraschungen", "Gruppen-Reservierung"],
  },
  {
    icon: Music,
    title: "Private Events",
    description: "Exklusive Nutzung für Ihre private Veranstaltung",
    features: ["Location für Sie allein", "Eigene DJ-Wünsche", "Individuelles Catering"],
  },
];

export default function EventsPage() {
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
              Events & Partys
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unvergessliche <span className="text-gold-gradient">Nächte</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Von DJ Nights über Themenpartys bis hin zu exklusiven Private Events –
              bei La Fumee wird jeder Abend zum Erlebnis
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Regelmäßige <span className="text-gold-gradient">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unsere wöchentlichen Highlights – jeden Tag ein anderes Erlebnis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="group glass rounded-2xl overflow-hidden card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    {event.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Private <span className="text-gold-gradient">Feiern</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feiern Sie Ihren besonderen Anlass bei La Fumee – wir kümmern uns um alles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((type, index) => (
              <div
                key={type.title}
                className="group glass rounded-2xl p-6 md:p-8 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-gold">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Planen Sie Ihr <span className="text-gold-gradient">Event</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Kontaktieren Sie uns für eine individuelle Beratung und ein maßgeschneidertes Angebot
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt">
                <Button className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                  Event anfragen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:01762329860">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                  0176 2329 6860
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
