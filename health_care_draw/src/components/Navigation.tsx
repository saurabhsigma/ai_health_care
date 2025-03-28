import { Heart, Brain, Stethoscope, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Brain, text: 'Mental Health', path: '/mental-health' },
    { icon: Heart, text: 'Physical Health', path: '/physical-health' },
    { icon: Stethoscope, text: 'Medical Resources', path: '/medical-resources' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold text-gray-800">HealthHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ icon: Icon, text, path }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center space-x-2 text-gray-600 hover:text-rose-600 transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span>{text}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-rose-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ icon: Icon, text, path }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-rose-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{text}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;