"use client";

import { use } from 'react';
import BentoCard from '@/components/BentoCard';
import Link from 'next/link';
import { Share2, ArrowRight } from 'lucide-react';

export default function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = use(params);

  const profileData = {
    name: "Eli Navarro",
    handle: "@elinav",
    title: "Product Designer & Digital Creator",
    bio: "Eli is a product designer who loves building digital tools and sharing his process. Currently designing at the intersection of AI and human creativity.",
    longBio: "A simple template for a developer's page. Developer website template with a GitHub widget, project links, and a portfolio showcase. Create a professional online presence with ease.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80",
    cards: [
      { type: 'github', username: "elinav", span: "span 2 / span 1" },
      { type: 'spotify', title: "Midnight City", description: "M83", span: "span 2 / span 1" },
      { type: 'youtube', title: "How I design in 2024", username: "Eli Navarro", span: "span 2 / span 1" },
      { type: 'link', title: "Latest Case Study", description: "Mobile Banking Redesign", link: "#", span: "span 1 / span 1" },
      { type: 'link', title: "Digital Garden", description: "Notes on design and life", link: "#", span: "span 1 / span 1" },
      { type: 'social', title: "Twitter", link: "https://twitter.com", icon: "twitter", span: "span 1 / span 1", backgroundColor: "white", textColor: "black" },
      { type: 'social', title: "Instagram", link: "https://instagram.com", icon: "instagram", span: "span 1 / span 1", backgroundColor: "white", textColor: "black" },
    ]
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container-inner">
        {/* Navigation Bar */}
        <header className="profile-nav">
          <Link href="/" className="profile-logo">
            <img src="https://type.link/_next/static/media/logo.b0ed83d6.svg" alt="Typelink" />
          </Link>
          <nav className="profile-center-nav">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </nav>
          <button className="btn-share-minimal"><Share2 size={20} /></button>
        </header>

        {/* Hero Info */}
        <section className="profile-hero-section">
          <div className="profile-avatar-wrapper">
            <img src={profileData.avatar} alt={profileData.name} className="profile-avatar-img" />
          </div>
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-long-bio">{profileData.longBio}</p>
          <Link href="/templates" className="btn-use-template">
            Use template <ArrowRight size={18} />
          </Link>
        </section>

        {/* Profile Content */}
        <main className="profile-main-content">
          <div className="card-about section-card">
            <span className="label">About</span>
            <div className="about-text">
              <h2>{profileData.title}</h2>
              <p>{profileData.bio}</p>
            </div>
          </div>

          <div className="bento-grid-content">
            {profileData.cards.map((card: any, i) => (
              <BentoCard key={i} {...card} />
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        .profile-wrapper {
          background: #ffffff;
          min-height: 100vh;
          padding-bottom: 120px;
          color: #000000;
        }

        .profile-container-inner {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .profile-nav {
          height: 96px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .profile-logo img { width: 32px; height: 32px; }

        .profile-center-nav {
          display: flex;
          gap: 24px;
        }

        .profile-center-nav a {
          font-size: 14px;
          font-weight: 700;
          color: #64748b;
          transition: color 0.1s;
        }

        .profile-center-nav a:hover { color: #000; }

        .btn-share-minimal {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 8px;
          transition: transform 0.2s;
        }
        .btn-share-minimal:hover { transform: scale(1.1); color: #000; }

        .profile-hero-section {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .profile-avatar-wrapper {
          width: 80px;
          height: 80px;
          margin-bottom: 24px;
          border-radius: 20px;
          overflow: hidden;
        }

        .profile-avatar-img { width: 100%; height: 100%; object-fit: cover; }

        .profile-name {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .profile-long-bio {
          font-size: 16px;
          line-height: 1.6;
          color: #64748b;
          max-width: 520px;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .btn-use-template {
          background: #3e87f8;
          color: white;
          padding: 12px 28px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s;
        }
        .btn-use-template:hover { transform: scale(1.02); }

        .profile-main-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .section-card {
          padding: 32px;
          background: #ffffff;
          border: 1px solid rgba(155, 155, 155, 0.17);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94a3b8;
        }

        .about-text h2 { font-size: 24px; font-weight: 800; margin: 0 0 8px 0; letter-spacing: -0.02em; }
        .about-text p { font-size: 16px; color: #64748b; line-height: 1.7; margin: 0; font-weight: 500; }

        .bento-grid-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .profile-center-nav { display: none; }
          .profile-name { font-size: 28px; }
          .section-card { padding: 24px; }
        }
      `}</style>
    </div>
  );
}
