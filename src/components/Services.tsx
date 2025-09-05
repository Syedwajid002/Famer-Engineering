import React from 'react';
import { Building2, Cog, PenTool, Shield, Zap, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-yellow-600" />,
      title: "Civil Engineering",
      description: "Comprehensive infrastructure development including roads, bridges, utilities, and urban planning solutions.",
      features: ["Infrastructure Design", "Transportation Systems", "Water Management", "Structural Analysis"]
    },
    {
      icon: <PenTool className="w-12 h-12 text-yellow-600" />,
      title: "Architectural Design",
      description: "Innovative architectural solutions blending modern aesthetics with traditional Gulf cultural elements.",
      features: ["Commercial Buildings", "Residential Complexes", "Cultural Centers", "Sustainable Design"]
    },
    {
      icon: <Cog className="w-12 h-12 text-yellow-600" />,
      title: "Project Management",
      description: "End-to-end project delivery with rigorous quality control and timely completion guarantees.",
      features: ["Timeline Management", "Quality Assurance", "Cost Optimization", "Risk Assessment"]
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-600" />,
      title: "Engineering Consulting",
      description: "Expert consulting services for complex engineering challenges and regulatory compliance.",
      features: ["Technical Analysis", "Regulatory Compliance", "Feasibility Studies", "Risk Management"]
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Smart Infrastructure",
      description: "Cutting-edge smart city solutions integrating IoT, automation, and sustainable technologies.",
      features: ["Smart Buildings", "IoT Integration", "Energy Efficiency", "Automation Systems"]
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: "Design-Build Services",
      description: "Seamless integration of design and construction phases for optimal project outcomes.",
      features: ["Unified Delivery", "Cost Control", "Quality Integration", "Fast-Track Construction"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering and architectural solutions tailored to the unique needs 
            and aspirations of the Gulf region's rapidly evolving landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover-lift shadow-md hover:shadow-luxury transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 gradient-gold rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="gradient-navy rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let our expert team bring your vision to life with innovative engineering solutions.
              </p>
              <button className="gradient-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-luxury transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;