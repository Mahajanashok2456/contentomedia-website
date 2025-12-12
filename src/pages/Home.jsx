import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { FaUsers, FaBloggerB, FaCopyright, FaStar, FaFileAlt } from 'react-icons/fa';
import { CgWebsite, CgInsights } from 'react-icons/cg';
import { TiMediaPlay } from 'react-icons/ti';
import { TbSeo } from 'react-icons/tb';
import { SiTaichigraphics } from 'react-icons/si';
import { DiHtml5Multimedia } from 'react-icons/di';
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
import homeVideo from '../assets/videos/homeVideo.mp4';
import bigImage from '../assets/images/bigImage.png';

gsap.registerPlugin(ScrollTrigger);

// Service routes mapping for internal links
const serviceRoutes = {
  'Social Media Management': '/services/social-media',
  PPC: '/services/ppc',
  'Content Writing': '/services/content-writing',
  Proofreading: '/services/proofreading',
  'Paid Guest Posting': '/services/paid-guest-posting',
  SEO: '/services/seo',
  Hiring: '/services/hiring',
  'WhatsApp Marketing': '/services/whatsapp-marketing',
  'Email Marketing': '/services/email-marketing',
  Reviews: '/services/reviews',
  'CV Writing': '/services/cv-writing',
  'Website Development': '/services/website-development',
};

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

