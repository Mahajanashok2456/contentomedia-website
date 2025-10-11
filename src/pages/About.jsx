import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import HighlightCard from '../components/HighlightCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Blog & Article Writing',
    description: 'Insightful, research-backed blog posts tailored to your audience.',
    icon: '📝',
  },
  {
    title: 'Website Content',
    description: 'Homepage, service pages and landing pages written to convert.',
    icon: '🌐',
  },
  {
    title: 'Copywriting',
    description: 'Ad copy, sales pages and email campaigns that drive action.',
    icon: '✍️',
  },
  {
    title: 'Social Media Content',
    description: 'Captions, campaigns and storytelling to grow your reach.',
    icon: '📣',
  },
  {
    title: 'SEO Content',
    description: 'Keyword-led content that ranks without losing voice.',
    icon: '🔎',
  },
  {
    title: 'Technical & Academic Writing',
    description: 'Manuals, papers, reports and documentation with clarity and accuracy.',
    icon: '📚',
  },
  {
    title: 'Editing & Proofreading',
    description: 'Refinement of tone, grammar and flow to publish-ready content.',
    icon: '✂️',
  },
  {
    title: 'Ghostwriting',
    description: 'Original content produced under your byline — stress-free.',
    icon: '�️',
  },
];

export default function About() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.from('.service-card', {
        scrollTrigger: { trigger: servicesRef.current, start: 'top 85%', once: true },
        y: 30,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.from(whyRef.current, {
        scrollTrigger: { trigger: whyRef.current, start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.6,
      });
      gsap.from(contactRef.current, {
        scrollTrigger: { trigger: contactRef.current, start: 'top 85%', once: true },
        y: 20,
        opacity: 0,
        duration: 0.6,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Hero */}
      <section ref={heroRef} className="py-24 px-6 bg-gradient-to-br from-lightBlue to-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              At Contentora Media, the right words transform your brand
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              Content creation is more than writing. We craft content that reflects your brand's
              unique identity and builds meaningful connections. Our simple approach helps you
              communicate with clarity, creativity, and measurable impact.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/" className="inline-block bg-primary text-white px-5 py-3 rounded-lg">
                Back to Home
              </Link>
              <a
                href="#services"
                className="inline-block border border-gray-300 px-5 py-3 rounded-lg"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src="/src/assets/images/logo.svg"
                alt="About media"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section id="services" ref={servicesRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Whether you want to build awareness, launch a campaign, or strengthen your online
            presence — our services cover every stage of your content journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="service-card bg-white p-6 rounded-lg shadow-sm h-full">
                <HighlightCard title={s.title} description={s.description} icon={s.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section ref={whyRef} className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose Contentora Media?
          </h2>
          <p className="text-gray-700 mb-6">
            We deliver impactful, human-first content that's original, affordable and delivered on
            time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold mb-2">Your brand, your voice</h3>
              <p className="text-sm text-gray-600">
                We craft unique, plagiarism-free content that reflects your identity.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold mb-2">Words that work</h3>
              <p className="text-sm text-gray-600">
                Content written to engage, inform and convert your audience.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold mb-2">Affordable excellence</h3>
              <p className="text-sm text-gray-600">
                High-quality content with flexible, budget-friendly packages.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values & process */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-center">
            How we work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Research & Strategy</h4>
              <p className="text-sm text-gray-600">
                We start by understanding your business, audience and competitors.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Writing & Optimization</h4>
              <p className="text-sm text-gray-600">
                Content is crafted for clarity, SEO and conversion.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Review & Delivery</h4>
              <p className="text-sm text-gray-600">
                We refine and deliver on time, with revisions until it's right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        ref={contactRef}
        className="py-20 px-6 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6">
            Have a project or an idea? Tell us about it — we’ll help you bring it to life.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="mailto:info@contentoramedia.com" className="underline">
              info@contentoramedia.com
            </a>
            <a href="tel:+15551234567" className="underline">
              +1 (555) 123-4567
            </a>
          </div>
          <div className="mt-8">
            <Link to="/" className="inline-block bg-white text-primary px-6 py-3 rounded-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
