import HealthSection from '../components/HealthSection';
import BMICalculator from '../components/BMICalculator';

const PhysicalHealth = () => {
  return (
    <div className="space-y-8">
      <HealthSection
        title="Physical Health & Wellness"
        description="Discover evidence-based information about exercise, nutrition, and maintaining a healthy lifestyle. Learn how to build sustainable habits for long-term health."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Wellness Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Exercise Basics',
                'Nutrition Guide',
                'Sleep Hygiene',
                'Injury Prevention',
                'Weight Management',
                'Active Lifestyle'
              ].map((category) => (
                <div
                  key={category}
                  className="p-3 bg-rose-50 rounded-lg text-rose-700 cursor-pointer hover:bg-rose-100 transition-colors"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Quick Tips for Better Health</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stay hydrated - aim for 8 glasses of water daily</li>
              <li>• Get at least 150 minutes of moderate exercise weekly</li>
              <li>• Include fruits and vegetables in every meal</li>
              <li>• Take regular breaks from sitting</li>
              <li>• Prioritize 7-9 hours of sleep each night</li>
            </ul>
          </div>
        </div>
      </HealthSection>

      <BMICalculator />
    </div>
  );
};

export default PhysicalHealth;