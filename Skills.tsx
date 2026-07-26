import { profile } from "../data/profile";
import Reveal, { SectionHeading } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills & Coursework"
          title="Technical Stack & Expertise"
          subtitle="Programming languages, development tools, libraries, machine learning frameworks, and soft skills."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.skillCategories.map((cat, idx) => (
            <Reveal key={cat.category} delay={idx * 100}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{cat.category}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-900"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
