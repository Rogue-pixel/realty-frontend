import { useState } from "react";
import { MapPin, Clock, MessageCircle, Check } from "lucide-react";

export default function ContactFooter({ id }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Plots & Land Development");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const templateText = `Hello Hebbal Properties,\n\nI have a new inquiry from your website:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interest:* ${inquiryType}\n*Message:* ${message}`;
    
    const encodedMessage = encodeURIComponent(templateText);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setPhone("");
      setInquiryType("Plots & Land Development");
      setMessage("");
    }, 2500);
  };

  return (
    <section id={id} className="scroll-mt-24 bg-white px-4 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Unified Split Footer Card ── */}
        <div className="rounded-3xl bg-neutral-950 p-6 text-white md:p-8 lg:p-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* ── Left Side: Connect ── */}
            <div className="flex flex-col">
              <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:mb-8 lg:text-5xl">
                Connect With Hebbal Properties
              </h2>
              
              <div className="mb-8 flex flex-col gap-5 font-sans text-sm text-neutral-300 lg:mb-10 lg:gap-6 lg:text-base">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <p className="leading-relaxed">
                    Building No. 5/1, Near Vidya Sagar School,<br />
                    Bhoopasandra, Bangalore
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <p className="leading-relaxed">
                    Working Hours:<br />
                    Monday - Sunday, 9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 font-sans text-xs font-bold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-200 sm:w-max lg:min-h-0 lg:py-3.5"
              >
                <MessageCircle className="h-5 w-5 lg:h-4 lg:w-4" />
                WhatsApp Us
              </a>
            </div>

            {/* ── Right Side: Inquiry Form ── */}
            <div>
              <h3 className="mb-6 font-serif text-2xl lg:mb-8 lg:text-3xl">Send an Inquiry</h3>
              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4 lg:gap-5">
                
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 md:text-xs">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 font-sans text-sm text-white transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 md:text-xs">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 font-sans text-sm text-white transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 md:text-xs">
                    Inquiry Type
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 font-sans text-sm text-white transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    <option className="bg-neutral-900">Plots & Land Development</option>
                    <option className="bg-neutral-900">Residential Properties</option>
                    <option className="bg-neutral-900">Commercial Properties</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-neutral-400 md:text-xs">
                    Message
                  </label>
                  <textarea
                    required
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 font-sans text-sm text-white transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`mt-2 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full border font-sans text-xs font-bold uppercase tracking-widest transition-colors lg:mt-4 lg:min-h-0 lg:py-4 ${
                    isSubmitted 
                      ? "border-green-500 bg-green-500 text-white" 
                      : "border-neutral-700 bg-neutral-800 text-white hover:border-neutral-600 hover:bg-neutral-700"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="h-4 w-4" />
                      Sent to WhatsApp
                    </>
                  ) : (
                    "Submit Details"
                  )}
                </button>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
