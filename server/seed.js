import mongoose from 'mongoose';
import { env } from './config/env.js';
import { Project } from './models/Project.js';

/**
 * Projects database seed script
 * Usage:
 *   node seed.js         (Seeds if collection is empty)
 *   node seed.js --reset (Clears and re-seeds)
 */

// Initial projects array (empty by default as per spec, with commented examples below)
const initialProjects = [
  /*
  {
    title: 'D2C Apparel Brand 4.2x ROAS Scale',
    client: 'Velvet Stitch Studio',
    category: 'performance-ads',
    description: 'Scaled paid customer acquisition across Meta and Google Ads using high-velocity creative testing, dynamic catalog funnels, and retention email flows.',
    result: '4.2x ROAS generated over 90 days with 65% reduction in CAC.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    year: 2025,
    featured: true,
    order: 1,
    published: true,
    tags: ['Meta Ads', 'Google Ads', 'ROAS', 'E-commerce']
  },
  {
    title: 'Bangalore Multi-Speciality Clinic Patient Inquiries',
    client: 'Aura Health & Diagnostics',
    category: 'social-media',
    description: 'Engineered educational doctor reels, local map dominance, and community consultation funnels across HSR Layout and Koramangala.',
    result: 'Generated 340+ verified monthly appointment inquiries at ₹120 cost-per-lead.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    year: 2025,
    featured: true,
    order: 2,
    published: true,
    tags: ['Local SEO', 'Instagram Reels', 'Healthcare']
  },
  {
    title: 'High-Conversion Architecture Showcase Platform',
    client: 'Nexus Design Studio',
    category: 'website',
    description: 'Designed and developed a lightning-fast portfolio platform with responsive project galleries, interactive blueprints, and instant WhatsApp booking.',
    result: 'Mobile load time under 0.8s, 140% increase in qualified consultation bookings.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    year: 2025,
    featured: true,
    order: 3,
    published: true,
    tags: ['Web Design', 'React', 'Portfolio']
  }
  */
];

async function runSeed() {
  const isReset = process.argv.includes('--reset');

  try {
    console.log(`[Seed] Connecting to MongoDB: ${env.MONGO_URI}`);
    await mongoose.connect(env.MONGO_URI);
    console.log('[Seed] Database connected.');

    if (isReset) {
      console.log('[Seed] Flag --reset detected. Clearing existing projects...');
      await Project.deleteMany({});
      console.log('[Seed] All projects cleared.');
    }

    const count = await Project.countDocuments();
    console.log(`[Seed] Current project count: ${count}`);

    if (initialProjects.length > 0) {
      if (count === 0 || isReset) {
        console.log(`[Seed] Inserting ${initialProjects.length} initial projects...`);
        await Project.insertMany(initialProjects);
        console.log('[Seed] Projects inserted successfully.');
      } else {
        console.log('[Seed] Projects already exist. Skipping insertion. Use --reset to overwrite.');
      }
    } else {
      console.log('[Seed] initialProjects array is empty as configured. Ready for custom case studies.');
    }

    console.log('[Seed] Done.');
    process.exit(0);
  } catch (err) {
    console.error('[Seed] Error during seeding:', err.message);
    process.exit(1);
  }
}

runSeed();
