import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import Reveal, { SectionHeading } from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("6392074785");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cards = [
    {
      label: "Mobile Number (Primary)",
      value: profile.contact.phone,
      subValue: "Tap to call directly",
      href: `tel:${profile.contact.rawPhone}`,
      icon: "📞",
      accent: "hover:border-emerald-300 hover:bg-emerald-50/50",
    },
    {
      label: "College Email ID",
      value: profile.contact.email,
      subValue: "REC Bijnor official email",
      href: `mailto:${profile.contact.email}`,
      icon: "✉️",
      accent: "hover:border-indigo-300 hover:bg-indigo-50/50",
    },
    {
      label: "Address & Location",
      value: profile.contact.address,
      subValue: "Barabanki, Uttar Pradesh",
      href: "#",
      icon: "📍",
      accent: "hover:border-amber-300 hover:bg-amber-50/50",
    },
    {
      label: "Current Institution",
      value: profile.contact.college,
      subValue: "B.Tech IT (2023 - 2027)",
      href: "#",
      icon: "🎓",
      accent: "hover:border-violet-300 hover:bg-violet-50/50",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100";

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Details"
          subtitle="Feel free to reach out for opportunities, collaborations, or inquiries."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details Cards */}
          <Reveal className="space-y-4">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition ${c.accent} shadow-sm`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl group-hover:scale-105 transition-transform">
                  {c.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-bold text-slate-900">{c.value}</p>
                  <p className="text-xs font-medium text-slate-500">{c.subValue}</p>
                </div>
              </a>
            ))}

            {/* Quick Copy Number button */}
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/60 p-4 text-xs font-semibold text-emerald-900">
              <span className="flex items-center gap-2">
                <span>✅</span> Verified Phone: <strong>6392074785</strong>
              </span>
              <button
                onClick={copyPhone}
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs text-white transition hover:bg-emerald-700 active:scale-95"
              >
                {copied ? "Copied!" : "Copy Number"}
              </button>
            </div>
          </Reveal>

          {/* Direct Message Form */}
          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">Send a direct message</h3>
              <p className="mt-1 text-xs text-slate-500">
                This will prepare an email directly to <strong>{profile.contact.email}</strong>.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">Your Name</label>
                  <input
                    required
                    className={inputClass}
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
                >
                  Send Message to Lalit Kumar
                </button>

                {sent && (
                  <p className="rounded-xl bg-emerald-100 p-3 text-center text-xs font-bold text-emerald-900">
                    Mail application launched! Thank you.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        {/* Assessment Task Submission Badge Card */}
        <div className="mt-14 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 p-6 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-2xl">
                🌐
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  {profile.taskInfo.organization} · Assessment
                </p>
                <h4 className="text-base font-bold sm:text-lg">{profile.taskInfo.taskName}</h4>
                <p className="text-xs text-indigo-200">
                  Submitted by <strong>Lalit Kumar</strong> (Phone: 6392074785)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                ✅ Live Website Ready
              </span>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-200 border border-indigo-500/30">
                📅 Deadline: {profile.taskInfo.deadline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
