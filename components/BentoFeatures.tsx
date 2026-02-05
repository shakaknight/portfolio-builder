"use client";

import { motion } from 'framer-motion';
import { Layout, Palette, BarChart3, Globe, Zap, Shield, MousePointer2, Image as ImageIcon } from 'lucide-react';

const features = [
  {
    title: "Bento Layout",
    description: "Organize your links, social media, and content in a beautiful, modern grid system. No more boring lists.",
    icon: <Layout className="icon-blue" />,
    size: "large"
  },
  {
    title: "Real-time Analytics",
    description: "Understand your audience with deep insights into clicks, referrals, and geographic locations.",
    icon: <BarChart3 className="icon-green" />,
    size: "small"
  },
  {
    title: "Dynamic Themes",
    description: "Personalize everything from fonts and colors to custom CSS and background effects.",
    icon: <Palette className="icon-purple" />,
    size: "small"
  },
  {
    title: "Custom Domains",
    description: "Connect your own domain name (e.g., yourname.com) for a professional and branded experience.",
    icon: <Globe className="icon-orange" />,
    size: "small"
  },
  {
    title: "Blazing Speed",
    description: "Built on a global edge network for sub-second load times anywhere in the world.",
    icon: <Zap className="icon-yellow" />,
    size: "small"
  },
  {
    title: "Interactive Widgets",
    description: "Embed Spotify playlists, YouTube videos, GitHub contributions, and more directly on your page.",
    icon: <MousePointer2 className="icon-red" />,
    size: "large"
  },
  {
    title: "Stunning Imagery",
    description: "High-quality image support with built-in Unsplash integration and beautiful animations.",
    icon: <ImageIcon className="icon-cyan" />,
    size: "small"
  },
  {
    title: "Secure & Private",
    description: "Enterprise-grade security and full GDPR compliance. Your data belongs to you.",
    icon: <Shield className="icon-indigo" />,
    size: "small"
  }
];

export default function BentoFeatures() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything you need <br /> to stand out online</h2>
          <p className="section-subtitle">Powerful features designed for the modern creator.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`feature-card ${feature.size}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          padding: 120px 0;
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 20px;
          color: #666;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-xl);
          padding: 40px;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-card:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .feature-card.large {
          grid-column: span 2;
          flex-direction: row;
          align-items: center;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }

        :global(.feature-icon svg) { width: 28px; height: 28px; }

        .feature-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .feature-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 16px;
        }

        .large .feature-title { font-size: 28px; }
        .large .feature-description { font-size: 18px; }

        .icon-blue { color: #3b82f6; }
        .icon-green { color: #10b981; }
        .icon-purple { color: #8b5cf6; }
        .icon-orange { color: #f59e0b; }
        .icon-yellow { color: #eab308; }
        .icon-red { color: #ef4444; }
        .icon-cyan { color: #06b6d4; }
        .icon-indigo { color: #6366f1; }

        @media (max-width: 1100px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .feature-card.large { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
          .feature-card.large { grid-column: span 1; flex-direction: column; align-items: flex-start; }
          .section-title { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
