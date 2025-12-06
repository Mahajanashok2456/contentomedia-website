import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function WebsiteDevelopment() {
  return (
    <>
      <Helmet>
        <title>
          India’s Best Web Design and Development Company | Professional Website Development Agency
        </title>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Website <span className="text-secondary">Development Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Step into the future of web design—build scalable, fast, conversion-focused websites
              that become your most powerful digital asset.
            </motion.p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto space-y-16 text-gray-700">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p>
                Your website speaks for the legacy of your brand online. Whether it's a portfolio,
                e-commerce platform, blog or service portal—design, functionality and messaging must
                work together to generate leads and drive sales.
              </p>
              <p>
                Building a website from scratch involves planning architecture, choosing the right
                stack, coding components, structuring internal linking, creating pages and
                optimising performance. Doing this without expertise can result in slow delivery,
                poor UX and disappointing traffic.
              </p>
              <p>
                <span className="font-semibold text-primary">
                  Contentora Media's Website Development Services
                </span>{' '}
                translate your goals into polished, relevant and high-performing web experiences
                that act as winning digital advertisements 24/7.
              </p>
            </motion.div>

            {/* Brand Representation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Your Website = Your Brand's Representative
              </h2>
              <p>
                It's where visitors decide if you understand their needs. Clean UI, intuitive
                navigation and fast load times show professionalism and respect for user attention.
                Copy and multimedia must connect instantly—reinforcing credibility and relevance.
              </p>
              <p>
                A search-optimised website ensures discoverability at high-intent moments. A great
                site works continuously: making first impressions, earning trust and converting
                browsers into paying customers.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Contentora
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Professional Web Developers',
                    text: 'Cross-functional team (devs, designers, consultants) delivering scalable, intuitive user experiences.',
                  },
                  {
                    title: 'Expert Content Creation',
                    text: 'Strategic copy & multimedia integrated for narrative cohesion and audience resonance.',
                  },
                  {
                    title: 'Speed Optimisation',
                    text: 'Efficient coding, asset compression & performance tuning to minimise bounce and boost conversions.',
                  },
                  {
                    title: 'Online Presence Integration',
                    text: 'Seamless alignment with social platforms & marketing funnels to strengthen brand ecosystem.',
                  },
                  {
                    title: 'SEO-Driven Structure',
                    text: 'Keyword research, crawl-friendly architecture, technical & on-page optimisation from day one.',
                  },
                  {
                    title: 'Proven Track Record',
                    text: 'Diverse portfolio across industries—startup, SME, e-commerce & service brands.',
                  },
                  {
                    title: 'Time & Cost Efficiency',
                    text: 'Avoid hidden DIY costs—professionally built, right the first time with accelerated delivery.',
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <h3 className="font-semibold text-secondary mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-600">{b.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Our Services Include
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'E-commerce Web Development',
                  'Web Application Development',
                  'Custom Website Development',
                  'CMS Development',
                  'Website Design & Redesign',
                  'WordPress Design Services',
                  'Web Support & Maintenance',
                ].map((s) => (
                  <div key={s} className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-sm font-medium text-secondary">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What services does Contentora Media offer?',
                    a: 'Full-spectrum development: e-commerce, custom builds, web apps, CMS and redesigns.',
                  },
                  {
                    q: 'Why is website speed so important?',
                    a: 'Slow performance harms UX, search ranking and conversion. We build for efficiency and retention.',
                  },
                  {
                    q: 'Do you handle site content?',
                    a: 'Yes—strategic copywriting, graphics and video integration supporting brand narrative.',
                  },
                  {
                    q: 'Is SEO included?',
                    a: 'Absolutely. Technical, structural and on-page optimisations are integrated from the start.',
                  },
                  {
                    q: 'How does your service save money?',
                    a: 'Avoid trial-and-error costs—professional execution accelerates ROI and reduces waste.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="font-semibold text-secondary">{item.q}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-center space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Build a Website That Works 24/7
              </h2>
              <p>
                Ready for a site that attracts, converts and scales with your growth? Let’s build
                it.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Request a Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
