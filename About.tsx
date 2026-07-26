import { profile } from "../data/profile";
import Reveal, { SectionHeading } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          subtitle="Software Development Student & Cyber Security Enthusiast"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5">
            {profile.intro.map((p, i) => (
              <p key={i} className="text-[15px] leading-8 text-slate-600">
                {p}
              </p>
            ))}

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Academic Summary
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">🎓</span>
                  <span className="font-semibold">B.Tech Information Technology</span> (2023 – 2027) at Rajkiya Engineering College, Bijnor
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">🛡️</span>
                  <span className="font-semibold">Cyber Security Intern</span> at C-DAC Noida (Apr 2025 – May 2025)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">📍</span>
                  <span>{profile.fullAddress}</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Contact Quick Info
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                    Verified
                  </span>
                </div>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-sm">
                      👤
                    </span>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Full Name</p>
                      <p className="text-sm font-semibold text-slate-900">{profile.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm">
                      📞
                    </span>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Mobile Number</p>
                      <a
                        href={`tel:${profile.contact.rawPhone}`}
                        className="text-sm font-bold text-emerald-700 hover:underline"
                      >
                        {profile.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sm">
                      ✉️
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-slate-400">College Email</p>
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="block truncate text-sm font-bold text-indigo-700 hover:underline"
                      >
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-sm">
                      📍
                    </span>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Address</p>
                      <p className="text-xs font-medium text-slate-700">{profile.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Declaration note as in resume */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs italic text-slate-500">
                "I hereby declare that all the details provided above are true to the best of my knowledge."
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
