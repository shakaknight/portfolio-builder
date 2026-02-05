"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronRight,
  Settings,
  Globe,
  Mail,
  Users,
  BarChart3,
  MessageSquare,
  Copy
} from 'lucide-react';

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const siteName = 'ananddubey0120';

  const navItems = [
    { label: 'Pages', href: '/dashboard/sites', icon: Copy },
    { label: 'Domains', href: '/dashboard/sites/domains', icon: Globe },
    { label: 'Forms', href: '/dashboard/sites/forms', icon: Mail },
    { label: 'Team', href: '/dashboard/sites/team', icon: Users },
    { label: 'Analytics', href: '/dashboard/sites/analytics', icon: BarChart3 },
    { label: 'Settings', href: '/dashboard/sites/settings', icon: Settings },
  ];

  return (
    <div className="management-layout">
      {/* Header */}
      <header className="mgmt-header">
        <div className="header-left">
          <div className="site-pill">
            <div className="site-icon">A</div>
            <span className="site-name">{siteName}</span>
            <ChevronRight size={14} className="rotate-90" />
          </div>
        </div>

        <div className="header-center">
          <Link href="/" className="logo-box">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </Link>
        </div>

        <div className="header-right">
          <div className="status-info">
            <span className="emoji">👋</span>
            <div className="plan-stats">
              <span className="plan-text">Free</span>
              <span className="usage-text">1 Bio-link</span>
            </div>
          </div>
          <button className="btn-upgrade">Upgrade</button>
          <div className="user-profile">
            <div className="avatar">a</div>
            <span className="user-name">anand</span>
            <ChevronRight size={14} className="rotate-90" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mgmt-main">
        {children}
      </main>

      {/* Bottom Floating Dock */}
      <div className="dock-container">
        <nav className="floating-dock">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === '/dashboard/sites' && pathname === '/dashboard/sites');
            return (
              <Link key={item.label} href={item.href} className={`dock-item ${isActive ? 'active' : ''}`}>
                <div className="dock-icon"><Icon size={22} strokeWidth={2.5} /></div>
                <span className="dock-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Chat Bubble */}
      <button className="chat-bubble">
        <MessageSquare size={22} color="white" fill="white" />
      </button>

      <style jsx>{`
        .management-layout {
          min-height: 100vh;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #000000;
          padding-bottom: 160px;
        }

        /* Header Styles */
        .mgmt-header {
          height: 60px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          position: sticky;
          top: 0;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          z-index: 100;
        }

        .header-left .site-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 3px 8px 3px 3px;
          background: #f4f4f5;
          border-radius: 6px;
          cursor: pointer;
        }

        .site-icon {
          width: 22px;
          height: 22px;
          background: #e5e7eb;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          color: #71717a;
        }

        .site-name {
          font-size: 13px;
          font-weight: 700;
          color: #000;
        }

        .rotate-90 { transform: rotate(90deg); color: #a1a1aa; }

        .logo-box { color: #000; display: flex; align-items: center; }

        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-info {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .plan-stats {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }

        .plan-text {
          font-size: 11px;
          font-weight: 800;
          color: #000;
        }
        
        .usage-text {
            font-size: 10px;
            font-weight: 600;
            color: #a1a1aa;
        }

        .btn-upgrade {
          background: #3e87f8;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .avatar {
          width: 24px;
          height: 24px;
          background: #8b5cf6;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }

        .user-name {
          font-size: 13px;
          font-weight: 700;
        }

        /* Main Content Styles */
        .mgmt-main {
          padding-top: 50px;
        }

        /* Bottom Floating Dock */
        .dock-container {
          position: fixed;
          bottom: 40px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 200;
        }

        .floating-dock {
          background: white;
          padding: 12px 20px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          pointer-events: auto;
          box-shadow: 0 12px 48px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .dock-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #a1a1aa;
          text-decoration: none;
          min-width: 84px;
          padding: 10px 4px;
          transition: all 0.2s ease;
        }

        .dock-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;
        }

        .dock-item:hover .dock-icon {
            transform: translateY(-2px);
        }

        .dock-label {
          font-size: 12px;
          font-weight: 800;
          color: inherit;
          text-align: center;
          display: block;
        }

        .dock-item:hover { color: #000; }
        .dock-item.active { color: #3e87f8; }

        /* Chat Bubble */
        .chat-bubble {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          background: #3e87f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(62, 135, 248, 0.35);
          z-index: 100;
        }

        @media (max-width: 640px) {
          .floating-dock { gap: 4px; padding: 8px; }
          .dock-item { min-width: 60px; padding: 8px 4px; }
          .dock-label { display: none; }
          .header-right .status-info, .header-right .btn-upgrade { display: none; }
        }
      `}</style>
    </div>
  );
}
