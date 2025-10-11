import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-heading text-xl text-white">Contentora Media</div>
          <div className="mt-2 text-sm">Professional content writing services</div>
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
            <a href="tel:+15551234567" className="hover:text-secondary">
              +1 (555) 123-4567
            </a>
          </div>

          <div className="mt-4">
            <ContactForm />
          </div>
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
