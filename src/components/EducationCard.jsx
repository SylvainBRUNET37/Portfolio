export default function EducationCard({ entry }) {
  const hasLink = entry.link;
  const className =
    "group block relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";
  const style = { textDecoration: "none", color: "inherit" };

  const inner = (
    <div className="relative p-6">
      {/* Header: left = title + summary, right = period + subtitle */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
            {entry.title}
          </h3>
          {entry.subtitle && (
            <p className="mt-1 text-sm font-semibold text-gray-600 tracking-wide">
              {entry.subtitle}
            </p>
          )}
          {entry.summary && (
            <p className="mt-2 text-sm font-medium text-gray-700 leading-relaxed tracking-wide italic group-hover:text-gray-900 transition-colors duration-300">
              {entry.summary}
            </p>
          )}
        </div>

        {entry.period && (
          <div className="flex-shrink-0 text-right">
            <span className="inline-flex items-center justify-end text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {entry.period}
            </span>
          </div>
        )}
      </div>

        {/* Description */}
        {entry.description && entry.description.length > 0 && (
          <div className="space-y-2.5 mb-5 text-gray-600 text-sm leading-relaxed">
            {entry.description.map((line, i) => (
              <p key={i} className="group-hover:text-gray-700 transition-colors duration-300">
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Classes (supports a flat list or grouped subsections like semesters/sessions) */}
        {entry.classes && entry.classes.length > 0 && (() => {
          const classes = entry.classes;
          const isGrouped = typeof classes[0] === "object";
          const groups = isGrouped
            ? classes.map((g, gi) => ({ id: gi, label: g.label || `Group ${gi + 1}`, items: g.items || [] }))
            : [{ id: 0, label: null, items: classes }];

          return (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Classes
                </p>
                <span className="text-xs font-medium text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                  {groups.reduce((n, g) => n + g.items.length, 0)}
                </span>
              </div>

              {groups.map((group) => (
                <details
                  key={group.id}
                  className="group/class mb-2 last:mb-0 rounded-lg border border-gray-100 bg-white transition-colors duration-300 open:border-blue-200 open:bg-blue-50/20"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none select-none px-3 py-2">
                    <span className="flex items-center gap-2">
                      {group.label ? (
                        <>
                          <span className="text-sm font-semibold text-gray-600">
                            {group.label}
                          </span>
                          <span className="text-xs font-medium text-gray-400">
                            {group.items.length} class{group.items.length > 1 ? "es" : ""}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-semibold text-blue-500">
                          {group.items.length} classes
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-gray-400 transition-transform duration-200 group-open/class:rotate-180">
                      ▾
                    </span>
                  </summary>

                  <div className="px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((c, idx) => (
                      <div
                        key={c}
                        className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/40"
                        style={{ transitionDelay: `${idx * 15}ms` }}
                      >
                        <span className="flex-shrink-0 text-xs font-semibold text-blue-400 border border-blue-200 bg-blue-50 rounded-md px-1.5 py-0.5 leading-none">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-gray-700 leading-snug">
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          );
        })()}

        {/* Tech tags */}
        {entry.tech && entry.tech.length > 0 && (
          <div>
            {entry.classes && entry.classes.length > 0 && (
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                Tech
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {entry.tech.map((t, idx) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 group-hover:border-blue-200 group-hover:shadow-sm transition-all duration-300"
                  style={{ transitionDelay: `${idx * 30}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
  );

  return hasLink ? (
    <a
      href={entry.link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {inner}
    </a>
  ) : (
    <div className={className} style={style}>
      {inner}
    </div>
  );
}