import React from 'react';
import '../../styles/marketing-channels.css';

const simpleIcon = (brand, color) => (
  `https://api.iconify.design/simple-icons/${brand}.svg?color=%23${color}`
);

const favicon = (domain) => (
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
);

const logoRows = [
  [
    { name: 'Adobe', src: simpleIcon('adobe', 'EB1000') },
    { name: 'Amazon', src: simpleIcon('amazon', 'FF9900') },
    { name: 'Google Ads', src: simpleIcon('googleads', '4285F4') },
    { name: 'Meta', src: simpleIcon('meta', '0866FF') },
    { name: 'WhatsApp', src: simpleIcon('whatsapp', '25D366') },
    { name: 'Taboola', src: favicon('taboola.com') },
  ],
  [
    { name: 'LinkedIn', src: simpleIcon('linkedin', '0A66C2') },
    { name: 'Semrush', src: simpleIcon('semrush', 'FF642D') },
    { name: 'WATI', src: favicon('wati.io') },
    { name: 'Interakt', src: favicon('interakt.shop') },
    { name: 'Zoho', src: simpleIcon('zoho', 'E42527') },
    { name: 'Mailchimp', src: simpleIcon('mailchimp', 'FFE01B') },
  ],
  [
    { name: 'Flipkart', src: simpleIcon('flipkart', '2874F0') },
    { name: 'Google Analytics', src: simpleIcon('googleanalytics', 'E37400') },
    { name: 'Google Neo', src: 'https://api.iconify.design/logos/google-icon.svg' },
    { name: 'Google Flow', src: 'https://api.iconify.design/logos/google-gemini.svg' },
    { name: 'Microsoft', src: simpleIcon('microsoft', '5E5E5E') },
    { name: 'Pinterest', src: simpleIcon('pinterest', 'BD081C') },
  ],
];

export default function MarketingChannels() {
  return (
    <section className="marketing-channels-section" aria-labelledby="marketing-channels-title">
      <div className="container">
        <h2 className="marketing-channels-title" id="marketing-channels-title">
          Our Marketing and Automation Channels
        </h2>

        <div className="marketing-channels-rows">
          {logoRows.map((row, rowIndex) => (
            <div
              className={`marketing-channel-row${rowIndex === 2 ? ' marketing-channel-row-centered' : ''}`}
              key={rowIndex}
            >
              {row.map(({ name, src }, logoIndex) => {
                const index = rowIndex * 6 + logoIndex;
                return (
                  <div
                    className="marketing-channel-card"
                    key={name}
                    role="img"
                    aria-label={name}
                    style={{
                      '--float-duration': `${4.8 + (index % 4) * 0.35}s`,
                      '--float-delay': `${(index % 6) * -0.45}s`,
                    }}
                  >
                    <img src={src} alt="" loading="lazy" />
                    <span className="marketing-channel-name">{name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
