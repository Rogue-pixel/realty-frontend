import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const TABS = [
  "All Properties",
  "Plots & Land",
  "Residential",
  "Commercial",
  "Development Sites",
];
const PROP_TYPES = [
  "Residential Plot",
  "Agricultural Land",
  "Villa",
  "Apartment",
  "Commercial Site",
];
const LEGAL_STATUS = [
  "BDA",
  "BMRDA",
  "BBMP 'A' Khata",
  "DC Converted",
  "RERA Approved",
];
const UNITS = ["Sq. Ft", "Guntas", "Acres"];
const PRICES = ["10 L", "50 L", "1 Cr", "2 Cr", "5 Cr", "10 Cr+"];

export default function FilterPanel() {
  const [activeTab, setActiveTab] = useState("All Properties");

  return (
    <div className="w-full rounded-sm border border-neutral-200 bg-white p-6">
      {/* ── Primary Category Switcher (Borderless Segmented Tabs) ── */}
      <div className="no-scrollbar mb-6 flex overflow-x-auto border-b border-neutral-200">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap border-b-2 px-5 py-3 font-sans text-sm tracking-wide transition-colors ${
                isActive
                  ? "border-neutral-900 font-medium text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ── Adaptive Filter Inputs Grid ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* 1. Property Type Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wide text-neutral-400">
            Property Type
          </label>
          <div className="relative">
            <select className="w-full appearance-none rounded-sm border border-neutral-200 bg-white px-3 py-2.5 font-sans text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none">
              <option value="">Any Type</option>
              {PROP_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        {/* 2. Unit/Size Filter */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wide text-neutral-400">
            Size / Area
          </label>
          <div className="flex items-center rounded-sm border border-neutral-200 transition-colors focus-within:border-neutral-900">
            <input
              type="number"
              placeholder="Min Size"
              className="w-full bg-transparent px-3 py-2.5 font-sans text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
            <div className="h-5 w-px bg-neutral-200"></div>
            <select className="w-24 cursor-pointer appearance-none bg-transparent px-2 py-2.5 font-sans text-sm text-neutral-900 focus:outline-none">
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3. Approval / Legal Status */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wide text-neutral-400">
            Legal Status
          </label>
          <div className="relative">
            <select className="w-full appearance-none rounded-sm border border-neutral-200 bg-white px-3 py-2.5 font-sans text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none">
              <option value="">Any Approval</option>
              {LEGAL_STATUS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        {/* 4. Price Range (Lakhs & Crores) */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wide text-neutral-400">
            Price Range
          </label>
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <select className="w-full appearance-none rounded-sm border border-neutral-200 bg-white px-3 py-2.5 font-sans text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none">
                <option value="">Min</option>
                {PRICES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-neutral-400" />
            </div>
            <span className="text-neutral-300">-</span>
            <div className="relative w-full">
              <select className="w-full appearance-none rounded-sm border border-neutral-200 bg-white px-3 py-2.5 font-sans text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none">
                <option value="">Max</option>
                {PRICES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <Button size="md">Apply Filters</Button>
      </div>
    </div>
  );
}
