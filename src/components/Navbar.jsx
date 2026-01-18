export default function Navbar() {
  const base = import.meta.env.BASE_URL;

  return (
    <nav className="w-full py-4 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href={base} className="font-bold text-xl">
          Sylvain Brunet
        </a>

        <div className="space-x-4">
          <a href={`${base}/`}>Main page</a>
          <a href={`${base}experiences/`}>Experiences</a>
          <a href={`${base}projects/`}>Projects</a>
          <a href={`${base}miscellaneous/`}>Interests</a>
          <a href={`${base}#contact`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
