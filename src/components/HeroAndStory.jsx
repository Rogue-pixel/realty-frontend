import { FileCheck, ShieldCheck, Map, Briefcase } from "lucide-react";
import Button from "./Button";

export default function HeroAndStory({ id }) {
  return (
    <section id={id} className="w-full scroll-mt-24 bg-white py-12 lg:py-24">
      {/* ── Contained Hero ── */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Mobile: flex-col (text then image), Desktop: grid */}
        <div className="flex flex-col gap-12 rounded-3xl bg-neutral-100 p-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-14">
          
          {/* Left Side (Col Span 7) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Tagline Badge */}
            <span className="mb-4 inline-block rounded-full border border-neutral-200/60 bg-white px-3 py-1 font-sans text-xs font-medium uppercase tracking-widest text-neutral-600">
              Hebbal Properties • Bhoopasandra
            </span>

            {/* Headline - Scaled Typography */}
            <h1 className="font-serif text-3xl leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Find Prime Land & Living In North Bangalore With Ease.
            </h1>

            {/* Sub-description */}
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 md:text-lg lg:mt-6">
              Established in 2012 in Bhoopasandra, Hebbal Properties has built a
              4.5-star reputation by guiding investors and families through
              complex land developments, site preparations, and residential
              transactions with absolute integrity.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Listings
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-white hover:bg-neutral-900 sm:w-auto">
                Our 14-Year Story
              </Button>
            </div>
          </div>

          {/* Right Side (Col Span 5) */}
          <div className="w-full lg:col-span-5">
            <div className="group aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
                alt="Prime North Bangalore Real Estate"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Badges Strip ── */}
      <div className="mx-auto mt-8 max-w-7xl lg:mt-12 lg:px-8">
        {/* Horizontal Swipe on Mobile, Center/Wrap on Desktop */}
        <div className="flex overflow-x-auto whitespace-nowrap px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center lg:px-0 lg:pb-0">
          <div className="flex gap-4">
            
            <div className="flex items-center gap-3 rounded-full border border-neutral-200/60 bg-neutral-100 px-5 py-2.5 font-sans text-xs font-medium text-neutral-700">
              <div className="rounded-full bg-white p-1.5 shadow-sm">
                <FileCheck className="h-4 w-4 text-neutral-900" />
              </div>
              BDA & DC Converted
            </div>

            <div className="flex items-center gap-3 rounded-full border border-neutral-200/60 bg-neutral-100 px-5 py-2.5 font-sans text-xs font-medium text-neutral-700">
              <div className="rounded-full bg-white p-1.5 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-neutral-900" />
              </div>
              Clear Title Guarantee
            </div>

            <div className="flex items-center gap-3 rounded-full border border-neutral-200/60 bg-neutral-100 px-5 py-2.5 font-sans text-xs font-medium text-neutral-700">
              <div className="rounded-full bg-white p-1.5 shadow-sm">
                <Map className="h-4 w-4 text-neutral-900" />
              </div>
              Land & Plot Development
            </div>

            <div className="flex items-center gap-3 rounded-full border border-neutral-200/60 bg-neutral-100 px-5 py-2.5 font-sans text-xs font-medium text-neutral-700">
              <div className="rounded-full bg-white p-1.5 shadow-sm">
                <Briefcase className="h-4 w-4 text-neutral-900" />
              </div>
              Direct Brokerage & Consultation
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
