export default function Hero() {
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
        Hey, I&apos;m Sylvain Brunet
      </h1>

      <p
        className="hero-anim mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
        style={{ animationDelay: "160ms" }}
      >
        Game programmer based in Quebec, Canada. I am completing my Master's in
        Computer Science &amp; Game Development at Université de Sherbrooke and my
        Computer Engineering degree from Polytech Tours at the end of October 2026.
      </p>

      <p
        className="hero-anim mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600"
        style={{ animationDelay: "220ms" }}
      >
        Actively seeking full-time game programming roles in{" "}
        <span className="font-semibold text-slate-800">Canada</span> or{" "}
        <span className="font-semibold text-slate-800">Europe</span>.
      </p>

      <div
        className="hero-anim mt-7 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: "300ms" }}
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md"
        >
          Get in touch
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
        <a
          href="#projects"
          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md"
        >
          See my projects
        </a>
      </div>

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
    </section>
  );
}