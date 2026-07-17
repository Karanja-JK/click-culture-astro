import { cn } from "../lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type MouseEvent, useRef } from "react";

type Variant = "primary" | "outline" | "ghost";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChildHref?: string;
  magnetic?: boolean;
}
const styles: Record<Variant, string> = {
  primary: "bg-accent text-text-primary hover:bg-accent-hover shadow-[0_10px_40px_-12px_color-mix(in_oklab,var(--accent)_60%,transparent)]",
  outline: "border border-border bg-transparent text-text-primary hover:border-accent hover:text-accent-hover",
  ghost: "bg-transparent text-text-primary hover:text-accent-hover",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", magnetic = false, asChildHref, onMouseMove, onMouseLeave, children, ...rest },
  ref
) {
  const innerRef = useRef<HTMLElement | null>(null);
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (magnetic && innerRef.current) {
      const r = innerRef.current.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      innerRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    }
    onMouseMove?.(e as MouseEvent<HTMLButtonElement>);
  };
  const handleLeave = (e: MouseEvent<HTMLElement>) => {
    if (magnetic && innerRef.current) innerRef.current.style.transform = "";
    onMouseLeave?.(e as MouseEvent<HTMLButtonElement>);
  };
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base",
    styles[variant],
    className
  );
  if (asChildHref) {
    return (
      <a ref={innerRef as never} href={asChildHref} className={classes}
        onMouseMove={magnetic ? (handleMove as never) : undefined}
        onMouseLeave={magnetic ? (handleLeave as never) : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button
      ref={(el) => { innerRef.current = el; if (typeof ref === "function") ref(el); else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el; }}
      className={classes} onMouseMove={handleMove as never} onMouseLeave={handleLeave as never} {...rest}>
      {children}
    </button>
  );
});
