import React, { useState } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const projects = [
    {
      id: 1,
      title: "Al Faisaliah Tower Extension",
      category: "architecture",
      location: "Riyadh, Saudi Arabia",
      year: "2023",
      description: "Luxury commercial tower featuring modern Islamic architectural elements with sustainable design principles.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Commercial", "Sustainable", "High-Rise"]
    },
    {
      id: 2,
      title: "Pearl Qatar Marina",
      category: "civil",
      location: "Doha, Qatar",
      year: "2024",
      description: "State-of-the-art marina infrastructure with advanced water management and luxury amenities.",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Marine", "Luxury", "Infrastructure"]
    },
    {
      id: 3,
      title: "King Abdullah Economic City",
      category: "infrastructure",
      location: "Jeddah, Saudi Arabia",
      year: "2023",
      description: "Comprehensive urban development project including roads, utilities, and smart city integration.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Urban Planning", "Smart City", "Utilities"]
    },
    {
      id: 4,
      title: "Lusail Stadium Infrastructure",
      category: "civil",
      location: "Lusail, Qatar",
      year: "2022",
      description: "Advanced infrastructure supporting Qatar's premier stadium with innovative crowd management solutions.",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Sports", "Infrastructure", "Innovation"]
    },
    {
      id: 5,
      title: "NEOM Linear City",
      category: "architecture",
      location: "NEOM, Saudi Arabia",
      year: "2024",
      description: "Futuristic residential architecture contributing to the world's most ambitious urban project.",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Futuristic", "Residential", "Mega-Project"]
    },
    {
      id: 6,
      title: "Corniche Waterfront",
      category: "infrastructure",
      location: "Doha, Qatar",
      year: "2023",
      description: "Elegant waterfront promenade with integrated cultural spaces and advanced flood protection.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Waterfront", "Cultural", "Protection"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of transformative projects that are reshaping the Gulf region's 
            architectural and infrastructure landscape.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 space-x-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'gradient-gold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;