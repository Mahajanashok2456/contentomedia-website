import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <>
      <Helmet>
        <title>India's Best SEO Company | Top SEO Marketing Agency in India</title>
        <meta
          name="description"
          content="Contentora Media is a top SEO marketing agency in India offering complete on-page, off-page, and technical SEO services. Rank higher, increase organic traffic, and outperform your competitors with proven SEO strategies."
        />
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
              Contentora’s <span className="text-secondary">SEO Strategy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              The go-to for brand visibility: strategies that generate sustainable traffic, build
              loyalty and drive recurring revenue.
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
                An effective SEO strategy is now a top-priority marketing lever. We build SEO
                programs that go beyond rankings—fostering loyalty and retention while maintaining
                your online presence using relevant digital practices.
              </p>
              <p>
                Beyond page rankings, we deliver solutions that last longer and keep the online
                traffic coming back.
              </p>
            </motion.div>

            {/* Why SEO Necessary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why is SEO Necessary?
              </h2>
              <p>
                Without the right optimisations, you’re missing customers by the minute. We focus on
                credibility, authority and experience that converts viewers into buyers.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is your website invisible while competitors capture traffic?</li>
                <li>Are you paying for ads without a sustainable organic strategy?</li>
                <li>Do visitors arrive but leave without converting or returning?</li>
              </ul>
              <p>
                Prevent marketing missteps with a robust SEO foundation—eliminate errors and secure
                long-term visibility and revenue.
              </p>
            </motion.div>

            {/* Our SEO Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Our SEO Strategy
              </h2>
              <p>
                Transparent and results-driven, our tactics focus on On-Page, Off-Page and Technical
                SEO—promising relevance and measurable impact.
              </p>

              {/* On-Page SEO */}
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary">On-Page SEO</h3>
                <p>
                  We optimise content and experience to answer search intent perfectly, improve
                  click-through and drive conversions. We ensure search engines understand and
                  recommend your content.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <span className="font-semibold">Match Content to Intent:</span> Strategic
                    keywords to appear in relevant results.
                  </li>
                  <li>
                    <span className="font-semibold">Flawless UX:</span> Optimise speed, security
                    (SSL) and mobile design.
                  </li>
                  <li>
                    <span className="font-semibold">Compelling Metas:</span> Search snippets that
                    earn more clicks.
                  </li>
                  <li>
                    <span className="font-semibold">Logical Structure:</span> Internal linking that
                    helps users and Google discover your value.
                  </li>
                </ul>
              </div>

              {/* Off-Page SEO */}
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary">Off-Page SEO</h3>
                <p>
                  We build authority with link building, citations and brand presence beyond your
                  domain. It’s an ongoing process tuned to your growth.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <span className="font-semibold">Earn Quality Links:</span> Secure placements on
                    reputable, audience-relevant sites.
                  </li>
                  <li>
                    <span className="font-semibold">Reputation Management:</span> Monitor and build
                    your profile continuously.
                  </li>
                </ul>
              </div>

              {/* Technical SEO */}
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary">Technical SEO</h3>
                <p>
                  We audit and fix the hidden technical issues that silently erode rankings—ensuring
                  Google can crawl and recommend your site.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <span className="font-semibold">Fast Speed:</span> Optimise performance for
                    instant loads.
                  </li>
                  <li>
                    <span className="font-semibold">Flawless Mobile:</span> Ensure perfect function
                    on phones and tablets.
                  </li>
                  <li>
                    <span className="font-semibold">Google-Friendly Structure:</span> Crawlability
                    and indexing best practices.
                  </li>
                </ul>
              </div>
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
                Industries We Work Across
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>E-commerce & Retail</li>
                <li>SaaS & Tech Startups</li>
                <li>Service-Based Businesses</li>
                <li>Schools & Colleges</li>
              </ul>
            </motion.div>

            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                What We Offer
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Digital Marketing Services</li>
                <li>LinkedIn Marketing</li>
                <li>WordPress Website Design</li>
                <li>PPC Services</li>
                <li>Google Ads Campaign</li>
                <li>E-Commerce Marketing</li>
                <li>Blogging Services</li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Contentora
              </h2>
              <p>
                We measure success in authenticity as well as algorithms. We learn your story and
                audience, then amplify your voice to attract believers—not just visitors—for growth
                that’s sustainable and true to who you are.
              </p>
              <p>Book Contentora Media’s SEO services today to see growth that matters.</p>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary">
                    1. What exactly does SEO do for my business?
                  </h3>
                  <p>
                    SEO helps your website show up higher so customers find you instead of
                    competitors—bringing more visitors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    2. How long does it take to see results?
                  </h3>
                  <p>
                    SEO is long-term. Expect a few months for significant improvements as search
                    engines recognise changes and trust builds.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. Difference between On-Page, Off-Page and Technical SEO?
                  </h3>
                  <p>
                    <strong>On-Page:</strong> Optimising content and on-page elements.{' '}
                    <strong>Off-Page:</strong> Building reputation via trustworthy links.{' '}
                    <strong>Technical:</strong> Fixing speed, UX and crawlability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">4. Do you work with my industry?</h3>
                  <p>
                    Yes—E-commerce, Tech, Service, Education and more. We tailor strategies to your
                    audience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">5. If I run Google Ads, why SEO?</h3>
                  <p>
                    Ads stop when spend stops. SEO compounds, building sustainable organic traffic
                    over time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-center space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Ready to Build Sustainable Visibility?
              </h2>
              <p>Let’s align SEO with your brand’s authentic voice and long-term goals.</p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Book SEO Services
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
