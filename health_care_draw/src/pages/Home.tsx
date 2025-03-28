import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Journey to Better Health Starts Here
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access trusted health information and resources across mental, physical, and medical wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Mental Health',
              description: 'Expert guidance on emotional well-being, stress management, and mental health resources.',
              image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
              path: '/mental-health'
            },
            {
              title: 'Physical Health',
              description: 'Evidence-based fitness advice, nutrition guidelines, and wellness tips for a healthier lifestyle.',
              image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
              path: '/physical-health'
            },
            {
              title: 'Medical Resources',
              description: 'Reliable information about common health conditions, treatments, and preventive care.',
              image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
              path: '/medical-resources'
            }
          ].map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Link
                  to={section.path}
                  className="inline-flex items-center text-rose-600 hover:text-rose-700"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-rose-50 rounded-lg">
            <p className="text-rose-800 text-sm">
              Important: This website provides general health information for educational purposes only.
              It is not a substitute for professional medical advice. Always consult qualified healthcare providers for personal medical decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;