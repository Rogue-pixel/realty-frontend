import { Check, ChevronDown } from "lucide-react";

export default function LandDevelopmentCTA() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* ── Left Column: Value Proposition ── */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 font-serif text-3xl leading-tight lg:text-4xl">
              Have Land in North Bangalore? Partner With 14+ Years of Development Expertise.
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full bg-white/10 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="font-sans text-base leading-relaxed text-neutral-300">
                  End-to-end site clearing, leveling, and infrastructure development.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full bg-white/10 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="font-sans text-base leading-relaxed text-neutral-300">
                  Legal assistance: DC conversion, layout plan approvals, and title clearance.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full bg-white/10 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="font-sans text-base leading-relaxed text-neutral-300">
                  Joint Development (JD) and outright purchase options.
                </p>
              </li>
            </ul>
          </div>

          {/* ── Right Column: Lead Form ── */}
          <div className="rounded-sm border border-neutral-800 bg-neutral-900 p-8 lg:p-12">
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Landowner Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Land Location / Survey Area
                </label>
                <input
                  type="text"
                  placeholder="e.g., Devanahalli Main Road"
                  className="w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Approximate Extent (Guntas / Acres)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2 Acres, 10 Guntas"
                  className="w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Proposal Type
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-3 font-sans text-sm text-white transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white">
                    <option value="outright" className="bg-neutral-900">Outright Sale</option>
                    <option value="jd" className="bg-neutral-900">Joint Venture (JD)</option>
                    <option value="consulting" className="bg-neutral-900">Development Consulting</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-sm bg-white py-4 font-sans text-xs font-bold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                SUBMIT LAND DETAILS FOR REVIEW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
