import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyGrid from "./PropertyGrid";

const TABS = ["Plots & Land", "Luxury Villas", "Apartments", "Commercial"];

export default function PropertyShowcase({ id }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id={id} className="scroll-mt-24 bg-neutral-50 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* ── Header & Category Switcher ── */}
        <div className="mb-6 flex flex-col gap-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          
          {/* Left Aligned Tabs (Horizontal Swipe on Mobile) */}
          <div className="flex w-full gap-2 overflow-x-auto whitespace-nowrap pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:w-auto sm:pb-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`min-h-[44px] rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors lg:min-h-0 ${
                  activeTab === tab
                    ? "bg-neutral-900 text-white"
                    : "border border-neutral-200/80 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Slider Arrows (Top Right) */}
          <div className="hidden gap-3 sm:flex">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900 lg:h-10 lg:w-10"
              aria-label="Previous property"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900 lg:h-10 lg:w-10"
              aria-label="Next property"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Grid ── */}
        <PropertyGrid />
      </div>
    </section>
  );
}
