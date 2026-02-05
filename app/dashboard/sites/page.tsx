"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  ExternalLink,
  MoreVertical,
  Clock,
  FilePlus2
} from 'lucide-react';

export default function PagesManagement() {
  const [siteName] = useState('ananddubey0120');

  return (
    <div className="mgmt-container">
      <h1 className="page-title">Pages</h1>

      <div className="pages-grid">
        {/* Home Page Card */}
        <Link href="/dashboard" className="page-card">
          <div className="card-top">
            <div className="icon-badge">
              <Home size={14} />
            </div>
            <div className="card-actions">
              <ExternalLink size={17} className="action-icon" />
              <MoreVertical size={17} className="action-icon" />
            </div>
          </div>

          <div className="card-body">
            <h3 className="page-name">{siteName}</h3>
            <p className="page-url">https://type.link/{siteName}</p>
          </div>

          <div className="card-footer">
            <div className="pill secondary">Home page</div>
            <div className="pill warning">
              <Clock size={12} />
              Unpublished changes
            </div>
          </div>
        </Link>

        {/* Create New Card */}
        <button className="create-card">
          <div className="plus-box">
            <FilePlus2 size={24} strokeWidth={1.5} />
          </div>
          <span>Create new</span>
        </button>
      </div>

      <style jsx>{`
        .mgmt-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
        }

        .pages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        /* Page Card */
        .page-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .page-card:hover { border-color: rgba(0,0,0,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon-badge {
          width: 28px;
          height: 28px;
          background: #f4f4f5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a1a1aa;
        }

        .card-actions {
          display: flex;
          gap: 10px;
          color: #a1a1aa;
        }
        
        .action-icon:hover { color: #000; }

        .page-name {
          font-size: 16px;
          font-weight: 800;
          margin: 0;
        }

        .page-url {
          font-size: 12px;
          font-weight: 500;
          color: #a1a1aa;
          margin: 4px 0 0;
        }

        .card-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .pill {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pill.secondary { background: #f4f4f5; color: #71717a; }
        .pill.warning { background: #fffbeb; color: #b45309; border: 1px solid #fde68a; }

        /* Create Card */
        .create-card {
          background: white;
          border: 1px dashed #e5e7eb;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          min-height: 180px;
        }

        .create-card:hover { border-color: #3e87f8; background: #fbfcff; }

        .plus-box {
          width: 44px;
          height: 44px;
          background: #f4f4f5;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a1a1aa;
        }

        .create-card:hover .plus-box { background: #3e87f8; color: white; }

        .create-card span { font-size: 13px; font-weight: 800; color: #000; }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
        }
      `}</style>
    </div>
  );
}
