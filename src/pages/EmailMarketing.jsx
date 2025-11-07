import React from 'react';
import { motion } from 'framer-motion';

export default function EmailMarketing() {
  return (
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
            Professional <span className="text-secondary">Email Marketing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Services to grow your business—build connections, drive sales and achieve highest ROI
            through targeted, personalised campaigns.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-16 text-gray-700">
          {/* Why Email Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Why Email Marketing?
            </h2>
            <p>
              Email marketing remains one of the most powerful digital channels. It offers unmatched
              reach, high engagement and personalised messaging delivered directly to inboxes.
              Unlike social media (where algorithms control visibility), email puts you in direct
              contact with new and existing customers—enabling regular, measurable interactions.
            </p>
            <p>Our email marketing solutions help businesses:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Increase brand awareness</li>
              <li>Convert leads into customers via automated workflows</li>
              <li>Drive customer loyalty and retention</li>
              <li>Encourage repeat purchases and revenue growth</li>
            </ul>
          </motion.div>

          {/* Our Range of Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Our Range of Email Marketing Services
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-secondary">Strategy Development & Consulting</h3>
                <p>
                  We understand your business priorities, target market and competitors to craft a
                  custom email strategy—goal-setting, scheduling and content aligned with measurable
                  outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Content Creation & Design</h3>
                <p>
                  Engaging, benefit-driven copy paired with visually stunning, mobile-responsive
                  templates. Every email entertains, engages and persuades towards a specific action
                  (purchase, registration, download).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">
                  Audience Segmentation & Personalisation
                </h3>
                <p>
                  Segment lists by demographics, purchase history, browsing behaviour or engagement
                  level. Personalised emails dramatically increase open rates and conversions by
                  ensuring every recipient finds the message appealing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Marketing Automation</h3>
                <p>
                  Complete automated workflows: welcome series, cart recovery, post-purchase
                  follow-ups, re-engagement campaigns. Automation delivers timely content and
                  nurtures relationships without manual effort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">List Growth & Management</h3>
                <p>
                  Build and manage thriving, dynamic email lists ethically—clean inactive users and
                  ensure GDPR, CAN-SPAM and privacy law compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Analytics & Optimisation</h3>
                <p>
                  Full reports on open rates, click-through, bounce rates and conversions. A/B
                  testing and data-driven refinement continually improve campaign performance and
                  ROI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Benefits of Partnering with Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Targeted Campaigns',
                  text: 'Analytics-driven approach ensuring each email is tailored to the right audience segment.',
                },
                {
                  title: 'Enhanced Engagement',
                  text: 'Engaging visuals and copy lead to higher open rates, shares and conversions.',
                },
                {
                  title: 'Business Growth',
                  text: 'Drive additional sales, retain customers and lift bottom-line revenue via email.',
                },
                {
                  title: 'Time Savings',
                  text: 'Automation ensures timely, consistent communication without manual follow-ups.',
                },
                {
                  title: 'Compliance & Trust',
                  text: 'User privacy and regulatory adherence are priorities.',
                },
                {
                  title: 'Dedicated Support',
                  text: 'Expert team providing brand insights, updates and strategic recommendations.',
                },
              ].map((b, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-secondary mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Who Can Benefit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Who Can Benefit?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-commerce businesses growing sales and repeat purchases</li>
              <li>Service providers generating leads and conveying value propositions</li>
              <li>Software companies focusing on onboarding, engagement and feature adoption</li>
              <li>Nonprofits deepening donor and volunteer relationships</li>
              <li>Local businesses building community and brand loyalty</li>
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">Expert Support:</span> Proven experience and passion
                for email marketing.
              </li>
              <li>
                <span className="font-semibold">Reliable Sending:</span> Emails that are not simply
                viewed but elicit responses.
              </li>
              <li>
                <span className="font-semibold">Industry Trends:</span> Constantly refreshed
                knowledge delivering results-driven campaigns.
              </li>
            </ul>
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
              Begin Your Path Right Away
            </h2>
            <p>
              Email marketing is a substantial source of high ROI. Schedule a no-fee consultation
              today and discover how expert-led email marketing accelerates your enterprise, deepens
              client relationships and maximises your marketing budget.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
