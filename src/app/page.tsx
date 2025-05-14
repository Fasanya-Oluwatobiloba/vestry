import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import AboutSection from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import ServicesPage from "@/components/shared/ServicePage";
import ToolkitSection from "@/components/shared/Toolkit";
import TestimonialSection from "@/components/shared/Testimonial";
import ResourcesSection from "@/components/shared/Resource";
import Impact from "@/components/shared/Impact";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <ToolkitSection />
      <TestimonialSection />
      <ResourcesSection />
      <Impact />
      <Footer />
    </main>
  );
}
