"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoFeatures from '@/components/BentoFeatures';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <Hero />

      <BentoFeatures />

      {/* Migration Section */}
      <section className="migration">
        <div className="container">
          <div className="migration-card">
            <div className="migration-content">
              <h2>Migrate in seconds</h2>
              <p>Switching from Linktree or Bento? We'll import all your links and content automatically. No manual work required.</p>
              <div className="migration-platforms">
                <span className="platform">Linktree</span>
                <span className="platform">Bento</span>
                <span className="platform">Beacons</span>
                <span className="platform">Koji</span>
              </div>
              <button className="btn-primary">Start Migration <ArrowRight size={18} /></button>
            </div>
            <div className="migration-visual">
              <div className="migration-animation">
                <div className="platform-icon old">L</div>
                <div className="transfer-line">
                  <motion.div
                    className="transfer-dot"
                    animate={{ x: [0, 200] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>
                <div className="platform-icon new">T</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="templates">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Stunning Templates</h2>
            <p className="section-subtitle">Choose from our curated collection of professional templates.</p>
          </div>
          <div className="template-grid">
            {[
              { name: "Creator Pro", tag: "Polished", color: "#6366f1" },
              { name: "Minimalist", tag: "Clean", color: "#18181b" },
              { name: "Artist", tag: "Creative", color: "#ec4899" },
              { name: "Developer", tag: "Tech", color: "#10b981" }
            ].map((template, i) => (
              <motion.div
                key={i}
                className="template-card"
                whileHover={{ y: -10 }}
              >
                <div className="template-preview" style={{ background: template.color }}>
                  <span className="template-tag">{template.tag}</span>
                </div>
                <div className="template-info">
                  <h3>{template.name}</h3>
                  <button className="btn-text">Preview <ArrowRight size={16} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Love */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wall of Love</h2>
            <p className="section-subtitle">Loved by 10,000+ creators around the world.</p>
          </div>
          <div className="testimonial-grid">
            {[
              { name: "Sarah Drasner", handle: "@sarah_edo", text: "The best tool for personal branding. Periodic and beautiful.", rating: 5 },
              { name: "Adam Wathan", handle: "@adamwathan", text: "The bento layout is a game changer. Super clean and modern.", rating: 5 },
              { name: "Lee Robinson", handle: "@leerob", text: "I've tried every link-in-bio tool, and Typelink is miles ahead.", rating: 5 },
              { name: "Addy Osmani", handle: "@addyosmani", text: "Performance is incredible. My site loads in under 500ms.", rating: 5 },
              { name: "Wes Bos", handle: "@wesbos", text: "Finally, a link-in-bio tool that doesn't look like 2010.", rating: 5 },
              { name: "Cassidy Williams", handle: "@cassidoo", text: "It's so fun to build! The UX is top-notch.", rating: 5 }
            ].map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" stroke="none" />)}
                </div>
                <p className="quote">"{t.text}"</p>
                <div className="user">
                  <div className="avatar-small"></div>
                  <div>
                    <p className="name">{t.name}</p>
                    <p className="handle">{t.handle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple Pricing</h2>
            <p className="section-subtitle">Start for free, upgrade when you're ready.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="card-header">
                <h3>Free</h3>
                <p className="price">$0<span>/mo</span></p>
              </div>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Unlimited links</li>
                <li><CheckCircle2 size={18} /> Basic analytics</li>
                <li><CheckCircle2 size={18} /> 3 Standard templates</li>
                <li><CheckCircle2 size={18} /> Typelink subdomain</li>
              </ul>
              <button className="btn-secondary btn-full">Get started</button>
            </div>
            <div className="pricing-card featured">
              <span className="save-badge">Save 20% yearly</span>
              <div className="card-header">
                <h3>Pro</h3>
                <p className="price">$9<span>/mo</span></p>
              </div>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Everything in Free</li>
                <li><CheckCircle2 size={18} /> Custom domains</li>
                <li><CheckCircle2 size={18} /> Advanced analytics</li>
                <li><CheckCircle2 size={18} /> All premium templates</li>
                <li><CheckCircle2 size={18} /> Priority support</li>
                <li><CheckCircle2 size={18} /> Remove branding</li>
              </ul>
              <button className="btn-primary btn-full">Go Pro</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner container">
        <div className="cta-card">
          <h2>Ready to build your personal site?</h2>
          <p>Join thousands of creators and get started today.</p>
          <button className="btn-primary btn-lg">Create your free Typelink</button>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .landing-page {
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Migration Section */
        .migration {
          padding: 100px 0;
          background: #000;
          color: white;
        }

        .migration-card {
          background: #111;
          border: 1px solid #222;
          border-radius: var(--radius-xl);
          padding: 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .migration-content h2 { font-size: 40px; margin-bottom: 24px; }
        .migration-content p { font-size: 18px; color: #aaa; margin-bottom: 32px; line-height: 1.6; }

        .migration-platforms {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }

        .platform {
          padding: 6px 16px;
          background: #222;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .migration-visual {
          display: flex;
          justify-content: center;
        }

        .migration-animation {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .platform-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
        }

        .old { background: #39e09b; color: #000; }
        .new { background: var(--primary); color: white; }

        .transfer-line {
          width: 200px;
          height: 4px;
          background: #222;
          position: relative;
          border-radius: 2px;
        }

        .transfer-dot {
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          position: absolute;
          top: -4px;
          left: 0;
          box-shadow: 0 0 10px var(--primary);
        }

        /* Templates Section */
        .templates { padding: 100px 0; background: #fafafa; }
        .template-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .template-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--card-border);
          transition: var(--transition);
        }

        .template-preview {
          height: 300px;
          position: relative;
          padding: 24px;
        }

        .template-tag {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: white;
        }

        .template-info {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .template-info h3 { font-size: 16px; font-weight: 700; }
        .btn-text { color: var(--primary); font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 4px; }

        /* Testimonials */
        .testimonials { padding: 100px 0; }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: white;
          border: 1px solid var(--card-border);
          border-radius: var(--radius-xl);
          padding: 32px;
        }

        .stars { color: #f59e0b; display: flex; gap: 4px; margin-bottom: 24px; }
        .quote { font-size: 18px; font-weight: 500; margin-bottom: 32px; line-height: 1.5; letter-spacing: -0.01em; }

        /* Pricing */
        .pricing { padding: 100px 0; background: #fdfdfd; }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          border: 1px solid var(--card-border);
          border-radius: var(--radius-xl);
          padding: 48px;
          display: flex;
          flex-direction: column;
        }

        .pricing-card.featured {
          border-color: var(--primary);
          position: relative;
        }

        .save-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #10b981;
          color: white;
          padding: 4px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .card-header h3 { font-size: 20px; color: var(--muted); margin-bottom: 12px; }
        .price { font-size: 64px; font-weight: 800; letter-spacing: -0.04em; margin-bottom: 40px; }
        .price span { font-size: 20px; color: var(--muted); font-weight: 500; }

        .features-list { list-style: none; margin-bottom: 48px; flex-grow: 1; }
        .features-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 16px;
          color: #444;
        }

        :global(.features-list svg) { color: #10b981; }

        .btn-full { width: 100%; padding: 16px; font-size: 16px; }

        /* CTA Banner */
        .cta-banner { padding: 80px 0; }
        .cta-card {
          background: var(--primary);
          border-radius: var(--radius-xl);
          padding: 80px;
          text-align: center;
          color: white;
        }

        .cta-card h2 { font-size: 48px; font-weight: 800; margin-bottom: 24px; letter-spacing: -0.03em; }
        .cta-card p { font-size: 20px; opacity: 0.9; margin-bottom: 48px; }
        .cta-card .btn-primary { background: white; color: var(--primary); }
        .cta-card .btn-primary:hover { transform: scale(1.05); }

        @media (max-width: 900px) {
          .migration-card { grid-template-columns: 1fr; text-align: center; padding: 40px; }
          .migration-platforms { justify-content: center; }
          .template-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: repeat(2, 1fr); }
          .pricing-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .template-grid { grid-template-columns: 1fr; }
          .testimonial-grid { grid-template-columns: 1fr; }
          .cta-card { padding: 40px 24px; }
          .cta-card h2 { font-size: 32px; }
        }
      `}</style>
    </main>
  );
}
