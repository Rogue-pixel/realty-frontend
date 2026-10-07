export default function NumberedServices({ id }) {
  return (
    <section id={id} className="scroll-mt-24 bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <h2 className="mb-8 font-serif text-3xl text-neutral-900 md:text-5xl lg:mb-12">
          Services
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* ── Card 01 (Active Dark State) ── */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white lg:p-8">
            <span className="absolute right-6 top-6 font-serif text-5xl text-neutral-800 transition-colors group-hover:text-neutral-700 lg:text-6xl">
              01
            </span>
            <div className="mt-16 lg:mt-20">
              <h3 className="mb-3 font-serif text-xl md:text-2xl lg:mb-4">
                Land & Site Development
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-300">
                Comprehensive clearing, zoning, and layout infrastructure.
              </p>
            </div>
          </div>

          {/* ── Card 02 (Light State) ── */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 p-6 text-neutral-900 lg:p-8">
            <span className="absolute right-6 top-6 font-serif text-5xl text-neutral-200 transition-colors group-hover:text-neutral-300 lg:text-6xl">
              02
            </span>
            <div className="mt-16 lg:mt-20">
              <h3 className="mb-3 font-serif text-xl md:text-2xl lg:mb-4">
                Plot Transactions & Joint Ventures
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-600">
                Agricultural to DC conversion and investor partnerships.
              </p>
            </div>
          </div>

          {/* ── Card 03 (Light State) ── */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 p-6 text-neutral-900 lg:p-8">
            <span className="absolute right-6 top-6 font-serif text-5xl text-neutral-200 transition-colors group-hover:text-neutral-300 lg:text-6xl">
              03
            </span>
            <div className="mt-16 lg:mt-20">
              <h3 className="mb-3 font-serif text-xl md:text-2xl lg:mb-4">
                Residential & Commercial Sales
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-600">
                Premium villas, apartments, and commercial asset consulting.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
