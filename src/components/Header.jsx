import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// Prefer the project root AVIF you provided; if absent, fall back to the asset folder AVIF
import logoAvif from '../assets/images/logo.png';
import logoWebp from '../assets/images/logo.webp';
import logoSvg from '../assets/images/logo.svg';
import logoPng from '../assets/images/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function closeMenu() {
    setOpen(false);
    setMobileServicesOpen(false);
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-lg md:text-xl text-primary flex items-center gap-4"
        >
          <picture>
            <source srcSet={logoAvif} type="image/avif" />
            <source srcSet={logoWebp} type="image/webp" />
            <source srcSet={logoSvg} type="image/svg+xml" />

            <img
              src={logoPng}
              alt="Contentora Media logo"
              width={375}
              height={375}
              className="w-[50px] h-[50px] object-contain"
            />
          </picture>
          <span className="font-semibold">
            Contentora <span className="text-secondary">Media</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 font-body font-semibold relative">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            About
          </NavLink>
          {/* Services mega menu (desktop) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setServicesOpen(false);
                if (e.key === 'ArrowDown') {
                  const firstLink = document.querySelector('#services-mega-menu a');
                  firstLink && firstLink.focus();
                }
              }}
              className={`font-semibold ${
                servicesOpen ? 'text-secondary' : 'hover:text-secondary hover:underline'
              }`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-mega-menu"
            >
              Services {/** indicator */}
              <span className="inline-block ml-1 text-xs">{servicesOpen ? '▲' : '▼'}</span>
            </button>

            {servicesOpen && (
              <div
                id="services-mega-menu"
                className="absolute left-1/2 -translate-x-1/2 top-full w-[min(90vw,1000px)] bg-white border shadow-2xl rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-50 animate-fadeIn"
                role="menu"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Column: SEO */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    SEO Services
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/seo" className="block text-gray-900 hover:text-secondary">
                        SEO
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column: PPC */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    Pay Per Click (PPC)
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ppc" className="block text-gray-900 hover:text-secondary">
                        PPC Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column: Content */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    Content Marketing
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/content-writing"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Content Writing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/proofreading"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Proofreading
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/paid-guest-posting"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Paid Guest Posting
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column: Messaging & Email */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    Messaging & Email
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/email-marketing"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Email Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/whatsapp-marketing"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        WhatsApp Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column: Web Development */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    Web Design & Development
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/website-development"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Website Development
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column: Talent & Reputation */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wide text-primary mb-3">
                    Talent & Reputation
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/hiring"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Hiring
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/reviews"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        Reviews Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cv-writing"
                        className="block text-gray-900 hover:text-secondary"
                      >
                        CV Writing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'hover:text-secondary hover:underline'
            }
          >
            Privacy Policy
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" onClick={closeMenu} className="block font-body">
              Home
            </Link>
            <Link to="/about" onClick={closeMenu} className="block font-body">
              About
            </Link>
            {/* Mobile Services accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full text-left font-body font-semibold flex items-center justify-between"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <span className="ml-2">{mobileServicesOpen ? '−' : '+'}</span>
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link to="/services/seo" onClick={closeMenu} className="block">
                    SEO
                  </Link>
                  <Link to="/services/ppc" onClick={closeMenu} className="block">
                    PPC Marketing
                  </Link>
                  <Link to="/services/content-writing" onClick={closeMenu} className="block">
                    Content Writing
                  </Link>
                  <Link to="/services/proofreading" onClick={closeMenu} className="block">
                    Proofreading
                  </Link>
                  <Link to="/services/paid-guest-posting" onClick={closeMenu} className="block">
                    Paid Guest Posting
                  </Link>
                  <Link to="/services/email-marketing" onClick={closeMenu} className="block">
                    Email Marketing
                  </Link>
                  <Link to="/services/whatsapp-marketing" onClick={closeMenu} className="block">
                    WhatsApp Marketing
                  </Link>
                  <Link to="/services/website-development" onClick={closeMenu} className="block">
                    Website Development
                  </Link>
                  <Link to="/services/hiring" onClick={closeMenu} className="block">
                    Hiring
                  </Link>
                  <Link to="/services/reviews" onClick={closeMenu} className="block">
                    Reviews
                  </Link>
                  <Link to="/services/cv-writing" onClick={closeMenu} className="block">
                    CV Writing
                  </Link>
                </div>
              )}
            </div>
            <Link to="/projects" onClick={closeMenu} className="block font-body">
              Projects
            </Link>
            <Link to="/blog" onClick={closeMenu} className="block font-body">
              Blog
            </Link>
            <Link to="/faq" onClick={closeMenu} className="block font-body">
              FAQ
            </Link>
            <Link to="/contact" onClick={closeMenu} className="block font-body">
              Contact
            </Link>
            <Link to="/privacy-policy" onClick={closeMenu} className="block font-body">
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
