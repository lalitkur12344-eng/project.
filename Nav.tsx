import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience & Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        return { id: l.id, top: el ? Math.abs(el.getBoundingClientRect().top - 120) : 99999 };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button onClick={() => go("home")} className="group flex items-center gap-2.5 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-sm font-bold text-white shadow-md shadow-indigo-200">
            LK
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 leading-none">
              {profile.name}
            </span>
            <span className="text-[11px] font-medium text-slate-500 mt-0.5">
              Software Developer
            </span>
          </div>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                active === l.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={`tel:${profile.contact.rawPhone}`}
            className="ml-2 flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            <span>📞</span> {profile.contact.phone}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 shadow-xl md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </button>
          ))}
          <div className="mt-2 border-t border-slate-100 pt-3">
            <a
              href={`tel:${profile.contact.rawPhone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white"
            >
              📞 Call {profile.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
