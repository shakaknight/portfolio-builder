"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-left">
          <Link href="/" className="logo">
            <img src="https://type.link/_next/static/media/logo.b0ed83d6.svg" alt="Typelink" className="logo-img" />
            <span className="logo-text">Typelink</span>
          </Link>

          <div className="nav-links desktop-only">
            <div className="nav-item dropdown">
              <Link href="#">Product <ChevronDown size={14} /></Link>
            </div>
            <Link href="#features">Features</Link>
            <Link href="/templates">Templates</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="#">Wall of love</Link>
          </div>
        </div>

        <div className="nav-right desktop-only">
          <Link href="/login" className="login-link">Login</Link>
          <Link href="/signup" className="btn-primary-sm">Sign up</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mobile-links">
              <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
              <Link href="/templates" onClick={() => setIsOpen(false)}>Templates</Link>
              <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link href="/signup" className="btn-primary" onClick={() => setIsOpen(false)}>Sign up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          height: 64px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.02em;
          color: #000;
        }

        .logo-img {
          width: 24px;
          height: 24px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 14px;
          color: #475569;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-links a:hover { color: var(--primary); }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .login-link {
          font-weight: 600;
          font-size: 14px;
          color: #475569;
        }

        .btn-primary-sm {
          background: var(--primary);
          color: white !important;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
        }

        .mobile-toggle { display: none; color: #000; }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 24px;
          border-bottom: 1px solid #eee;
          z-index: 999;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .mobile-links { display: flex; flex-direction: column; gap: 20px; }
        .mobile-links a { font-size: 16px; font-weight: 600; color: #333; }

        @media (max-width: 1024px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block; }
          .nav-left { gap: 20px; }
        }
      `}</style>
    </nav>
  );
}
