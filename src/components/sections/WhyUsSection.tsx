"use client";

import { features } from "@/lib/data";
import { Award, MapPin, Palette, Users, Calendar, Crown } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  quality: Award,
  location: MapPin,
  design: Palette,
  team: Users,
  events: Calendar,
  vip: Crown,
};

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Warum La Fumee?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Das <span className="text-gold-gradient">Besondere</span> bei uns
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie, was La Fumee zur ersten Adresse für Shisha und Cocktails in Nürnberg macht
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Award;
            return (
              <div
                key={feature.title}
                className="group glass rounded-2xl p-6 md:p-8 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
