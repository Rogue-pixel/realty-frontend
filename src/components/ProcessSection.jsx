export default function ProcessSection({ id }) {
  const steps = [
    {
      id: "1",
      title: "Requirement & Site Shortlisting",
      desc: "Identification of plots or residential properties matching your budget and location parameters in North Bangalore.",
    },
    {
      id: "2",
      title: "Legal Verification & Title Clearance",
      desc: "Rigorous checking of DC conversion papers, Khata status (BBMP/BDA/BMRDA), and ownership history.",
    },
    {
      id: "3",
      title: "On-Site Inspection & Boundary Marking",
      desc: "In-person site survey in Bhoopasandra, Hebbal, or Devanahalli with full layout dimensions verified.",
    },
    {
      id: "4",
      title: "Transparent Closing & Registration",
      desc: "Complete assistance with sub-registrar documentation and possession handoff.",
    },
  ];

  return (
    <section id={id} className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-neutral-200/60 px-4 py-12 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        
        {/* ── Left Column (col-span-5) ── */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="mb-4 font-serif text-3xl leading-[1.2] text-neutral-900 md:text-4xl lg:mb-6 lg:text-5xl">
              Guiding You From Search to Registration.
            </h2>
            <p className="font-sans text-base leading-relaxed text-neutral-600 lg:text-lg">
              A structured, transparent roadmap whether you are acquiring your
              first residential plot or developing layout acreage.
            </p>
          </div>
        </div>

        {/* ── Right Column (col-span-7) ── */}
        <div className="mt-4 lg:col-span-7 lg:mt-0 lg:pl-10">
          <div className="space-y-12 border-l border-neutral-200/80 py-2 lg:space-y-14 lg:py-4">
            
            {steps.map((step) => (
              <div key={step.id} className="relative pl-8 md:pl-12">
                {/* Number Circle overlapping the border */}
                <div className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-white font-sans text-sm font-semibold text-neutral-900 shadow-sm">
                  {step.id}
                </div>
                
                <h3 className="mb-2 pt-1 font-serif text-xl font-medium tracking-tight text-neutral-900 md:mb-3 md:text-2xl">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-neutral-600 md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
