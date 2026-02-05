"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const templates = [
    { id: 'eli-navarro', name: "Eli Navarro", category: "Designer", color: "#6366f1", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80" },
    { id: 'minimal', name: "Minimalist", category: "Portfolio", color: "#18181b", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80" },
    { id: 'artist', name: "Digital Artist", category: "Creative", color: "#ec4899", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" },
    { id: 'dev', name: "Software Engineer", category: "Tech", color: "#10b981", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
    { id: 'writer', name: "Storyteller", category: "Writer", color: "#f59e0b", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80" },
    { id: 'podcaster', name: "Audio Pro", category: "Podcast", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1478737270239-2fccd27ea042?auto=format&fit=crop&w=800&q=80" },
];

export default function TemplatesPage() {
    return (
        <div className="templates-page">
            <Navbar />

            <section className="templates-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <h1>Stunning templates for <br /> every type of creator.</h1>
                        <p>Choose a base, make it yours. Completely customizable.</p>

                        <div className="search-bar">
                            <Search size={20} className="search-icon" />
                            <input type="text" placeholder="Search templates..." />
                            <button className="btn-filter"><Filter size={18} /> Filters</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="templates-grid-section">
                <div className="container">
                    <div className="category-tabs">
                        <button className="category-tab active">All</button>
                        <button className="category-tab">Design</button>
                        <button className="category-tab">Tech</button>
                        <button className="category-tab">Creative</button>
                        <button className="category-tab">Business</button>
                    </div>

                    <div className="templates-grid">
                        {templates.map((template, i) => (
                            <motion.div
                                key={template.id}
                                className="template-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Link href={`/${template.id}`}>
                                    <div className="template-preview">
                                        <img src={template.image} alt={template.name} />
                                        <div className="overlay">
                                            <button className="btn-primary">Use this template</button>
                                        </div>
                                    </div>
                                    <div className="template-info">
                                        <div className="text">
                                            <h3>{template.name}</h3>
                                            <p>{template.category}</p>
                                        </div>
                                        <ArrowRight size={20} className="arrow" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="custom-banner container">
                <div className="banner-card">
                    <div className="text">
                        <h2>Need something unique?</h2>
                        <p>Start from a blank canvas and build your own bento grid from scratch.</p>
                    </div>
                    <button className="btn-white">Start from scratch</button>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        .templates-page {
          background: #ffffff;
          padding-top: 100px;
        }

        .templates-hero {
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

        .search-bar {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: center;
          background: #f4f4f5;
          padding: 8px 12px;
          border-radius: 40px;
          border: 1px solid #e4e4e7;
        }

        .search-icon {
          margin-left: 12px;
          color: #a1a1aa;
        }

        .search-bar input {
          flex: 1;
          background: none;
          border: none;
          padding: 12px 16px;
          font-size: 16px;
          outline: none;
        }

        .btn-filter {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }

        .category-tab {
          padding: 10px 24px;
          border-radius: 40px;
          background: #f4f4f5;
          font-size: 14px;
          font-weight: 600;
          color: #71717a;
          transition: var(--transition);
        }

        .category-tab:hover, .category-tab.active {
          background: #000;
          color: white;
        }

        .templates-grid-section {
          padding-bottom: 100px;
        }

        .templates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .template-card {
          background: white;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid #e4e4e7;
          transition: var(--transition);
        }

        .template-preview {
          height: 400px;
          position: relative;
          background: #f4f4f5;
          overflow: hidden;
        }

        .template-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .template-card:hover .template-preview img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .template-card:hover .overlay {
          opacity: 1;
        }

        .template-info {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .template-info h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .template-info p {
          font-size: 14px;
          color: var(--muted);
        }

        .arrow {
          color: #a1a1aa;
          transition: var(--transition);
        }

        .template-card:hover .arrow {
          transform: translateX(4px);
          color: #000;
        }

        .custom-banner {
          margin-bottom: 100px;
        }

        .banner-card {
          background: #000;
          color: white;
          padding: 64px;
          border-radius: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .banner-card h2 { font-size: 32px; margin-bottom: 12px; }
        .banner-card p { color: #a1a1aa; font-size: 18px; }

        .btn-white {
          background: white;
          color: black;
          padding: 16px 32px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 18px;
          transition: var(--transition);
        }

        .btn-white:hover {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .templates-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .templates-grid { grid-template-columns: 1fr; }
          .banner-card { flex-direction: column; text-align: center; gap: 32px; padding: 40px; }
        }
      `}</style>
        </div>
    );
}
