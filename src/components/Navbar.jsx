import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[999] w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      {/* ── Persistent Top Bar Architecture ── */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* ── Logo Protection ── */}
        <a
          href="#"
          onClick={closeMenu}
          className="relative z-50 flex shrink-0 items-center gap-2"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
            HEBBAL PROPERTIES
          </span>
        </a>

        {/* ── Desktop Navigation ── */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#properties"
            className="font-sans text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Properties
          </a>
          <a
            href="#expertise"
            className="font-sans text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="font-sans text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="font-sans text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Contact
          </a>
        </div>

        {/* ── Hamburger / Close Toggle Button ── */}
        <button
          onClick={toggleMenu}
          className="relative z-50 p-2 text-neutral-900 focus:outline-none md:hidden"
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Clean Mobile Drawer (Under the Bar) ── */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-[998] flex flex-col justify-between overflow-y-auto bg-white px-6 py-8 transition-all duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 pt-4">
          <a
            href="#properties"
            onClick={closeMenu}
            className="border-b border-neutral-100 pb-3 font-serif text-2xl text-neutral-900"
          >
            Properties
          </a>
          <a
            href="#expertise"
            onClick={closeMenu}
            className="border-b border-neutral-100 pb-3 font-serif text-2xl text-neutral-900"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="border-b border-neutral-100 pb-3 font-serif text-2xl text-neutral-900"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="border-b border-neutral-100 pb-3 font-serif text-2xl text-neutral-900"
          >
            Contact
          </a>
        </div>

        {/* Bottom Action Buttons */}
        <div className="mb-4 mt-8 flex flex-col gap-4 pb-4">
          <a
            href="tel:+919876543210"
            onClick={closeMenu}
            className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-neutral-900 font-sans text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
          >
            <Phone className="h-4 w-4" />
            Call Hebbal Properties
          </a>
          <a
            href="https://wa.me/919876543210"
            onClick={closeMenu}
            className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full border border-neutral-900 bg-white font-sans text-xs font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
