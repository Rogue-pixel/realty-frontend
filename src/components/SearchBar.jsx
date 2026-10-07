import { Search } from "lucide-react";

const QUICK_TAGS = [
  "Hebbal",
  "Bhoopasandra",
  "Yelahanka",
  "Sahakar Nagar",
  "Devanahalli (Airport Road)",
  "Thanisandra",
];

export default function SearchBar() {
  return (
    <div className="w-full">
      {/* ── Main Search Input ── */}
      <div className="relative flex w-full items-center">
        <Search className="absolute left-4 h-5 w-5 text-neutral-400" />
        <input
          type="text"
          placeholder="Search by locality, project, or landmark in North Bangalore..."
          className="w-full rounded-sm border border-neutral-200 py-4 pl-12 pr-4 font-sans text-base transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
        />
      </div>

      {/* ── Locality Quick Tags ── */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-sans text-xs uppercase tracking-wide text-neutral-400">
          Quick Search:
        </span>
        {QUICK_TAGS.map((tag) => (
          <button
            key={tag}
            className="rounded-sm border border-neutral-200 px-3 py-1.5 font-sans text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
