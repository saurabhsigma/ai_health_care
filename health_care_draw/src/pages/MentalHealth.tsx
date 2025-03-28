import HealthSection from '../components/HealthSection';
import DrawingCanvas from '../components/DrawingCanvas';

const MentalHealth = () => {
  return (
    <div className="space-y-8">
      <HealthSection
        title="Mental Health Resources"
        description="Access reliable information and resources to support your mental well-being. Learn about common mental health conditions, coping strategies, and when to seek professional help."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Common Topics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Stress Management',
                'Anxiety',
                'Depression',
                'Sleep Health',
                'Mindfulness',
                'Work-Life Balance'
              ].map((topic) => (
                <div
                  key={topic}
                  className="p-3 bg-rose-50 rounded-lg text-rose-700 cursor-pointer hover:bg-rose-100 transition-colors"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Need Immediate Help?</h3>
            <p className="text-gray-600 mb-4">
              If you're experiencing a mental health crisis or need someone to talk to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• National Crisis Hotline: 988</li>
              <li>• Crisis Text Line: Text HOME to 741741</li>
              <li>• National Suicide Prevention Lifeline: 1-800-273-8255</li>
            </ul>
          </div>
        </div>
      </HealthSection>

      <DrawingCanvas />
    </div>
  );
};

export default MentalHealth;