interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  description,
}: TimelineItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-amazon-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {date.charAt(0)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-100">{title}</h3>
          <h4 className="text-amazon-400 text-sm">{subtitle}</h4>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}