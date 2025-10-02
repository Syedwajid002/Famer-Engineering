import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../Assets/OSlogo.png"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '#about',
      dropdown: [
        { name: 'Our Story', href: '#about' },
        { name: 'Leadership Team', href: '#about' },
        { name: 'Certifications', href: '#about' }
      ]
    },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Civil Engineering', href: '#services' },
        { name: 'Architecture Design', href: '#services' },
        { name: 'Project Management', href: '#services' },
        { name: 'Consulting', href: '#services' }
      ]
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10  rounded-lg flex items-center justify-center">
              <img src={logo} alt="OutStanding Dimensions" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-900">OutStanding Dimensions</h1>
              <p className="text-xs text-gray-600">Civil & Architecture</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-luxury rounded-lg py-2 z-50">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition-colors duration-200"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="gradient-gold text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 gradient-gold text-white px-6 py-2 rounded-lg font-medium">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;