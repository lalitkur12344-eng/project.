import { profile } from "../data/profile";

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-violet-200/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-[fadeUp_0.8s_ease-out_both]">
          {/* Assessment & Status badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
              InAmigos Foundation Task 1
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
            <br />
            <span className="text-3xl font-bold text-slate-800 sm:text-5xl">{profile.role}</span>
          </h1>

          <p className="mt-3 text-base font-semibold text-indigo-600 sm:text-lg">
            {profile.subRole}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            {profile.tagline}
          </p>

          {/* Contact pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${profile.contact.rawPhone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-emerald-600">📞</span> {profile.contact.phone}
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50"
            >
              <span className="text-indigo-600">✉️</span> {profile.contact.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Get in touch
            </button>
            <button
              onClick={() => go("projects")}
              className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              View Projects & Experience
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">📍 {profile.location}</span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="truncate">🎓 {profile.contact.college}</span>
          </div>
        </div>

        {/* Profile Card with Lalit's photo */}
        <div className="relative mx-auto w-full max-w-sm animate-[fadeUp_0.9s_ease-out_0.15s_both]">
          <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800 opacity-25 blur-2xl" />
          <div className="overflow-hidden rounded-[1.85rem] border border-white/80 bg-white p-3 shadow-2xl shadow-indigo-900/10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-slate-900">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4 text-white">
                <p className="text-base font-bold">{profile.name}</p>
                <p className="text-xs text-indigo-200">B.Tech IT Student & Software Developer</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                🛡️
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Internship
                </p>
                <p className="text-xs font-bold text-slate-900">C-DAC Noida (Cyber Security)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:grid-cols-4">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-center backdrop-blur transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
