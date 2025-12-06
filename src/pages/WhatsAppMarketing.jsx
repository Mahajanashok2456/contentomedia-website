import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function WhatsAppMarketing() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Best & Affordable WhatsApp Marketing Services | Bulk WhatsApp Marketing Agency
        </title>
        <meta
          name="description"
          content="Reach customers instantly with Contentora media bulk WhatsApp marketing services. We help businesses automate messaging, improve engagement, and drive sales through WhatsApp Business."
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
              WhatsApp <span className="text-secondary">Marketing Service</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Turn WhatsApp into your most powerful channel for lead generation, customer retention
              and personalised engagement—with a 98% open rate.
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
                Business emails lost in spam? Frustrating ad campaigns? Outreach has become more
                complex than it needs to be. What your business needs is WhatsApp
                Marketing—personalised, prioritised messaging that feels human and converts.
              </p>
              <p>
                Our services combine WhatsApp's messaging power with best-in-class digital
                strategies to help your brand connect authentically with its audience.
              </p>
            </motion.div>

            {/* Why WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Use WhatsApp as Your Go-To Marketing Tool?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">98% open rate:</span> WhatsApp messages are
                  seen—unlike emails or ads that get ignored.
                </li>
                <li>
                  <span className="font-semibold">Personalised conversations:</span> Multimedia
                  elements and direct dialogue secure leads, making your brand feel responsive.
                </li>
                <li>
                  <span className="font-semibold">Proven results:</span> High open and click-through
                  rates boost conversions, reduce cart abandonment and increase retention.
                </li>
                <li>
                  <span className="font-semibold">Cost-effective ROI:</span> Outreach, engagement
                  and retention on a budget with significant returns.
                </li>
              </ul>
            </motion.div>

            {/* Why You Need Our Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why You Need Our WhatsApp Marketing Service
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Instant customer support and faster delivery of brand offers within seconds.
                </li>
                <li>
                  Personalised offers to each customer based on past purchases or
                  interests—automated yet human-feeling sequences.
                </li>
                <li>
                  Clear call-to-action prompts generate higher click-through and conversion rates
                  than email or social media.
                </li>
                <li>
                  Timely support, updates and personalised check-ins build loyalty—your brand feels
                  like a helpful friend.
                </li>
              </ul>
            </motion.div>

            {/* Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Our WhatsApp Business Strategy Workflow
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-semibold">Strategy:</span> We dive into your business
                  objectives, values and target audience to craft a tailored messaging framework
                  aligned with your brand.
                </li>
                <li>
                  <span className="font-semibold">Set Up:</span> We configure WhatsApp Business
                  (small businesses) or WhatsApp Business API (scaling companies), implementing
                  opt-in compliance to motivate engagement without bombardment.
                </li>
                <li>
                  <span className="font-semibold">Implementation:</span> Build automated yet
                  personal conversations—recover abandoned carts, answer FAQs, guide new customers
                  from welcome to purchase—using rich multimedia.
                </li>
                <li>
                  <span className="font-semibold">Launch & Manage:</span> We handle day-to-day
                  interactions, provide human support, answer queries and manage live chats while
                  monitoring performance regularly.
                </li>
                <li>
                  <span className="font-semibold">Analyse & Scale:</span> Track growth, ROI,
                  click-through, open and conversion rates. Upgrade and refine strategies to
                  steadily improve performance.
                </li>
              </ol>
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
                Benefits of WhatsApp Marketing
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Improve ROI',
                    text: 'Cost-effective outreach and engagement with measurable returns.',
                  },
                  {
                    title: 'Generate & Qualify Leads',
                    text: 'Automated funnels identify and nurture quality prospects.',
                  },
                  {
                    title: 'Targeted Marketing',
                    text: 'Personalised messaging for higher conversions.',
                  },
                  {
                    title: 'Instant Support',
                    text: 'Build loyalty through fast, helpful responses.',
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

            {/* Why Choose Contentora */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Contentora?
              </h2>
              <p>
                At Contentora Media, success isn't measured in algorithms alone, but in
                authenticity. We go beyond superficial metrics to understand your story and
                audience. Our WhatsApp Marketing Services amplify your authentic voice and attract
                believers—ensuring growth that's sustainable and true to who you are.
              </p>
              <p>
                Book Contentora Media's WhatsApp Marketing services today to see growth that
                matters.
              </p>
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
                    1. What exactly is WhatsApp Marketing?
                  </h3>
                  <p>
                    A direct way to connect with customers via the WhatsApp app using personalised
                    messages, updates and offers rather than broad ads.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    2. Why use WhatsApp instead of email or social media ads?
                  </h3>
                  <p>
                    WhatsApp messages have much higher open rates. People read personal messages
                    more reliably than promotional emails or skippable ads, leading to better
                    engagement and conversions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. Will the messages feel like spam?
                  </h3>
                  <p>
                    No. We craft automated yet personal messages using customer data to send
                    relevant, helpful offers and support—not generic blasts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    4. What do you need from us to get started?
                  </h3>
                  <p>
                    We start by learning your business goals, target audience and brand voice. From
                    there we handle setup, strategy and daily management.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">5. How do you measure success?</h3>
                  <p>
                    We track message open rates, click-through rates on offers and conversion
                    rates—providing regular reports and refining strategy for strong ROI.
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
                Ready to Turn WhatsApp Into Your Strongest Sales Channel?
              </h2>
              <p>Let's build personalised, human-first messaging that converts and retains.</p>
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
