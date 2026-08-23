const CARD_VARIANTS = {
    indigo: {
    dot: "bg-gradient-to-br from-indigo-400 to-sky-500",
    border: "hover:border-indigo-300",
    tag: "group-hover:border-blue-200",
    accent: "#6366f1",
  },
  emerald: {
    dot: "bg-gradient-to-br from-emerald-400 to-teal-500",
    border: "hover:border-emerald-300",
    tag: "group-hover:border-emerald-200",
    accent: "#10b981",
  },
  violet: {
    dot: "bg-gradient-to-br from-violet-400 to-fuchsia-500",
    border: "hover:border-violet-300",
    tag: "group-hover:border-violet-200",
    accent: "#8b5cf6",
  },
  rose: {
    dot: "bg-gradient-to-br from-rose-400 to-pink-500",
    border: "hover:border-rose-300",
    tag: "group-hover:border-rose-200",
    accent: "#f43f5e",
  },
  blue: {
    dot: "bg-gradient-to-br from-blue-400 to-cyan-500",
    border: "hover:border-blue-300",
    tag: "group-hover:border-cyan-200",
    accent: "#3b82f6",
  },
};

export default function ExperienceCard({ project, variant = "indigo" }) {
  const v = CARD_VARIANTS[variant] ?? CARD_VARIANTS.indigo;
  return (
    <a
      href={project.link || "#"}
      className={`group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${v.border}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 rounded-l-2xl"
        style={{ backgroundColor: v.accent }}
      />
      <div className="relative p-6">
        {/* Header: left = title + summary, right = period + company */}
        <div className="flex items-start justify-between gap-4 mb-2">
          {/* Left: Logo (optional), Title (top) and Summary (below) */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3">
              {project.logo && (
                <img
                  src={`${import.meta.env.BASE_URL}${project.logo.replace(/^\//, "")}`}
                  alt={`${project.company || project.title} logo`}
                  loading="lazy"
                  className="h-12 w-12 flex-shrink-0 rounded-xl border border-gray-100 bg-white object-contain p-1 shadow-sm"
                />
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 truncate">
                  {project.title}
                </h3>
              </div>
            </div>
            {project.summary && (
              <p className="mt-2 text-sm font-medium text-gray-700 leading-relaxed tracking-wide italic group-hover:text-gray-900 transition-colors duration-300">
                <span className="relative font-semibold inline-block">
                  <span className="absolute inset-0 -z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.summary}
                </span>
              </p>
            )}
          </div>

          {/* Right: Period (top) and Company (below) aligned right */}
          <div className="flex-shrink-0 text-right">
            {project.period && (
              <span className="inline-flex items-center justify-end text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {project.period}
              </span>
            )}

            {project.company && (
              <p className="mt-2 pr-4 text-sm font-semibold text-gray-600 tracking-wide">
                {project.company}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        {project.description && project.description.length > 0 && (
          <ul className="mb-5 space-y-2 text-gray-600 text-sm leading-relaxed">
            {project.description.map((line, i) => (
              <li key={i} className="flex gap-2.5 group-hover:text-gray-700 transition-colors duration-300">
                <span
                  className={`mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full ${v.dot}`}
                  aria-hidden="true"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech && project.tech.map((t, idx) => (
            <span
              key={t}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 transition-all duration-300 ${v.tag}`}
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
