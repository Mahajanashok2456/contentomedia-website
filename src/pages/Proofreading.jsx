import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Proofreading() {
  return (
    <>
      <Helmet>
        <title>Proofreading Services in India | Online Proofreading Services</title>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-lightBlue">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Proofreading <span className="text-secondary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Human-first proofreading that preserves authenticity, eliminates errors and
              strengthens brand credibility.
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
                Why Proofreading Matters
              </h2>
              <p>
                In 2025, grammatical errors and typos can disinterest customers and reduce
                credibility—costing leads and opportunities. Our human proofreading services polish
                blogs, websites and documents to ensure flow, accuracy and trust.
              </p>
              <p>
                We don't rely on AI. We refine tone, structure, consistency, readability and
                formatting while preserving your original voice.
              </p>
            </motion.div>

            {/* Human-Centred Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Our Human-Centred Approach
              </h2>
              <p>
                Unlike automated checkers, we carefully read every piece. We go beyond surface-level
                corrections—reviewing tone, structure, consistency and readability. We remove
                generic or AI-sounding fragments and tailor output to your brand.
              </p>
            </motion.div>

            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                What We Offer
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Grammar and spelling checks — eliminate typos, incorrect usage and punctuation
                  errors.
                </li>
                <li>Consistency & flow — refine sentence structure for smooth readability.</li>
                <li>Formatting — align structure, headings and layout professionally.</li>
                <li>Brand voice — preserve tone while enhancing clarity.</li>
                <li>Accuracy — verify names, data and critical references.</li>
                <li>Human verification — every document reviewed by a professional proofreader.</li>
                <li>Originality — ensure no AI detection and plagiarism-free integrity.</li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Our Proofreading?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Error-Free Delivery', text: 'We catch what automated tools miss.' },
                  {
                    title: 'Affordable Quality',
                    text: 'Competitive pricing without sacrificing standards.',
                  },
                  {
                    title: 'Quick Turnaround',
                    text: '24–48h for up to 1500 words. Custom timelines for larger projects.',
                  },
                  { title: 'Human-Verified', text: 'Professionals review every document.' },
                  {
                    title: 'Original & Plagiarism-Free',
                    text: 'Authentic content preserved and enhanced.',
                  },
                  {
                    title: 'Wide Expertise',
                    text: 'Blogs, reports, research, marketing, publishing, corporate docs.',
                  },
                  { title: 'Voice Preservation', text: 'Edits keep your uniqueness intact.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg bg-gray-50 border border-gray-200 shadow-sm"
                  >
                    <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                How It Works
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>You provide content (Word, PDF, Docs).</li>
                <li>We proofread: grammar, flow, formatting, tone and clarity.</li>
                <li>You receive a polished version + tracked changes file for review.</li>
              </ol>
            </motion.div>

            {/* Industries We Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Industries We Support
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Marketing — campaign ads, websites and branded assets.</li>
                <li>Education & Research — academic papers, theses, assignments.</li>
                <li>Publishing — articles, blogs and long-form manuscripts.</li>
                <li>Corporate — reports, communications, proposals.</li>
              </ul>
              <p>Turnaround: 24–48 hours for 1000–1500 words. Larger projects: custom timeline.</p>
            </motion.div>

            {/* Process & Mistakes Fixed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                What We Fix
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sentence structure errors</li>
                <li>Incorrect grammar & punctuation</li>
                <li>Misused tenses</li>
                <li>Typos & word choice issues</li>
                <li>Formatting inconsistencies</li>
                <li>Clarity & readability problems</li>
              </ul>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary">
                    1. How is your proofreading different from AI tools?
                  </h3>
                  <p>
                    All editing is human. AI tools often raise detection flags and dilute brand
                    voice—we preserve authenticity and help pass AI detection.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    2. Do you guarantee AI-free & plagiarism-free work?
                  </h3>
                  <p>
                    Yes. We refine and verify originality. We don’t rewrite AI content—we produce
                    and preserve human work.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. What types of content do you proofread?
                  </h3>
                  <p>
                    Blogs, articles, reports, research papers, assignments and more—adapted to your
                    industry.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">4. How fast is delivery?</h3>
                  <p>Up to 1500 words within 24–48 hours. Larger scopes follow custom schedules.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    5. Will I be able to see the changes?
                  </h3>
                  <p>
                    You receive both a polished final version and a tracked changes copy for
                    transparent review.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Ready to Polish Your Content?
              </h2>
              <p>
                Get in touch today to make your content shine. No matter your field, we maintain
                brand identity and elevate clarity.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
