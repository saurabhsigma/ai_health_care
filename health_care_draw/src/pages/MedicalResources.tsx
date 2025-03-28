import HealthSection from '../components/HealthSection';

const MedicalResources = () => {
  return (
    <HealthSection
      title="Medical Health Information"
      description="Access general medical information and resources from trusted sources. Learn about common conditions, preventive care, and when to consult healthcare professionals."
      image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    >
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Health Topics</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Preventive Care',
              'Common Conditions',
              'First Aid Basics',
              'Medications',
              'Vaccinations',
              'Health Screenings'
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
          <h3 className="text-xl font-semibold mb-3">Important Notice</h3>
          <p className="text-gray-600 mb-4">
            This information is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <div className="bg-rose-50 p-4 rounded-lg">
            <p className="text-rose-700 font-medium">
              Always consult with qualified healthcare providers about your specific medical conditions and needs.
            </p>
          </div>
        </div>
      </div>
    </HealthSection>
  );
};

export default MedicalResources;