import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      position: "CEO, Al-Rashid Development",
      company: "Riyadh, Saudi Arabia",
      content: "OutStanding Dimensions delivered exceptional results on our mixed-use development project. Their attention to detail and commitment to cultural authenticity while embracing modern design principles exceeded our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Fatima Al-Kuwari",
      position: "Project Director",
      company: "Qatar National Development",
      content: "The team's expertise in Gulf architectural heritage combined with sustainable engineering practices made them the perfect partner for our cultural center project. Truly world-class professionals.",
      rating: 5,
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mohammed Al-Saud",
      position: "Investment Manager",
      company: "Kingdom Holdings",
      content: "OutStanding Dimensions's innovative approach to smart infrastructure development has been instrumental in our vision for future cities. Their technical expertise and project management skills are unmatched.",
      rating: 5,
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Nora Al-Thani",
      position: "Urban Planning Consultant",
      company: "Doha Municipality",
      content: "Working with OutStanding Dimensions on our waterfront development was a remarkable experience. They brought creative solutions to complex engineering challenges while respecting our environmental concerns.",
      rating: 5,
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear what our valued clients across the Gulf region say about their experience
            working with our expert engineering and architecture teams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-md hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-yellow-600/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-blue-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Client Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;