import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-amazon-500">Abhinav</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-gray-100 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-gray-100 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-gray-100 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-gray-100 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <button
              id="theme-toggle"
              className="text-gray-400 hover:text-gray-100 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.708.707a1 1 0 001.416-1.416l-.708-.707a1 1 0 00-1.416 1.416zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.415-1.414l.708-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-5 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM6 11a1 1 0 100-2H3a1 1 0 100 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}