export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t">
      <div className="container mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} Sylvain Brunet</p>

        <p className="text-sm">
          Contact:{" "}
          <a
            href="mailto:sylvain.brunet37@gmail.com"
            className="text-blue-600 hover:underline"
          >
            sylvain.brunet37@gmail.com
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/sylvain-brunet-807b62331/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="text-xs text-gray-500">
          Based in Montreal, Quebec, Canada.
        </p>
      </div>
    </footer>
  );
}
