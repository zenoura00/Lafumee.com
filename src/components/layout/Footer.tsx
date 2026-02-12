"use client";

import Link from "next/link";
import { AnimatedLogo } from "@/components/icons/AnimatedIcons";
import { businessInfo, navLinks, services } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <AnimatedLogo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Erleben Sie exklusive Shisha-Kultur und erstklassige Cocktails in einzigartiger Atmosphäre mitten in Nürnberg.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/lafumee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/lafumee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/service/${service.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.zip} {businessInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <div key={day}>
                      <span className="font-medium">{day}:</span> {time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {businessInfo.name}. Alle Rechte vorbehalten.
            </p>
            <p>
              Designed with{" "}
              <span className="text-primary">♥</span> in {businessInfo.address.city}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
