export default function Navbar() {
  const base = import.meta.env.BASE_URL;

  const links = [
    { label: "Main page", href: `${base}/` },
    { label: "Experiences", href: `${base}experiences/` },
    { label: "Projects", href: `${base}projects/` },
    { label: "Education", href: `${base}education/` },
    { label: "Interests", href: `${base}miscellaneous/` },
    { label: "Contact", href: `${base}#contact` },
  ];

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

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
