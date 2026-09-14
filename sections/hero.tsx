import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amazon-400 to-amazon-600">
          Abhinav
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Amazon SDE | Software Engineer | Full-Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amazon-600 hover:bg-amazon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazon-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}