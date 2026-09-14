export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Abhinav. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/abhinav"
            className="hover:text-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 12H2V6h16v10zm12-3.535a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.757 8h-.012c-.578 0-1.047.47-1.047 1.047s.469 1.047 1.047 1.047.012-.578.012-1.047zm0 5.523h-.012c-.289 0-.523.234-.523.523s.234.523.523.523.012-.289.012-.523z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/abhinav"
            className="hover:text-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 00-3.17 19.283.961.961 0 001.197 0 10 10 0 003.171-19.283zM11.019 8.638a1.975 1.975 0 00-3.837 0c.044-.118.07-.245.07-.378 0-.418-.108-.758-.34-1.004-.232-.246-.586-.246-.818 0-.232.232-.34.576-.34 1.004 0 .133.026.265.07.378 0 2.185 1.518 3.956 3.406 3.956a1.975 1.975 0 003.837 0c-.044.118-.07.245-.07.378 0 .418.108.758.34 1.004.232.246.586.246.818 0 .232-.232.34-.576.34-1.004 0-.133-.026-.265-.07-.378z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}