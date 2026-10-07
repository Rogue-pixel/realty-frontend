import { Home as HomeIcon } from "lucide-react";
import Button from "../components/Button";
import PropertyGrid from "../components/PropertyGrid";

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <div className="mx-auto max-w-6xl px-8 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-neutral-400">
            Luxury Real Estate
          </p>
          <h2 className="font-serif text-5xl leading-tight font-light text-neutral-900 md:text-6xl">
            Find Your
            <br />
            <span className="font-medium italic">Perfect Home</span>
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-neutral-500">
            Experience an unparalleled standard of service with our curated
            collection of the world&apos;s finest properties.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button size="lg">
              <HomeIcon className="mr-2 h-4 w-4" />
              Browse Listings
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>

      {/* ── Featured Properties Grid ── */}
      <PropertyGrid />

      {/* ── Design System Preview ── */}
      <section className="mx-auto mt-16 max-w-6xl border-t border-neutral-200 px-8 py-16">
        <h3 className="font-serif text-2xl font-medium text-neutral-900">
          Design System Preview
        </h3>
        <p className="mt-2 font-sans text-sm text-neutral-500">
          Typography, buttons, and color palette at a glance.
        </p>

        {/* Typography */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 font-sans text-xs uppercase tracking-wide text-neutral-400">
              Font Serif — Playfair Display
            </p>
            <p className="font-serif text-4xl text-neutral-900">
              $4,250,000
            </p>
            <p className="mt-1 font-serif text-lg italic text-neutral-600">
              Elegant headings &amp; prices
            </p>
          </div>
          <div>
            <p className="mb-3 font-sans text-xs uppercase tracking-wide text-neutral-400">
              Font Sans — Inter
            </p>
            <p className="font-sans text-lg font-medium text-neutral-900">
              3 Bed · 2 Bath · 2,400 sqft
            </p>
            <p className="mt-1 font-sans text-sm text-neutral-500">
              123 Pacific Heights Blvd, San Francisco, CA 94115
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12">
          <p className="mb-4 font-sans text-xs uppercase tracking-wide text-neutral-400">
            Button Variants
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Solid SM</Button>
            <Button size="md">Solid MD</Button>
            <Button size="lg">Solid LG</Button>
            <Button variant="outline" size="sm">
              Outline SM
            </Button>
            <Button variant="outline" size="md">
              Outline MD
            </Button>
            <Button variant="outline" size="lg">
              Outline LG
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        {/* Palette */}
        <div className="mt-12">
          <p className="mb-4 font-sans text-xs uppercase tracking-wide text-neutral-400">
            Monochromatic Palette
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "bg-black",
              "bg-neutral-900",
              "bg-neutral-700",
              "bg-neutral-500",
              "bg-neutral-300",
              "bg-neutral-200",
              "bg-neutral-100",
              "bg-neutral-50",
              "bg-white border border-neutral-200",
            ].map((cls) => (
              <div
                key={cls}
                className={`h-12 w-12 rounded-sm ${cls}`}
                title={cls}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
