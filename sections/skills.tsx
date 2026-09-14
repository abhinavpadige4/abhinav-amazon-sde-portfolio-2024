import { FaPython, FaJava, FaAws, FaReact } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'Java', icon: <FaJava />, level: 85 },
    { name: 'AWS', icon: <FaAws />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 85 },
  ];

  return (
    <section id="skills" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-amazon-900/50 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                </div>
                <span className="text-amazon-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                <div
                  className={`h-full bg-amazon-600 rounded-full transition-all duration-500 w-${skill.level}%`}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}