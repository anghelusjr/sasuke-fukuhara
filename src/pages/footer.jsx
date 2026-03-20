export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sasuke Fukuhara. All rights reserved.
        </p>

        {/* Right side - Credits */}
        <p className="text-sm">
          <a
            href="websitedesigns.art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-[Playfair_Display]"
          >
            WebsiteDesigns<span className="text-amber-400">.art</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
