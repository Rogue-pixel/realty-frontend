import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sunil Kumar",
    quote:
      "Looking for reasonably priced and well-sanitised properties in Hebbal? Look no further! Hebbal Properties offers a range of affordable and hygienic options.",
  },
  {
    name: "Basavaraja",
    quote:
      "I had a positive experience with Hebbal Properties. The service was satisfactory, the commission was low, and the property was clean and transparent.",
  },
  {
    name: "Lalit Singh",
    quote:
      "Very genuine property selling and the manager is very kind-hearted, soft-spoken, and highly professional.",
  },
];

export default function TestimonialAndStats({ id }) {
  return (
    <section id={id} className="scroll-mt-24 bg-white py-12 lg:py-24">
      
      {/* ── Testimonial Showcase Grid ── */}
      <div className="mx-auto mb-16 max-w-7xl px-4 text-center lg:mb-28 lg:px-8">
        <h2 className="mb-8 font-serif text-3xl text-neutral-900 lg:mb-12 lg:text-4xl">
          Satisfied Clients Speak
        </h2>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm lg:p-8"
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-neutral-900">
                  <Star className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                  <Star className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                  <Star className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                  <Star className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                  <Star className="h-4 w-4 fill-current lg:h-5 lg:w-5" />
                </div>
                <p className="mb-8 font-sans text-sm leading-relaxed text-neutral-700 md:text-base">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-100">
                  <span className="font-sans text-xs font-bold text-neutral-500">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-900 md:text-xs">
                    {review.name}
                  </p>
                  <p className="mt-0.5 font-sans text-[0.65rem] text-neutral-500 md:text-xs">
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Justdial Link Action */}
        <div className="mt-8 flex justify-center lg:mt-12">
          <a
            href="#"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-neutral-900 px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white lg:min-h-0"
          >
            View All Justdial Reviews
          </a>
        </div>
      </div>

      {/* ── Stats & Showcase Grid ── */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column (col-span-4): Stacked Vertical Stats */}
          <div className="flex flex-col justify-center gap-8 lg:col-span-4 lg:gap-10">
            
            <div className="border-l-2 border-neutral-900 pl-5 lg:pl-6">
              <h3 className="mb-1 font-serif text-4xl text-neutral-900 md:text-5xl lg:text-6xl">
                14+
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-600">
                Years of Real Estate Excellence<br />
                <span className="text-[0.65rem] text-neutral-400 md:text-xs">(Established 2012)</span>
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-5 transition-colors hover:border-neutral-900 lg:pl-6">
              <h3 className="mb-1 font-serif text-4xl text-neutral-900 md:text-5xl lg:text-6xl">
                4.5<span className="text-2xl text-neutral-300 md:text-3xl">★</span>
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-600">
                Customer Rating on Justdial<br />
                <span className="text-[0.65rem] text-neutral-400 md:text-xs">Trusted by local families</span>
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-5 transition-colors hover:border-neutral-900 lg:pl-6">
              <h3 className="mb-1 font-serif text-4xl text-neutral-900 md:text-5xl lg:text-6xl">
                100+
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-600">
                Acres Evaluated & Developed<br />
                <span className="text-[0.65rem] text-neutral-400 md:text-xs">Across North Bangalore</span>
              </p>
            </div>

          </div>

          {/* Right Column (col-span-8): Featured Horizontal Card */}
          <div className="lg:col-span-8">
            <div className="flex h-full flex-col items-center gap-6 rounded-3xl bg-neutral-100 p-6 md:flex-row lg:gap-8 lg:p-8">
              
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200 md:w-1/2 lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800"
                  alt="North Bangalore Layout Transformation"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Showcase Text Details */}
              <div className="flex w-full flex-col justify-center md:w-1/2 lg:pr-4">
                <span className="mb-3 inline-block w-max rounded-full border border-neutral-200/80 bg-white px-3 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-600 lg:mb-4">
                  Featured Territory
                </span>
                
                <h4 className="mb-3 font-serif text-2xl leading-tight text-neutral-900 lg:mb-4 lg:text-3xl">
                  North Bangalore Transformation
                </h4>
                
                <p className="mb-5 font-sans text-sm leading-relaxed text-neutral-600 lg:mb-6">
                  Rooted heavily in the heart of Bhoopasandra, right near Vidya
                  Sagar School, our deep local expertise spans from the Hebbal
                  corridors to the booming Outer Ring Road connectivity. We focus
                  on identifying and securing assets in the fastest appreciating
                  zones.
                </p>
                
                <button className="flex min-h-[44px] w-max items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:text-neutral-500 lg:min-h-0">
                  Explore The Vision →
                </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}
