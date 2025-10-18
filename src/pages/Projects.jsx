import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Sunshine Bay Residence',
    description:
      'A stunning luxury waterfront residence featuring contemporary architecture and sustainable design elements. This project showcases our expertise in creating harmonious living spaces that blend modern aesthetics with environmental consciousness.',
    image: 'https://source.unsplash.com/random/800x600?luxury-residence',
    features: [
      'Modern Architecture',
      'Sustainable Design',
      'Waterfront Location',
      'Luxury Finishes',
    ],
  },
  {
    id: 2,
    title: 'Bridgewater Joy Residence',
    description:
      'An architectural masterpiece built on the serene shores of Bridgewater Lake, combining traditional craftsmanship with cutting-edge smart home technology. This residence exemplifies our commitment to creating timeless yet functional living spaces.',
    image: 'https://source.unsplash.com/random/800x600?lake-house-architecture',
    features: [
      'Lakefront Property',
      'Smart Home Technology',
      'Traditional Craftsmanship',
      'Scenic Views',
    ],
  },
  {
    id: 3,
    title: 'Pleasantview Gem Inn',
    description:
      'A boutique family hotel that redefines hospitality with its unique blend of modern comfort and personalized service. Located in the heart of Pleasantview, this inn offers guests an unforgettable experience with attention to every detail.',
    image: 'https://source.unsplash.com/random/800x600?family-hotel-exterior',
    features: ['Boutique Hotel', 'Personalized Service', 'Modern Amenities', 'Prime Location'],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR PROJECTS
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our portfolio of exceptional projects that showcase our commitment to
            excellence, innovation, and client satisfaction across various industries and scales.
          </motion.p>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 px-6 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center bg-lightBlue rounded-lg px-4 py-3"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm font-semibold text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <section className="py-20 px-6 bg-lightBlue" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Hours */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Contact Information */}
              <div>
                <h4 className="font-heading text-xl font-bold text-primary mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Email:</span>
                    <a
                      href="mailto:info@contentoramedia.com"
                      className="text-secondary hover:underline"
                    >
                      info@contentoramedia.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">Phone:</span>
                    <a href="tel:+15551234567" className="text-secondary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h4 className="font-heading text-xl font-bold text-primary mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-800">Monday - Saturday:</span>
                    <span className="text-gray-600">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ContentOra Media Tagline */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-heading text-2xl font-bold text-primary mb-4">
                ContentOra Media
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Your trusted partner in digital marketing and content creation. We transform ideas
                into impactful digital experiences that drive results and build lasting connections
                with your audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
