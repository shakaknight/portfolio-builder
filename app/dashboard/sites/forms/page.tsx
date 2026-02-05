"use client";

import React from 'react';
import {
    Inbox,
    Search,
    Download,
    Filter
} from 'lucide-react';

export default function FormsManagement() {
    return (
        <div className="mgmt-container">
            <div className="page-header">
                <h1 className="page-title">Forms</h1>
                <div className="header-actions">
                    <button className="btn-icon"><Search size={18} /></button>
                    <button className="btn-icon"><Download size={18} /></button>
                    <button className="btn-icon"><Filter size={18} /></button>
                </div>
            </div>

            <div className="forms-table-container">
                <div className="table-header">
                    <div className="col col-date">Forms and date</div>
                    <div className="col col-message">Message</div>
                    <div className="col col-action">Action</div>
                </div>

                <div className="empty-state">
                    <div className="empty-icon-box">
                        <Inbox size={48} strokeWidth={1} />
                    </div>
                    <h3>No submissions yet</h3>
                    <p>Form submissions from your site will appear here.</p>
                </div>
            </div>

            <style jsx>{`
        .mgmt-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .header-actions {
            display: flex;
            gap: 8px;
        }

        .btn-icon {
            width: 40px;
            height: 40px;
            background: #f4f4f5;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #71717a;
            transition: all 0.2s;
        }
        .btn-icon:hover { background: #e4e4e7; color: #000; }

        .forms-table-container {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: 20px;
            overflow: hidden;
        }

        .table-header {
            display: grid;
            grid-template-columns: 200px 1fr 100px;
            padding: 16px 24px;
            background: #f9fafb;
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .col {
            font-size: 11px;
            font-weight: 800;
            color: #71717a;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .empty-state {
            padding: 100px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .empty-icon-box {
            width: 80px;
            height: 80px;
            background: #f9fafb;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #cbd5e1;
            margin-bottom: 24px;
        }

        .empty-state h3 {
            font-size: 18px;
            font-weight: 800;
            margin: 0 0 8px;
        }

        .empty-state p {
            font-size: 14px;
            color: #71717a;
            margin: 0;
            max-width: 280px;
        }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
          .table-header { grid-template-columns: 1fr 100px; }
          .col-date { display: none; }
        }
      `}</style>
        </div>
    );
}
