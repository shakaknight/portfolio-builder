"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Twitter, Instagram, Youtube, Layout, MousePointer2, Check } from 'lucide-react';
import Link from 'next/link';

const typewriterWords = ["website", "link in bio"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background-glow"></div>
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-wrapper"
        >
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            The Best Linktree Alternative
          </div>

          <h1 className="hero-title">
            <span className="brand-blue-text">The simplest way to create</span> <br />
            <span className="typewriter-container">
              a modern{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={typewriterWords[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="dynamic-word"
                >
                  {typewriterWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="cursor">|</span>
            </span>
          </h1>

          <div className="hero-cta-section">
            <Link href="/signup" className="btn-primary btn-xl">
              Create for free <ArrowRight size={20} />
            </Link>
            <p className="cta-subtitle">
              <Check size={16} className="check-icon" /> No credit card required
            </p>
          </div>

          <p className="hero-description">
            Typelink is a flexible Linktree alternative that turns your bio link into a full website – complete with templates, blogging features, analytics, and integrations.
          </p>

          <div className="social-proof">
            <div className="social-proof-inner">
              <div className="avatars-group">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="avatar-small" style={{ backgroundImage: `url(https://i.pravatar.cc/100?u=${i})` }}></div>
                ))}
              </div>
              <div className="rating-box">
                <div className="stars">★★★★★</div>
                <p>Founders ❤️ Type.link</p>
              </div>
            </div>
          </div>

          <div className="pow-award">
            <div className="pow-badge">
              <span className="pow-p">P</span>
              <div className="pow-info">
                <span className="pow-rank">#1 PRODUCT OF THE WEEK</span>
                <span className="pow-tag">Design Tools</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Visuals Component */}
        <div className="visuals-container">
          {/* Left Cluster */}
          <motion.div
            className="v-asset asset-snapshot"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="snapshot-card">
              <div className="snapshot-head">
                <div className="s-icon">📷</div>
                <div className="s-details">
                  <p className="s-title">Screenshot Editor</p>
                  <p className="s-subtitle">ScreenCut</p>
                </div>
              </div>
              <div className="snapshot-images">
                <div className="s-img s-img-1"></div>
                <div className="s-img s-img-2"></div>
                <div className="s-img s-img-3"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="v-asset asset-github-small"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="mini-card">
              <div className="mc-head"><Github size={14} /> Github</div>
              <button className="mc-btn">Follow</button>
            </div>
          </motion.div>

          <motion.div
            className="v-asset asset-youtube-small"
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="mini-card mc-yt">
              <div className="mc-head"><Youtube size={14} color="#FF0000" /> Viktor Seraleev</div>
              <button className="mc-btn">Subscribe</button>
            </div>
          </motion.div>

          {/* Right Cluster */}
          <motion.div
            className="v-asset asset-main-profile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-mockup">
              <div className="pm-header">
                <div className="pm-avatar"></div>
                <p className="pm-handle">@seraleev</p>
                <button className="pm-follow-btn">Follow 762</button>
              </div>
              <div className="pm-grid">
                <div className="pm-item pm-big"></div>
                <div className="pm-row">
                  <div className="pm-item"></div>
                  <div className="pm-item"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="v-asset asset-tele"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="chip-asset">
              <MousePointer2 size={12} /> Telegram
            </div>
          </motion.div>

          <motion.div
            className="v-asset asset-skills"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="chip-asset">
              Soft skills
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 160px 0 120px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          min-height: 95vh;
          display: flex;
          align-items: center;
        }

        .hero-background-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 35%, rgba(62, 135, 248, 0.04) 0%, transparent 60%);
          z-index: 0;
        }

        .hero-content {
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-text-wrapper {
          max-width: 900px;
          margin-bottom: 60px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #ffffff;
          border: 1px solid #f1f1f1;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          margin-bottom: 32px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }

        .hero-title {
          font-size: clamp(40px, 7vw, 54px);
          font-weight: 900;
          letter-spacing: -0.045em;
          line-height: 1.05;
          margin-bottom: 32px;
          color: #000000;
        }

        .brand-blue-text {
          color: var(--primary);
        }

        .typewriter-container {
          position: relative;
        }

        .dynamic-word {
          color: #000;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s infinite;
          color: #cbd5e1;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-cta-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-xl {
          padding: 16px 40px;
          font-size: 18px;
          font-weight: 800;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(62, 135, 248, 0.15);
        }

        .cta-subtitle {
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .check-icon { color: #10b981; }

        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: #64748b;
          max-width: 680px;
          margin: 0 auto 48px;
          font-weight: 500;
        }

        .social-proof { margin-bottom: 40px; }
        .social-proof-inner { display: flex; align-items: center; justify-content: center; gap: 12px; }
        
        .avatars-group { display: flex; }
        .avatar-small {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2.5px solid #fff;
          background-size: cover;
          margin-left: -10px;
          background-color: #f1f5f9;
        }
        .avatar-small:first-child { margin-left: 0; }

        .rating-box { text-align: left; }
        .stars { color: #f59e0b; font-size: 12px; letter-spacing: 2px; }
        .rating-box p { font-size: 12px; font-weight: 800; color: #1e293b; margin-top: 2px; }

        .pow-award { display: flex; justify-content: center; }
        .pow-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          background: #fff;
          border: 1px solid #fce7db;
          border-radius: 10px;
        }
        .pow-p { background: #ff6e4a; color: white; width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 12px; }
        .pow-info { display: flex; flex-direction: column; align-items: flex-start; }
        .pow-rank { font-size: 9px; font-weight: 800; color: #ff6e4a; letter-spacing: 0.05em; }
        .pow-tag { font-size: 13px; font-weight: 700; color: #111; }

        /* Floating Assets Grid */
        .visuals-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: -1;
        }

        .v-asset { position: absolute; }

        .snapshot-card {
           background: white;
           border: 1px solid #f1f1f1;
           border-radius: 12px;
           padding: 12px;
           width: 180px;
           box-shadow: 0 10px 30px rgba(0,0,0,0.04);
        }
        .snapshot-head { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .s-icon { width: 28px; height: 28px; background: #fee2e2; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .s-title { font-size: 11px; font-weight: 800; }
        .s-subtitle { font-size: 10px; color: #94a3b8; }
        .snapshot-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; }
        .s-img { height: 40px; background: #f8fafc; border-radius: 4px; }

        .mini-card {
           background: white;
           padding: 8px 12px;
           border-radius: 10px;
           border: 1px solid #f1f1f1;
           display: flex;
           flex-direction: column;
           gap: 8px;
           width: 120px;
           box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .mc-head { display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 800; }
        .mc-btn { width: 100%; padding: 4px; background: #f8fafc; border: 1px solid #f1f1f1; border-radius: 4px; font-size: 9px; font-weight: 700; }
        .mc-yt .mc-btn { background: #fee2e2; border-color: #fecaca; color: #dc2626; }

        .profile-mockup {
           background: white;
           width: 260px;
           border-radius: 20px;
           padding: 24px 16px;
           box-shadow: 0 30px 60px rgba(0,0,0,0.06);
           border: 6px solid #f8fafc;
        }
        .pm-header { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 24px; }
        .pm-avatar { width: 56px; height: 56px; background: #f1f5f9; border-radius: 50%; }
        .pm-handle { font-size: 13px; font-weight: 800; }
        .pm-follow-btn { padding: 6px 16px; background: var(--primary); color: white; border-radius: 100px; font-size: 11px; font-weight: 800; }
        .pm-grid { display: flex; flex-direction: column; gap: 8px; }
        .pm-item { height: 40px; background: #f8fafc; border-radius: 6px; }
        .pm-big { height: 80px; }
        .pm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

        .chip-asset {
           background: white;
           padding: 6px 14px;
           border-radius: 100px;
           border: 1px solid #f1f1f1;
           font-size: 12px;
           font-weight: 700;
           box-shadow: 0 2px 8px rgba(0,0,0,0.02);
           display: flex;
           align-items: center;
           gap: 4px;
        }

        /* Asset Placement */
        .asset-snapshot { top: 220px; left: 8%; }
        .asset-github-small { top: 440px; left: 10%; }
        .asset-youtube-small { top: 540px; left: 12%; }
        
        .asset-main-profile { top: 180px; right: 8%; }
        .asset-tele { bottom: 200px; right: 18%; }
        .asset-skills { top: 600px; right: 10%; }

        @media (max-width: 1200px) {
          .asset-snapshot, .asset-github-small, .asset-youtube-small, .asset-main-profile, .asset-tele, .asset-skills { display: none; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 36px; }
          .hero-description { font-size: 16px; }
          .hero { padding-top: 120px; }
        }
      `}</style>
    </section>
  );
}
