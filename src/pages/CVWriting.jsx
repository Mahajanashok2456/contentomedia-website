import React from 'react';
import { motion } from 'framer-motion';

export default function CVWriting() {
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
            Professional <span className="text-secondary">CV & Resume Writing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Turn your skills, experience and achievements into a compelling, ATS-optimised career
            narrative that gets noticed and hired.
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
              Whether you're a student, recent graduate or seasoned professional, you compete in a
              crowded corporate environment filled with talent and ambition. Your CV / resume is no
              longer a basic document—it's your strategic representative and value proposition.
            </p>
            <p>
              <span className="font-semibold text-primary">
                Contentora Media's CV & Resume Writing Service
              </span>{' '}
              crafts professionally structured documents that highlight your personal value,
              achievements and future potential—positioning you ahead of thousands of competing
              applications.
            </p>
            <p className="font-semibold text-secondary">
              Streamline your job search today and unlock new opportunities.
            </p>
          </motion.div>

          {/* Applicant Issues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Common Issues Faced by Applicants
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Applying to many jobs but not hearing back</li>
              <li>Low ATS score or outright tracking rejection</li>
              <li>Struggling to condense experience & education</li>
              <li>Unclear career narrative or positioning</li>
              <li>Difficulty converting responsibilities to achievements</li>
              <li>Career gaps, role changes or early-stage profile uncertainty</li>
            </ul>
          </motion.div>

          {/* Why Optimize */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Why You Need Your Resume Optimised Today
            </h2>
            <p>
              Your resume acts as your agent, representing your value in a professional marketplace.
              Tailoring it to your achievements is the first step in securing the right
              opportunities.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recruiters scan thousands of applications—yours must stand out</li>
              <li>ATS compliance is mandatory to pass automated filters</li>
              <li>Condensing years of experience into structured impact improves response rate</li>
              <li>Skills, qualifications and results must become quantifiable achievements</li>
              <li>Vocational challenges (gaps, sector changes) require expert positioning</li>
            </ul>
          </motion.div>

          {/* Why Us */}
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
              Our certified professional writers understand market dynamics and hiring psychology
              across industries. We research your target roles, refine positioning and build a
              narrative that combines personal brand clarity with role match realism.
            </p>
            <p>
              We optimise format, structure, headings and keyword density for Applicant Tracking
              Systems (ATS) without sacrificing human readability or emotional connection.
            </p>
            <p>
              Our objective lens trims redundancy, highlights measurable impact and aligns with
              industry expectations. Every document goes through refinement and revision to ensure
              precision and authenticity.
            </p>
            <p>
              We provide ongoing support—help adjusting for new roles, refining focus and updating
              career developments.
            </p>
          </motion.div>

          {/* Services Offered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Our Services Include
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'CV Writing Service',
                'Resume Writing (Text / Visual / Infographic)',
                'Cover Letter Writing',
                'LinkedIn Profile Optimisation',
                'Personal Branding Strategy',
                'Interview Preparation',
                'SOP Writing',
                'Job Search Assistance',
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
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is an ATS and why optimise for it?',
                  a: 'An Applicant Tracking System scans and filters resumes before human review. Proper formatting, structure and keyword alignment prevent premature rejection.',
                },
                {
                  q: 'I lack professional experience—can you still help?',
                  a: 'Yes. We highlight academic projects, volunteer work, transferable skills and early achievements to build credibility.',
                },
                {
                  q: 'What do you need to start?',
                  a: 'Your current resume (if any), career goals, work history, education, certifications and target roles. The more detail, the higher the precision.',
                },
                {
                  q: 'How long does delivery take?',
                  a: 'Turnaround depends on package—standard delivery is communicated clearly at onboarding.',
                },
                {
                  q: 'Resume vs CV—what is the difference?',
                  a: 'A resume is concise and role-targeted; a CV is comprehensive, often academic and detail-heavy. We guide which suits your situation.',
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-4"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Get Your Career Moving Forward
            </h2>
            <p>
              Ready to accelerate job responses, pass ATS screening and showcase authentic
              achievement? We can help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Start Your Resume Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
