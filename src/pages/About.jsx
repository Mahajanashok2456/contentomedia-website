import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import HighlightCard from '../components/HighlightCard';
import ServiceCard from '../components/ServiceCard';
import { FaUsers, FaBloggerB, FaCopyright, FaStar, FaFileAlt } from 'react-icons/fa';
import { CgWebsite, CgInsights } from 'react-icons/cg';
import { TiMediaPlay } from 'react-icons/ti';
import { TbSeo } from 'react-icons/tb';
import { BiSolidBookContent } from 'react-icons/bi';
import { MdInsights, MdAddBusiness, MdEmail } from 'react-icons/md';
import { BsGraphUpArrow, BsDatabaseFillGear } from 'react-icons/bs';
import { VscServerProcess } from 'react-icons/vsc';
import { FaSackDollar, FaHandHoldingDollar } from 'react-icons/fa6';
import { GiThink } from 'react-icons/gi';
import { RiWhatsappLine } from 'react-icons/ri';

import {
  LoadingScreen,
  FloatingElements,
  ScrollProgress,
  pageVariants,
  heroVariants,
  titleVariants,
  subtitleVariants,
  sectionVariants,
  cardVariants,
} from '../utils/pageAnimations.jsx';
import logoSvg from '../assets/images/logo.svg';
import AboutImg from '../assets/images/about.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media strategy and content management.',
    icon: TiMediaPlay,
  },
  {
    title: 'PPC',
    description: 'Pay-per-click advertising campaigns for targeted traffic.',
    icon: BsGraphUpArrow,
  },
  {
    title: 'Content Writing',
    description: 'High-quality, engaging content for all platforms.',
    icon: BiSolidBookContent,
  },
  {
    title: 'Proofreading',
    description: 'Professional proofreading and editing services.',
    icon: FaCopyright,
  },
  {
    title: 'Paid Guest Posting',
    description: 'Strategic guest posting to build authority.',
    icon: FaBloggerB,
  },
  {
    title: 'SEO',
    description: 'Search engine optimization for better visibility.',
    icon: TbSeo,
  },
  {
    title: 'Hiring',
    description: 'Talent acquisition and recruitment services.',
    icon: MdAddBusiness,
  },
  {
    title: 'WhatsApp Marketing',
    description: 'Direct marketing through WhatsApp channels.',
    icon: RiWhatsappLine,
  },
  {
    title: 'Email Marketing',
    description: 'Effective email campaigns to engage audiences.',
    icon: MdEmail,
  },
  {
    title: 'Reviews',
    description: 'Managing and generating customer reviews.',
    icon: FaStar,
  },
  {
    title: 'CV Writing',
    description: 'Professional CV and resume writing services.',
    icon: FaFileAlt,
  },
  {
    title: 'Website Development',
    description: 'Custom website design and development.',
    icon: CgWebsite,
  },
];

