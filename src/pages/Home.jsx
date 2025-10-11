import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Blog Writing',
    description: 'Engaging blog posts that attract and retain readers.',
    icon: '📝',
  },
  {
    title: 'Website Content',
    description: 'Clear, SEO-friendly website pages that convert.',
    icon: '🌐',
  },
  { title: 'Copywriting', description: 'High-converting sales and landing page copy.', icon: '✍️' },
  {
    title: 'Social Media Content',
    description: 'Short-form content tailored to each platform.',
    icon: '📣',
  },
  {
    title: 'SEO Writing',
    description: 'Keyword-optimized content for organic growth.',
    icon: '🔎',
  },
  {
    title: 'Graphic Designing',
    description: 'Visuals that communicate your brand message.',
    icon: '🎨',
  },
];

const featuredServices = [
  {
    title: 'Social Media Management',
    description:
      'Posting schedules, community management, trend research and competitor analysis to grow your channels.',
    icon: '📱',
  },
  {
    title: 'Content Writing',
    description: 'Strong content foundations for websites and blogs that boost SEO and engagement.',
    icon: '✍️',
  },
  {
    title: 'Graphic Designing',
    description: 'Visual designs that elevate your brand and convert visitors into customers.',
    icon: '🎨',
  },
];

export default function Home() {
  const rootRef = useRef(null);
  const heroRef = useRef();
  const heroImageRef = useRef();
  const servicesRef = useRef();
  const featuredRef = useRef();
  const testimonialsRef = useRef();
  const benefitsRef = useRef();
  const pricingRef = useRef();
  const newsletterRef = useRef();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from('.hero-title, .welcome-title', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.from('.hero-sub, .welcome-sub', { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
        gsap.from('.hero-cta, .welcome-cta', { y: 20, opacity: 0, duration: 0.6, delay: 0.4 });
      }

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 80%',
          once: true,
        },
        y: prefersReduced ? 0 : 30,
        opacity: 0,
        stagger: 0.08,
        duration: prefersReduced ? 0.2 : 0.6,
        ease: 'power3.out',
      });

      // Featured services reveal
      gsap.from('.featured-card', {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 85%',
          once: true,
        },
        y: prefersReduced ? 0 : 30,
        opacity: 0,
        stagger: 0.08,
        duration: prefersReduced ? 0.2 : 0.6,
        ease: 'power3.out',
      });

      // Hero overlays subtle reveal
      gsap.from('.hero-overlay', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 90%',
          once: true,
        },
        x: prefersReduced ? 0 : 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Parallax effect for hero image (subtle)
      if (!prefersReduced && heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.from(newsletterRef.current, {
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: 'top 90%',
          once: true,
        },
        y: prefersReduced ? 0 : 20,
        opacity: 0,
        duration: prefersReduced ? 0.2 : 0.6,
        ease: 'power3.out',
      });

      gsap.from(testimonialsRef.current, {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          once: true,
        },
        y: prefersReduced ? 0 : 20,
        opacity: 0,
        duration: prefersReduced ? 0.2 : 0.6,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero (media-style split) */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center bg-gradient-to-br from-lightBlue to-white"
      >
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: content */}
            <div className="md:col-span-6 lg:col-span-7">
              <h1 className="hero-title font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Welcome to ContentOra Media
              </h1>
              <p className="hero-sub font-body text-lg md:text-xl text-gray-700 mb-6 max-w-prose">
                Your website looks unengaging or inconsistent, drives less traffic, or feels
                irrelevant? No more. Our recognised collaborative team of reliable marketing
                freelancers uses custom digital marketing strategies to find your right audience and
                convert them into loyal customers.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <Link
                  to="/about"
                  className="hero-cta bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Start Your Free Strategy Session
                </Link>
                <Link to="/faq" className="text-primary font-medium">
                  FAQ
                </Link>
              </div>

              <div className="flex gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-sm font-medium text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                    <circle cx="12" cy="12" r="10" fill="#2563eb" />
                    <path
                      d="M9.5 12.5L11.5 14.5 15 11"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Data-driven growth
                </span>
                <span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-sm font-medium text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                    <rect x="4" y="4" width="16" height="16" rx="3" fill="#2563eb" />
                  </svg>
                  Affordable strategies
                </span>
                <span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-sm font-medium text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" fill="#2563eb" />
                  </svg>
                  Reliable team
                </span>
              </div>
            </div>

            {/* Right: layered media */}
            <div className="md:col-span-6 lg:col-span-5">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    ref={heroImageRef}
                    src="/src/assets/images/logo.svg"
                    alt="media"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* overlay small cards */}
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow p-4 w-48 hero-overlay">
                  <div className="text-xs text-gray-500">Engagement</div>
                  <div className="font-semibold">+24% this month</div>
                </div>

                <div className="absolute top-6 -right-6 bg-white rounded-xl shadow p-3 w-36 hero-overlay">
                  <div className="text-xs text-gray-500">Impressions</div>
                  <div className="font-semibold">1.2M</div>
                </div>

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full shadow-lg hero-overlay">
                  Featured media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Value props */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="welcome-title font-heading text-3xl md:text-4xl font-bold">
              Fix your growth struggles and start your journey with us
            </h2>
            <p className="welcome-sub font-body text-lg text-gray-700 mt-4">
              Understanding overarching trends of your business and market saves time, money and
              energy — and helps you dominate your market.
            </p>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article
              className="benefit-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-heading font-semibold mb-2">Client insights</h3>
              <p className="text-sm text-gray-600">
                Understand who your customers truly are and what they want.
              </p>
            </article>

            <article
              className="benefit-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading font-semibold mb-2">Increased efficiency</h3>
              <p className="text-sm text-gray-600">
                Streamline content operations to save time and scale.
              </p>
            </article>

            <article
              className="benefit-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-heading font-semibold mb-2">Process automation</h3>
              <p className="text-sm text-gray-600">
                Automate repetitive tasks to focus on strategy.
              </p>
            </article>

            <article
              className="benefit-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading font-semibold mb-2">Data-driven innovation</h3>
              <p className="text-sm text-gray-600">
                Use analytics to test, learn, and iterate fast.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* You are not just Our Client */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            You are not just Our Client!
          </h2>
          <p className="mb-6 text-gray-700">
            We are committed to helping businesses across industries using analytics and tracking to
            deliver data-driven growth with affordable digital marketing services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              className="client-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-heading font-semibold mb-2">No guess works</h4>
              <p className="text-sm text-gray-600">
                Decisions backed by data, research and insights.
              </p>
            </article>

            <article
              className="client-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="font-heading font-semibold mb-2">Small business or a start ups</h4>
              <p className="text-sm text-gray-600">
                We care for small businesses and tailor strategies to budgets.
              </p>
            </article>

            <article
              className="client-card bg-white p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
              role="article"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">🎁</div>
              <h4 className="font-heading font-semibold mb-2">Discount and Commitment</h4>
              <p className="text-sm text-gray-600">
                50% introductory discount for initial months on select plans.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About / House where affordability... */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              House where affordability, expertise and reliability comes together
            </h2>
            <p className="text-gray-700 mb-4">
              We tailor every strategy according to your business needs using custom digital
              marketing strategies to ensure you get the correct result so you don't waste your time
              and effort searching.
            </p>
            <p className="text-gray-700">
              With over 3 years of experience working with an expert freelancers team, we have
              designed solutions to help businesses grow their online visibility and boost
              engagement and conversion rates.
            </p>
          </div>
          <div>
            <div className="bg-lightBlue rounded-lg aspect-[4/5] flex items-center justify-center">
              <img
                src="/src/assets/images/logo.svg"
                alt="Decor"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-4">Custom solutions for your digital growth</p>
        </div>

        <div ref={featuredRef} className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((f) => (
            <div key={f.title} className="service-card featured-card h-full">
              <ServiceCard title={f.title} description={f.description} icon={f.icon} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">Why Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-heading font-semibold mb-2">No Off-the-Shelf Solutions</h4>
              <p className="text-sm text-gray-600">
                We construct your business strategy from ground zero.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-heading font-semibold mb-2">Work One-on-One with Experts</h4>
              <p className="text-sm text-gray-600">
                Direct collaboration with experts, not project managers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-heading font-semibold mb-2">Commitment to Results</h4>
              <p className="text-sm text-gray-600">We focus on impact and measurable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
            Our Content Writing Services
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4">
            We cover a wide range of content types to meet your business needs.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <ServiceCard title={s.title} description={s.description} icon={s.icon} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 px-6 bg-lightBlue testimonials">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="container mx-auto">
          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing / Plans */}
      <section ref={pricingRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Allot your budget rationally with us
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4">
            We focus on results and commit later with a 50% introductory discount for initial
            months.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pricing-card bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-heading text-xl font-semibold">Simple Plan</h3>
            <div className="text-2xl font-bold mt-2">$60/month</div>
            <p className="mt-4 text-sm text-gray-600">Best for freelancers or small startups</p>
          </div>
          <div className="pricing-card bg-white p-6 rounded-lg shadow-sm text-center border-2 border-primary">
            <h3 className="font-heading text-xl font-semibold">Business Plan</h3>
            <div className="text-2xl font-bold mt-2">$120/month</div>
            <p className="mt-4 text-sm text-gray-600">Ideal for growing brands or SMEs</p>
          </div>
          <div className="pricing-card bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-heading text-xl font-semibold">Premium Plan</h3>
            <div className="text-2xl font-bold mt-2">$240/month</div>
            <p className="mt-4 text-sm text-gray-600">
              Designed for established brands with aggressive growth goals
            </p>
          </div>
        </div>
      </section>

      {/* Projects / Social proof CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Projects</h2>
          <p className="font-body text-lg text-gray-600 mt-4">
            These are some of the successful projects delivered to our clients.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 1</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 2</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 3</div>
        </div>
      </section>

      {/* Newsletter */}
      <section ref={newsletterRef} className="py-12 px-6 bg-lightBlue">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Join our Newsletter</h3>
          <p className="mb-4">
            Our newsletter shares freelance marketing tips, digital marketing trends and case
            studies.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault(); /* TODO: wire newsletter */
            }}
            className="flex gap-2"
          >
            <input
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 p-2 rounded"
            />
            <button className="bg-primary text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Elevate Your Content?
          </h2>
          <p className="font-body text-lg mt-4 mb-8">
            Contact us to discuss your content needs and get a custom quote.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/about" className="bg-white text-primary px-8 py-3 rounded-lg">
              About Us
            </Link>
            <Link to="/faq" className="border-2 border-white text-white px-8 py-3 rounded-lg">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
