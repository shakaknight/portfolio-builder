"use client";

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import {
  ExternalLink, Github, Youtube, Mail, Music, ArrowUpRight,
  MessageSquare, Send, Layout, Image as ImageIcon, Globe, User,
  DollarSign, Gem, Square, ShoppingCart, GalleryHorizontal, Code, Minus, Star,
  Plus, CheckCircle2, ChevronRight, ChevronLeft, Shield, MapPin, Calendar, List, CreditCard,
  Users, Layers, Table as TableIcon, Phone, Instagram, Linkedin, Facebook, Twitter,
  Link, ArrowRight
} from 'lucide-react';

interface BentoCardProps {
  id?: number;
  type: string;
  title?: string;
  description?: string;
  link?: string;
  icon?: string;
  image?: string;
  span?: string;
  backgroundColor?: string;
  textColor?: string;
  username?: string;
  socials?: Record<string, string>;
  images?: string[];
  carouselLayout?: 'dots' | 'arrows' | 'none';
  carouselStyle?: 'full' | 'inset' | 'vertical' | 'peek';
  isEditing?: boolean;
  onUpdate?: (updates: any) => void;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: 'h1' | 'h2' | 'h3';
  isFullWidth?: boolean;
  musicType?: 'slow' | 'lofi' | 'ambient' | 'none';
  audioUrl?: string;
}

