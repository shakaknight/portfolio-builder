"use client";

import React from 'react';
import {
    Settings,
    Globe,
    Share2,
    Trash2,
    Copy,
    Code2,
    BarChart3,
    Target,
    FileText,
    Map,
    ChevronRight
} from 'lucide-react';

export default function SettingsManagement() {
    const freeSettings = [
        { title: 'General', desc: 'Title, logo and favicon', icon: Settings },
        { title: 'Typelink Domain', desc: 'Manage your subdomain', icon: Globe },
        { title: 'Transfer Site', desc: 'Transfer site to another account', icon: Share2 },
        { title: 'More', desc: 'Duplicate or delete site', icon: Trash2 },
    ];

    const proSettings = [
        { title: 'Own Domain', desc: 'Connect your custom domain', icon: Globe },
        { title: 'Custom Code', desc: 'Add code to <head> and <body>', icon: Code2 },
        { title: 'Google Analytics', desc: 'Track your site traffic', icon: BarChart3 },
        { title: 'Facebook Pixel', desc: 'Measure your ad results', icon: Target },
        { title: 'App-ads.txt', desc: 'Manage digital ads', icon: FileText },
        { title: 'Sitemap', desc: 'Improve your SEO', icon: Map },
    ];

    return (
        <div className="mgmt-container">
            <h1 className="page-title">Settings</h1>

            <div className="settings-section">
                <h2 className="section-title">Free features</h2>
                <div className="settings-grid">
                    {freeSettings.map((item) => (
                        <div key={item.title} className="setting-card">
                            <div className="setting-icon">
                                <item.icon size={20} />
                            </div>
                            <div className="setting-info">
                                <h3 className="setting-title">{item.title}</h3>
                                <p className="setting-desc">{item.desc}</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="settings-section pro">
                <div className="section-header">
                    <h2 className="section-title">Pro features</h2>
                    <div className="pro-badge">PRO</div>
                </div>
                <div className="settings-grid">
                    {proSettings.map((item) => (
                        <div key={item.title} className="setting-card">
                            <div className="setting-icon pro">
                                <item.icon size={20} />
                            </div>
                            <div className="setting-info">
                                <h3 className="setting-title">{item.title}</h3>
                                <p className="setting-desc">{item.desc}</p>
                            </div>
                            <ChevronRight size={16} className="chevron" />
                        </div>
                    ))}
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
          margin-bottom: 40px;
        }

        .settings-section {
            margin-bottom: 48px;
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
        }

        .section-title {
            font-size: 14px;
            font-weight: 800;
            color: #71717a;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin: 0;
            margin-bottom: ${props => props.pro ? '0' : '24px'};
        }

        .pro-badge {
            background: #d97706;
            color: #fff;
            font-size: 10px;
            font-weight: 900;
            padding: 2px 6px;
            border-radius: 4px;
        }

        .settings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 16px;
        }

        .setting-card {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            padding: 24px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: relative;
            cursor: pointer;
            transition: all 0.2s;
        }

        .setting-card:hover { border-color: rgba(0,0,0,0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.02); }

        .setting-icon {
            width: 40px;
            height: 40px;
            background: #f4f4f5;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #71717a;
        }

        .setting-icon.pro {
            background: #fffbeb;
            color: #d97706;
        }

        .setting-title {
            font-size: 15px;
            font-weight: 800;
            color: #000;
            margin: 0;
        }

        .setting-desc {
            font-size: 13px;
            color: #71717a;
            margin: 4px 0 0;
            line-height: 1.4;
        }

        .chevron {
            position: absolute;
            top: 24px;
            right: 24px;
            color: #cbd5e1;
        }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
          .settings-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
