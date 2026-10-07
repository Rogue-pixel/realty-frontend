export default function PropertyCard({ data }) {
  const {
    image,
    price,
    title,
    address,
    type = "residential", // "residential" | "land"
    category,
    approval,
    specs,
  } = data;
  return (
    <div className="group flex flex-col rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      
      {/* ── Image Container with Badges ── */}
      <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
        
        {/* Badges */}
        <div className="pointer-events-none absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          {category && (
            <span className="rounded-full bg-neutral-900 px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wide text-white shadow-sm">
              {category}
            </span>
          )}
          {approval && (
            <span className="rounded-full border border-neutral-900 bg-white/90 px-2.5 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wide text-neutral-900 shadow-sm backdrop-blur-sm">
              {approval}
            </span>
          )}
        </div>

        {/* Hover Zoom Image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col px-1">
        
        {/* Title & Location */}
        <div className="mb-3">
          <h3 className="line-clamp-1 font-serif text-xl font-medium tracking-tight text-neutral-900">
            {title}
          </h3>
          <p className="mt-1 truncate font-sans text-sm text-neutral-500">
            {address}
          </p>
        </div>

        {/* Context-Aware Metrics */}
        <div className="mb-5 flex flex-wrap items-center gap-2 font-sans text-xs text-neutral-600">
          {type === "land" ? (
            <>
              <span className="border-r border-neutral-300 pr-2">{specs.dimensions}</span>
              <span className="border-r border-neutral-300 pr-2">{specs.facing}</span>
              <span className="font-medium text-neutral-900">{specs.pricePerSqft}</span>
            </>
          ) : (
            <>
              <span className="border-r border-neutral-300 pr-2">{specs.beds} BHK</span>
              <span className="border-r border-neutral-300 pr-2">{specs.baths} Bath</span>
              <span className="font-medium text-neutral-900">{specs.sqft} sq.ft</span>
            </>
          )}
        </div>

        {/* Price & Action Bottom Row */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          <p className="font-serif text-2xl font-semibold text-neutral-900">
            {price}
          </p>
          <button className="rounded-full bg-neutral-900 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-neutral-800">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}
