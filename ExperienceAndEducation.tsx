import { profile } from "../data/profile";
import Reveal, { SectionHeading } from "./Reveal";

export default function ExperienceAndEducation() {
  return (
    <section id="experience" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Background"
          title="Internship & Education"
          subtitle="My professional internship experience and academic background."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Internship Experience */}
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                  🛡️
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Internship Experience</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    Cyber Security
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {profile.experience.map((exp) => (
                  <div key={exp.company} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="text-base font-bold text-slate-900">{exp.company}</h4>
                      <span className="rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-semibold text-indigo-800">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-indigo-600">{exp.role}</p>

                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 text-indigo-500">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                  🎓
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Education</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                    Academic Qualifications
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {profile.education.map((edu) => (
                  <div key={edu.institution} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-bold text-violet-800">
                        {edu.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{edu.period}</span>
                    </div>

                    <h4 className="mt-2 text-base font-bold text-slate-900">{edu.institution}</h4>
                    <p className="text-xs font-semibold text-indigo-600">{edu.degree}</p>
                    <p className="mt-1 text-xs text-slate-500">{edu.university}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
