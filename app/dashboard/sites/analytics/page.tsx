"use client";

import React from 'react';
import {
    BarChart3,
    Calendar,
    ChevronDown,
    Globe,
    MousePointer2,
    Users
} from 'lucide-react';

export default function AnalyticsManagement() {
    const stats = [
        { label: 'Views', value: '0', icon: BarChart3, color: '#3e87f8' },
        { label: 'Clicks', value: '0', icon: MousePointer2, color: '#10b981' },
        { label: 'Visitors', value: '1', icon: Users, color: '#8b5cf6' },
    ];

    return (
        <div className="mgmt-container">
            <div className="analytics-header">
                <h1 className="page-title">Analytics</h1>

                <div className="analytics-controls">
                    <div className="control-pill">
                        <span>All pages</span>
                        <ChevronDown size={14} />
                    </div>
                    <div className="control-pill">
                        <Calendar size={14} />
                        <span>Last 7 days</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>

            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}10` }}>
                            <stat.icon size={20} />
                        </div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="chart-container">
                <div className="chart-header">
                    <h3 className="section-title">Views</h3>
                </div>
                <div className="chart-placeholder">
                    <div className="placeholder-content">
                        <BarChart3 size={48} strokeWidth={1} color="#e5e7eb" />
                        <p>Not enough data to show a chart yet.</p>
                    </div>
                    {/* Simple CSS-based grid lines */}
                    <div className="grid-lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="analytics-card">
                    <div className="card-header">
                        <Globe size={16} />
                        <h3 className="card-title">Countries</h3>
                    </div>
                    <div className="empty-content">No data available</div>
                </div>
                <div className="analytics-card">
                    <div className="card-header">
                        <BarChart3 size={16} />
                        <h3 className="card-title">Top Refers</h3>
                    </div>
                    <div className="empty-content">No data available</div>
                </div>
            </div>

            <style jsx>{`
        .mgmt-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .analytics-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .analytics-controls {
            display: flex;
            gap: 12px;
        }

        .control-pill {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            padding: 8px 16px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        }
        .control-pill:hover { border-color: rgba(0,0,0,0.15); }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 24px;
        }

        .stat-card {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            padding: 24px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stat-info {
            display: flex;
            flex-direction: column;
        }

        .stat-value {
            font-size: 24px;
            font-weight: 900;
            color: #000;
            line-height: 1;
        }

        .stat-label {
            font-size: 13px;
            font-weight: 700;
            color: #71717a;
            margin-top: 4px;
        }

        .chart-container {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: 20px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .section-title {
            font-size: 16px;
            font-weight: 800;
            margin: 0 0 24px;
        }

        .chart-placeholder {
            height: 300px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #f4f4f5;
        }

        .placeholder-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            color: #cbd5e1;
            z-index: 10;
        }

        .placeholder-content p {
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }

        .grid-lines {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 1px;
        }

        .line { border-top: 1px dashed #f4f4f5; width: 100%; }

        .bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .analytics-card {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: 20px;
            padding: 24px;
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #71717a;
            margin-bottom: 40px;
        }

        .card-title {
            font-size: 14px;
            font-weight: 800;
            color: #000;
            margin: 0;
        }

        .empty-content {
            font-size: 13px;
            font-weight: 600;
            color: #cbd5e1;
            text-align: center;
            padding: 20px 0;
        }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
          .stats-grid, .bottom-grid { grid-template-columns: 1fr; }
          .analytics-header { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>
        </div>
    );
}
