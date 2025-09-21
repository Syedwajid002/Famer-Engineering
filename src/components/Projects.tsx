import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import morjanacover from "../Assets/Morjana/Cover.png";
import daniatcover from "../Assets/Daniat-Wadina/cover.png"
import masarcover from "../Assets/MASAR/cover.jpg"
import { Link } from 'react-router-dom';  // ✅ Correct import

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
      id: "morjana",
      title: "Morjana by NHC",
      category: "civil",
      location: "Doha, Qatar",
      year: "2025 and ongoing",
      description: "Affordable and exquisite luxury housing In Amir Fawaz district Jeddah.",
      cover: morjanacover,
      tags: ["Commercial", "Sustainable", "High-Rise"]
    },
    {
      id: "masar",  // fixed
      title: "MASAR - Al Diyar Al Arabia",
      category: "civil",
      location: "Makkah, Saudi Arabia",
      year: "2024",
      description: "Extending over 1.2 million SQM and with its strategic location at the center of Makkah",
      cover: masarcover,
      tags: ["Marine", "Luxury", "Infrastructure"]
    },
    {
      id: "daniat-wadina", // fixed typo + standardized
      title: "Daniat-Wadina",
      category: "architecture", // match your filter button
      location: "Taif, Makkah",
      year: "2023",
      description: "Comprehensive urban development project including roads, utilities, and smart city integration.",
      cover: daniatcover,
      tags: ["Urban Planning", "Smart City", "Utilities"]
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
        {/* <div className="flex flex-wrap justify-center mb-12 space-x-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                ? 'gradient-gold text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover-lift cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">

      </div>
    </section>
  );
};

export default Projects;
