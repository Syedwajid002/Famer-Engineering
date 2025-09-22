import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Industry Recognition",
      description: "Multiple awards for engineering excellence across the Gulf region"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Expert Team",
      description: "50+ certified engineers and architects with international expertise"
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: "Regional Presence",
      description: "Operations across Saudi Arabia, and the broader GCC"
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: "Vision 2030",
      description: "Aligned with Saudi Arabia's Vision 2030."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
            About OutStanding Dimensions
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 10 years, we have been at the forefront of civil engineering and architectural
            innovation in the Gulf region, shaping skylines and building the infrastructure of tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-display font-semibold text-blue-900 mb-6">
              Engineering Excellence Since 2015
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded in Riyadh with expanded operations in Doha, OutStanding Dimensions stands as a beacon
                of innovation in the civil engineering and architectural landscape. Our commitment to
                excellence has earned us recognition as one of the region's most trusted construction partners.
              </p>

              <p>
                We specialize in large-scale infrastructure projects, from iconic residential complexes
                to cutting-edge commercial developments. Our multidisciplinary approach combines traditional
                Gulf architectural heritage with modern engineering techniques, creating structures that
                honor the past while embracing the future.
              </p>

              <p>
                Our portfolio spans across mega-projects aligned with the ambitious development goals
                of Saudi Arabia's Vision 2030, contributing to the
                transformation of the Gulf region into a global hub of innovation and sustainability.
              </p>
            </div>

            <div className="mt-8">
              <button className="gradient-gold text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="OutStanding Dimensions Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 gradient-navy opacity-20"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-luxury max-w-xs">
              <div className="text-2xl font-bold text-blue-900 mb-1">10+ Years</div>
              <div className="text-gray-600">of architectural excellence in the Gulf region</div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover-lift text-center"
            >
              <div className="mb-4 flex justify-center">{achievement.icon}</div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;