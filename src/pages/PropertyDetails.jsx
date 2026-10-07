import { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import Button from "../components/Button";
import BookSiteVisitModal from "../components/BookSiteVisitModal";

export default function PropertyDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Gallery ── */}
      <div className="flex h-[50vh] w-full gap-1 overflow-hidden bg-neutral-100 md:h-[70vh]">
        <div className="h-full w-full md:w-2/3">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600"
            alt="Main Property View"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden h-full w-1/3 flex-col gap-1 md:flex">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
            alt="Property Interior"
            className="h-1/2 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
            alt="Property Exterior"
            className="h-1/2 w-full object-cover"
          />
        </div>
      </div>

      {/* ── Content Layout ── */}
      <div className="mx-auto mt-12 mb-24 grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-3">
        
        {/* ── Left Column (Main Content) ── */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-serif text-5xl font-medium tracking-tight text-neutral-900">
              $4,250,000
            </h1>
            <h2 className="mt-3 font-sans text-xl text-neutral-500">
              123 Pacific Heights Blvd, San Francisco, CA 94115
            </h2>
          </div>

          {/* Features Grid */}
          <div className="mb-10 grid grid-cols-2 gap-6 border-y border-neutral-200 py-6 md:grid-cols-4">
            <div>
              <p className="mb-1 font-sans text-xs uppercase tracking-widest text-neutral-400">
                Property Type
              </p>
              <p className="font-sans text-sm font-medium text-neutral-900">
                Single Family
              </p>
            </div>
            <div>
              <p className="mb-1 font-sans text-xs uppercase tracking-widest text-neutral-400">
                Area
              </p>
              <p className="font-sans text-sm font-medium text-neutral-900">
                4,200 sqft
              </p>
            </div>
            <div>
              <p className="mb-1 font-sans text-xs uppercase tracking-widest text-neutral-400">
                Status
              </p>
              <p className="font-sans text-sm font-medium text-neutral-900">
                Active
              </p>
            </div>
            <div>
              <p className="mb-1 font-sans text-xs uppercase tracking-widest text-neutral-400">
                Beds / Baths
              </p>
              <p className="font-sans text-sm font-medium text-neutral-900">
                4 / 4.5
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-neutral max-w-none space-y-6 font-sans text-base leading-relaxed text-neutral-600">
            <p>
              An unparalleled architectural masterpiece situated in the highly
              coveted Pacific Heights neighborhood. This stunning residence has
              been meticulously reimagined for modern luxury living while
              preserving its timeless elegance. Massive floor-to-ceiling windows
              frame breathtaking panoramic views of the San Francisco Bay,
              bathing the expansive open-concept living spaces in natural light.
            </p>
            <p>
              The chef&apos;s kitchen features custom European cabinetry,
              monolithic marble islands, and top-of-the-line Gaggenau
              appliances. A sweeping sculptural staircase leads to the private
              quarters, including a palatial primary suite with dual spa-like
              bathrooms and boutique-style dressing rooms. Every finish has been
              curated with an uncompromising eye for detail, utilizing
              rare natural stones and bespoke hardware.
            </p>
            <p>
              Seamless indoor-outdoor living is realized through zero-edge glass
              doors that open to a meticulously landscaped terrace. This private
              oasis is complete with an infinity-edge pool, a fully equipped
              outdoor kitchen, and multiple lounging areas perfect for
              entertaining on a grand scale. This is a rare opportunity to own a
              legacy property of this caliber in one of the world&apos;s most
              dynamic cities.
            </p>
          </div>
        </div>

        {/* ── Right Column (Lead Capture Sidebar) ── */}
        <div className="h-fit lg:sticky lg:top-24 lg:col-span-1">
          <div className="rounded-sm border border-neutral-200 bg-white p-6 md:p-8">
            <h3 className="mb-2 font-serif text-2xl text-neutral-900">
              Inquire
            </h3>
            <p className="mb-6 font-sans text-sm text-neutral-500">
              Contact our luxury specialists for a private viewing or to request
              more details.
            </p>

            {/* Minimalist Form */}
            <form className="mb-8 flex flex-col gap-4">
              <div>
                <label className="sr-only">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-sm border border-neutral-200 px-4 py-3 font-sans text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div>
                <label className="sr-only">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-sm border border-neutral-200 px-4 py-3 font-sans text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div>
                <label className="sr-only">Message</label>
                <textarea
                  rows="4"
                  placeholder="I am interested in this property..."
                  className="w-full resize-none rounded-sm border border-neutral-200 px-4 py-3 font-sans text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                ></textarea>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button type="button" className="w-full" onClick={() => setIsModalOpen(true)}>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Site Visit
              </Button>
              <Button type="button" variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Agent
              </Button>
            </div>
          </div>
        </div>
        
      </div>

      <BookSiteVisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        propertyTitle="Pacific Heights Masterpiece"
      />
    </div>
  );
}
