import { profile } from "../data/profile";
import Reveal, { SectionHeading } from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Key software systems and AI applications I've developed."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {profile.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{p.emoji}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {p.period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-indigo-600">{p.mentor}</p>

                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-indigo-500">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
