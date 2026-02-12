"use client";

import Link from "next/link";
import { businessInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Info */}
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Besuchen Sie uns
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Kommen Sie <span className="text-gold-gradient">vorbei</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Wir freuen uns auf Ihren Besuch! Ob für einen entspannten Abend mit Shisha und Cocktails oder für Ihre nächste Feier – bei La Fumee sind Sie herzlich willkommen.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      {businessInfo.address.street}<br />
                      {businessInfo.address.zip} {businessInfo.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                    <div className="text-muted-foreground text-sm">
                      {Object.entries(businessInfo.hours).map(([day, time]) => (
                        <div key={day} className="flex gap-2">
                          <span className="font-medium w-16">{day}:</span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">Telefon</h4>
                      <a href={`tel:${businessInfo.phone}`} className="text-primary hover:underline text-sm">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">E-Mail</h4>
                      <a href={`mailto:${businessInfo.email}`} className="text-primary hover:underline text-sm">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button className="shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full w-full sm:w-auto">
                    Jetzt Reservieren
                  </Button>
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessInfo.address.street}, ${businessInfo.address.zip} ${businessInfo.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 rounded-full w-full sm:w-auto">
                    <Navigation className="w-4 h-4 mr-2" />
                    Route planen
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Map placeholder / Image */}
            <div className="glass rounded-3xl overflow-hidden glow-gold aspect-square lg:aspect-auto lg:h-[600px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5!2d11.0767!3d49.4521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI3JzA3LjYiTiAxMcKwMDQnMzYuMSJF!5e0!3m2!1sde!2sde!4v1234567890`}
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
  );
}
