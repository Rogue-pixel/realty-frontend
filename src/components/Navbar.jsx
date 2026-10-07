import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Lock body scroll when menu is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. TOP BAR (Always fixed at the very top, highest z-index) */}
      <header className="fixed top-0 inset-x-0 h-16 z-[10000] bg-white border-b border-neutral-200 flex items-center justify-between px-4 sm:px-6">
        <a href="#" onClick={closeMenu} className="flex items-center shrink-0">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            HEBBAL PROPERTIES
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-600">
          <a href="#properties" className="hover:text-neutral-950 transition-colors">PROPERTIES</a>
          <a href="#expertise" className="hover:text-neutral-950 transition-colors">EXPERTISE</a>
          <a href="#contact" className="hover:text-neutral-950 transition-colors">CONTACT</a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-neutral-900 focus:outline-none"
        >
          {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </header>

      {/* 2. MOBILE DRAWER (Sibling to header, slides in from right, solid white) */}
      <div 
        className={`fixed inset-0 top-16 z-[9999] bg-white flex flex-col justify-between px-6 py-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Links */}
        <nav className="flex flex-col gap-6 pt-4">
          <a href="#properties" onClick={closeMenu} className="font-serif text-3xl text-neutral-900 border-b border-neutral-100 pb-4">
            Properties & Land
          </a>
          <a href="#expertise" onClick={closeMenu} className="font-serif text-3xl text-neutral-900 border-b border-neutral-100 pb-4">
            Services & Story
          </a>
          <a href="#testimonials" onClick={closeMenu} className="font-serif text-3xl text-neutral-900 border-b border-neutral-100 pb-4">
            Client Reviews
          </a>
          <a href="#contact" onClick={closeMenu} className="font-serif text-3xl text-neutral-900 border-b border-neutral-100 pb-4">
            Bhoopasandra Office
          </a>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="flex flex-col gap-3 pb-8">
          <a
            href="tel:+919876543210"
            className="w-full h-14 flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-semibold tracking-wider uppercase rounded-full shadow-sm"
          >
            <Phone size={18} /> Call Office
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="w-full h-14 flex items-center justify-center gap-2 border border-neutral-300 text-neutral-900 text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-neutral-50"
          >
            <MessageCircle size={18} /> WhatsApp Inquiry
          </a>
        </div>
      </div>
    </>
  );
}
