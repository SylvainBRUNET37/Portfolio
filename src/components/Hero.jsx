export default function Hero() {
  return (
    <section className="relative pt-4 pb-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
        </span>
        Available for game programming roles
      </div>

      <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
        Hey, I'm{" "}
        <span className="text-slate-900">
          Sylvain Brunet
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        Game programmer based in Quebec, Canada, specializing in{" "}
        <span className="font-semibold text-slate-800">C++</span> and game engine
        development.
      </p>

      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
        I'm completing my Master's in Computer Science &amp; Game Development at
        Université de Sherbrooke and my Computer Engineering degree from Polytech
        Tours at the end of October 2026.
      </p>

      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
        I am actively seeking full-time game programming roles in Canada or Europe.
      </p>
    </section>
  );
}