const featuredServices = [
  {
    title: 'Social Media Management',
    description:
      'Posting schedules, community management, trend research and competitor analysis to grow your channels.',
    icon: TiMediaPlay,
  },
  {
    title: 'Content Writing',
    description: 'Strong content foundations for websites and blogs that boost SEO and engagement.',
    icon: BiSolidBookContent,
  },
  {
    title: 'SEO',
    description: 'Optimize your online presence for better search engine rankings and visibility.',
    icon: TbSeo,
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
  const blogsRef = useRef();
  const newsletterRef = useRef();
  const progressRef = useRef(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from('.hero-title, .welcome-title', {
          y: 30,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
        gsap.from('.hero-sub, .welcome-sub', { y: 20, opacity: 0, duration: 0.3, delay: 0.1 });
        gsap.from('.hero-cta, .welcome-cta', { y: 15, opacity: 0, duration: 0.3, delay: 0.2 });
      }

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 80%',
          once: true,
        },
        y: prefersReduced ? 0 : 20,
        opacity: 0,
        stagger: 0.05,
        duration: prefersReduced ? 0.2 : 0.4,
        ease: 'power3.out',
      });

      // Blogs Section

      gsap.from('.blogs-card', {
        scrollTrigger: {
          trigger: blogsRef.current,
          start: 'top 85%',
          once: true,
        },
        y: prefersReduced ? 0 : 20,
        opacity: 0,
        stagger: 0.05,
        duration: prefersReduced ? 0.2 : 0.4,
        ease: 'power3.out',
      });

      // Featured services reveal
      gsap.from('.featured-card', {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 85%',
          once: true,
        },
        y: prefersReduced ? 0 : 20,
        opacity: 0,
        stagger: 0.05,
        duration: prefersReduced ? 0.2 : 0.4,
        ease: 'power3.out',
      });

      // Hero overlays subtle reveal
      gsap.from('.hero-overlay', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 90%',
          once: true,
        },
        x: prefersReduced ? 0 : 25,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
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
        y: prefersReduced ? 0 : 15,
        opacity: 0,
        duration: prefersReduced ? 0.2 : 0.4,
        ease: 'power3.out',
      });

      gsap.from(testimonialsRef.current, {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          once: true,
        },
        y: prefersReduced ? 0 : 15,
        opacity: 0,
        duration: prefersReduced ? 0.2 : 0.4,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Contentora the Best Digital Marketing Company | Best Digital Marketing Agency for Business
        </title>
        <meta
          name="description"
          content="Contentora Media is a leading digital marketing company in India offering SEO, PPC, SMM, content writing, website development, email marketing, and more. We help businesses grow with data-driven strategies and measurable results."
        />
      </Helmet>

      <div className="relative overflow-hidden">
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

        {/* Hero (media-style split) */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center bg-gradient-to-br from-lightBlue to-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left: content */}
              <div className="md:col-span-6 lg:col-span-7">
                <motion.h1
                  className="hero-title font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
                  whileHover="hover"
                >
                  Welcome to ContentOra<span className="text-secondary"> Media</span>
                </motion.h1>
                <motion.p
                  className="hero-sub font-body text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-prose leading-relaxed"
                  variants={subtitleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
                >
                  ContentOra Media offers tailored digital marketing strategies to enhance business
                  engagement and customer loyalty. The team of freelancers focuses on aligning
                  marketing plans with specific business goals and industry needs, allowing clients
                  to concentrate on growth while they manage digital operations. Their creative
                  approach aims to make brands memorable and establish valuable online
                  relationships.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Link
                      to="/about"
                      className="hero-cta bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold block text-center sm:inline-block"
                    >
                      Get Your Free Consultation
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/services" className="text-primary font-medium">
                      Explore Services
                    </Link>
                  </motion.div>
                </motion.div>

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
                    Comprehensive Services
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-sm font-medium text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                      <rect x="4" y="4" width="16" height="16" rx="3" fill="#2563eb" />
                    </svg>
                    Proven Results
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-sm font-medium text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                      <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" fill="#2563eb" />
                    </svg>
                    Expert Team
                  </span>
                </div>
              </div>

              {/* Right: layered media */}
              <div className="md:col-span-6 lg:col-span-5">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    {/* <img
                    ref={heroImageRef}
                    src={homeIcon}
                    alt="media"
                    className="w-full h-96 object-cover"
                  /> */}
                    <video
                      autoPlay
                      muted
                      loop
                      ref={heroImageRef}
                      src={homeVideo}
                      className="w-full h-96 object-cover"
                    ></video>
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
        </motion.section>

        {/* Welcome / Value props */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 sm:px-0">
              <h2 className="welcome-title font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                How will you <span className="text-secondary">benefit?</span>
              </h2>
              <p className="welcome-sub font-body text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
                Understanding your business tendencies and market environment enables informed
                decisions and resource exploitation. Early identification of opportunities and
                challenges allows you to outperform competitors, saving time and money while
                ensuring brand prominence and adaptability in a rapidly changing digital landscape.
              </p>
            </div>

            <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <MdInsights className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-secondary font-semibold mb-2">
                  Know Your Audience
                </h3>
                <p className="text-sm text-gray-600">
                  Deep insights into customer behavior and preferences.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <BsGraphUpArrow className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-primary  font-semibold mb-2">Work Smarter</h3>
                <p className="text-sm text-gray-600">
                  Optimize workflows and maximize productivity.
                </p>
              </article>

              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <VscServerProcess className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-secondary font-semibold mb-2">
                  Automate for Impact
                </h3>
                <p className="text-sm text-gray-600">
                  Streamline processes to achieve greater results.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <BsDatabaseFillGear className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-primary  font-semibold mb-2">
                  Innovate with Data
                </h3>
                <p className="text-sm text-gray-600">
                  Leverage data for creative and effective solutions.
                </p>
              </article>

              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <CgInsights className="text-white text-3xl" />
                </div>
                <h3 className="font-heading text-secondary font-semibold mb-2">
                  Stay Ahead of the Curve
                </h3>
                <p className="text-sm text-gray-600">
                  Anticipate trends and maintain competitive edge.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <CgInsights className="text-white text-3xl" />
                </div>
                <h3 className="font-heading text-primary font-semibold mb-2">Market Insights</h3>
                <p className="text-sm text-gray-600">
                  Uncover trends, analyze data, and inform business strategies effectively.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* You are not just Our Client */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-4">
              You are not just <span className="text-secondary">Our</span> Client!
            </h2>
            <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              We are committed to helping businesses across industries using analytics and tracking
              to deliver data-driven growth with affordable digital marketing services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article
                className="client-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <GiThink className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-primary  font-semibold mb-2">No Guesswork</h4>
                <p className="text-sm text-gray-600">
                  Data-driven decisions eliminate uncertainty.
                </p>
              </article>

              <article
                className="client-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <MdAddBusiness className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-primary font-semibold mb-2">Small Businesses</h4>
                <p className="text-sm text-gray-600">
                  Specialized solutions for small businesses and startups.
                </p>
              </article>

              <article
                className="client-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <FaHandHoldingDollar className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-primary  font-semibold mb-2">Special Offers</h4>
                <p className="text-sm text-gray-600">
                  Exclusive discounts and special offers for new clients.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About / House where affordability... */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h2 className="font-heading text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Get to Know ContentOra Media
              </h2>
              <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed text-left">
                At ContentOra Media, we combine cutting-edge technology with creative expertise to
                deliver marketing solutions that drive measurable results. Our team of specialists
                works closely with you to understand your unique challenges and opportunities.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left">
                Crafting strategies that align with your goals and budget, we ensure every campaign
                is optimized for maximum impact and sustainable growth.
              </p>
            </div>
            <div>
              <div className="bg-lightBlue rounded-lg aspect-[5/4] flex items-center justify-center">
                <img src={bigImage} alt="Decor" className="w-full h-full object-fit rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={servicesRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto text-center mb-12">
            <h2 className="font-heading text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-600 mt-4 px-4 sm:px-0">
              Comprehensive digital marketing solutions tailored to your business needs.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.title} to={serviceRoutes[s.title]} className="service-card no-underline">
                <div className="bg-orange-50 border-gray-200 p-6 rounded-lg shadow-sm h-full flex flex-col">
                  <ServiceCard
                    title={s.title}
                    description={s.description}
                    icon={<s.icon className="text-white text-2xl" />}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">
              Why <span className="text-secondary">Choose</span> Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-secondary font-semibold mb-2">
                  We can ONLY Board Clients That We can really help
                </h4>
                <p className="text-sm text-gray-600">
                  We are selective in choosing the type of clients with whom we can make a
                  measurable impact, thereby quality, not quantity.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <FaStar className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-primary font-semibold mb-2">
                  Your Success is Our Priority
                </h4>
                <p className="text-sm text-gray-600">
                  We are very transparent about not being able to produce anything meaningful, and
                  we concentrate on projects that we can make successful.
                </p>
              </article>

              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <SiTaichigraphics className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-secondary font-semibold mb-2">
                  No Off-the-Shelf Solutions
                </h4>
                <p className="text-sm text-gray-600">
                  Your strategies are designed individually to suit your individual business needs
                  and goals and will not be generic.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <CgInsights className="text-white text-3xl" />
                </div>
                <h4 className="font-heading text-primary font-semibold mb-2">
                  Huge Market and Business Study
                </h4>
                <p className="text-sm text-gray-600">
                  We study your industry, competition, and customer base to develop evidence-based
                  strategies that can help to achieve the maximum results.
                </p>
              </article>

              <article
                className="benefit-card bg-orange-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/80 rounded-full mb-6 mx-auto">
                  <MdAddBusiness className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-secondary font-semibold mb-2">
                  First Hand Access to Industry Experts
                </h4>
                <p className="text-sm text-gray-600">
                  You are in direct contact with the experts dealing with your marketing, making
                  decisions quicker and finding unique solutions.
                </p>
              </article>

              <article
                className="benefit-card bg-blue-50 p-8 rounded-xl shadow-md text-center transform transition-transform hover:-translate-y-3 hover:shadow-xl"
                role="article"
                tabIndex={0}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/80 rounded-full mb-6 mx-auto">
                  <TbSeo className="text-white text-2xl" />
                </div>
                <h4 className="font-heading text-primary font-semibold mb-2">
                  Customized Map to Your Development
                </h4>
                <p className="text-sm text-gray-600">
                  Every client is offered his/her own marketing roadmap to expand the engagement,
                  increase ROI, and enhance brand presence.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-lightBlue testimonials" data-aos="fade-up">
          <div ref={testimonialsRef} className="container mx-auto text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-gray-900">
              What Our <span className="text-secondary">Clients</span> Say
            </h2>
          </div>

          <div className="container mx-auto">
            <TestimonialSlider />
          </div>
        </section>

        {/* Pricing / Plans */}
        <section ref={pricingRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
              Allot your <span className="text-secondary">budget</span> rationally with us
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-800 my-6 px-4 sm:px-8 leading-relaxed">
              We don't claim us best but we prove with results. We have all prices fair put in front
              of you. A smooth responsive expert team of freelancers earned name recognition for its
              consistent delivery and commitment. We prioritise results over money. That's why you
              find a 50% discount on any service you pick for an initial 3 to 6 months and after
              delivering top results we charge as per market standards unlike other agencies.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pricing-card bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-heading text-xl font-semibold text-secondary">Simple Plan</h3>
              {/* <div className="text-2xl font-bold mt-2">$240/month</div> */}
              <p className="mt-4 text-sm text-gray-600">Best for freelancers or small startups</p>
            </div>
            <div className="pricing-card bg-white p-6 rounded-lg shadow-md text-center border-2 border-primary">
              <h3 className="font-heading text-xl font-semibold text-secondary">Business Plan</h3>
              {/* <div className="text-2xl font-bold mt-2">$120/month</div> */}
              <p className="mt-4 text-sm text-gray-600">Ideal for growing brands or SMEs</p>
            </div>
            <div className="pricing-card bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-heading text-xl font-semibold text-secondary">Premium Plan</h3>
              {/* <div className="text-2xl font-bold mt-2">$240/month</div> */}
              <p className="mt-4 text-sm text-gray-600">
                Designed for established brands with aggressive growth goals
              </p>
            </div>
          </div>
        </section>

        {/* Projects / Social proof CTA */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-orange-100" data-aos="fade-up">
          <div className="container mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-secondary font-bold">
              Our Projects
            </h2>
            <p className="font-body text-base sm:text-lg md:text-xl font-bold text-gray-800 mt-4 px-4 sm:px-0">
              These are some of the successful projects delivered to our clients.
            </p>

            <p className="font-body text-base sm:text-lg text-gray-800 my-4 mb-10 px-4 sm:px-0 leading-relaxed">
              Our projects by an expert team of freelancers will set examples to create magic for
              your businesses too!
            </p>

            <Link
              to="/project"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              View our Projects
            </Link>
          </div>
          {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 1</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 2</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">Project 3</div>
        </div> */}
        </section>

        {/* Blogs */}

        <section ref={blogsRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up">
          <div className="container mx-auto text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary font-bold">Our Blogs</h2>
            <p className="font-body text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-8 px-4 sm:px-0">
              Read our blogs and get to know more about us on this journey!!
            </p>

            <Link
              to="/project"
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Read more
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 px-4 sm:px-6 bg-lightBlue" data-aos="fade-up">
          <div ref={newsletterRef} className="container mx-auto max-w-2xl text-center">
            <h3 className="font-heading text-primary text-xl sm:text-2xl font-bold mb-4">
              Join our Newsletter
            </h3>
            <p className="mb-4 text-sm sm:text-base px-4 sm:px-0 leading-relaxed">
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
              <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-orange-400 text-white" data-aos="fade-up">
          <div className="container mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Elevate Your Content?
            </h2>
            <p className="font-body text-base sm:text-lg mt-4 mb-8 px-4 sm:px-0">
              Contact us to discuss your content needs and get a custom quote.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                to="/about"
                className="bg-white text-primary hover:bg-orange-200 px-8 py-3 rounded-lg"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="border-2 border-white hover:border-orange-600 text-white px-8 py-3 rounded-lg"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
