"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Info, HelpCircle } from 'lucide-react';

const faqs = [
    { q: "Is there a free plan?", a: "Yes! Our free plan includes everything you need to build a stunning link-in-bio page, including unlimited links and basic analytics." },
    { q: "Can I use my own domain?", a: "Pro users can connect their custom domains (e.g., yourname.com) directly to their Typelink profile." },
    { q: "How much does the Pro plan cost?", a: "The Pro plan is $9/month billed annually ($108/year) or $12/month billed monthly." },
    { q: "Can I cancel my subscription?", a: "Absolutely. You can cancel your subscription at any time from your account settings." },
];

export default function PricingPage() {
    return (
        <div className="pricing-page">
            <Navbar />

            <section className="pricing-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <h1>Simple, transparent pricing.</h1>
                        <p>Start for free. Upgrade to unlock powerful features.</p>

                        <div className="billing-toggle">
                            <span className="active">Monthly</span>
                            <div className="toggle-switch"></div>
                            <span>Yearly <span className="save-tag">Save 20%</span></span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pricing-plans container">
                <div className="plans-grid">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2>Free</h2>
                            <p className="price">$0<span>/mo</span></p>
                            <p className="description">Perfect for starting your digital presence.</p>
                        </div>
                        <button className="btn-secondary btn-full">Get started for free</button>
                        <ul className="features-list">
                            <li><Check size={18} /> Unlimited links</li>
                            <li><Check size={18} /> Basic analytics</li>
                            <li><Check size={18} /> 3 Standard templates</li>
                            <li><Check size={18} /> Typelink subdomain</li>
                            <li><Check size={18} /> Community support</li>
                        </ul>
                    </div>

                    <div className="plan-card featured">
                        <div className="featured-badge">MOST POPULAR</div>
                        <div className="plan-header">
                            <h2>Pro</h2>
                            <p className="price">$9<span>/mo</span></p>
                            <p className="description">For professionals who want full control.</p>
                        </div>
                        <button className="btn-primary btn-full">Go Pro</button>
                        <ul className="features-list">
                            <li><Check size={18} /> Everything in Free</li>
                            <li><Check size={18} /> Custom domains</li>
                            <li><Check size={18} /> Advanced analytics</li>
                            <li><Check size={18} /> All premium templates</li>
                            <li><Check size={18} /> Remove Typelink branding</li>
                            <li><Check size={18} /> Priority support</li>
                            <li><Check size={18} /> Early access to new features</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="comparison container">
                <div className="section-header">
                    <h2>Compare Features</h2>
                </div>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Free</th>
                            <th>Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Unlimited Links</td>
                            <td><Check className="check" /></td>
                            <td><Check className="check" /></td>
                        </tr>
                        <tr>
                            <td>Bento Layouts</td>
                            <td><Check className="check" /></td>
                            <td><Check className="check" /></td>
                        </tr>
                        <tr>
                            <td>Custom Domains</td>
                            <td>-</td>
                            <td><Check className="check" /></td>
                        </tr>
                        <tr>
                            <td>Remove Branding</td>
                            <td>-</td>
                            <td><Check className="check" /></td>
                        </tr>
                        <tr>
                            <td>Advanced Analytics</td>
                            <td>-</td>
                            <td><Check className="check" /></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="faqs container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-grid">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item">
                            <div className="faq-q">
                                <HelpCircle size={20} className="q-icon" />
                                <h3>{faq.q}</h3>
                            </div>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

            <style jsx>{`
        .pricing-page {
          background: #ffffff;
          padding-top: 100px;
        }

        .pricing-hero {
          padding: 80px 0 60px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-content p {
          font-size: 20px;
          color: var(--muted);
          margin-bottom: 48px;
        }

        .billing-toggle {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: #f4f4f5;
          padding: 8px 24px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 14px;
        }

        .toggle-switch {
          width: 48px;
          height: 24px;
          background: var(--primary);
          border-radius: 20px;
          position: relative;
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 4px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
        }

        .save-tag {
          color: #10b981;
          margin-left: 4px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto 100px;
        }

        .plan-card {
          background: white;
          border: 1px solid #e4e4e7;
          border-radius: var(--radius-xl);
          padding: 48px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: var(--transition);
        }

        .plan-card.featured {
          border-color: var(--primary);
        }

        .featured-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          background: var(--primary);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 800;
        }

        .plan-header h2 { font-size: 24px; color: var(--muted); margin-bottom: 12px; }
        .price { font-size: 64px; font-weight: 800; letter-spacing: -0.04em; margin-bottom: 16px; }
        .price span { font-size: 20px; color: var(--muted); }
        .description { font-size: 16px; color: var(--muted); margin-bottom: 40px; }

        .btn-full { width: 100%; padding: 16px; font-size: 18px; margin-bottom: 48px; }

        .features-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .features-list li { display: flex; align-items: center; gap: 12px; font-size: 16px; color: #444; }
        :global(.features-list svg) { color: #10b981; }

        .comparison { padding: 100px 0; border-top: 1px solid #e4e4e7; }
        .section-header { text-align: center; margin-bottom: 64px; }
        .comparison-table { width: 100%; border-collapse: collapse; max-width: 800px; margin: 0 auto; }
        .comparison-table th { padding: 24px; text-align: left; border-bottom: 2px solid #e4e4e7; font-size: 18px; }
        .comparison-table td { padding: 20px 24px; border-bottom: 1px solid #e4e4e7; font-size: 16px; }
        .check { color: #10b981; }

        .faqs { padding: 100px 0; background: #fafafa; border-radius: 60px; margin-bottom: 100px; }
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; max-width: 900px; margin: 0 auto; }
        .faq-item h3 { font-size: 18px; margin-bottom: 12px; display: flex; align-items: center; gap: 12px; }
        .faq-item p { color: var(--muted); line-height: 1.6; }
        .q-icon { color: var(--primary); }

        @media (max-width: 768px) {
          .plans-grid { grid-template-columns: 1fr; }
          .faq-grid { grid-template-columns: 1fr; }
          .comparison-table { font-size: 14px; }
        }
      `}</style>
        </div>
    );
}