export default function About() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const contactRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

      // Update progress bar
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${percent})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { y: 25, opacity: 0, duration: 0.4, ease: 'power3.out' });
      // Removed conflicting service-card GSAP animation to let Framer Motion handle it
      gsap.from(whyRef.current, {
        scrollTrigger: { trigger: whyRef.current, start: 'top 85%', once: true },
        y: 15,
        opacity: 0,
        duration: 0.4,
      });
      gsap.from(contactRef.current, {
        scrollTrigger: { trigger: contactRef.current, start: 'top 85%', once: true },
        y: 15,
        opacity: 0,
        duration: 0.4,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Contentora Media | Digital Marketing Experts</title>
      </Helmet>

      <div ref={rootRef} className="relative overflow-hidden">
        {/* Loading Screen - Disabled for faster experience */}
        {/* <AnimatePresence>
        {isPageLoading && (
          <LoadingScreen
            isVisible={isPageLoading}
            onComplete={() => setIsPageLoading(false)}
          />
        )}
      </AnimatePresence> */}

        {/* Floating Background Elements */}

        {/* Scroll Progress Indicator */}
        <ScrollProgress progressRef={progressRef} />

        {/* Hero */}
        <motion.section
          ref={heroRef}
          className="py-24 px-6 bg-gradient-to-br from-lightBlue to-white"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
                whileHover="hover"
              >
                At Contentora <span className="text-secondary">Media</span>, the right words
                transform your brand
              </motion.h1>
              <motion.p
                className="text-lg text-gray-700 max-w-3xl leading-relaxed"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
              >
                Content creation is more than writing. We craft content that reflects your brand's
                unique identity and builds meaningful connections. Our simple approach helps you
                communicate with clarity, creativity, and measurable impact.
              </motion.p>
              <motion.div
                className="mt-6 flex gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="inline-block bg-primary text-white px-5 py-3 rounded-lg">
                    Back to Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#services"
                    className="inline-block border border-gray-300 px-5 py-3 rounded-lg"
                  >
                    Our Services
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <img src={AboutImg} alt="About media" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services list */}
        <motion.section
          id="services"
          ref={servicesRef}
          className="py-20 px-6 bg-white"
          data-aos="fade-up"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        >
          <div className="container mx-auto text-center mb-12">
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-6"
              variants={titleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
              whileHover="hover"
            >
              Our <span className="text-secondary">Services</span>
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 max-w-2xl mx-auto"
              variants={subtitleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7, duration: 0.3, ease: 'easeOut' }}
            >
              Whether you want to build awareness, launch a campaign, or strengthen your online
              presence — our services cover every stage of your content journey.
            </motion.p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card bg-blue-50 border-2 border-blue-200 hover:border-blue-400 p-6 rounded-lg shadow-sm h-full flex flex-col"
              >
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  icon={<s.icon className="text-white text-2xl" />}
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why choose us */}
        <section className="py-20 px-6 bg-white" data-aos="fade-up">
          <div ref={whyRef} className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why choose Contentora <span className="text-secondary">Media</span>?
            </h2>
            <p className="text-gray-700 mb-7">
              We focus on delivering our clients content that is impactful. The content delivered
              will connect with your audience and brand value. We ensure that it feels unique and
              relatable. We custom-edit and make our content to reflect your brand's unique identity
              and value. We pride ourselves on creating unique, AI and plagiarism free content. You
              can trust us with your brand's digital image.We provide a variety of flexible and
              affordable packages. We facilitate the access to quality content for small, medium and
              large industries. We value your time, so we provide valuable content without much
              delay. We guarantee reliable delivery without making any compromises on the quality.
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 mt-20">
              Why are we the <span className="text-secondary">best?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">
                  Human first approach
                </h3>
                <p className="text-sm text-gray-600">
                  We write for people. We make sure our human-written content is ranked high in the
                  algorithm by integrating keywords in it. We also ensure that your message will
                  content automatically with your audience.
                </p>
              </article>

              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">
                  Your brand, your voice
                </h3>
                <p className="text-sm text-gray-600">
                  We firmly believe that your brand deserves its own unique identity. Your brand
                  awareness depends on the content that is visible on your website and social media
                  handle. We are dedicated to custom designing and making your content that is AI
                  and plagiarism-free.
                </p>
              </article>

              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">
                  Affordable excellence
                </h3>
                <p className="text-sm text-gray-600">
                  We don't think that top-notch content has to be accompanied by a lot of money. We
                  have put together budget-friendly packages for you to choose from.
                </p>
              </article>

              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">
                  Original and authentic
                </h3>
                <p className="text-sm text-gray-600">
                  Everything we write is written from scratch. It is double-checked to ensure it is
                  AI and plagiarism-free.
                </p>
              </article>

              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">
                  On time, every time
                </h3>
                <p className="text-sm text-gray-600">
                  We respect deadlines as much as we respect quality. Your projects are always
                  delivered when you need them.
                </p>
              </article>

              <article className="bg-orange-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-semibold mb-2 text-primary">Diverse expertise</h3>
                <p className="text-sm text-gray-600">
                  We create blogs, websites, webpages, e-books, technical documents and creative
                  pieces. We cover a wide range of services under one roof.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values & process */}
        <section className="py-20 px-6 bg-lightBlue" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">
              How we <span className="text-secondary">work</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-primary">Research & Strategy</h4>
                <p className="text-sm text-gray-600">
                  We start by understanding your business, audience and competitors.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-primary">Writing & Optimization</h4>
                <p className="text-sm text-gray-600">
                  Content is crafted for clarity, SEO and conversion.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-primary">Review & Delivery</h4>
                <p className="text-sm text-gray-600">
                  We refine and deliver on time, with revisions until it's right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 bg-orange-400 text-white" data-aos="fade-up">
          <div ref={contactRef} className="container mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="mb-6">
              Have a project or an idea? Tell us about it — we’ll help you bring it to life.
            </p>
            <div className="flex gap-6 justify-center">
              <a href="mailto:info@contentoramedia.com" className="underline">
                info@contentoramedia.com
              </a>
              <a href="tel:+91 8450049035" className="underline">
                +91 8450049035
              </a>
            </div>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-block bg-white text-primary hover:bg-orange-100 px-6 py-3 rounded-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
