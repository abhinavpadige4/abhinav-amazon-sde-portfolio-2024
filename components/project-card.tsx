import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-amazon-400 transition-all duration-300">
      {image && (
        <div className="relative h-48">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amazon-900/80 to-transparent pointer-events-none"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-amazon-900/50 text-amazon-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amazon-600 hover:bg-amazon-700"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-100 hover:bg-gray-700 hover:text-white"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}