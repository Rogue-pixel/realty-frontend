import { useState, useEffect } from "react";
import { X, MessageCircle, CalendarCheck } from "lucide-react";
import Button from "./Button";

export default function BookSiteVisitModal({
  isOpen,
  onClose,
  propertyTitle = "Selected Property",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    slot: "Morning (10 AM - 1 PM)",
    assistance: false,
  });

  // Prevent background scrolling when modal is open
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

  if (!isOpen) return null;

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi! I'd like to schedule a site visit for *${propertyTitle}*.
    
*Name:* ${formData.name || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Date:* ${formData.date || "To be decided"}
*Time Slot:* ${formData.slot}
*Local Assistance Required:* ${formData.assistance ? "Yes, meet at Bhoopasandra office" : "No"}

Looking forward to it!`;

    // Replace 919876543210 with actual agent phone number
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Site visit request submitted for ${formData.name}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-200 overflow-hidden rounded-sm bg-white shadow-2xl">
        
        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="font-serif text-xl font-medium text-neutral-900">
            Schedule Site Visit
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
            title="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="p-6">
          <p className="mb-6 font-sans text-sm text-neutral-500">
            Booking visit for:{" "}
            <span className="font-medium text-neutral-900">{propertyTitle}</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-sm border border-neutral-200 px-3 py-2 font-sans text-sm transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Contact Number
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-sm border border-neutral-200 px-3 py-2 font-sans text-sm transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  placeholder="+91"
                />
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-sm border border-neutral-200 px-3 py-2 font-sans text-sm text-neutral-600 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                  Time Slot
                </label>
                <select
                  value={formData.slot}
                  onChange={(e) =>
                    setFormData({ ...formData, slot: e.target.value })
                  }
                  className="w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 font-sans text-sm text-neutral-600 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  <option>Morning (10 AM - 1 PM)</option>
                  <option>Afternoon (2 PM - 5 PM)</option>
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <label className="mt-2 flex cursor-pointer items-start gap-3">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  checked={formData.assistance}
                  onChange={(e) =>
                    setFormData({ ...formData, assistance: e.target.checked })
                  }
                  className="h-4 w-4 cursor-pointer rounded-sm border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                />
              </div>
              <span className="font-sans text-sm leading-tight text-neutral-600">
                Require local assistance / meeting at Bhoopasandra office prior to visit.
              </span>
            </label>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-3">
              <Button type="submit" className="w-full">
                <CalendarCheck className="mr-2 h-4 w-4" />
                Confirm Schedule
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleWhatsApp}
                className="w-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Instantly via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
