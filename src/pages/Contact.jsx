import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { IoMailUnread } from 'react-icons/io5';

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Contentora Media | Get in Touch</title>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero/Intro Section */}
        <section
          className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white"
          data-aos="fade-up"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
              Want to Get in <span className="text-secondary">Touch</span>? Write to{' '}
              <span className="text-secondary">us!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              For any enquiries, or if you are in the market for freelance digital marketing
              services...
            </p>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                <span className="text-secondary">Follow</span> us!
              </h2>
              <p className="text-lg text-gray-700">
                Stay connected with ContentOra Media on social media
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/company/contentora-media/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaLinkedin className="text-4xl text-gray-600 group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/contentora_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaInstagram className="text-4xl text-gray-600 group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/rai_abhigy84065"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaTwitter className="text-4xl text-gray-600 group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089201208162"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaFacebookSquare className="text-4xl text-gray-600 group-hover:text-secondary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Contact <span className="text-secondary">us</span>
              </h2>
              <p className="text-lg text-gray-700">
                Whether you have a request, a query, or want to work with us, use the form below to
                get in touch with our team.
              </p>
            </div>

            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-lightBlue py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Newsletter Section */}
              <div>
                <h3 className="font-heading text-primary text-2xl font-bold mb-4">
                  Join our Newsletter!
                </h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest news, insights, and exclusive offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                  />
                  <button className="bg-secondary hover:bg-orange-600 px-6 py-2 rounded-r-lg font-semibold transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Hours Section */}
              <div>
                <h3 className="font-heading text-primary text-2xl font-bold mb-4">Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="text-gray-900 font-semibold">Monday - Friday:</span> 9:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-gray-900 font-semibold">Saturday:</span> 10:00 AM - 4:00
                    PM
                  </p>
                  <p>
                    <span className="text-gray-900 font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>

              {/* Contacts Section */}
              <div>
                <h3 className="font-heading text-primary text-2xl font-bold mb-4">Contacts</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    {' '}
                    <IoMailUnread className="text-lg mr-1.5" />
                    <a
                      href="mailto:info@contentora.media"
                      className="hover:text-primary transition-colors"
                    >
                      info@contentora.media
                    </a>
                  </div>
                  <div className="flex items-center">
                    {' '}
                    <FaPhoneAlt className="text-md mr-1.5" />
                    <a href="tel:+918450049035" className="hover:text-primary transition-colors">
                      +91 8450049035
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="border-t border-gray-300 mt-12 pt-8 text-center">
              <p className="text-2xl font-heading font-bold">
                <span className="text-primary">ContentOra</span>{' '}
                <span className="text-secondary">Media</span>
              </p>
              <p className="text-gray-700 mt-2">
                Your trusted partner in digital marketing excellence
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
