"use client";

import { stats } from "@/lib/data";
import { Calendar, PartyPopper, Cigarette, Wine } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  party: PartyPopper,
  tobacco: Cigarette,
  drink: Wine,
};

const partnerBrands = [
  "Al Fakher",
  "Adalya",
  "Havana Club",
  "Grey Goose",
  "Hendrick's",
  "Bombay Sapphire",
];

export function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Calendar;
            return (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 md:p-8 text-center card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Premium Partner & Marken
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partnerBrands.map((brand) => (
              <div
                key={brand}
                className="text-lg md:text-xl font-display font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
