import Navbar from "./components/Navbar";
import MobileActionBar from "./components/MobileActionBar";
import HeroAndStory from "./components/HeroAndStory";
import NumberedServices from "./components/NumberedServices";
import PropertyShowcase from "./components/PropertyShowcase";
import ProcessSection from "./components/ProcessSection";
import TestimonialAndStats from "./components/TestimonialAndStats";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <Navbar />

      {/* ── Main Layout Shell ── */}
      <main className="isolate pt-16 pb-24 md:pb-0">
        <HeroAndStory id="expertise" />
        <NumberedServices id="services" />
        <PropertyShowcase id="properties" />
        <ProcessSection id="process" />
        <TestimonialAndStats id="testimonials" />
        <ContactFooter id="contact" />
      </main>

      <MobileActionBar />
    </div>
  );
}
