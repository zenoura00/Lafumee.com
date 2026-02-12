"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { businessInfo } from "@/lib/data";
import { Calendar, Users, Clock, Send } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create WhatsApp message
    const whatsappMessage = `Reservierungsanfrage:
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Datum: ${formData.date}
Uhrzeit: ${formData.time}
Personen: ${formData.guests}
Nachricht: ${formData.message || "Keine"}`;

    const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="booking" className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Reservierung
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tisch <span className="text-gold-gradient">Reservieren</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sichern Sie sich Ihren Platz in unserer exklusiven Lounge. Füllen Sie das Formular aus und wir bestätigen Ihre Reservierung schnellstmöglich.
            </p>
          </div>

          {/* Form */}
          <div className="glass rounded-3xl p-6 md:p-10 glow-gold">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Vielen Dank!</h3>
                <p className="text-muted-foreground">
                  Ihre Anfrage wurde weitergeleitet. Wir melden uns in Kürze!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0176 1234567"
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Datum *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Uhrzeit *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                    >
                      <option value="">Uhrzeit wählen</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                      <option value="00:00">00:00</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Anzahl Personen *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Person" : "Personen"}
                        </option>
                      ))}
                      <option value="10+">Mehr als 10 Personen</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Besondere Wünsche oder Anmerkungen..."
                    className="w-full px-3 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full shimmer pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg rounded-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Reservierung Anfragen
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
