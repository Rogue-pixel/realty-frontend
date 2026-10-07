/**
 * <Button /> — Compass Design System
 *
 * A luxury, monochromatic button with two variants:
 *   • solid   — black bg, white text
 *   • outline — transparent bg, 1px black border, black text
 *
 * Both share: rounded-sm, uppercase, tracking-wide, smooth transitions.
 *
 * @example
 *   <Button>Schedule a Tour</Button>
 *   <Button variant="outline">View Details</Button>
 *   <Button variant="solid" size="lg" className="mt-4">Contact Agent</Button>
 */

const baseStyles = [
  "inline-flex items-center justify-center",
  "rounded-full",
  "uppercase tracking-wide",
  "text-xs font-semibold",
  "min-h-[56px] lg:min-h-0", // 56px touch target for mobile
  "transition-all duration-200 ease-in-out",
  "cursor-pointer",
  "disabled:opacity-40 disabled:pointer-events-none",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
].join(" ");

const variants = {
  solid: "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-black",
  outline:
    "bg-transparent text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white active:bg-black active:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-[0.65rem]",
  md: "px-6 py-2.5 text-xs",
  lg: "px-8 py-3 text-sm",
};

export default function Button({
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
