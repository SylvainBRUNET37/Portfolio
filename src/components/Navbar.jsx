export default function Navbar() {
  return (
    <nav className="w-full py-4 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="font-bold text-xl">Sylvain Brunet</a>
        <div className="space-x-4">
          <a href="/#projects">Main page</a>
          <a href="/experiences">Experiences</a>
          <a href="/projects">Projects</a>
          <a href="/miscellaneous">Miscellaneous</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
