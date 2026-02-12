import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { BookingForm } from "@/components/sections/BookingForm";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Section (Stats + Partners) */}
      <TrustSection />

      {/* 3. Booking Form */}
      <BookingForm />

      {/* 4. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 5. Why Us (6 Features) */}
      <WhyUsSection />

      {/* 6. Testimonials (3 Reviews) */}
      <TestimonialsSection />

      {/* 7. Gallery (6 Images) */}
      <GallerySection />

      {/* 8. Contact Info + CTA */}
      <ContactSection />
    </>
  );
}
