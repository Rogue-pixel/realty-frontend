import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import PropertyGrid from "../components/PropertyGrid";

export default function Properties() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 md:px-8">
        
        {/* ── Page Header ── */}
        <div className="mb-10">
          <h1 className="mb-3 font-serif text-4xl text-neutral-900">
            Search Properties
          </h1>
          <p className="font-sans text-sm text-neutral-500">
            Discover premium plots, development sites, and residential properties in North Bangalore.
          </p>
        </div>

        {/* ── Search & Filter Components ── */}
        <SearchBar />
        
        <div className="mt-8">
          <FilterPanel />
        </div>

        {/* ── Results Grid ── */}
        <div className="mt-8 border-t border-neutral-200 pt-8">
          {/* We reuse PropertyGrid here. Since PropertyGrid has its own title and container, 
              it will render correctly inside this flow. */}
          <PropertyGrid />
        </div>
      </div>
    </div>
  );
}
