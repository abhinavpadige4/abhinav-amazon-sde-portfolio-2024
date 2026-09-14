import ProjectCard from '@/components/project-card';
import projectsData from '@/data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}