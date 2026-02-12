"use client";

import { WhatsAppIcon, PhoneIcon } from "@/components/icons/AnimatedIcons";
import { businessInfo } from "@/lib/data";

export function FloatingButtons() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=Hallo%2C%20ich%20möchte%20gerne%20einen%20Tisch%20reservieren.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={`tel:${businessInfo.phone}`}
        className="group w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 card-hover"
        aria-label="Anrufen"
      >
        <PhoneIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all duration-300 card-hover pulse-glow"
        style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
