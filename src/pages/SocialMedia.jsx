import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SocialMedia() {
  return (
    <>
      <Helmet>
        <title>Social Media Marketing Agency in India | Contentora Media</title>
        <meta
          name="description"
          content="Grow your brand with Contentora Media, a fast-growing social media marketing agency in India. We create engaging content, build communities, and deliver real results across Instagram, Facebook, LinkedIn, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">Social Media Marketing</h1>
      </div>
    </>
  );
}
