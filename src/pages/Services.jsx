import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaFileAlt, FaPalette, FaStar, FaChevronDown, FaCheck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Social Media Management',
    description:
      'We manage everything from content creation and scheduling to audience engagement and analytics...',
    icon: FaUsers,
    stats: ['4 Social Media Managers', '15+ Projects completed', '10 Ongoing projects'],
  },
  {
    id: 2,
    title: 'Content Writing',
    description:
      'Your words are powerful—use them to your advantage! From search engine optimized blogs...',
    icon: FaFileAlt,
    stats: ['5 Content Writers', '20 Companies', '130k Dollars saved in a day'],
  },
  {
    id: 3,
    title: 'Graphic Designing',
    description:
      'Give your brand a new visual identity with the help of our graphic design services...',
    icon: FaPalette,
    stats: ['3 Graphic designers', '134 Visualizations made', '10 Ongoing projects'],
  },
];

const testimonials = [
  {
    id: 1,
    content:
      'Contentora Media transformed our social media presence completely. Their strategic approach increased our engagement by 300% in just 3 months.',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    rating: 5,
  },
  {
    id: 2,
    content:
      'The content quality is exceptional. Every piece they create perfectly captures our brand voice and converts visitors into customers.',
    name: 'Michael Chen',
    role: 'SaaS CEO',
    rating: 5,
  },
  {
    id: 3,
    content:
      'Working with Contentora Media has been a game-changer for our business. Their content writing services are top-notch and deliver real results.',
    name: 'Emily Rodriguez',
    role: 'Business Owner',
    rating: 5,
  },
  {
    id: 4,
    content:
      'The graphic design team is incredibly talented. They created a visual identity that perfectly represents our brand and resonates with our audience.',
    name: 'David Kim',
    role: 'Creative Director',
    rating: 5,
  },
];

const pricingPlans = [
  {
    id: 1,
    name: 'Simple Plan',
    price: '$69',
    period: '/month',
    popular: false,
    features: [
      'Basic social media management',
      '5 blog posts per month',
      'Basic graphic design package',
      'Email support',
      'Monthly reporting',
    ],
  },
  {
    id: 2,
    name: 'Business Plan',
    price: '$129',
    period: '/month',
    popular: true,
    features: [
      'Advanced social media management',
      '15 blog posts per month',
      'Complete graphic design package',
      'Priority email & chat support',
      'Weekly reporting',
      'SEO optimization',
      'Content strategy consultation',
    ],
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '$249',
    period: '/month',
    popular: false,
    features: [
      'Complete social media management',
      'Unlimited blog posts',
      'Premium graphic design package',
      '24/7 phone & chat support',
      'Daily reporting & analytics',
      'Advanced SEO optimization',
      'Dedicated account manager',
      'Custom content strategies',
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: 'How quickly can you start working on my project?',
    answer:
      'We typically begin new projects within 24-48 hours of receiving the initial briefing and deposit. Rush projects can be started within 4-6 hours for an additional fee.',
  },
  {
    id: 2,
    question: 'Do you offer revisions on your work?',
    answer:
      'Yes, we include unlimited revisions for all our services. We want to ensure you are completely satisfied with the final deliverables and will work with you until everything meets your expectations.',
  },
  {
    id: 3,
    question: 'What industries do you specialize in?',
    answer:
      'We work with clients across all industries including technology, healthcare, finance, e-commerce, real estate, education, and many more. Our diverse team brings experience from various sectors.',
  },
  {
    id: 4,
    question: 'Can you help with content strategy?',
    answer:
      'Absolutely! Content strategy is one of our core strengths. We can help you develop a comprehensive content calendar, identify your target audience, and create a roadmap for long-term success.',
  },
];

export default function Services() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="text-secondary">Services</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just create content—we craft strategies for each business of any size in any
            industry that drive real results. For whatever reason – be it to increase visibility
            online, with your audience or ultimately leads? Don't hesitate in using our content
            writing services, social media management or data driven marketing strategies as all are
            tailored according to your unique business.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              WHAT DO WE <span className="text-secondary">SERVE?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6 mx-auto">
                  <service.icon className="text-white text-2xl" />
                </div>

                <h3 className="font-heading text-xl font-bold text-primary mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center">{service.description}</p>

                <div className="space-y-3">
                  {service.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="font-semibold text-gray-800">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Take a moment to listen to our <span className="text-secondary">partners</span>
            </h2>
            <p className="text-gray-600">Discover what our clients think about our service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                <div>
                  <div className="font-heading font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Allot your budget <span className="text-secondary">rationally</span> with us
            </h2>
            <p className="text-gray-600">We don't claim us best but we prove with results.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-white rounded-xl shadow-lg p-8 ${
                  plan.popular ? 'border-2 border-secondary transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-secondary text-white hover:bg-secondary/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently asked <span className="text-secondary">questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-gray-50 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-heading text-lg text-primary pr-4">{faq.question}</span>
                  <FaChevronDown
                    className={`text-secondary transition-transform duration-200 flex-shrink-0 ${
                      expandedFaq === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === faq.id && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Contact Section */}
      <section className="py-20 px-6 bg-lightBlue">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Newsletter */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                Join our <span className="text-secondary">Newsletter!</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Get the latest updates on digital marketing trends, tips, and exclusive offers.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Hours */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
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

              {/* Quick Links */}
              <div>
                <h4 className="font-heading text-xl font-bold text-primary mb-4">Quick Links</h4>
                <div className="flex flex-wrap gap-4">
                  <Link to="/" className="text-secondary hover:underline font-semibold">
                    Home
                  </Link>
                  <Link to="/about" className="text-secondary hover:underline font-semibold">
                    About
                  </Link>
                  <Link to="/faq" className="text-secondary hover:underline font-semibold">
                    FAQ
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
