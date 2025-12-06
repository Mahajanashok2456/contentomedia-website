import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function PaidGuestPosting() {
  return (
    <>
      <Helmet>
        <title>High Quality Guest Posting Services | Best Guest Posting Services</title>
        <meta
          name="description"
          content="Build authority and secure quality backlinks with Contentora Media premium guest posting services. We offer genuine outreach, high-authority sites, and niche-relevant placements for better SEO ranking."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-br from-lightBlue via-white to-orange-50">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Paid <span className="text-secondary">Guest Posting</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Strategic guest posting services to boost SEO rankings, brand authority and targeted
              referral traffic through authoritative placements.
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Paid Guest Posting Services by Contentora Media
              </h2>
              <p>
                Contentora Media helps brands and businesses grow digital presence, increase SEO
                rankings and reach targeted audiences fast through strategic paid guest posting. Our
                process blends strategy, high-quality content and sustainable outcomes.
              </p>
            </motion.div>

            {/* Why Different */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                What Makes Us Different
              </h2>
              <p>
                We treat guest posting as a full-funnel solution for growth, visibility and
                engagement. Each article is SEO-informed, relevant and positioned on authoritative
                sites to attract new audiences and earn high-value backlinks.
              </p>
            </motion.div>

            {/* Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                End-to-End Workflow
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Strategic Planning:</span> Consult to understand
                  goals, market context and target audience.
                </li>
                <li>
                  <span className="font-semibold">Outreach & Platform Selection:</span> Identify
                  high domain authority, niche-aligned sites for maximum SEO impact.
                </li>
                <li>
                  <span className="font-semibold">Custom Content Creation:</span> SEO-friendly,
                  original articles aligned with topic intent and keyword strategy.
                </li>
                <li>
                  <span className="font-semibold">Editorial Collaboration & Approval:</span> Full
                  transparency—clients review platforms, angles and drafts before publishing.
                </li>
                <li>
                  <span className="font-semibold">Publishing & Post-Placement Reporting:</span>{' '}
                  Track referral traffic, backlink growth and engagement performance.
                </li>
              </ol>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Industries We Serve
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>E-commerce</li>
                <li>Technology</li>
                <li>Professional Services</li>
                <li>Startups & SMEs</li>
                <li>Creative Industries</li>
              </ul>
              <p>Diverse industry experience enables adaptable, results-focused execution.</p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Benefits of Guest Posting with Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'SEO-Driven Backlinks',
                    text: 'Earn authoritative backlinks that lift rankings and domain authority.',
                  },
                  {
                    title: 'Increased Organic Traffic',
                    text: 'Attract targeted referral visitors primed for engagement.',
                  },
                  {
                    title: 'Brand Authority',
                    text: 'Appear on respected platforms to build credibility and trust.',
                  },
                  {
                    title: 'Cost-Effective',
                    text: 'Transparent, affordable packages for SMEs and enterprises.',
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

            {/* Why Pick Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Contentora Media?
              </h2>
              <p>
                We combine data, transparent communication and quality standards to ensure long-term
                value from every placement. Our approach blends creative storytelling, SEO rigour
                and niche alignment—keeping brands competitive and discoverable.
              </p>
              <p>
                By personalising strategy and maintaining editorial integrity, our paid guest
                posting helps unlock new audiences, accelerate rankings and strengthen durable
                digital reputation.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Ready to Expand Your Reach?
              </h2>
              <p>
                Let us secure authoritative placements that compound SEO, authority and demand
                generation.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Start Now
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
