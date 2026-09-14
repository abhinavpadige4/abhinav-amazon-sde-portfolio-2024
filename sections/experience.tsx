import TimelineItem from '@/components/timeline-item';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/dist/styles.css';

export default function Experience() {
  const experienceData = [
    {
      date: '2022',
      title: 'Software Engineer',
      subtitle: 'TechCorp Solutions',
      description: [
        'Developed microservices using Java Spring Boot serving 1M+ daily active users',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Migrated legacy monolith to AWS microservices architecture',
        'Led team of 4 engineers in agile development process'
      ]
    },
    {
      date: '2020-2022',
      title: 'Backend Developer',
      subtitle: 'StartupXYZ',
      description: [
        'Built RESTful APIs with Python Django handling 500K+ monthly requests',
        'Designed and optimized PostgreSQL database schemas for performance',
        'Implemented Redis caching layer improving response times by 60%',
        'Created automated testing suite achieving 90%+ test coverage'
      ]
    },
    {
      date: '2019-2020',
      title: 'Full Stack Developer',
      subtitle: 'Freelance / Contract Work',
      description: [
        'Developed 10+ full-stack applications using React and Node.js',
        'Implemented responsive designs improving mobile conversion rates by 40%',
        'Integrated third-party APIs including payment gateways and social media',
        'Provided technical consultation and code review services'
      ]
    }
  ];

  return (
    <section id="experience" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience
        </h2>
        <VerticalTimeline className="mt-8">
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{ background: 'amazon-600', color: '#fff' }}
              icon={<>💼</>}
            >
              <TimelineItem
                date={experience.date}
                title={experience.title}
                subtitle={experience.subtitle}
                description={experience.description}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}