import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-sm font-bold text-white shadow-md transition hover:scale-105"
        >
          ↑
        </button>

        <div>
          <p className="text-lg font-bold text-white">{profile.name}</p>
          <p className="mt-0.5 text-xs text-indigo-400">{profile.role} · {profile.subRole}</p>
          <p className="mt-1 text-xs text-slate-400">
            📞 Mobile: <span className="text-white font-semibold">{profile.contact.phone}</span> | ✉️ Email:{" "}
            <span className="text-white font-semibold">{profile.contact.email}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <a
            href={`tel:${profile.contact.rawPhone}`}
            className="rounded-full bg-slate-800 px-3.5 py-1.5 text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            Call 6392074785
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-full bg-slate-800 px-3.5 py-1.5 text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            Email Lalit
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-800 px-3.5 py-1.5 text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            LinkedIn Profile
          </a>
        </div>

        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Prepared for {profile.taskInfo.organization} (Task 1 Submission).
        </p>
      </div>
    </footer>
  );
}
