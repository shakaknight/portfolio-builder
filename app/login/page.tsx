"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            router.push('/dashboard');
        }
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link href="/" className="logo-center">
                    <span className="logo-icon">T</span>
                    Typelink
                </Link>
                <h1>Welcome back</h1>
                <p className="subtitle">Sign in to your account</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn-primary btn-block" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </p>
            </div>

            <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafa;
          padding: 24px;
        }

        .auth-card {
          background: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--card-border);
          width: 100%;
          max-width: 400px;
          box-shadow: var(--shadow-lg);
          text-align: center;
        }

        .logo-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 32px;
        }

        .logo-icon {
          background: var(--primary);
          color: white;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 18px;
        }

        h1 { font-size: 24px; margin-bottom: 8px; }
        .subtitle { color: var(--muted); margin-bottom: 32px; }

        .form-group {
          text-align: left;
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--card-border);
          font-size: 16px;
          transition: var(--transition);
        }

        input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
        }

        .btn-block {
          width: 100%;
          margin-top: 24px;
        }

        .error-message {
          color: #ef4444;
          font-size: 14px;
          margin-top: 12px;
        }

        .auth-footer {
          margin-top: 32px;
          font-size: 14px;
          color: var(--muted);
        }

        .auth-footer a {
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
}
