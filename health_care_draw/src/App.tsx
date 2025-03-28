import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import MentalHealth from './pages/MentalHealth';
import PhysicalHealth from './pages/PhysicalHealth';
import MedicalResources from './pages/MedicalResources';

function App() {
  return (
    // new commit
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/physical-health" element={<PhysicalHealth />} />
            <Route path="/medical-resources" element={<MedicalResources />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;