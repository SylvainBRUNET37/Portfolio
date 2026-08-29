import { contact } from "../data/contact.js";

// One shared look for every action button (email, LinkedIn, GitHub, CVs)
// so the whole contact area reads as a single homogeneous set.
const contactBtn =
  "group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 " +
  "text-sm font-semibold text-slate-800 shadow-sm transition " +
  "hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md";

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  const cvs = [
    { label: "CV Québec", icon: "qc", file: "Sylvain Brunet - CV QC (FR).pdf" },
    { label: "CV Canada", icon: "ca", file: "Sylvain Brunet - CV CA (EN).pdf" },
    { label: "CV Europe", icon: "eu", file: "Sylvain Brunet - CV EU (EN).pdf" },
  ];

  return (
    <section className="relative pt-10 pb-4 text-center">
      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-anim { animation: hero-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <h1
        className="hero-anim mx-auto mt-2 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl"
        style={{ animationDelay: "0ms" }}
      >
        Hi, I&apos;m Sylvain Brunet
      </h1>

      <p
        className="hero-anim mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
        style={{ animationDelay: "160ms" }}
      >
        I&apos;m a game programmer based in Quebec, Canada, currently completing a Master&apos;s in Computer Science with a specialization in Game Development.
      </p>
      <p
        className="hero-anim mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
        style={{ animationDelay: "160ms" }}
      >
        I&apos;m graduating at the end of October 2026.
      </p>

      <p
        className="hero-anim mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600"
        style={{ animationDelay: "220ms" }}
      >
        I&apos;m seeking full-time game programming roles in{" "}
        <span className="font-semibold text-slate-800">Canada</span> or{" "}
        <span className="font-semibold text-slate-800">Europe</span>.
      </p>

      {/* Stats strip */}
      <dl
        className="hero-anim mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-3"
        style={{ animationDelay: "380ms" }}
      >
        {[
          { label: "Focus", value: "Game Programming", icon: "🎮" },
          { label: "Education", value: "Master's degree", icon: "🎓" },
          { label: "Based in", value: "Quebec, Canada", icon: "📍" },
        ].map((item) => (
          <div key={item.label} className="bg-white/80 px-6 py-4 backdrop-blur transition-colors hover:bg-white">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {item.icon} {item.label}
            </dt>
            <dd className="mt-1 text-sm font-bold text-slate-800">{item.value}</dd>
          </div>
        ))}
      </dl>

      {/* Contact — the whole thing, up top, all buttons matching */}
      <div
        className="hero-anim mx-auto mt-9 max-w-3xl"
        style={{ animationDelay: "280ms" }}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <a href={`mailto:${contact.email}`} className={`${contactBtn} pr-14`}>
            <img src={`${base}images/icons/gmail.png`} alt="" className="h-8 w-8 shrink-0" />
            Email
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contactBtn} pr-9`}
          >
            <img src={`${base}images/icons/linkedin.png`} alt="" className="h-8 w-8 shrink-0" />
            LinkedIn
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contactBtn} pr-10`}
          >
            <img src={`${base}images/icons/github.png`} alt="" className="h-8 w-8 shrink-0" />
            GitHub
          </a>

          {cvs.map((cv) => (
            <a
              key={cv.label}
              href={`${base}documents/${cv.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className={contactBtn}
            >
              <img src={`${base}images/icons/${cv.icon}.png`} alt="" className="h-8 w-8 shrink-0" />
              {cv.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}