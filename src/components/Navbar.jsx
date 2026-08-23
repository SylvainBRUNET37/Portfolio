export default function Navbar() {
  const base = import.meta.env.BASE_URL;

  // Each section gets its own accent color — the nav reads like a set of
  // labeled tabs, with a small colored dot next to each link.
  const links = [
    { label: "Main page", href: `${base}`, color: "#2451E0" },
    { label: "Experiences", href: `${base}experiences/`, color: "#0EA5A0" },
    { label: "Projects", href: `${base}projects/`, color: "#7C3AED" },
    { label: "Education", href: `${base}education/`, color: "#D18700" },
    { label: "Interests", href: `${base}miscellaneous/`, color: "#E1436D" },
    { label: "Contact", href: `${base}#contact`, color: "#16A34A" },
  ];

  const NavLink = ({ link, mobile = false }) => (
    <a
      href={link.href}
      style={{ "--accent": link.color }}
      className={
        mobile
          ? "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#2B2D33] transition-colors duration-150 hover:bg-slate-50 hover:text-[var(--accent)]"
          : "group relative flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#3A3D45] " +
            "border-t-2 border-transparent transition-colors duration-200 " +
            "hover:text-[var(--accent)] hover:border-t-[var(--accent)] " +
            "focus-visible:text-[var(--accent)] focus-visible:border-t-[var(--accent)] focus-visible:outline-none"
      }
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-40 transition-opacity duration-200 group-hover:opacity-100"
      />
      {link.label}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#EAE8E2] bg-[#FAFAF9]/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href={base} className="text-lg font-black tracking-tight text-[#14161A]">
          Sylvain Brunet
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center md:flex">
          {links.map((link) => (
            <NavLink key={link.label} link={link} />
          ))}
        </div>

        {/* Mobile nav (CSS-only, no JS hydration required) */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none select-none items-center justify-center rounded-md border border-[#DEDCD5] bg-white transition hover:border-[#14161A]"
          >
            <svg
              className="h-5 w-5 text-[#14161A] group-open:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className="hidden h-5 w-5 text-[#E1436D] group-open:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>

          <div className="absolute right-0 mt-2 w-52 rounded-lg border border-[#EAE8E2] bg-white p-1.5 shadow-lg shadow-black/5">
            {links.map((link) => (
              <NavLink key={link.label} link={link} mobile />
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}