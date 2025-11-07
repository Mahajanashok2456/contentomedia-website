import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PPC from './pages/PPC';
import ContentWriting from './pages/ContentWriting';
import Proofreading from './pages/Proofreading';
import PaidGuestPosting from './pages/PaidGuestPosting';
import SEO from './pages/SEO';
import Hiring from './pages/Hiring';
import WhatsAppMarketing from './pages/WhatsAppMarketing';
import EmailMarketing from './pages/EmailMarketing';
import Reviews from './pages/Reviews';
import CVWriting from './pages/CVWriting';
import WebsiteDevelopment from './pages/WebsiteDevelopment';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/ppc" element={<PPC />} />
        <Route path="services/content-writing" element={<ContentWriting />} />
        <Route path="services/proofreading" element={<Proofreading />} />
        <Route path="services/paid-guest-posting" element={<PaidGuestPosting />} />
        <Route path="services/seo" element={<SEO />} />
        <Route path="services/hiring" element={<Hiring />} />
        <Route path="services/whatsapp-marketing" element={<WhatsAppMarketing />} />
        <Route path="services/email-marketing" element={<EmailMarketing />} />
        <Route path="services/reviews" element={<Reviews />} />
        <Route path="services/cv-writing" element={<CVWriting />} />
  <Route path="services/website-development" element={<WebsiteDevelopment />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}
