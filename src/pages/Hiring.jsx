import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Hiring() {
  return (
    <>
      <Helmet>
        <title>
          Best Recruitment Agency in India | Top Hiring & Recruitment Services Company in India
        </title>
        <meta
          name="description"
          content="Contentora media provides top hiring and recruitment services across India. We help businesses find skilled talent quickly with efficient, reliable, and industry-focused hiring solutions."
        />
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
              Hiring <span className="text-secondary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Your partner in finding the right interns. Build teams with capable, motivated and
              reliable talent across diverse domains.
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
                Every business grows faster with the right people. We help companies hire motivated,
                reliable professionals—from creative thinkers to technical experts—simplifying and
                accelerating the hiring process.
              </p>
            </motion.div>

            {/* Smarter Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                A Smarter Approach to Hiring
              </h2>
              <p>
                Hiring shouldn't feel overwhelming. Our approach combines industry knowledge with
                manual, human-led matching—never relying on bots or AI alone. We screen candidates
                personally to avoid missing talented, hardworking individuals, reduce mismatch risk
                and cut hiring time.
              </p>
              <p>
                Whether you're a start-up or an established company, we adapt to your unique needs
                and help you build lasting relationships with hires who contribute to your success.
              </p>
            </motion.div>

            {/* Why Work with Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Why Work with Us?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Diverse Domains:</span> Marketing, finance, HR,
                  technology, design, research and more.
                </li>
                <li>
                  <span className="font-semibold">Assessed by HR Team:</span> Every candidate is
                  evaluated for fit with your company culture and goals.
                </li>
                <li>
                  <span className="font-semibold">Flexible Tenure:</span> Short-term support,
                  long-term interns, freelancers or full-time placements.
                </li>
                <li>
                  <span className="font-semibold">Time-Saving Process:</span> Designed to fill
                  positions quickly without cutting corners.
                </li>
                <li>
                  <span className="font-semibold">Cost-Effective:</span> Hiring that adds value
                  while avoiding unnecessary expenses.
                </li>
              </ul>
            </motion.div>

            {/* How We Work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                How We Work
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Share Requirements:</span> Type of talent, skills,
                  experience, positions needed.
                </li>
                <li>
                  <span className="font-semibold">We Source Candidates:</span> Identify and screen
                  profiles suited to your company.
                </li>
                <li>
                  <span className="font-semibold">You Choose the Match:</span> We arrange interviews
                  so you meet shortlisted candidates.
                </li>
                <li>
                  <span className="font-semibold">Easy Onboarding:</span> Once you decide, we ensure
                  smooth coordination and onboarding support.
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
                Benefits for Your Business
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Skilled Professionals',
                    text: 'Access talent across multiple domains.',
                  },
                  { title: 'Fresh Ideas', text: 'Interns with innovative thinking and sincerity.' },
                  {
                    title: 'Tailored Process',
                    text: 'Customised to your specific business needs.',
                  },
                  { title: 'Stronger Teams', text: 'Build your workforce with the right fit.' },
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

            {/* Value of Right Hire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                The Value of the Right Hire
              </h2>
              <p>
                Every successful company is built by the right hires. The right candidate brings
                energy, ideas and long-term value—not just task completion. We go beyond resumes to
                ensure new hires integrate into your culture and contribute to future challenges.
              </p>
              <p>
                Hiring is a partnership where your expertise and vision meet our recruitment
                precision to create teams that are creative, hardworking and ready for tomorrow's
                opportunities.
              </p>
            </motion.div>

            {/* Recruitment Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Recruitment Process
              </h2>
              <p>Our expert, cost-effective approach to talent solutions:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-semibold">Pre-Hiring:</span> Meet with HR team and hiring
                  managers to understand business goals, roles, KPIs, diversity needs, and draft
                  initial job descriptions.
                </li>
                <li>
                  <span className="font-semibold">Job Posting:</span> Advertise on LinkedIn, Indeed,
                  Job Boards, niche sites and through referral programs.
                </li>
                <li>
                  <span className="font-semibold">Screening:</span> Resume review, phone/text
                  screening, digital assessments and structured interviews to ensure communication
                  between candidates and company.
                </li>
                <li>
                  <span className="font-semibold">Hiring & Onboarding:</span> Forward suitable
                  resumes to your business with detailed offer letters and onboarding support.
                </li>
                <li>
                  <span className="font-semibold">Analysis & Support:</span> Analyse KPIs, diversity
                  metrics, hiring efficiency and provide ongoing support via job description
                  refinement and sourcing strategy adjustments.
                </li>
              </ol>
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
                    1. What kind of roles do you cover?
                  </h3>
                  <p>We help hire across IT, research, HR, management, marketing and more.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">2. How quickly can I hire?</h3>
                  <p>
                    Our process is designed for short turnaround times—speed depends on your
                    requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    3. Do you screen candidates before forwarding?
                  </h3>
                  <p>
                    Yes. We combine AI filtering with manual review to avoid missing talent and
                    select the right fit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">
                    4. Short-term and long-term hiring?
                  </h3>
                  <p>Yes—contract, part-time, full-time interns, and freelancers for projects.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">5. How do I get started?</h3>
                  <p>Share your requirements and we'll connect you with the right person.</p>
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
                Let's Work Together!
              </h2>
              <p>Contact us today to start building your team with the right talent.</p>
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
