export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white/60 backdrop-blur">
      <div className="container mx-auto px-4 py-10 text-center space-y-3">
        <p className="font-semibold text-slate-700">
          © {new Date().getFullYear()} <span className="text-slate-900">Sylvain Brunet</span>
        </p>

        <p className="text-sm text-slate-500">
          Contact:{" "}
          <a
            href="mailto:sylvain.brunet37@gmail.com"
            className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            sylvain.brunet37@gmail.com
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/sylvainbrunet37/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="text-xs text-slate-400">Based in Quebec, QC, Canada.</p>
      </div>
    </footer>
  );
}
