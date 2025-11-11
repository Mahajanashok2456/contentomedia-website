import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import ContactForm from './ContactForm';
import logoBtm from '../assets/images/image.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src={logoBtm}
            alt="Contentora Media logo"
            width={200}
            height={200}
            className="w-[50px] h-[50px] rounded-md mb-2 object-contain"
          />
          <div className="font-heading text-xl text-white">ContentOra Media</div>
          <div className="mt-2 text-sm">
            Give your website wings to fly high and thrive with ContentOra Media!
          </div>
        </div>

        <div>
          <div className="font-heading text-lg mb-4 text-white">Quick Links</div>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary">
              About
            </Link>
            <Link to="/faq" className="hover:text-secondary">
              FAQ
            </Link>
            <Link to="/privacy-policy" className="hover:text-secondary">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div>
          <div className="font-heading text-lg mb-4 text-white">Contact Us</div>
          <div className="text-sm">
            Email:{' '}
            <a href="mailto:info@contentoramedia.com" className="hover:text-secondary">
              info@contentoramedia.com
            </a>
          </div>
          <div className="text-sm mt-2">
            Phone:{' '}
            <a href="tel:+918450049035" className="hover:text-secondary">
              +91 8450049035
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-4">
            <div className="font-heading text-lg mb-3 text-white">Follow Us</div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/contentora_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/contentora-media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors cursor-not-allowed opacity-50"
                aria-label="YouTube (Coming Soon)"
                onClick={(e) => e.preventDefault()}
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors cursor-not-allowed opacity-50"
                aria-label="Twitter (Coming Soon)"
                onClick={(e) => e.preventDefault()}
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* <div className="mt-4">
            <ContactForm />
          </div> */}
        </div>

        <div>
          <div className="font-heading text-lg mb-4 text-white">Hours</div>
          <div className="text-sm">MON-SAT - 9:00 AM - 10:00 PM</div>
          <div className="text-sm mt-2">SUNDAY - Closed</div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          © 2025 Contentora Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
