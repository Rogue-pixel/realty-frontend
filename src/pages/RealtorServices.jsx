import { Map, Hammer, Briefcase, Building2, MessageCircle, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import LandDevelopmentCTA from "../components/LandDevelopmentCTA";

export default function RealtorServices() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero Bio Section ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 bg-neutral-100 md:h-auto md:min-h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="Hebbal Properties Modern Office"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-white p-8 md:p-16 lg:p-24">
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-neutral-400">
            Hebbal Properties
          </p>
          <h1 className="mb-6 font-serif text-4xl leading-tight text-neutral-900 md:text-5xl">
            14 Years of Real Estate Excellence in Bangalore.
          </h1>
          <div className="space-y-6 font-sans text-base leading-relaxed text-neutral-600">
            <p>
              Established in 2012, Hebbal Properties has cultivated a commanding
              4.5-star reputation across the Bangalore real estate market. We
              specialize in high-value plot developments, comprehensive site
              planning, and premium residential consulting.
            </p>
            <p>
              Our mission is simple: to build enduring, long-term relationships
              grounded in unwavering trust, absolute integrity, and consistently
              outstanding results for every client we represent.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. The Services Grid ── */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <h2 className="mb-16 font-serif text-3xl font-medium tracking-tight text-neutral-900">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Card 1 */}
          <div className="border-t-2 border-black pt-8">
            <Map className="mb-6 h-8 w-8 text-neutral-900" strokeWidth={1.5} />
            <h3 className="mb-3 font-sans text-lg font-medium text-neutral-900">
              Land & Plot Development
            </h3>
            <p className="font-sans text-sm leading-relaxed text-neutral-600">
              Transforming raw land into viable residential and commercial spaces
              with complete zoning and infrastructure planning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-t-2 border-black pt-8">
            <Hammer className="mb-6 h-8 w-8 text-neutral-900" strokeWidth={1.5} />
            <h3 className="mb-3 font-sans text-lg font-medium text-neutral-900">
              Site Development
            </h3>
            <p className="font-sans text-sm leading-relaxed text-neutral-600">
              Comprehensive land clearing, grading, excavation, and utility
              installation to prepare sites for construction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-t-2 border-black pt-8">
            <Briefcase className="mb-6 h-8 w-8 text-neutral-900" strokeWidth={1.5} />
            <h3 className="mb-3 font-sans text-lg font-medium text-neutral-900">
              Property Consulting & Agency
            </h3>
            <p className="font-sans text-sm leading-relaxed text-neutral-600">
              Expert guidance in buying, selling, leasing, and property
              registration for residential and commercial assets.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-t-2 border-black pt-8">
            <Building2 className="mb-6 h-8 w-8 text-neutral-900" strokeWidth={1.5} />
            <h3 className="mb-3 font-sans text-lg font-medium text-neutral-900">
              Commercial & Industrial Plots
            </h3>
            <p className="font-sans text-sm leading-relaxed text-neutral-600">
              Strategic land selection and infrastructure development for
              factories, warehouses, and rapidly growing business hubs.
            </p>
          </div>
        </div>
      </section>

      {/* ── High-Converting Land Development CTA ── */}
      <LandDevelopmentCTA />

      {/* ── 3. Trust & Ratings Banner ── */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-800 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-6 md:py-0">
            <p className="mb-2 font-serif text-5xl">14+</p>
            <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">
              Years Experience
            </p>
          </div>
          <div className="py-6 md:py-0">
            <p className="mb-2 font-serif text-5xl">4.5<span className="text-3xl text-neutral-500">/5</span></p>
            <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">
              Customer Rating
            </p>
          </div>
          <div className="py-6 md:py-0">
            <p className="mb-2 font-serif text-3xl leading-tight">Bhoopasandra,<br/>Bangalore</p>
            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-neutral-400">
              Headquarters
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Sticky Contact Call-to-Action (Bottom of page) ── */}
      <section className="sticky bottom-0 z-40 border-t border-neutral-200 bg-white py-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:static md:py-24 md:shadow-none">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-8 text-center md:flex-row md:text-left">
          <div className="hidden md:block">
            <h2 className="mb-2 font-serif text-3xl text-neutral-900">
              Ready to collaborate?
            </h2>
            <p className="font-sans text-sm text-neutral-500">
              Get in touch with Hebbal Properties today.
            </p>
          </div>
          
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row md:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
