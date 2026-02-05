"use client";

import Link from 'next/link';
import { Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img src="https://type.link/_next/static/media/logo.b0ed83d6.svg" alt="Typelink" style={{ width: '28px' }} />
            Typelink
          </Link>
          <p className="footer-tagline">The modern link in bio for creators.</p>
          <div className="social-links">
            <Link href="#"><Twitter size={20} /></Link>
            <Link href="#"><Instagram size={20} /></Link>
            <Link href="#"><Github size={20} /></Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <Link href="#features">Features</Link>
            <Link href="#templates">Templates</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#">What's New</Link>
          </div>
          <div className="footer-column">
            <h4>Integrations</h4>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">YouTube</Link>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <Link href="#">About</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Typelink. Made with ❤️ for creators.</p>
        <div className="language-selector">
          <span>English (US)</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 80px 0 40px;
          border-top: 1px solid var(--card-border);
          background: var(--background);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 64px;
          margin-bottom: 64px;
        }

        .footer-brand {
          max-width: 300px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 800;
          color: var(--foreground);
          margin-bottom: 16px;
        }

        .logo img {
          width: 28px;
          height: 28px;
        }

        .footer-tagline {
          color: var(--muted);
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          color: var(--muted);
          transition: var(--transition);
        }

        .social-links a:hover {
          color: var(--primary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 64px;
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-column a {
          color: var(--muted);
          font-size: 14px;
          transition: var(--transition);
        }

        .footer-column a:hover {
          color: var(--foreground);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid var(--card-border);
          color: var(--muted);
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 48px;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
