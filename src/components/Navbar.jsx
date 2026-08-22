export default function Navbar() {
  const base = import.meta.env.BASE_URL;

  const links = [
    { label: "Main page", href: `${base}` },
    { label: "Experiences", href: `${base}experiences/` },
    { label: "Projects", href: `${base}projects/` },
    { label: "Education", href: `${base}education/` },
    { label: "Interests", href: `${base}miscellaneous/` },
    { label: "Contact", href: `${base}#contact` },
  ];

  const linkClass =
    "relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href={base} className="flex items-center gap-2.5 font-extrabold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm text-white shadow-sm">
            SB
          </span>
          <span className="text-slate-900">
            Sylvain Brunet
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile nav (CSS-only, no JS hydration required) */}
        <details className="relative md:hidden group">
          <summary
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none select-none items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300"
          >
            {/* Hamburger icon (shown when closed) */}
            <svg
              className="h-5 w-5 text-slate-700 group-open:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon (shown when open) */}
            <svg
              className="hidden h-5 w-5 text-slate-700 group-open:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>

          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${linkClass} block`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}