const EditableText = ({
  text,
  field,
  className,
  placeholder,
  isEditing,
  onUpdate
}: {
  text: string | undefined,
  field: string,
  className?: string,
  placeholder?: string,
  isEditing: boolean,
  onUpdate?: (updates: any) => void
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (onUpdate) {
      onUpdate({ [field]: e.currentTarget.innerText });
    }
  };

  if (!isEditing) return <p className={className}>{text}</p>;
  return (
    <p
      className={`${className} editable-field`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      data-placeholder={placeholder}
    >
      {text}
    </p>
  );
};

const EditableHeading = ({
  text,
  field,
  className,
  placeholder,
  isEditing,
  onUpdate
}: {
  text: string | undefined,
  field: string,
  className?: string,
  placeholder?: string,
  isEditing: boolean,
  onUpdate?: (updates: any) => void
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (onUpdate) {
      onUpdate({ [field]: e.currentTarget.innerText });
    }
  };

  if (!isEditing) return <h3 className={className}>{text}</h3>;
  return (
    <h3
      className={`${className} editable-field`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      data-placeholder={placeholder}
    >
      {text}
    </h3>
  );
};

const brandIcons: Record<string, React.ReactNode> = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.227 0h-.002z" /></svg>,
  twitter: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.32-.6 4.67-2.06 6.54-2.11 2.58-5.63 3.65-8.73 2.7-2.93-.89-5.17-3.64-5.38-6.68-.31-4.04 2.5-8.08 6.51-8.7 1.35-.22 2.74-.01 4.02.48.01 1.48-.01 2.97-.01 4.45-.96-.54-2.11-.74-3.19-.52-1.39.29-2.54 1.4-2.77 2.79-.34 1.6.43 3.32 1.91 4.01 1.41.67 3.2.37 4.21-.86.75-.92.89-2.22.88-3.37V.02z" /></svg>,
  discord: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>,
  dribbble: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-4.17-1.21-8.43-.56.17.47.34.95.5 1.44 3.73 1.02 5.23 4.07 5.39 4.41 1.43-1.54 2.36-3.53 2.54-5.29zm-3.23 6.42a10.966 10.966 0 0 0-4.66-3.6 15.772 15.772 0 0 1-2.9 7.02c1.76.51 3.63.31 5.4-.41.83-.43 1.56-.96 2.16-3.01zM11.64 22.91c.15-.3.81-1.74 2.89-6.31-1.61-.41-4.16-.61-7.14-.14-.06.27-.11.55-.16.83a10.023 10.023 0 0 0 4.41 5.62zm-6.39-7.23c.31-.06 4.39-.74 7.4-.14.07-.15.14-.3.2-.45.47-1.01.91-2.13 1.27-3.26-4.52-1.33-8.91-.07-9.33.05-.13.56-.22 1.13-.25 1.71l.71 2.09zM12.96 11.11c-.31 1.05-.72 2.09-1.17 3.09 3.19-.1 6.32.96 7.64 1.49.27-.55.48-1.13.63-1.73-1.68-1.06-4.26-2.48-7.1-2.85zm-4.16-5.83c.39.81 2.06 4.48 4.14 8.27 2.35-.38 4.43-1.4 5.25-1.9-.38-.97-.93-1.87-1.61-2.67a12.168 12.168 0 0 0-7.78-3.7z" /></svg>,
};

const brandColors: Record<string, { bg: string, text: string }> = {
  facebook: { bg: '#ffffff', text: '#0f172a' },
  instagram: { bg: '#ffffff', text: '#0f172a' },
  linkedin: { bg: '#ffffff', text: '#0f172a' },
  twitter: { bg: '#ffffff', text: '#0f172a' },
  tiktok: { bg: '#ffffff', text: '#0f172a' },
  discord: { bg: '#ffffff', text: '#0f172a' },
  twitch: { bg: '#ffffff', text: '#0f172a' },
  dribbble: { bg: '#ffffff', text: '#0f172a' },
  github: { bg: '#ffffff', text: '#0f172a' },
  spotify: { bg: '#ffffff', text: '#0f172a' },
  youtube: { bg: '#ffffff', text: '#0f172a' },
  music: { bg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', text: '#ffffff' },
};

const iconMap: Record<string, any> = {
  github: Github,
  youtube: Youtube,
  mail: Mail,
  spotify: Music,
  substack: Mail,
  telegram: Send,
  newsletter: Mail,
  shop: ShoppingCart,
  gallery: GalleryHorizontal,
  carousel: GalleryHorizontal,
  calendar: Calendar,
  music: Music,
  pricing: CreditCard,
  feature: Gem,
  team: Users,
  button: ExternalLink,
  product: ShoppingCart,
  code: Code,
  divider: Minus,
  steps: List,
  table: TableIcon,
  contact: Phone,
  link: Link,
};

export default function BentoCard({
  type,
  title,
  description,
  link,
  icon,
  image,
  span = "span 1",
  backgroundColor,
  textColor,
  username,
  socials = {},
  images = [],
  carouselLayout = 'dots',
  carouselStyle = 'peek', // Default to peek for the premium gallery look
  isEditing = false,
  onUpdate,
  textAlign = 'left',
  fontSize = 'h3',
  isFullWidth = false,
  musicType = 'slow',
  audioUrl
}: BentoCardProps) {
  const IconComponent = icon ? iconMap[icon] : ExternalLink;
  const isBrand = brandIcons[type as string];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate?.({ image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const [colSpan, rowSpan] = span.split('/').map(s => s.trim());
  const [githubStats, setGithubStats] = React.useState<{ followers: string, avatar: string, name?: string, contributions?: number[] } | null>(null);
  const [tempUsername, setTempUsername] = React.useState('');
  const [isLoadingGH, setIsLoadingGH] = React.useState(false);

  React.useEffect(() => {
    if (type === 'github' && username) {
      const fetchGithubData = async () => {
        setIsLoadingGH(true);
        try {
          // 1. Fetch User Profile
          const userRes = await fetch(`https://api.github.com/users/${username}`);
          const userData = await userRes.json();

          // 2. Fetch Recent Events for Heatmap (Simulating contributions)
          const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
          const eventsData = await eventsRes.json();

          // 84 days = 12 weeks
          const numDots = 84;
          let contribs = new Array(numDots).fill(0);

          if (Array.isArray(eventsData)) {
            const now = new Date();
            // Start of today (calendar date)
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            // To align with GitHub (Sunday at top index 0 of a column)
            // We need to find the most recent Sunday
            const currentDayOfWeek = now.getDay(); // 0 is Sunday
            // The last dot (today) should be at index: (numColumns - 1) * 7 + currentDayOfWeek
            // But for simplicity, we'll just fill the last 84 calendar days.

            eventsData.forEach((event: any) => {
              const eventDate = new Date(event.created_at);
              const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

              const diffDays = Math.floor((today.getTime() - eventDay.getTime()) / (1000 * 3600 * 24));

              if (diffDays >= 0 && diffDays < numDots) {
                // Index 83 is today. Index 0 is 83 days ago.
                contribs[(numDots - 1) - diffDays]++;
              }
            });
          }

          setGithubStats({
            followers: (userData.followers >= 1000 ? (userData.followers / 1000).toFixed(1) + 'k' : userData.followers) || '0',
            avatar: userData.avatar_url,
            name: userData.name || userData.login,
            contributions: contribs
          });
        } catch (e) {
          console.error("Failed to fetch Github data");
        } finally {
          setIsLoadingGH(false);
        }
      };
      fetchGithubData();
    }
  }, [type, username]);

  // Auto-slide logic
  React.useEffect(() => {
    if ((type === 'carousel' || type === 'gallery') && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000); // 5 seconds interval
      return () => clearInterval(timer);
    }
  }, [type, images.length]);

  const cardStyle = {
    // Only apply grid positioning if we are NOT in the editor (dashboard handles positioning via wrapper)
    ...(!isEditing ? {
      gridColumn: colSpan,
      gridRow: rowSpan,
    } : {
      gridColumn: undefined,
      gridRow: undefined
    }),
    background: backgroundColor || (brandColors[type as string]?.bg) || '#ffffff',
    color: textColor || (brandColors[type as string]?.text) || '#0f172a',
    backgroundImage: (image && !['image', 'carousel', 'profile', 'text'].includes(type)) ? `url(${image})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...(type === 'text' ? {
      height: 'auto',
      minHeight: '0',
      alignSelf: 'flex-start',
      ...(isFullWidth ? {
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: '5px 0'
      } : {
        border: '1px solid #e4e4e7',
        padding: '5px 16px',
        borderRadius: '24px'
      })
    } : {})
  };

  if (type === 'github') {
    const isSetup = (!username || username === 'yourhandle') && isEditing;
    const contribColors = ['#F1F5F9', '#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

    const content = (
      <div className={`bento-card github-card ${isSetup ? 'is-setup' : ''}`} style={cardStyle}>
        {isSetup ? (
          <div className="github-setup">
            <div className="setup-icon-box">
              <Github size={24} color="#000" />
            </div>
            <div className="github-input-group">
              <div className="input-prefix">github.com/</div>
              <input
                type="text"
                placeholder="username"
                className="gh-input"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onUpdate?.({ username: tempUsername });
                  }
                }}
              />
              <button className="gh-submit-btn" onClick={() => onUpdate?.({ username: tempUsername })}>
                <ArrowRight size={18} color="white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="github-active">
            <div className="gh-left">
              <div className="gh-logo-box">
                <Github size={20} color="white" fill="white" />
              </div>
              <div className="gh-user-info">
                <h3 className="gh-username">{username}</h3>
                <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="gh-follow-btn" onClick={(e) => e.stopPropagation()}>
                  Follow
                </a>
              </div>
            </div>

            <div className="gh-right">
              {isLoadingGH ? (
                <div className="gh-loading-shade" />
              ) : (
                <div className="contribution-heatmap">
                  {(githubStats?.contributions || new Array(84).fill(0)).map((count, i) => {
                    let level = 0;
                    if (count > 0) level = 1;
                    if (count > 2) level = 2;
                    if (count > 5) level = 3;
                    if (count > 10) level = 4;
                    return (
                      <div
                        key={i}
                        className="gh-dot"
                        style={{ backgroundColor: contribColors[level] }}
                        title={`${count} activities`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          .github-card { padding: 24px; border: 1px solid #EAEAEA; height: 100%; display: flex; flex-direction: column; justify-content: center; position: relative; border-radius: 24px; transition: all 0.3s ease; }
          :global(.bento-card.is-setup) { justify-content: center; background: #fff !important; border: none !important; box-shadow: none !important; }
          :global(.bento-card.is-setup::after) {
            content: '';
            position: absolute;
            inset: 0;
            border: 2px dotted #a1a1aa !important;
            border-radius: 24px !important;
            pointer-events: none;
          }
          
          /* Setup State */
          .github-setup { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; width: 100%; }
          .setup-icon-box { width: 48px; height: 48px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
          .github-input-group { position: relative; width: 100%; display: flex; align-items: center; background: #fff; border: 1px solid #EAEAEA; border-radius: 14px; padding: 0 54px 0 16px; height: 48px; }
          .input-prefix { color: #000; font-weight: 500; font-size: 15px; margin-right: 2px; }
          .gh-input { border: none; outline: none; font-size: 15px; width: 100%; font-weight: 500; padding: 0; }
          .gh-submit-btn { position: absolute; right: 6px; top: 6px; bottom: 6px; width: 36px; background: #3E87F8; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
          
          /* Active State */
          .github-active { display: flex; justify-content: space-between; align-items: center; width: 100%; height: 100%; }
          .gh-left { display: flex; flex-direction: column; justify-content: space-between; height: 100%; }
          .gh-logo-box { width: 48px; height: 48px; background: #000; border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .gh-avatar-small { width: 100%; height: 100%; object-fit: cover; }
          .gh-username { margin: 12px 0 16px 0; font-size: 18px; font-weight: 800; color: #000; }
          .gh-follow-btn { width: fit-content; padding: 8px 24px; background: #f8fafc; border: 1px solid #EAEAEA; border-radius: 100px; font-size: 14px; font-weight: 700; color: #000; text-decoration: none; transition: all 0.2s; }
          .gh-follow-btn:hover { background: #000; color: #fff; border-color: #000; }
          
          .gh-right { height: 100%; display: flex; align-items: center; justify-content: flex-end; flex: 1; padding-left: 20px; }
          .contribution-heatmap { display: grid; grid-template-rows: repeat(7, 1fr); grid-auto-flow: column; gap: 3px; }
          .gh-dot { width: 8px; height: 8px; border-radius: 2px; }
          
          .gh-loading-shade { width: 140px; height: 80px; background: #f1f5f9; border-radius: 8px; animation: pulse 1.5s infinite ease-in-out; }
          @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
          
          @media (max-width: 380px) {
            .gh-username { font-size: 16px; }
            .gh-follow-btn { padding: 6px 16px; font-size: 13px; }
            .gh-dot { width: 8px; height: 8px; }
          }
        `}</style>
      </div>
    );

    return isEditing ? content : <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }

  if (type === 'spotify') {
    const content = (
      <div className="bento-card spotify-card" style={cardStyle}>
        <div className="card-header">
          <Music size={18} />
          <span>Listening now</span>
        </div>
        <div className="spotify-main">
          <div className="spotify-info">
            <EditableText text={title} field="title" className="track" isEditing={isEditing} onUpdate={onUpdate} />
            <EditableText text={description} field="description" className="artist" isEditing={isEditing} onUpdate={onUpdate} />
          </div>
          <div className="visualizer">
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="bar"
                animate={{ height: [4, 16, 4] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .spotify-card { padding: 24px; border: 1px solid #EAEAEA; height: 100%; display: flex; flex-direction: column; justify-content: space-between; border-radius: 24px; transition: all 0.3s ease; }
          .spotify-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
          .card-header { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; opacity: 0.9; margin-bottom: 32px; }
          .spotify-main { display: flex; justify-content: space-between; align-items: flex-end; }
          .track { font-size: 18px; font-weight: 800; margin: 0; outline: none; }
          .artist { font-size: 14px; font-weight: 600; opacity: 0.8; margin: 2px 0 0 0; outline: none; }
          .visualizer { display: flex; gap: 3px; align-items: flex-end; margin-bottom: 4px; }
          .bar { width: 4px; background: currentColor; border-radius: 2px; }
        `}</style>
      </div>
    );
  }

  if (type === 'profile') {
    const hasBg = !!image;
    return (
      <div className={`bento-card profile-card ${hasBg ? 'has-bg' : ''}`} style={cardStyle}>
        {hasBg && <div className="profile-bg" style={{ backgroundImage: `url(${image})` }} />}

        <div className="profile-overlay">
          {!hasBg && (
            <div className="profile-avatar">
              <div className="avatar-placeholder">{title?.[0] || 'U'}</div>
            </div>
          )}

          <div className="profile-content">
            <EditableHeading text={title} field="title" className="profile-name" placeholder="Your Name" isEditing={isEditing} onUpdate={onUpdate} />
            <EditableText text={description} field="description" className="profile-bio" placeholder="Design & Product" isEditing={isEditing} onUpdate={onUpdate} />

            <div className="profile-socials">
              {Object.entries(socials).map(([platform, url]) => {
                if (!url) return null;
                const Icon = {
                  instagram: Instagram,
                  twitter: Twitter,
                  linkedin: Linkedin,
                  facebook: Facebook,
                  telegram: Send,
                  mail: Mail
                }[platform] || Globe;

                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          .profile-card { 
            position: relative; 
            height: 100%; 
            display: flex; 
            flex-direction: column; 
            justify-content: flex-end;
            padding: 0;
            overflow: hidden;
            border-radius: 24px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #EAEAEA;
          }
          .has-bg.profile-card {
            border: none;
            box-shadow: none;
          }
          .profile-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            z-index: 0;
          }
          .profile-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.8) 80%, #fff 100%);
          }
          .profile-overlay {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 32px;
          }
          .has-bg .profile-overlay {
            justify-content: flex-end;
            padding-bottom: 60px;
          }
          .profile-avatar { 
            width: 96px; 
            height: 96px; 
            border-radius: 50%; 
            overflow: hidden; 
            background: #f4f4f5; 
            border: 4.5px solid #fff; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            margin-bottom: 20px;
          }
          .avatar-placeholder { 
            width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; 
            font-size: 38px; font-weight: 800; color: #a1a1aa; 
          }
          .profile-name { 
            font-size: 32px; font-weight: 850; color: #000; margin: 0; outline: none; 
            letter-spacing: -0.02em;
          }
          .profile-bio { 
            font-size: 16px; font-weight: 400; color: #1e293b; margin: 8px 0 0 0; outline: none; 
            opacity: 0.8;
          }
          .profile-socials {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 28px;
          }
          .social-icon {
            color: #000;
            opacity: 0.9;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .social-icon:hover {
            opacity: 1;
            transform: scale(1.15) translateY(-2px);
          }
          .has-bg .profile-name { color: #000; }
          .has-bg .profile-bio { color: #1e293b; }
          .has-bg .social-icon { color: #000; }
          .has-bg .profile-overlay { background: transparent; }
          :not(.has-bg) .profile-overlay { background: #fff; }
        `}</style>
      </div>
    );
  }

  if (type === 'map') {
    const content = (
      <div className="bento-card map-card" style={cardStyle}>
        <div className="map-ui">
          <MapPin size={24} color="#ef4444" />
        </div>
        <div className="map-info">
          <EditableText text={title} field="title" className="map-title" placeholder="Location" isEditing={isEditing} onUpdate={onUpdate} />
        </div>
        <style jsx>{`
          .map-card { background: #f8fafc; overflow: hidden; height: 100%; display: flex; flex-direction: column; border-radius: 24px; border: 1px solid rgba(0,0,0,0.06); transition: all 0.3s ease; }
          .map-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02); }
          .map-ui { flex: 1; display: flex; align-items: center; justify-content: center; background: #e2e8f0; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px; }
          .map-info { padding: 16px; background: white; border-top: 1px solid rgba(0,0,0,0.04); }
          .map-title { font-size: 14px; font-weight: 700; color: #18181b; margin: 0; outline: none; }
        `}</style>
      </div>
    );

    if (isEditing) return content;
    return <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title || '')}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }

  if (type === 'link') {
    const isSetup = !link && isEditing;
    let hostname = '';
    if (link) {
      try {
        const urlToParse = link.startsWith('http') ? link : `https://${link}`;
        hostname = new URL(urlToParse).hostname.replace('www.', '');
      } catch (e) {
        hostname = link;
      }
    }

    const [tempLink, setTempLink] = React.useState('');

    // Inferred layout from span
    const isWide = span === 'span 2 / span 1';
    const isTall = span === 'span 1 / span 2';
    const isLarge = span === 'span 2 / span 2';
    const isSquare = span === 'span 1 / span 1';
    const isMini = type === 'link' && description === 'mini-layout'; // Hacky way for now or I can add a dedicated field

    return (
      <div className={`bento-card link-card ${isEditing ? 'editing-mode' : ''} layout-${isMini ? 'mini' : isWide ? 'wide' : isTall ? 'tall' : isLarge ? 'large' : 'square'}`} style={cardStyle}>
        {isSetup ? (
          <div className="link-setup">
            <div className="setup-icon-box">
              <Link size={24} color="#a1a1aa" />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter link"
                className="link-input"
                value={tempLink}
                onChange={(e) => setTempLink(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onUpdate?.({ link: tempLink });
                  }
                }}
              />
              <button
                className="link-submit-btn"
                onClick={() => onUpdate?.({ link: tempLink })}
              >
                <ArrowRight size={18} color="white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="link-active">
            <div className="link-header">
              <div className="link-icon-box">
                <Link size={18} />
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </div>

            <div className="link-content">
              <div className="link-text">
                <EditableHeading text={title || hostname || 'Link Title'} field="title" className="link-title" isEditing={isEditing} onUpdate={onUpdate} />
                <EditableText text={description || hostname || 'Click to visit'} field="description" className="link-desc" isEditing={isEditing} onUpdate={onUpdate} />
              </div>

              {(isWide || isTall || isLarge) && (
                <div className="link-media">
                  {image ? (
                    <img src={image} alt="" />
                  ) : (
                    <div className="media-placeholder">
                      <Link size={isLarge ? 48 : 32} color="#cbd5e1" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          .link-card { 
            padding: 24px; 
            border-radius: 24px; 
            display: flex; 
            flex-direction: column; 
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
            border: 1px solid #EAEAEA;
            background: white;
            overflow: hidden;
            height: 100%;
          }
          :global(.bento-card.is-setup) { border: none !important; background: #fff !important; box-shadow: none !important; }
          :global(.bento-card.is-setup::after) {
            content: '';
            position: absolute;
            inset: 0;
            border: 2px dotted #a1a1aa !important;
            border-radius: 24px !important;
            pointer-events: none;
          }
          .link-setup { height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 20px; }
          .setup-icon-box { width: 56px; height: 56px; background: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
          .input-group { position: relative; width: 100%; }
          .link-input { width: 100%; height: 52px; border: 1px solid #eaeaea; border-radius: 16px; padding: 0 56px 0 20px; font-size: 15px; outline: none; transition: border-color 0.2s; }
          .link-input:focus { border-color: #3E87F8; }
          .link-submit-btn { position: absolute; right: 8px; top: 8px; width: 36px; height: 36px; background: #3E87F8; border: none; border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s; }
          .link-submit-btn:hover { transform: scale(1.05); }
          
          .link-active { height: 100%; display: flex; flex-direction: column; }
          .link-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
          .link-icon-box { width: 40px; height: 40px; background: rgba(0,0,0,0.03); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: currentColor; }
          .arrow-icon { opacity: 0.2; }
          
          .link-content { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; }
          .link-title { font-size: 20px; font-weight: 850; margin: 0; line-height: 1.2; letter-spacing: -0.02em; }
          .link-desc { font-size: 15px; font-weight: 500; opacity: 0.5; margin: 6px 0 0 0; line-height: 1.4; }

          /* Layout: Wide (2x1) */
          .layout-wide .link-content { flex-direction: row; align-items: center; gap: 24px; margin-top: auto; }
          .layout-wide .link-media { width: 120px; height: 90px; border-radius: 16px; overflow: hidden; flex-shrink: 0; }
          .layout-wide .link-text { flex: 1; text-align: left; }

          /* Layout: Tall (1x2) */
          .layout-tall .link-content { justify-content: space-between; }
          .layout-tall .link-text { margin-bottom: 24px; }
          .layout-tall .link-media { width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; }

          /* Layout: Large (2x2) */
          .layout-large .link-content { justify-content: space-between; }
          .layout-large .link-text { margin-bottom: 32px; }
          .layout-large .link-media { width: 100%; aspect-ratio: 16/9; border-radius: 24px; overflow: hidden; height: 100%; }
          .layout-large .link-title { font-size: 28px; }

          .link-media img { width: 100%; height: 100%; object-fit: cover; }
          .media-placeholder { width: 100%; height: 100%; background: #f4f4f5; display: flex; align-items: center; justify-content: center; }

          /* Layout: Square (1x1) */
          .layout-square .link-media { display: none; }
          .layout-square .link-text { margin-top: auto; }

          /* Layout: Mini (Compact Row) */
          .layout-mini { padding: 16px 24px; min-height: 80px !important; }
          .layout-mini .link-header { margin: 0; }
          .layout-mini .link-content { flex-direction: row; align-items: center; justify-content: flex-start; gap: 16px; margin: 0; }
          .layout-mini .link-media { display: none; }
          .layout-mini .link-desc { display: none; }
          .layout-mini .link-title { font-size: 16px; }
        `}</style>
      </div>
    );
  }

  const mainContent = (
    <motion.div
      className={`bento-card widget-${type} ${isEditing ? 'editing-mode' : ''} ${type === 'image' && !image ? 'is-upload-state' : ''}`}
      style={cardStyle}
    >
      {type === 'image' && image && (
        <div className="image-card-full">
          <img src={image} className="image-full-media" alt="" />
          {title && (
            <div className="image-label-tag">
              {title}
            </div>
          )}
        </div>
      )}

      {/* General Background Image Overlay for non-image/carousel widgets */}
      {image && !['image', 'carousel', 'profile'].includes(type) && (
        <div className="card-bg-overlay" />
      )}

      {(type === 'carousel' || type === 'gallery') && (
        <div className={`carousel-container style-${carouselStyle} ${images.length === 0 ? 'is-empty' : ''}`}>
          {images.length > 0 ? (
            <>
              {carouselStyle === 'peek' ? (
                <div className="peek-carousel">
                  {/* Previous slide */}
                  <div
                    className="peek-slide prev"
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev - 1 + images.length) % images.length); }}
                  >
                    <img src={images[(currentSlide - 1 + images.length) % images.length]} alt="" />
                  </div>

                  {/* Current slide */}
                  <motion.div
                    className="peek-slide current"
                    key={currentSlide}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <img src={images[currentSlide]} alt="" />
                  </motion.div>

                  {/* Next slide */}
                  <div
                    className="peek-slide next"
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev + 1) % images.length); }}
                  >
                    <img src={images[(currentSlide + 1) % images.length]} alt="" />
                  </div>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    className={`carousel-slide style-${carouselStyle}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="slide-inner">
                      <img src={images[currentSlide]} alt="" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {carouselStyle === 'inset' && (
                <div className="carousel-arrows">
                  <button className="arrow-btn prev" onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev - 1 + images.length) % images.length); }}>
                    <ChevronLeft size={18} />
                  </button>
                  <button className="arrow-btn next" onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev + 1) % images.length); }}>
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}

              {carouselStyle === 'full' && (
                <div className="carousel-dots">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`dot ${i === currentSlide ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : isEditing ? (
            <div className="image-upload-prompt" onClick={() => fileInputRef.current?.click()}>
              <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => { onUpdate?.({ images: [reader.result as string] }); };
                  reader.readAsDataURL(file);
                }
              }} />
              <div className="upload-icon-stack">
                <ImageIcon size={32} color="#a1a1aa" />
                <div className="plus-badge"><Plus size={12} color="white" /></div>
              </div>
              <span>Click to add slides</span>
            </div>
          ) : null}
        </div>
      )}

      <div className={`widget-content ${type === 'image' && image ? 'is-image-active' : ''} ${type === 'image' && !image ? 'is-upload-state' : ''}`}>
        {type === 'profile' && image ? (
          <div className={`${type}-media-container`}>
            <img src={image} className={`${type}-media`} alt="" />
          </div>
        ) : type === 'image' && !image ? (
          <div className="image-upload-prompt" onClick={() => fileInputRef.current?.click()}>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <div className="upload-icon-stack">
              <ImageIcon size={32} color="#a1a1aa" />
              <div className="plus-badge">
                <Plus size={12} color="white" />
              </div>
            </div>
            <span>Click to upload photo</span>
          </div>
        ) : null}

        <div className={`widget-text-content align-${textAlign} size-${fontSize} ${image ? 'has-image' : ''}`}>
          {type !== 'image' && type !== 'carousel' && type !== 'text' && type !== 'music' && (
            <div className="widget-top">
              {isBrand ? (
                <div className="widget-icon">{brandIcons[type as string]}</div>
              ) : (
                icon && iconMap[icon] && <div className="widget-icon">{React.createElement(iconMap[icon], { size: 20 })}</div>
              ) || <div className="widget-icon"><IconComponent size={20} /></div>}
              <ArrowUpRight size={18} className="arrow-icon" />
            </div>
          )}
          {type === 'music' && (
            <div className="music-widget-player">
              <div className="music-info">
                <Music className="music-icon-main" size={32} />
                <div className="music-details">
                  <EditableHeading text={title} field="title" className="widget-title" placeholder="Track Name" isEditing={isEditing} onUpdate={onUpdate} />
                  <span className="music-style-label">{musicType === 'ambient' ? 'Nice Royalty Free' : musicType === 'lofi' ? 'Lofi Relaxation' : 'Slow & Calm'}</span>
                </div>
              </div>
              <div className="waveform-container">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="wave-bar"
                    animate={{
                      height: [10, 25, 15, 30, 10][i % 5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <div className="music-controls-simple">
                <button className="play-btn-pill">
                  <ChevronRight size={18} fill="currentColor" />
                  <span>Listen Now</span>
                </button>
              </div>
            </div>
          )}
          {type !== 'image' && type !== 'carousel' && type !== 'music' && (
            <div className="widget-bottom">
              <EditableHeading text={title} field="title" className="widget-title" placeholder="Title" isEditing={isEditing} onUpdate={onUpdate} />
              {description !== undefined && type !== 'text' && <EditableText text={description} field="description" className="widget-desc" placeholder="Description" isEditing={isEditing} onUpdate={onUpdate} />}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
      .bento-card {
        position: relative;
        border-radius: 24px;
        border: 1px solid #EAEAEA;
        box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        height: 100%;
        isolation: isolate; /* Force clipping context */
        transform: translateZ(0); /* Fix for some browsers clipping issues */
        mask-image: -webkit-radial-gradient(white, black); /* Chrome/Safari fix for overflow + radius */
      }
      .bento-card.widget-carousel,
      .bento-card.widget-gallery,
      .bento-card.widget-text {
        border-radius: 24px !important;
        overflow: hidden !important;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        clip-path: inset(0 round 24px);
        -webkit-clip-path: inset(0 round 24px);
      }
      .bento-card:hover { 
        transform: translateY(-4px); 
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.12);
        border-color: rgba(0, 0, 0, 0.1);
        z-index: 10;
      }

      .image-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
      .card-bg-overlay {
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: brightness(0.9);
        z-index: 0;
      }
      .image-card-full { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
      .image-full-media { width: 100%; height: 100%; object-fit: cover; }
      
      .image-label-tag {
        position: absolute;
        bottom: 16px;
        left: 16px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(8px);
        color: white;
        padding: 4px 12px;
        border-radius: 100px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.02em;
        z-index: 2;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }


      .carousel-dots {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 6px;
        padding: 6px 10px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 100px;
        z-index: 10;
      }
      .dot { width: 6px; height: 6px; border-radius: 50%; background: #ffffff; opacity: 0.5; transition: all 0.3s; cursor: pointer; pointer-events: auto; }
      .dot.active { opacity: 1; transform: scale(1.2); }

      .carousel-arrows {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        pointer-events: none;
        z-index: 10;
      }
      .arrow-btn {
        width: 32px;
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        pointer-events: auto;
        border: none;
        transition: all 0.2s;
      }
      .arrow-btn:hover { background: rgba(255, 255, 255, 0.4); transform: scale(1.1); }

      .widget-content {
        position: relative;
        z-index: 1;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: auto;
      }
      .bento-card:not(.widget-text) .widget-content {
        min-height: 140px;
        padding: 24px;
      }

      .widget-content.is-image-active { background: transparent; pointer-events: none; }
      .widget-content.is-image-active .widget-text-content { display: none; }
      .widget-content.is-image-active .widget-top { pointer-events: auto; }

      .image-media-container { width: 140px; height: 100%; border-right: 1px solid rgba(0,0,0,0.05); }
      .image-media { width: 100%; height: 100%; object-fit: cover; }

      .widget-top { display: flex; justify-content: space-between; align-items: flex-start; }
      .widget-icon { color: #64748b; }
      .arrow-icon { color: #cbd5e1; }

      .widget-title { font-size: inherit; font-weight: 700; color: inherit; margin: 0; letter-spacing: -0.01em; line-height: 1.25; outline: none; }
      .widget-desc { font-size: 0.6em; font-weight: 400; color: inherit; margin: 8px 0 0 0; outline: none; opacity: 0.8; }
      
      .widget-text-content.align-center { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: auto; width: 100%; }
      .widget-text-content.align-right { display: flex; flex-direction: column; justify-content: center; align-items: flex-end; text-align: right; height: auto; width: 100%; }
      .widget-text-content.align-left { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left; height: auto; width: 100%; }

      .widget-text-content.size-h1 { font-size: 42px; }
      .widget-text-content.size-h2 { font-size: 32px; }
      .widget-text-content.size-h3 { font-size: 24px; }

      /* Special override for text widget compactness */
      /* Special override for text widget compactness */
      .bento-card.widget-text .widget-content {
        min-height: 0 !important;
        padding: 5px 16px !important;
        height: auto !important;
        display: block; /* Disable flex column to shrink wrap */
      }
      .bento-card.widget-text .widget-title {
        line-height: 1 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .bento-card.widget-text .widget-text-content,
      .bento-card.widget-text .widget-bottom {
        display: block !important;
        height: auto !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      .bento-card.widget-text {
        height: auto !important;
        min-height: 0 !important;
        display: block !important;
        align-self: flex-start !important;
      }

      .widget-text-content.has-image { color: white !important; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
      .widget-text-content.has-image .widget-title { font-weight: 800; }
      
      .widget-title:empty:before, .widget-desc:empty:before { content: attr(data-placeholder); color: #cbd5e1; }

      .image-upload-prompt { 
        height: 100%; 
        width: 100%; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        gap: 12px;
        cursor: pointer;
        transition: all 0.2s;
        color: #71717a;
        font-size: 13px;
        font-weight: 500;
      }
      :global(.bento-card.is-upload-state) {
        border: none !important;
        background: #fff !important;
        box-shadow: none !important;
      }
      :global(.bento-card.is-upload-state::after) {
        content: '';
        position: absolute;
        inset: 0;
        border: 2px dotted #a1a1aa !important;
        border-radius: 24px !important;
        pointer-events: none;
      }
      .is-upload-state:hover { border-color: #cbd5e1 !important; }
      .image-upload-prompt span { color: #a1a1aa; }
      
      .music-widget-player {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px;
      }
      .music-info {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
      }
      .music-icon-main {
        color: #3e87f8;
        filter: drop-shadow(0 0 10px rgba(62, 135, 248, 0.3));
      }
      .music-style-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.6;
        margin-top: 4px;
        display: block;
      }
      .waveform-container {
        height: 40px;
        display: flex;
        align-items: center;
        gap: 3px;
        margin: 10px 0;
      }
      .wave-bar {
        width: 3px;
        background: #3e87f8;
        border-radius: 10px;
        min-height: 4px;
      }
      .music-controls-simple {
        margin-top: 20px;
      }
      .play-btn-pill {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.1);
        color: white;
        padding: 8px 18px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        width: fit-content;
      }
      .play-btn-pill:hover {
        background: #3e87f8;
        transform: scale(1.05);
      }
      .image-upload-prompt:hover { background: #fafafa; border-color: #3E87F8; color: #3E87F8; }
      .upload-icon-stack { position: relative; }
      .plus-badge { 
        position: absolute; 
        bottom: -2px; 
        right: -4px; 
        background: #3E87F8; 
        border-radius: 50%; 
        width: 18px; 
        height: 18px; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        border: 2px solid white;
      }

      .editing-mode .editable-field {
          cursor: text;
      }
      .editing-mode .editable-field:hover {
          background: rgba(0,0,0,0.02);
          border-radius: 4px;
      }

      /* Carousel Styles */
      .carousel-container { 
        position: absolute; 
        inset: 0;
        width: 100%; 
        height: 100%; 
        overflow: hidden !important; 
        border-radius: 24px;
        z-index: 1;
      }
      .widget-carousel .carousel-container,
      .widget-gallery .carousel-container {
        border-radius: 48px !important;
        -webkit-mask-image: -webkit-radial-gradient(white, black);
        mask-image: -webkit-radial-gradient(white, black);
        clip-path: inset(0 round 48px);
        -webkit-clip-path: inset(0 round 48px);
      }
      .carousel-slide { position: absolute; inset: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
      
      .slide-inner { width: 100%; height: 100%; position: relative; overflow: hidden; }
      .carousel-slide.style-inset .slide-inner { width: calc(100% - 32px); height: calc(100% - 32px); border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
      .carousel-slide.style-vertical .slide-inner { width: auto; height: 100%; aspect-ratio: auto; max-width: 100%; }
      .carousel-slide.style-vertical img { object-fit: contain; }
      .carousel-blur-bg { position: absolute; inset: 0; background-size: cover; background-position: center; filter: blur(20px); opacity: 0.5; transform: scale(1.1); }

      .carousel-slide img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }

      /* Peek Carousel Style */
      .peek-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 10px;
        padding: 10px;
        box-sizing: border-box;
      }
      .peek-slide {
        height: 100%;
        border-radius: 28px;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        flex-shrink: 0;
        position: relative;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .peek-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .peek-slide.prev,
      .peek-slide.next {
        width: 22.5%; /* More visible peeks */
        opacity: 0.4;
        cursor: pointer;
        filter: brightness(0.8) blur(1px);
      }
      .peek-slide.prev:hover,
      .peek-slide.next:hover {
        opacity: 0.7;
        filter: brightness(1) blur(0);
      }
      .peek-slide.current {
        flex: 1;
        max-width: 50%; /* Center slide takes half the width */
        z-index: 10;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        border: 3px solid white;
        border-radius: 40px;
      }
      .peek-slide.current img {
        transform: scale(1);
      }
    `}</style>
    </motion.div>
  );

  if (isEditing || !link) return mainContent;
  return <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{mainContent}</a>;
}
