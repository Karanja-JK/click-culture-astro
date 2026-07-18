import { useRef, useState, type FormEvent } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../lib/utils";

const WEB3FORMS_ACCESS_KEY = "REPLACE_ME"; // placeholder — swap once key is available

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function ContactForm() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.left = `${x}%`;
    glowRef.current.style.top = `${y}%`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${form.name} via clickculturedigital.com`,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full border-b border-border bg-transparent pb-3 pt-1 text-base text-text-primary placeholder:text-text-muted/50 transition-colors duration-300 focus:border-accent focus:outline-none";

  return (
    <section className="relative pb-20 pt-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 lg:sticky lg:top-36 lg:p-16"
            onMouseMove={handleMouseMove}
          >
            <div
              ref={glowRef}
              aria-hidden
              className="pointer-events-none absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px] transition-[left,top] duration-700 ease-out"
              style={{ left: "35%", top: "60%" }}
            />
            <div className="relative z-10 flex flex-col gap-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">Let's talk</p>
              <h1 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-tight">
                Let's build something <span className="text-accent-hover">that works.</span>
              </h1>
              <p className="max-w-sm text-base leading-relaxed text-text-muted">
                Tell us about your brand, your goals, and what's not working. We'll take it from there.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <a href="mailto:marketing@clickculturedigital.com" className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-accent-hover">
                  <Mail size={14} className="flex-shrink-0 text-accent-hover" />
                  marketing@clickculturedigital.com
                </a>
                <a href="tel:+254727808264" className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-accent-hover">
                  <Phone size={14} className="flex-shrink-0 text-accent-hover" />
                  +254 727 808 264
                </a>
              </div>
            </div>
          </div>
          <div className="lg:py-4">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center gap-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent/10">
                  <svg className="h-6 w-6 text-accent-hover" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-tight">
                    Thanks, we'll be <span className="text-accent-hover">in touch.</span>
                  </h2>
                  <p className="text-base leading-relaxed text-text-muted">
                    We typically respond within 24 hours. While you wait, take a look at our work.
                  </p>
                </div>
                <a href="/work" className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-hover">
                  View our work
                  <ArrowRight size={14} />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.22em] text-text-muted">Full name</label>
                  <input type="text" required autoComplete="name" placeholder="Your name" value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.22em] text-text-muted">Email address</label>
                  <input type="email" required autoComplete="email" placeholder="you@company.com" value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.22em] text-text-muted">Company</label>
                  <input type="text" autoComplete="organization" placeholder="Your company (optional)" value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.22em] text-text-muted">What are you working on?</label>
                  <textarea required rows={5} placeholder="Tell us about your goals, your brand, and what's not working…" value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className={cn(inputClass, "resize-none")} />
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <div>
                  <Button type="submit" magnetic disabled={submitting}>
                    {submitting ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
