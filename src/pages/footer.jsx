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
          Website by{" "}
          <a
            href="https://modern-portfolio-two-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Angel Buenavista
          </a>
        </p>
      </div>
    </footer>
  );
}
