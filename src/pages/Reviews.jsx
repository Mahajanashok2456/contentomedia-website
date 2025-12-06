import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Reviews() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Review Service Provider | Best Reviews and Ratings Company in India</title>
        <meta
          name="description"
          content="Boost trust with Contentora media professional reviews and ratings services. We help brands improve reputation, attract more customers, and build online credibility across leading platforms."
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
              Reviews & <span className="text-secondary">Reputation Management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Protect, elevate and leverage your online reputation with strategic, authentic review
              and ratings management built for 2025.
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
                In 2025, your company's digital image matters more than ever. Whether you run a
                local business or an ambitious start-up, negative reviews can damage trust quickly.
                Your online reputation can make or break customer decisions.
              </p>
              <p>
                At <span className="font-semibold text-primary">Contentora Media</span>, we
                specialise in reviews and reputation management services. We help businesses collect
                authentic user feedback, improve satisfaction and respond intelligently to reviews.
                Using a strategic mix of technology and personalised support, we turn customer
                experiences into opportunities for growth.
              </p>
            </motion.div>

            {/* Why Reviews Matter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Do Reviews Matter?
              </h2>
              <p>
                Reviews are critical. <span className="font-semibold">90% of customers</span> check
                online reviews before purchasing. Brands with ratings above{' '}
                <span className="font-semibold">4.5★</span> enjoy higher repeat business. A steady
                flow of positive reviews boosts local rankings and helps you stand out. Your reviews
                are more than words—they are living advertisements for your brand.
              </p>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Contentora Media Review Management & Reporting
              </h2>
              <div className="space-y-4">
                <p>
                  We help you collect reviews and encourage happy customers to share genuine
                  experiences across platforms like Google, Facebook, JustDial, Zomato and more. We
                  monitor reviews in real time and notify you instantly. Our team crafts thoughtful
                  responses—both positive and negative—to show customers you care.
                </p>
                <p>
                  If negative reviews are dragging you down, we minimise their impact by boosting
                  positive feedback, improving overall ratings and rebuilding trust.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Multi-platform monitoring & alerts</li>
                  <li>Response drafting (positive & negative)</li>
                  <li>Rating improvement & strategy</li>
                  <li>Sentiment tracking & reporting</li>
                  <li>Compliance & authenticity focus</li>
                </ul>
              </div>
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
                Why Choose Contentora Media?
              </h2>
              <p>
                We don't rely on generic formulas or cookie-cutter methods. Every business gets a
                customised plan tailored to its brand values and goals. We never offer fake or
                manipulated reviews—only genuine human engagement. Start-ups benefit from affordable
                packages while all clients report stronger trust and higher engagement.
              </p>
              <p>
                Unlike many review management companies, we study the customer journey, identify
                touchpoints and enhance interaction quality. This personalised approach ensures
                authenticity, credibility and long-term reputation strength.
              </p>
              <p>
                We understand platform differences and craft strategies accordingly—turning reviews
                into a growth-driving marketing asset and boosting your local SEO.
              </p>
              <p>
                Whether you are a small café or an e-commerce brand, we help you leverage customer
                experiences for sustainable growth.
              </p>
            </motion.div>

            {/* Who Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Who Can Benefit?
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Local businesses, cafés & restaurants</li>
                <li>Amazon, Meesho, Shopify & Flipkart sellers</li>
                <li>Start-ups building trust from scratch</li>
                <li>Hospitals, clinics & consultants</li>
                <li>Institutes seeking credibility</li>
              </ul>
            </motion.div>

            {/* Pricing & Plans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Pricing & Planning
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Starter Plan',
                    desc: 'Perfect for small businesses starting to build trust.',
                  },
                  {
                    name: 'Growth Plan',
                    desc: 'Ideal for brands seeking deeper engagement & reach.',
                  },
                  {
                    name: 'Premium Plan',
                    desc: 'Custom support for advanced review strategy & protection.',
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <h3 className="font-semibold text-secondary mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                * New clients can avail introductory discounts.
              </p>
            </motion.div>

            {/* Long-Term Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                The Long-Term Benefit of Professional Review Management
              </h2>
              <p>
                Investing in reviews is not just about improving your star rating. It's about
                building a sustainable reputation strategy. Through consistent collection,
                monitoring and responsiveness, we help increase conversion rates, strengthen search
                rankings and drive brand awareness.
              </p>
              <p>
                We respond to negative reviews with accountability and empathy while amplifying
                positive feedback. We focus on building a reputation that grows with your business
                as you expand into new markets.
              </p>
              <p>
                By partnering with us, you're not just managing feedback—you're investing in your
                brand's future.
              </p>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Why is review & reputation management important for a business?',
                    a: 'Online reviews strongly influence customer decisions. Positive reviews build trust and attract new clients.',
                  },
                  {
                    q: 'How does Contentora Media help improve reviews?',
                    a: 'We help collect feedback, craft responses, monitor sentiment and align reputation strategy with marketing goals.',
                  },
                  {
                    q: 'Can negative reviews be beneficial?',
                    a: 'Yes—handled professionally, they show transparency and help build credibility.',
                  },
                  {
                    q: 'Which businesses benefit from review management?',
                    a: 'Small businesses, e-commerce, service providers and health/education institutions benefit significantly.',
                  },
                  {
                    q: 'How quickly can I see results?',
                    a: 'Results vary based on business size. Relationship and reputation improvements build steadily over time.',
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Take Control of Your Online Reputation
              </h2>
              <p>
                Ready to build trust, strengthen credibility and turn feedback into growth? Let's
                start.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
