import React from 'react';
import PageHero from '../components/ui/PageHero.jsx';
import ContactDetails from '../components/sections/ContactDetails.jsx';
import EnquiryForm from '../components/forms/EnquiryForm.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function Contact() {
  useDocumentTitle(
    'Contact Us & Book Free Consultation',
    'Reach out to One Way Digital Media in HSR Layout, Bangalore. Call +91 8122404837, WhatsApp us, or submit an inquiry for a free digital marketing consultation.'
  );

  return (
    <>
      <PageHero
        tag="Let's Connect"
        title="START YOUR"
        highlight="GROWTH JOURNEY"
        lead="Have a question or looking to scale your business? Speak directly with our team in Bangalore and discover the one way forward for your brand."
      />

      <section className="section section-light" id="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Office, Direct Lines, Map & Why Ticks */}
            <div>
              <ContactDetails />
            </div>

            {/* Right: Validated Enquiry Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
