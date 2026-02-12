"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShishaIcon, CocktailIcon, DJIcon } from "@/components/icons/AnimatedIcons";
import { ChevronDown } from "lucide-react";

const heroServices = [
  { icon: ShishaIcon, title: "Shisha Lounge", href: "/service/shisha-lounge" },
  { icon: CocktailIcon, title: "Cocktail Bar", href: "/service/cocktail-bar" },
  { icon: DJIcon, title: "Events & DJ", href: "/service/events-dj-nights" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Animated smoke/particles background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full smoke" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 left-20 w-3 h-3 bg-primary/50 rounded-full smoke" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 right-20 w-2 h-2 bg-primary rounded-full smoke" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-primary/30 rounded-full smoke" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full smoke" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">Premium Shisha & Cocktail Bar</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Willkommen bei</span>
          <br />
          <span className="text-gold-gradient text-shadow-gold">La Fumee</span>
        </h1>

        {/* Subtitle */}
        <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Erleben Sie erstklassige Shisha-Kultur und exquisite Cocktails in einzigartiger Atmosphäre mitten in Nürnberg
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/kontakt">
            <Button
              size="lg"
              className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full"
            >
              Tisch Reservieren
            </Button>
          </Link>
          <Link href="/leistungen">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full"
            >
              Unsere Angebote
            </Button>
          </Link>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {heroServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group glass rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-12 h-12 text-primary float" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#trust" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Mehr entdecken</span>
          <ChevronDown className="w-6 h-6 scroll-indicator" />
        </a>
      </div>
    </section>
  );
}
