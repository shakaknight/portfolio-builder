"use client";

import React from 'react';
import {
    UserPlus,
    Shield,
    MoreVertical,
    Mail
} from 'lucide-react';

export default function TeamManagement() {
    const team = [
        { name: 'anand', email: 'anand@example.com', role: 'App owner', avatar: 'a' }
    ];

    return (
        <div className="mgmt-container">
            <div className="page-header">
                <h1 className="page-title">Team</h1>
                <button className="btn-primary">
                    <UserPlus size={16} />
                    Invite user
                </button>
            </div>

            <div className="team-list-container">
                <div className="list-header">
                    <div className="col col-user">User</div>
                    <div className="col col-role">Role</div>
                    <div className="col col-action">Action</div>
                </div>

                <div className="team-list">
                    {team.map((member) => (
                        <div key={member.email} className="team-row">
                            <div className="user-cell">
                                <div className="member-avatar">{member.avatar}</div>
                                <div className="member-info">
                                    <span className="member-name">{member.name}</span>
                                    <span className="member-email">{member.email}</span>
                                </div>
                            </div>
                            <div className="role-cell">
                                <div className="role-badge">
                                    <Shield size={12} />
                                    {member.role}
                                </div>
                            </div>
                            <div className="action-cell">
                                <MoreVertical size={18} className="action-icon" />
                            </div>
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

        .btn-primary {
            background: #3e87f8;
            color: white;
            padding: 10px 20px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }

        .team-list-container {
            background: white;
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: 20px;
            overflow: hidden;
        }

        .list-header {
            display: grid;
            grid-template-columns: 1fr 200px 80px;
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

        .team-row {
            display: grid;
            grid-template-columns: 1fr 200px 80px;
            padding: 16px 24px;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .team-row:last-child { border-bottom: none; }

        .user-cell {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .member-avatar {
            width: 40px;
            height: 40px;
            background: #8b5cf6;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 16px;
        }

        .member-info {
            display: flex;
            flex-direction: column;
        }

        .member-name {
            font-size: 15px;
            font-weight: 800;
            color: #000;
        }

        .member-email {
            font-size: 13px;
            color: #71717a;
        }

        .role-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            background: #f4f4f5;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            color: #71717a;
        }

        .action-icon {
            color: #a1a1aa;
            cursor: pointer;
            transition: color 0.2s;
        }
        .action-icon:hover { color: #000; }

        @media (max-width: 640px) {
          .mgmt-container { padding: 0 16px; }
          .list-header, .team-row { grid-template-columns: 1fr 80px; }
          .col-role, .role-cell { display: none; }
        }
      `}</style>
        </div>
    );
}
