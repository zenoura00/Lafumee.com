import { Metadata } from "next";
import { BookingForm } from "@/components/sections/BookingForm";
import { businessInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, Navigation, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/AnimatedIcons";

export const metadata: Metadata = {
  title: "Kontakt & Reservierung",
  description: `Kontaktieren Sie La Fumee in ${businessInfo.address.city}. Reservieren Sie Ihren Tisch oder planen Sie Ihr Event. Tel: ${businessInfo.phone}`,
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schreiben Sie <span className="text-gold-gradient">uns</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Wir freuen uns auf Ihre Nachricht und beraten Sie gerne zu Reservierungen und Events
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Phone */}
            <a
              href={`tel:${businessInfo.phone}`}
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                Anrufen
              </h3>
              <p className="text-primary font-medium">{businessInfo.phone}</p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[#25D366] transition-colors">
                WhatsApp
              </h3>
              <p className="text-[#25D366] font-medium">Jetzt schreiben</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${businessInfo.email}`}
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                E-Mail
              </h3>
              <p className="text-primary font-medium">{businessInfo.email}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Location & Details */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="glass rounded-3xl overflow-hidden glow-gold aspect-square lg:aspect-auto lg:h-[500px]">
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

              {/* Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6">
                    Besuchen Sie <span className="text-gold-gradient">uns</span>
                  </h2>
                </div>

                {/* Address */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        {businessInfo.address.street}<br />
                        {businessInfo.address.zip} {businessInfo.address.city}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessInfo.address.street}, ${businessInfo.address.zip} ${businessInfo.address.city}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm mt-3 hover:underline"
                      >
                        <Navigation className="w-4 h-4" />
                        Route planen
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                      <div className="space-y-1">
                        {Object.entries(businessInfo.hours).map(([day, time]) => (
                          <div key={day} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{day}</span>
                            <span className="font-medium">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/lafumee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://facebook.com/lafumee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
