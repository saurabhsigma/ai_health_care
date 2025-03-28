import { ReactNode } from 'react';

interface HealthSectionProps {
  title: string;
  description: string;
  image: string;
  children: ReactNode;
}

const HealthSection = ({ title, description, image, children }: HealthSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          {children}
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthSection;