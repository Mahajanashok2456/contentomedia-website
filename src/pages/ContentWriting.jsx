import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function ContentWriting() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Best Content Writing Company in India | Content Writing Agency in India</title>
        <meta
          name="description"
          content="Contentora Media is India's most trusted content writing agency offering SEO content, blog writing, website copy, and creative brand storytelling. High-quality, plagiarism-free content that boosts visibility and drives results."
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
              Content <span className="text-secondary">Writing Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              The right words can transform the way people see your brand. We craft original,
              strategic, human-first content that builds trust and drives action.
            </motion.p>
          </div>
        </section>

        {/* Body */}
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
                Our Philosophy
              </h2>
              <p>
                At Contentora Media, we believe that content creation goes beyond words on a page.
                Each piece is tailored as a reflection of your brand's distinct personality with the
                goal of creating deep audience relationships. We communicate with clarity,
                creativity and impact.
              </p>
              <p>
                Whether you're establishing an online presence, launching a campaign or
                strengthening social media visibility—our content writing services help build
                recognition and credibility.
              </p>
            </motion.div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                What We Write
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-secondary">Blog & Article Writing</h3>
                  <p>
                    Insightful, engaging, well-researched blogs that position your brand as an
                    authority and keep readers hooked from first line to last.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Website Content</h3>
                  <p>
                    Homepages, service pages, landing pages and About sections that are concise,
                    impactful and built to leave a lasting impression.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Copywriting</h3>
                  <p>
                    Product descriptions, ads, sales pages and email marketing copy that stays true
                    to brand values while driving action.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Social Media Content</h3>
                  <p>
                    Captions, campaign messaging and storytelling posts with creativity and
                    consistency to spark conversation and expand reach.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">SEO Content Writing</h3>
                  <p>
                    Strategic integration of keywords in blogs and product descriptions to rank
                    higher without sacrificing the human touch.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Technical Writing</h3>
                  <p>
                    Manuals, white papers, case studies and product documentation that simplify
                    complexity with clarity and precision.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Academic & Research Writing</h3>
                  <p>
                    Essays, reports and research papers with proper structure, accurate citations
                    and original thought—ideal for students and professionals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Creative Writing</h3>
                  <p>
                    Stories, scripts and speeches written with fresh perspective, originality and
                    emotional resonance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Editing & Proofreading</h3>
                  <p>
                    Grammar, tone, style and structure refinement ensuring polished, professional,
                    publication-ready content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Ghost Writing</h3>
                  <p>
                    Original human-written blogs, books and articles under your name—your ideas
                    turned into expertly crafted narratives.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Choose Contentora Media?
              </h2>
              <ul className="grid gap-4 list-none p-0">
                <li className="bg-orange-50 rounded-lg p-4">
                  <span className="font-semibold text-secondary">Impactful & Authentic:</span> We
                  deliver content that connects with audience and brand value while feeling unique
                  and relatable.
                </li>
                <li className="bg-blue-50 rounded-lg p-4">
                  <span className="font-semibold text-secondary">Original & Human-First:</span>{' '}
                  Everything is written from scratch and double-checked for AI & plagiarism-free
                  quality.
                </li>
                <li className="bg-orange-50 rounded-lg p-4">
                  <span className="font-semibold text-secondary">Flexible & Affordable:</span>{' '}
                  Packages accessible to small, medium and large industries without compromise.
                </li>
                <li className="bg-blue-50 rounded-lg p-4">
                  <span className="font-semibold text-secondary">Reliable Delivery:</span> Fast
                  turnaround while maintaining quality standards.
                </li>
                <li className="bg-orange-50 rounded-lg p-4">
                  <span className="font-semibold text-secondary">Human-First SEO:</span> We
                  integrate keywords naturally so content ranks while staying reader-focused.
                </li>
              </ul>
            </motion.div>

            {/* Why We Are The Best */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Are We The Best?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Your Brand, Your Voice',
                    text: 'Custom content that strengthens brand awareness across web and social—always AI & plagiarism-free.',
                  },
                  {
                    title: 'Words That Work',
                    text: 'Writing engineered to engage, inform and convert—never filler.',
                  },
                  {
                    title: 'Original & Authentic',
                    text: 'Every piece built from scratch and quality checked.',
                  },
                  {
                    title: 'Affordable Excellence',
                    text: 'High quality without a heavy price tag—budget friendly packages.',
                  },
                  {
                    title: 'On Time, Every Time',
                    text: 'We honour deadlines the same as quality.',
                  },
                  {
                    title: 'Diverse Expertise',
                    text: 'Blogs, websites, e-books, technical and creative pieces under one roof.',
                  },
                  {
                    title: 'Human-First Approach',
                    text: 'We write for people and naturally integrate keywords for ranking.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg shadow-sm bg-gray-50 border border-gray-200"
                  >
                    <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Importance / Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Importance of Quality Content
              </h2>
              <p>
                Quality content writing strengthens brand trust, improves search visibility,
                nurtures leads and amplifies conversions across every channel.
              </p>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary">
                    1. How do we ensure content is AI & plagiarism-free?
                  </h3>
                  <p>
                    Everything is written from scratch and double-checked for originality before
                    delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    2. Can you write for my specific business or industry?
                  </h3>
                  <p>Yes. We research your industry and deliver on time.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. Do you write SEO-optimised content?
                  </h3>
                  <p>Absolutely. Content is SEO-friendly yet natural and reader-focused.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    4. What if I need my project completed quickly?
                  </h3>
                  <p>We offer express services for urgent projects without compromising quality.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">5. How do I start?</h3>
                  <p>
                    Reach out via our Contact page or email— we’ll align on goals and plan the right
                    approach.
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
