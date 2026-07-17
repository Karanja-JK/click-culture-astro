import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./Button";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface Props {
  currentPath: string;
}

export function Nav({ currentPath }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollTopIfHome = (e: React.MouseEvent) => {
    if (currentPath === "/") {
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" });
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "border-b border-border bg-base/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-14">
          <a href="/" onClick={scrollTopIfHome} className="flex items-center gap-3 group">
            <img src="/logo-mark.png" alt="ClickCulture Digital" className="h-9 w-9 object-contain" />
            <span className="hidden font-display text-base font-semibold tracking-tight text-text-primary sm:inline">
              ClickCulture<span className="text-accent-hover">.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button magnetic asChildHref="/contact">Book a Call</Button>
          </div>
          <button
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-base md:hidden transition-[opacity,transform] duration-300 ease-out",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 pointer-events-none",
          !open && !reduceMotion && "-translate-y-2"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-14">
          <a href="/" onClick={(e) => { setOpen(false); scrollTopIfHome(e); }} className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="ClickCulture" className="h-9 w-9 object-contain" />
            <span className="font-display text-base font-semibold">ClickCulture.</span>
          </a>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
            <X size={18} />
          </button>
        </div>
        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center gap-8 px-6 md:px-10 lg:px-14">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl text-text-primary">
              {l.label}
            </a>
          ))}
          <Button magnetic asChildHref="/contact" className="mt-6 self-start">Book a Call</Button>
        </div>
      </div>
    </>
  );
}
