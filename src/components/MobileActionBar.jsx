import { Phone, MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 z-[90] flex w-full border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      
      {/* ── Call Now Trigger ── */}
      <a
        href="tel:+919876543210"
        className="flex h-14 flex-1 items-center justify-center gap-2 border-r border-neutral-200 bg-white font-sans text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 active:bg-neutral-100"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      
      {/* ── WhatsApp Trigger ── */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="flex h-14 flex-1 items-center justify-center gap-2 bg-neutral-900 font-sans text-sm font-medium text-white transition-colors hover:bg-neutral-800 active:bg-neutral-700"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
      
    </div>
  );
}
