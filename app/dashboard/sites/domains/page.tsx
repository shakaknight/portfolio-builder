"use client";

import React from 'react';
import {
    Globe,
    ExternalLink,
    Lock,
    ArrowRight
} from 'lucide-react';

export default function DomainsManagement() {
    const siteName = 'ananddubey0120';

    return (
        <div className="mgmt-container">
            <h1 className="page-title">Domains</h1>

            <div className="domains-grid">
                {/* Typelink Domain Card */}
                <div className="domain-card">
                    <div className="card-header">
                        <div className="icon-badge">
                            <Globe size={18} />
                        </div>
                        <span className="domain-type">Typelink Domain (free)</span>
                    </div>

                    <div className="card-body">
                        <h3 className="domain-name">{siteName}.type.link</h3>
                        <p className="domain-status">Active and managed by Typelink</p>
                    </div>

                    <div className="card-footer">
                        <button className="btn-secondary">
                            Change Subdomain
                        </button>
                        <ExternalLink size={16} className="action-icon" />
                    </div>
                </div>

                {/* Custom Domain Card */}
                <div className="domain-card pro">
                    <div className="card-header">
                        <div className="icon-badge pro">
                            <Globe size={18} />
                        </div>
                        <div className="badge-row">
                            <span className="domain-type">Own Domain</span>
                            <div className="pro-pill">PRO</div>
                        </div>
                    </div>

                    <div className="card-body">
                        <h3 className="domain-name">Connect your own domain</h3>
                        <p className="domain-status">Use a domain you already own (e.g. www.yoursite.com)</p>
                    </div>

                    <div className="card-footer">
                        <button className="btn-primary">
                            Upgrade to Connect
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
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

        .domains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
        }

        .domain-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: all 0.2s;
        }

        .domain-card:hover { border-color: rgba(0,0,0,0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.02); }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-badge {
          width: 36px;
          height: 36px;
          background: #f4f4f5;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #71717a;
        }

        .icon-badge.pro {
            background: #fffbeb;
            color: #d97706;
        }

        .badge-row {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .domain-type {
          font-size: 11px;
          font-weight: 800;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pro-pill {
            background: #d97706;
            color: #ffffff;
            font-size: 10px;
            font-weight: 900;
            padding: 2px 6px;
            border-radius: 4px;
        }

        .domain-name {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .domain-status {
          font-size: 13px;
          font-weight: 500;
          color: #71717a;
          margin: 6px 0 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .btn-secondary {
            background: #f4f4f5;
            color: #000;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 700;
        }

        .btn-primary {
            background: #3e87f8;
            color: #fff;
            padding: 10px 18px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .action-icon { color: #a1a1aa; cursor: pointer; }
        .action-icon:hover { color: #000; }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
          .domains-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
