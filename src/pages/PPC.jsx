import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// PPC Detailed Service Page
export default function PPC() {
  return (
    <>
      <Helmet>
        <title>Best PPC Company in India | Pay Per Click Marketing Service Company</title>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              PPC <span className="text-secondary">Management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Making the most of site visits with accuracy. Drive qualified traffic with precision
              and maximise value out of every advertising investment.
            </motion.p>
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto space-y-12 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Why PPC?</h2>
              <p>
                Are you feeling annoyed because the Return on Investment of your online ads is low?
                In the present competitive online scenario the need to ensure your content gets seen
                not only by more people but also faster has never been higher. Driving qualified
                traffic requires more than just setting up a campaign — it requires precision. At
                ContentOra Media, we drive your internet traffic with Pay-Per-Click (PPC) strategies
                engineered for accuracy.
              </p>
              <p>
                Whether you've attempted PPC and encountered setbacks or are eager to dive into PPC
                marketing to enhance website traffic, ContentOra will assist you at every stage and
                across all platforms where you aim to improve brand visibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Common PPC Challenges
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You spent a lot on ad campaigns and didn’t see real-time conversions.</li>
                <li>
                  Competitors engaged in click fraud and your product didn’t find its target
                  audience.
                </li>
                <li>Ad copy failed to generate interest or reach the right audience.</li>
                <li>Uncertainty around bidding strategy and keywords impacting traffic.</li>
                <li>
                  Confusion choosing platforms (Google Ads, Facebook Ads, Amazon, Microsoft, etc.).
                </li>
              </ul>
              <p>
                Facing trouble with any or all of this? Our skilled professionals will help pinpoint
                the right target audience and convert leads instantly. Stop wasting ad spend. Drive
                conversions with precise PPC management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose ContentOra Media?
              </h2>
              <div className="grid gap-6">
                <div>
                  <h3 className="font-semibold text-secondary">Target High-Intent Buyers</h3>
                  <p>
                    We utilise long-tail and seed keywords and filter negative ones to maximise lead
                    quality and long-term conversion value.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Elevated CTR</h3>
                  <p>
                    We craft compelling ad copy and landing pages that attract genuine engagement
                    and increase click-through rate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Enhancing Quality Score</h3>
                  <p>
                    We refine relevance, keywords, and landing page experience to lower CPC and
                    expand exposure.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Boosting ROAS</h3>
                  <p>
                    We optimise continuously to achieve impressive return on ad spend and scale
                    winning campaigns.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Our PPC Process
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Strategic Audit & Planning:</span> Deep account,
                  market & competitor research to uncover untapped growth potential.
                </li>
                <li>
                  <span className="font-semibold">Keyword & Audience Precision:</span> Advanced
                  keyword strategies plus negative keywords to eliminate irrelevant traffic.
                </li>
                <li>
                  <span className="font-semibold">Ad Copy & Landing Page Optimisation:</span>{' '}
                  Messaging that matches buyer intent and frictionless page experiences to lift CTR
                  & conversions.
                </li>
                <li>
                  <span className="font-semibold">Continuous Monitoring & Scaling:</span> Daily bid
                  adjustments, creative testing and expansion of winning tactics to maximise ROAS.
                </li>
              </ol>
              <p>
                Ready to launch your first campaign? Access our online services with just one click.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary">1. What is PPC Management?</h3>
                  <p>
                    PPC or Pay-Per-Click Management is the process of optimising online ad campaigns
                    where advertisers pay each time targeted ads are clicked. It’s a powerful
                    strategy to drive qualified traffic.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    2. How does ContentOra help my lead conversions?
                  </h3>
                  <p>
                    We audit your campaign to identify issues like poor keyword choice or weak ad
                    copy, then optimise with the right tools to drive the right audience to your
                    website or product.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. Which advertising platforms do you manage?
                  </h3>
                  <p>
                    We manage PPC across Google Ads, Facebook Ads, Meta Ads and more depending on
                    demographics & user activity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">4. What does Quality Score mean?</h3>
                  <p>
                    Quality Score rates your ad relevance and experience. Higher scores mean better
                    placement and lower costs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    5. What makes your PPC approach better?
                  </h3>
                  <p>
                    We build brand recognition with precise keyword research, ongoing monitoring and
                    scaling based on business growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
