import React from 'react';
import PageHero from '../components/ui/PageHero.jsx';
import AboutIntro from '../components/sections/AboutIntro.jsx';
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx';
import StatsBand from '../components/sections/StatsBand.jsx';
import CtaSection from '../components/sections/CtaSection.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function About() {
  useDocumentTitle(
    'About Us | Digital Growth Partner',
    'Learn about One Way Digital Media - our mission, 5+ years of experience, values, and why ambitious businesses partner with us to scale digital revenue.'
  );

  return (
    <>
      <PageHero
        tag="Who We Are"
        title="ABOUT"
        highlight="US"
        lead="We are a digital marketing and technology powerhouse based in HSR Layout, Bangalore. We help ambitious founders and businesses build visibility, generate leads, and drive sustainable growth."
      />

      {/* About Intro Narrative + 4 Pillars Cards */}
      <AboutIntro />

      {/* 6 Numbered Advantages */}
      <WhyChooseUs theme="dark" />

      {/* Numerical Proof */}
      <StatsBand />

      {/* CTA */}
      <CtaSection
        title="Ready to Partner With Us?"
        lead="Let's connect for an introductory strategy call. We'll audit your present marketing funnels and uncover immediate avenues for growth."
      />
    </>
  );
}
