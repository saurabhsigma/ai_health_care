import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Activity } from 'lucide-react';

interface BMIResult {
  bmi: number;
  category: string;
  dietPlan: string[];
  exercisePlan: string[];
}

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = weightInKg / (heightInM * heightInM);

    let category = '';
    let dietPlan: string[] = [];
    let exercisePlan: string[] = [];

    if (bmi < 18.5) {
      category = 'Underweight';
      dietPlan = [
        'Increase caloric intake with nutrient-dense foods',
        'Add healthy fats like nuts and avocados',
        'Consume protein-rich foods',
        'Eat frequent meals throughout the day',
        'Include healthy snacks between meals'
      ];
      exercisePlan = [
        'Focus on strength training',
        'Moderate cardio (2-3 times per week)',
        'Bodyweight exercises',
        'Progressive overload training',
        'Rest adequately between workouts'
      ];
    } else if (bmi < 25) {
      category = 'Normal weight';
      dietPlan = [
        'Maintain balanced diet with all food groups',
        'Eat plenty of fruits and vegetables',
        'Choose whole grains',
        'Include lean proteins',
        'Stay hydrated'
      ];
      exercisePlan = [
        'Mix of cardio and strength training',
        '150 minutes of moderate exercise weekly',
        'Include flexibility training',
        'Try different sports activities',
        'Regular physical activity'
      ];
    } else if (bmi < 30) {
      category = 'Overweight';
      dietPlan = [
        'Create a slight caloric deficit',
        'Increase fiber intake',
        'Limit processed foods',
        'Control portion sizes',
        'Choose low-glycemic foods'
      ];
      exercisePlan = [
        'Regular cardio exercises',
        'High-Intensity Interval Training (HIIT)',
        'Strength training for muscle building',
        'Daily walking',
        'Swimming or cycling'
      ];
    } else {
      category = 'Obese';
      dietPlan = [
        'Consult with a healthcare provider',
        'Focus on whole, unprocessed foods',
        'Monitor portion sizes carefully',
        'Keep a food diary',
        'Stay hydrated with water'
      ];
      exercisePlan = [
        'Start with walking programs',
        'Low-impact exercises',
        'Water aerobics',
        'Gradual increase in activity',
        'Consider working with a trainer'
      ];
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, dietPlan, exercisePlan });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Scale className="h-6 w-6 text-primary-500" />
          <h2 className="text-2xl font-bold text-gray-800">BMI Calculator</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter height in centimeters"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter weight in kilograms"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={calculateBMI}
              disabled={!height || !weight}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate BMI
            </motion.button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-xl font-semibold text-primary-700">
                  Your BMI: {result.bmi}
                </div>
                <div className="text-primary-600">Category: {result.category}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                    <Activity className="h-5 w-5 mr-2 text-primary-500" />
                    Recommended Diet Plan
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {result.dietPlan.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                    <Activity className="h-5 w-5 mr-2 text-primary-500" />
                    Exercise Recommendations
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {result.exercisePlan.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BMICalculator;