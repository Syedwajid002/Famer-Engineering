import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import morjanacover from "../Assets/Morjana/Cover.png";
import daniatcover from "../Assets/Daniat-Wadina/cover.png"
import masarcover from "../Assets/MASAR/cover.jpg"
import kingAbdullahcover from "../Assets/King Abdullah Sports City/cover.png"
import Alharamain from "../Assets/Al-haramain/cover.png"
import CentroCover from "../Assets/CentroRotana/cover.png"
import KAIAcover from "../Assets/KAIA/cover.png"
import bankCover from "../Assets/GulfBank/cover.png"
import cornicheCover from "../Assets/Jeddah Corniche/cover.png"
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
      location: "Jeddah, Saudi Arabia",
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
    },
    {
      id: "AlHaramain", // fixed typo + standardized
      title: "AL Haram Expansion Project Makkah ",
      category: "Network and Security", // match your filter button
      location: "Makkah, Saudi Arabia",
      year: "2024",
      description: "The project focused on IT and low-voltage systems, including network administration for the building, hardware maintenance, and installation of integrated security solutions such as CCTV cameras and access points. Additionally, it covered fire alarm systems using FM200, as well as EMT and PVC conduit installation for power and data outlets, ensuring reliable infrastructure and safety compliance for the Al Haram Expansion.",
      cover: Alharamain,
      tags: ["Networking", "Security Systems", "Fire Alarms"]
    },
    {
      id: "CentroRotanaHotel", // fixed typo + standardized
      title: "Centro Rotana Hotel Project",
      category: "Interior", // match your filter button
      location: "Riyadh, Saudi Arabia",
      year: "2024",
      description: "The project involved the interior fit-out and systems installation for Centro Rotana Hotel’s Main Lobby and Meeting Rooms. Work included modern design implementation with premium finishes, integrated lighting, and seating arrangements to enhance guest experience. Additionally, the scope covered structured cabling, power distribution, and low-voltage systems to support security, communication, and operational efficiency, ensuring a luxurious yet functional hospitality environment.",
      cover: CentroCover,
      tags: ["Interiror", "Design"]
    },
    {
      id: "KingAbdulAzizInternationalAirport", // fixed typo + standardized
      title: "King Abdul Aziz International Airport",
      category: "MEP", // match your filter button
      location: "Jeddah, Saudi Arabia",
      year: "2024",
      description: "The KAIA Jeddah project included installation of cable trays and trunks, deployment of network systems, structured cabling, and support to ICAD for seamless integration of airport infrastructure.",
      cover: KAIAcover,
      tags: ["Network systems", "Cabling"]
    },
    {
      id: "GulfInternationalBank", // fixed typo + standardized
      title: "Gulf International Bank Main Branch",
      category: "MEP", // match your filter button
      location: "Jeddah, Saudi Arabia",
      year: "2024",
      description: "The project involved comprehensive electrical and IT infrastructure setup, including installation of EMT & PVC conduits, cable trays, AC/DC cabling, lighting fixtures, data cabinets, IPODs, mega screens, HVAC systems, fire protection systems, raised flooring, and gypsum ceilings. It also included termination of EMDB panels, metering room connections, data Cat6 cabling, and providing support to site technology and the GIB IT team",
      cover: bankCover,
      tags: ["Security Systems", "Fire Alarms", "Power Outlet"]
    },
    {
      id: "Corniche", // fixed typo + standardized
      title: "Middle Corniche Project",
      category: "Electrical", // match your filter button
      location: "Jeddah, Saudi Arabia",
      year: "2024",
      description: "The project scope included pulling and termination of low-voltage power cables, installation of cable trunks, and complete cable labeling, dressing, and testing. It also covered cable termination, system testing, and commissioning to ensure reliable performance and compliance with project standards.",
      cover: cornicheCover,
      tags: ["Cabling", "low-voltage power cables"]
    },
    {
      id: "KingAbdullahSportsCity", // fixed typo + standardized
      title: "King Abdullah Sports City Jeddah",
      category: "MEP", // match your filter button
      location: "Jeddah, Saudi Arabia",
      year: "2024",
      description: "Project involves installation and commissioning of security systems (CCTV, access points, fire alarm with FM200, linear technology system), conduit works (EMT & PVC), cable pulling, termination, labeling, dressing, testing, and tray installation, along with GENT ATS, MDB, LVSR, and LVSD panel board installation.",
      cover: kingAbdullahcover,
      tags: ["Security Systems", "Fire Alarms", "Power Outlet"]
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
                    {project.title.length > 25
                      ? project.title.slice(0, 30) + "..."
                      : project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed"><p>
                    {project.description.length > 30
                      ? project.description.slice(0, 30) + "..."
                      : project.description}
                  </p>
                  </p>
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
