"use client";

import { howItWorks } from "@/lib/data";
import { CalendarCheck, Sparkles, PartyPopper } from "lucide-react";

const stepIcons = [CalendarCheck, Sparkles, PartyPopper];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            So einfach geht's
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            In 3 Schritten zum <span className="text-gold-gradient">Genuss</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ihr Besuch bei La Fumee ist unkompliziert und entspannt
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Connector line (desktop) */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="glass rounded-3xl p-8 text-center card-hover h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
