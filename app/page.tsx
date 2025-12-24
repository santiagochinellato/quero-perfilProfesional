import HeroSection from "@/components/ui/hero-section";
import ProblemSection from "@/components/ui/problem-section";
import MyStorySection from "@/components/ui/my-story-section";
import DifferentialsSection from "@/components/ui/differentials-section";
import ServicesSection from "@/components/ui/services-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import GallerySection from "@/components/ui/gallery-section";
import AuthoritySection from "@/components/ui/authority-section";
import ContactSection from "@/components/ui/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <MyStorySection />
      <DifferentialsSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <AuthoritySection />
      <ContactSection />
    </div>
  );
}
