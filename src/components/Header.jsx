import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// Prefer the project root AVIF you provided; if absent, fall back to the asset folder AVIF
import logoAvif from '../assets/images/logo.png';
import logoWebp from '../assets/images/logo.webp';
import logoSvg from '../assets/images/logo.svg';
import logoPng from '../assets/images/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function closeMenu() {
    setOpen(false);
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
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
        <nav className="hidden md:flex items-center gap-6 font-body font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Contact
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
            <Link to="/services" onClick={closeMenu} className="block font-body">
              Services
            </Link>
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
          </div>
        </div>
      )}
    </header>
  );
}
