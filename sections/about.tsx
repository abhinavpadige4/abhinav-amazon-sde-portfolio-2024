export default function About() {
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start md:items-center">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Passionate Software Engineer with expertise in building scalable
              distributed systems and full-stack web applications. Experienced in
              Python, Java, AWS cloud services, and React frontend development.
              Strong problem-solver with a track record of delivering high-impact
              solutions that scale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently preparing for Amazon SDE interviews, focusing on system
              design, algorithms, and leadership principles. Committed to
              continuous learning and technical excellence.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/resume-abhinav.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amazon-600 hover:bg-amazon-700"
              >
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/abhinav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-100 hover:bg-gray-700 hover:text-white"
              >
                View LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-amazon-500 to-amazon-600 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Abhinav - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amazon-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}