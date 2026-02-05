"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Settings,
  Eye,
  Layout,
  Image as ImageIcon,
  Link as LinkIcon,
  Share2,
  Trash2,
  Move,
  ChevronRight,
  Music,
  Github,
  Youtube,
  BarChart3,
  Palette,
  ArrowLeft,
  Search,
  ExternalLink,
  DollarSign,
  Gem,
  Square,
  ShoppingCart,
  GalleryHorizontal,
  Code,
  Minus,
  Map as MapIcon,
  User,
  CheckCircle2,
  Copy,
  MessageSquare,
  Instagram,
  Upload,
  Twitter,
  Linkedin,
  Facebook,
  Dribbble,
  Send,
  Mail,
  Globe,
  Bell,
  Twitch,
  X,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  LayoutTemplate,
  ScanLine,
  AlignLeft,
  AlignCenter,
  AlignRight
} from 'lucide-react';

interface Card {
  id: number;
  type: string;
  title?: string;
  description?: string;
  link?: string;
  span?: string;
  username?: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  image?: string;
  socials?: Record<string, string>;
  images?: string[];
  carouselLayout?: 'dots' | 'arrows' | 'none';
  carouselStyle?: 'full' | 'inset' | 'vertical' | 'peek';
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: 'h1' | 'h2' | 'h3';
  isFullWidth?: boolean;
  musicType?: 'slow' | 'lofi' | 'ambient' | 'none';
  audioUrl?: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('links');
  const [activeStyleTab, setActiveStyleTab] = useState('Color');
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const router = useRouter();

  const [cards, setCards] = useState<Card[]>([
    { id: 1, type: 'profile', title: "Eli Navarro", description: "Product Designer", span: "span 2 / span 2", backgroundColor: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", textColor: "#ffffff" },
    { id: 2, type: 'github', username: "elinav", span: "span 2 / span 1" },
    { id: 3, type: 'spotify', title: "Midnight City", description: "M83", span: "span 2 / span 1", backgroundColor: "#1DB954", textColor: "#ffffff" },
    { id: 4, type: 'youtube', title: "How I design", username: "Eli Navarro", span: "span 2 / span 1", backgroundColor: "#FF0000", textColor: "#ffffff" },
    { id: 5, type: 'link', title: "Latest Work", description: "Mobile App Design", link: "#", span: "span 1 / span 1", backgroundColor: "#3b82f6", textColor: "#ffffff" },
    { id: 6, type: 'map', title: "San Francisco, CA", span: "span 1 / span 1", backgroundColor: "#f8fafc" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [leftTab, setLeftTab] = useState('general');
  const [deviceType, setDeviceType] = useState('mobile');
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [pageSettings, setPageSettings] = useState({
    theme: 'light',
    font: 'Outfit',
    backgroundColor: '#ffffff',
    backgroundImage: '',
  });

  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const loadData = async (userEmail: string) => {
    try {
      setIsLoadingData(true);
      const { data, error } = await supabase
        .from('sites')
        .select('*')
        .eq('user_email', userEmail)
        .single();

      if (data) {
        if (data.cards) setCards(data.cards);
        if (data.settings) setPageSettings(data.settings);
      }
    } catch (err) {
      console.error('Error loading data:', err);
    } finally {
      setIsLoadingData(false);
    }
  };

  const saveData = async () => {
    if (!user?.email) return;
    try {
      const { error } = await supabase
        .from('sites')
        .upsert({
          user_email: user.email,
          cards: cards,
          settings: pageSettings,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_email' });

      if (error) throw error;
    } catch (err) {
      console.error('Error saving data:', err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        const dummyUser = { email: "ananddubey0120" };
        setUser(dummyUser);
        loadData(dummyUser.email);
      } else {
        setUser(user);
        loadData(user.email!);
      }
    };
    getUser();
  }, [router]);

  const addCard = (type: string) => {
    const newId = Math.max(...cards.map(c => c.id), 0) + 1;
    const defaults: Record<string, any> = {
      profile: {
        title: "Your Name",
        description: "Design & Product",
        span: "span 2 / span 2",
        backgroundColor: "#ffffff",
        textColor: "#0f172a",
        socials: { instagram: '', twitter: '', linkedin: '', facebook: '' }
      },
      link: { title: "Latest Work", description: "Case studies", link: "https://", span: "span 1 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      image: { title: "Studio Shot", description: "Behind the scenes", span: "span 2 / span 1" },
      github: { username: "", span: "span 2 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      spotify: { title: "Lo-fi Beats", description: "Chilling", span: "span 2 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      youtube: { title: "Vlog #01", username: "Eli Navarro", span: "span 2 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      experience: { title: "Senior Designer", description: "Apple", span: "span 2 / span 1", backgroundColor: "#ffffff" },
      music: { title: "Deep Focus", musicType: "slow", span: "span 2 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      faq: { title: "How to reach out?", span: "span 1 / span 1" },
      map: { title: "San Francisco, CA", span: "span 1 / span 1", backgroundColor: "#ffffff" },
      substack: { title: "Monthly newsletter", description: "Join 2k readers", span: "span 2 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      text: { title: "My philosophy", description: "Design twice, code once.", span: "span 2 / span 1", isFullWidth: true },
      calendar: { title: "Quick Sync", span: "span 1 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      instagram: { title: "Instagram", link: "https://instagram.com/", span: "span 1 / span 1" },
      facebook: { title: "Facebook", link: "https://facebook.com/", span: "span 1 / span 1" },
      linkedin: { title: "LinkedIn", link: "https://linkedin.com/in/", span: "span 1 / span 1" },
      twitter: { title: "Twitter / X", link: "https://x.com/", span: "span 1 / span 1" },
      tiktok: { title: "TikTok", link: "https://tiktok.com/@", span: "span 1 / span 1" },
      pricing: { title: "Pro Plan", description: "$19/mo", span: "span 1 / span 1", backgroundColor: "#ffffff" },
      feature: { title: "New Feature", description: "Available now", span: "span 1 / span 1" },
      team: { title: "Our Team", description: "Meet the experts", span: "span 2 / span 1" },
      button: { title: "Get Started", span: "span 1 / span 1", backgroundColor: "#ffffff", textColor: "#0f172a" },
      carousel: {
        images: [
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1635334122045-2d3bc0815144?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800'
        ],
        carouselLayout: 'dots',
        carouselStyle: 'peek',
        span: "span 2 / span 2"
      },
      code: { title: "Custom Widget", span: "span 2 / span 2" },
      divider: { span: "span 2 / span 1" },
      contact: { title: "Follow me", icon: "user", span: "span 1 / span 1" },
    };

    const newCard = {
      id: newId,
      type: type,
      ...(defaults[type] || { title: "New " + type, span: "span 1 / span 1" })
    };
    setCards([...cards, newCard]);
    setSelectedCardId(newId);
  };

  const removeCard = (id: number) => {
    setCards(cards.filter(c => c.id !== id));
    if (selectedCardId === id) setSelectedCardId(null);
  };

  const updateCard = (id: number, updates: any) => {
    setCards(cards.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const moveCard = (id: number, direction: 'up' | 'down') => {
    const index = cards.findIndex(c => c.id === id);
    if (index === -1) return;
    const newCards = [...cards];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= cards.length) return;
    [newCards[index], newCards[newIndex]] = [newCards[newIndex], newCards[index]];
    setCards(newCards);
  };

  const duplicateCard = (id: number) => {
    const card = cards.find(c => c.id === id);
    if (!card) return;
    const newId = Math.max(...cards.map(c => c.id), 0) + 1;
    const newCard = { ...card, id: newId };
    const index = cards.findIndex(c => c.id === id);
    const newCards = [...cards];
    newCards.splice(index + 1, 0, newCard);
    setCards(newCards);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    await saveData();
    setTimeout(() => {
      setIsPublishing(false);
      setShowPublishModal(true);
    }, 1000);
  };

  const selectedCard = cards.find(c => c.id === selectedCardId);

  const updateSocial = (id: number, platform: string, value: string) => {
    setCards(prev => prev.map(c => {
      if (c.id === id) {
        return {
          ...c,
          socials: {
            ...c.socials,
            [platform]: value
          }
        };
      }
      return c;
    }));
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className={`dashboard theme-${pageSettings.theme}`} style={{ fontFamily: `"${pageSettings.font}", sans-serif` }}>
      <header className="dashboard-header">
        <div className="header-left">
          <button className="btn-icon-square"><Plus size={18} /></button>
          <Link href="/dashboard/sites" style={{ textDecoration: 'none' }}>
            <div className="site-selector">
              <div className="site-avatar">A</div>
              <span className="domain-text">{user.email?.split('@')[0]}</span>
              <ChevronDown size={14} />
            </div>
          </Link>
          <button className="btn-icon-transparent"><Share2 size={16} /></button>
        </div>

        <div className="device-toggle">
          <button
            className={deviceType === 'mobile' ? 'active' : ''}
            onClick={() => setDeviceType('mobile')}
          >
            Mobile
          </button>
          <button
            className={deviceType === 'desktop' ? 'active' : ''}
            onClick={() => setDeviceType('desktop')}
          >
            Desktop
          </button>
        </div>

        <div className="header-right">
          <div className="nav-tabs-v2">
            <button className={activeTab === 'links' ? 'active' : ''} onClick={() => setActiveTab('links')}>Links</button>
            <button className={activeTab === 'design' ? 'active' : ''} onClick={() => setActiveTab('design')}>Design</button>
            <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>Stats</button>
          </div>
          <button className="btn-publish-v2" onClick={handlePublish} disabled={isPublishing}>
            {isPublishing ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </header>

      {/* Publish Success Modal */}
      <AnimatePresence>
        {showPublishModal && (
          <div className="modal-overlay" onClick={() => setShowPublishModal(false)}>
            <motion.div
              className="publish-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="success-icon">
                <CheckCircle2 size={40} color="#22c55e" />
              </div>
              <h2>Your site is live!</h2>
              <p>Anyone can now view your page at:</p>
              <div className="live-link-box">
                <span>typelink.me/{user.email?.split('@')[0]}</span>
                <Copy size={16} className="copy-icon" />
              </div>
              <div className="modal-actions">
                <button className="btn-view-site">View Site</button>
                <button className="btn-close-modal" onClick={() => setShowPublishModal(false)}>Back to Editor</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="dashboard-content">
        {/* Left Sidebar: Contextual */}
        <aside className="adding-sidebar">
          {activeTab === 'links' ? (
            <>
              <div className="sidebar-header">
                <h3>Adding</h3>
                <button className="btn-close-sidebar" onClick={() => setActiveTab('')}><X size={18} /></button>
              </div>

              <div className="search-box">
                <div className="search-icon-wrapper">
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Search widgets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn-inner">
                  <Search size={14} color="white" />
                </button>
              </div>

              <div className="sidebar-tabs">
                <button className={leftTab === 'general' ? 'active' : ''} onClick={() => setLeftTab('general')}>General</button>
                <button className={leftTab === 'links' ? 'active' : ''} onClick={() => setLeftTab('links')}>Social</button>
              </div>

              <div className="widget-scroll-area">
                <div className="widget-grid-v2">
                  {leftTab === 'general' ? (
                    <>
                      <div onClick={() => addCard('profile')} className="widget-item-card">
                        <div className="item-icon"><User size={20} /></div>
                        <span>Profile</span>
                      </div>
                      <div onClick={() => addCard('link')} className="widget-item-card">
                        <div className="item-icon"><LinkIcon size={20} /></div>
                        <span>Link</span>
                      </div>
                      <div onClick={() => addCard('image')} className="widget-item-card">
                        <div className="item-icon"><ImageIcon size={20} /></div>
                        <span>Photo/Video</span>
                      </div>
                      <div onClick={() => addCard('newsletter')} className="widget-item-card">
                        <div className="item-icon"><Bell size={20} /></div>
                        <span>Newsletter</span>
                      </div>
                      <div onClick={() => addCard('music')} className="widget-item-card">
                        <div className="item-icon"><Music size={20} /></div>
                        <span>Music</span>
                      </div>
                      <div onClick={() => addCard('text')} className="widget-item-card">
                        <div className="item-icon"><Plus size={20} /></div>
                        <span>Title / Text</span>
                      </div>
                      <div onClick={() => addCard('experience')} className="widget-item-card">
                        <div className="item-icon"><Layout size={20} /></div>
                        <span>Experience</span>
                      </div>
                      <div onClick={() => addCard('faq')} className="widget-item-card">
                        <div className="item-icon"><MessageSquare size={20} /></div>
                        <span>FAQ</span>
                      </div>
                      <div onClick={() => addCard('map')} className="widget-item-card">
                        <div className="item-icon"><MapIcon size={20} /></div>
                        <span>Map</span>
                      </div>
                      <div onClick={() => addCard('shop')} className="widget-item-card">
                        <div className="item-icon"><ShoppingCart size={20} /></div>
                        <span>Shop</span>
                      </div>
                      <div onClick={() => addCard('carousel')} className="widget-item-card">
                        <div className="item-icon"><GalleryHorizontal size={20} /></div>
                        <span>Carousel</span>
                      </div>
                    </>
                  ) : leftTab === 'links' && (
                    <>
                      <div onClick={() => addCard('youtube')} className="widget-item-card">
                        <div className="item-icon"><Youtube size={20} /></div>
                        <span>YouTube</span>
                      </div>
                      <div onClick={() => addCard('spotify')} className="widget-item-card">
                        <div className="item-icon"><Music size={20} /></div>
                        <span>Spotify</span>
                      </div>
                      <div onClick={() => addCard('github')} className="widget-item-card">
                        <div className="item-icon"><Github size={20} /></div>
                        <span>GitHub</span>
                      </div>
                      <div onClick={() => addCard('substack')} className="widget-item-card">
                        <div className="item-icon"><Mail size={20} /></div>
                        <span>Substack</span>
                      </div>
                      <div onClick={() => addCard('instagram')} className="widget-item-card">
                        <div className="item-icon"><Instagram size={20} /></div>
                        <span>Instagram</span>
                      </div>
                      <div onClick={() => addCard('facebook')} className="widget-item-card">
                        <div className="item-icon"><Facebook size={20} /></div>
                        <span>Facebook</span>
                      </div>
                      <div onClick={() => addCard('linkedin')} className="widget-item-card">
                        <div className="item-icon"><Linkedin size={20} /></div>
                        <span>LinkedIn</span>
                      </div>
                      <div onClick={() => addCard('twitter')} className="widget-item-card">
                        <div className="item-icon"><Twitter size={20} /></div>
                        <span>Twitter / X</span>
                      </div>
                      <div onClick={() => addCard('tiktok')} className="widget-item-card">
                        <div className="item-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.32-.6 4.67-2.06 6.54-2.11 2.58-5.63 3.65-8.73 2.7-2.93-.89-5.17-3.64-5.38-6.68-.31-4.04 2.5-8.08 6.51-8.7 1.35-.22 2.74-.01 4.02.48.01 1.48-.01 2.97-.01 4.45-.96-.54-2.11-.74-3.19-.52-1.39.29-2.54 1.4-2.77 2.79-.34 1.6.43 3.32 1.91 4.01 1.41.67 3.2.37 4.21-.86.75-.92.89-2.22.88-3.37V.02z" />
                          </svg>
                        </div>
                        <span>TikTok</span>
                      </div>
                      <div onClick={() => addCard('discord')} className="widget-item-card">
                        <div className="item-icon"><MessageSquare size={20} /></div>
                        <span>Discord</span>
                      </div>
                      <div onClick={() => addCard('twitch')} className="widget-item-card">
                        <div className="item-icon"><Twitch size={20} /></div>
                        <span>Twitch</span>
                      </div>
                      <div onClick={() => addCard('dribbble')} className="widget-item-card">
                        <div className="item-icon"><Dribbble size={20} /></div>
                        <span>Dribbble</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : activeTab === 'design' ? (
            <>
              <div className="sidebar-header">
                <h3>Design</h3>
              </div>
              <div className="editor-controls">
                <div className="edit-section">
                  <label>Theme</label>
                  <div className="theme-grid">
                    {['light', 'dark', 'slate'].map(t => (
                      <button
                        key={t}
                        className={`theme-btn ${pageSettings.theme === t ? 'active' : ''}`}
                        onClick={() => setPageSettings({ ...pageSettings, theme: t })}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="edit-section">
                  <label>Font Family</label>
                  <select
                    className="font-select"
                    value={pageSettings.font}
                    onChange={(e) => setPageSettings({ ...pageSettings, font: e.target.value })}
                  >
                    <option value="Outfit">Outfit</option>
                    <option value="Inter">Inter</option>
                    <option value="Roboto">Roboto</option>
                  </select>
                </div>
                <div className="edit-section">
                  <label>Background Color</label>
                  <input
                    type="color"
                    value={pageSettings.backgroundColor}
                    onChange={(e) => setPageSettings({ ...pageSettings, backgroundColor: e.target.value })}
                    style={{ width: '100%', height: '40px', borderRadius: '8px', border: '1px solid #ddd', padding: '2px' }}
                  />
                </div>
                <div className="edit-section">
                  <label>Background Image URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={pageSettings.backgroundImage}
                    onChange={(e) => setPageSettings({ ...pageSettings, backgroundImage: e.target.value })}
                  />
                  <p style={{ fontSize: '11px', opacity: 0.5, marginTop: '4px' }}>Recommended: High resolution vertical image</p>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-state-sidebar">
              <h3>Stats</h3>
              <p>Analytics coming soon...</p>
            </div>
          )}
        </aside>

        {/* Center Canvas: Preview */}
        <section className="preview-canvas">
          <div className="preview-container">
            <div className={`preview-mockup ${deviceType}`}>
              <div className="phone-screen" style={{
                background: pageSettings.backgroundImage
                  ? `linear-gradient(to bottom, transparent 0%, transparent 50%, ${pageSettings.backgroundColor} 90%), url(${pageSettings.backgroundImage}) no-repeat top center / cover`
                  : pageSettings.backgroundColor
              }}>
                <div className="preview-bento-scroll">
                  {cards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`preview-item-wrapper ${selectedCardId === card.id ? 'selected' : ''} ${index === 0 && card.type === 'profile' ? 'hero-widget' : ''}`}
                      style={{
                        gridColumn: card.span?.split('/')[0].trim(),
                        gridRow: card.span?.split('/')[1]?.trim(),
                        alignSelf: card.type === 'text' ? 'start' : undefined,
                        height: card.type === 'text' ? 'fit-content' : undefined,
                        minHeight: 0
                      }}
                      onMouseEnter={() => setHoveredCardId(card.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCardId(card.id);
                      }}
                    >
                      <BentoCard
                        {...card as any}
                        isEditing={true}
                        onUpdate={(updates) => updateCard(card.id, updates)}
                      />

                      {/* Floating Widget Actions */}
                      <AnimatePresence>
                        {hoveredCardId === card.id && (
                          <motion.div
                            className="widget-floating-actions"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            style={{
                              position: 'absolute',
                              top: '-12px',
                              right: '-12px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              background: 'white',
                              padding: '4px',
                              borderRadius: '10px',
                              gap: '2px',
                              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                              border: '1px solid rgba(0,0,0,0.15)',
                              zIndex: 1000,
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <button className="action-btn" onClick={(e) => { e.stopPropagation(); moveCard(card.id, 'up'); }} title="Move Up">
                              <ChevronUp size={16} />
                            </button>
                            <button className="action-btn" onClick={(e) => { e.stopPropagation(); moveCard(card.id, 'down'); }} title="Move Down">
                              <ChevronDown size={16} />
                            </button>
                            <button className="action-btn" onClick={(e) => { e.stopPropagation(); duplicateCard(card.id); }} title="Duplicate">
                              <Copy size={14} />
                            </button>
                            <button className="action-btn" onClick={(e) => { e.stopPropagation(); setSelectedCardId(card.id); }} title="Settings">
                              <Settings size={14} />
                            </button>
                            <button className="action-btn delete" onClick={(e) => { e.stopPropagation(); removeCard(card.id); }} title="Delete">
                              <Trash2 size={14} />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {selectedCardId === card.id && (
                        <div className={`selection-indicator ${card.type === 'image' && !card.image ? 'is-setup' : ''}`} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="preview-footer">
                  <div className="powered-by">
                    <span>Powered by</span>
                    <div className="footer-logo">
                      <LinkIcon size={14} />
                      <span>Typelink</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar: Style/Editor */}
        <aside className={`style-sidebar ${selectedCard ? 'visible' : ''}`}>
          {selectedCard ? (
            <div className="style-inner">
              <div className="sidebar-header">
                <h3>Style</h3>
                <button className="btn-close-sidebar" onClick={() => setSelectedCardId(null)}>
                  <X size={18} />
                </button>
              </div>

              <div className="editor-controls">
                {/* Premium Style Panel at the TOP */}
                <div className="premium-style-panel">
                  <div className="style-tabs-v3">
                    {['Color', 'Image', 'Custom'].map(tab => (
                      <button
                        key={tab}
                        className={`style-tab-btn ${activeStyleTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveStyleTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="style-content-v3">
                    {activeStyleTab === 'Color' && (
                      <div className="presets-grid-v3">
                        {[
                          '#ffffff', '#f8fafc', '#f1f5f9', '#000000',
                          '#eff6ff', '#fefce8', '#f0f9ff', '#fdf2f8',
                          '#fbbf24', '#3b82f6', '#22c55e', '#ef4444'
                        ].map((color, idx) => (
                          <button
                            key={idx}
                            className={`preset-item-v3 ${selectedCard.backgroundColor === color ? 'active' : ''}`}
                            style={{ background: color }}
                            onClick={() => updateCard(selectedCard.id, { backgroundColor: color, image: undefined })}
                          >
                            <div className="preset-preview-inner" />
                          </button>
                        ))}
                      </div>
                    )}

                    {activeStyleTab === 'Image' && (
                      <div className="presets-grid-v3">
                        {[
                          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1518005020250-675f040314b9?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200',
                          'https://images.unsplash.com/photo-1635334122045-2d3bc0815144?auto=format&fit=crop&q=80&w=200'
                        ].map((url, idx) => (
                          <button
                            key={idx}
                            className={`preset-item-v3 image-preset ${selectedCard.image === url ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${url})` }}
                            onClick={() => updateCard(selectedCard.id, { image: url, backgroundColor: 'transparent' })}
                          >
                            <div className="preset-preview-inner" />
                          </button>
                        ))}
                      </div>
                    )}

                    {activeStyleTab === 'Custom' && (
                      <div className="custom-style-controls">
                        <div className="edit-section">
                          <label>Custom Color</label>
                          <input
                            type="color"
                            style={{ height: '40px', padding: '2px', border: 'none', width: '100%', borderRadius: '8px', cursor: 'pointer' }}
                            value={selectedCard.backgroundColor || '#ffffff'}
                            onChange={(e) => updateCard(selectedCard.id, { backgroundColor: e.target.value })}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="style-footer-toggles">
                    {selectedCard.type !== 'text' && (
                      <div className="toggle-row">
                        <label>100% width</label>
                        <button
                          className={`toggle-v3 ${selectedCard.span?.includes('span 2') ? 'active' : ''}`}
                          onClick={() => {
                            const currentSpan = selectedCard.span || 'span 1 / span 1';
                            const isWide = currentSpan.includes('span 2');
                            updateCard(selectedCard.id, { span: isWide ? 'span 1 / span 1' : 'span 2 / span 1' });
                          }}
                        >
                          <div className="toggle-thumb" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ height: '32px', borderBottom: '1px solid #f4f4f5', margin: '0 -24px 24px', opacity: 0.5 }} />

                {/* Dynamic Content Fields based on widget type */}
                {selectedCard.type === 'github' && (
                  <div className="edit-section">
                    <label>GitHub Username</label>
                    <input
                      type="text"
                      placeholder="e.g. elinav"
                      value={selectedCard.username || ''}
                      onChange={(e) => updateCard(selectedCard.id, { username: e.target.value })}
                    />
                  </div>
                )}

                {selectedCard.type === 'youtube' && (
                  <>
                    <div className="edit-section">
                      <label>Video / Title</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Channel / URL</label>
                      <input
                        type="text"
                        placeholder="https://youtube.com/..."
                        value={selectedCard.link || ''}
                        onChange={(e) => updateCard(selectedCard.id, { link: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {selectedCard.type === 'spotify' && (
                  <>
                    <div className="edit-section">
                      <label>Track Name</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Artist</label>
                      <input
                        type="text"
                        value={selectedCard.description || ''}
                        onChange={(e) => updateCard(selectedCard.id, { description: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {selectedCard.type === 'profile' && (
                  <>
                    <div className="edit-section">
                      <label>Name</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Bio / Headline</label>
                      <textarea
                        value={selectedCard.description || ''}
                        onChange={(e) => updateCard(selectedCard.id, { description: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Background Image URL</label>
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/..."
                        value={selectedCard.image || ''}
                        onChange={(e) => updateCard(selectedCard.id, { image: e.target.value })}
                      />
                    </div>
                    <div style={{ margin: '24px 0 12px', fontSize: '11px', fontWeight: 800, color: '#3E87F8', letterSpacing: '0.05em' }}>SOCIAL LINKS</div>
                    {['instagram', 'twitter', 'linkedin', 'facebook', 'telegram', 'mail'].map(platform => (
                      <div key={platform} className="edit-section" style={{ marginBottom: '10px' }}>
                        <label style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.6 }}>{platform}</label>
                        <input
                          type="text"
                          placeholder={`https://${platform}.com/user`}
                          value={selectedCard.socials?.[platform] || ''}
                          onChange={(e) => updateSocial(selectedCard.id, platform, e.target.value)}
                          style={{ height: '32px', fontSize: '12px' }}
                        />
                      </div>
                    ))}
                  </>
                )}

                {(selectedCard.type === 'carousel' || selectedCard.type === 'gallery') && (
                  <>
                    <div className="edit-section">
                      <label>View</label>
                      <div className="layout-presets-v3">
                        {[
                          { id: 'peek', label: 'Peek', icon: <GalleryHorizontal size={14} /> },
                          { id: 'full', label: 'Full', icon: <Square size={14} fill="currentColor" /> },
                          { id: 'inset', label: 'Inset', icon: <LayoutTemplate size={14} /> }
                        ].map((l) => (
                          <button
                            key={l.id}
                            className={`layout-btn-v3 ${(selectedCard.carouselStyle || 'peek') === l.id ? 'active' : ''}`}
                            onClick={() => updateCard(selectedCard.id, { carouselStyle: l.id })}
                            title={l.label}
                          >
                            {l.icon}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="edit-section">
                      <label>Photos ({selectedCard.images?.length || 0})</label>
                      <div className="carousel-images-list">
                        {(selectedCard.images || []).map((img, idx) => (
                          <div key={idx} className="carousel-img-item">
                            <img src={img} alt="" />
                            <div className="img-actions">
                              <button onClick={() => {
                                const newImages = [...(selectedCard.images || [])];
                                const [removed] = newImages.splice(idx, 1);
                                if (idx > 0) {
                                  newImages.splice(idx - 1, 0, removed);
                                  updateCard(selectedCard.id, { images: newImages });
                                }
                              }}><ChevronUp size={14} /></button>
                              <button onClick={() => {
                                const newImages = [...(selectedCard.images || [])];
                                newImages.splice(idx, 1);
                                updateCard(selectedCard.id, { images: newImages });
                              }} className="delete"><Trash2 size={14} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="btn-add-slide"
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = 'image/*';
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newImages = [...(selectedCard.images || []), reader.result as string];
                                updateCard(selectedCard.id, { images: newImages });
                              };
                              reader.readAsDataURL(file);
                            }
                          };
                          input.click();
                        }}
                      >
                        <Plus size={16} /> Add Slide
                      </button>
                    </div>
                  </>
                )}

                {selectedCard.type === 'image' && (
                  <>
                    <div className="edit-section">
                      <label>Photo</label>
                      <button
                        className="btn-upload-v3"
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = 'image/*';
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                updateCard(selectedCard.id, { image: reader.result as string });
                              };
                              reader.readAsDataURL(file);
                            }
                          };
                          input.click();
                        }}
                      >
                        <Upload size={16} /> Upload Photo
                      </button>
                    </div>
                    <div className="edit-section">
                      <label>Image URL (Optional)</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={selectedCard.image || ''}
                        onChange={(e) => updateCard(selectedCard.id, { image: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Label (Bottom Left)</label>
                      <input
                        type="text"
                        placeholder="e.g. Portfolio"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Link</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={selectedCard.link || ''}
                        onChange={(e) => updateCard(selectedCard.id, { link: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {selectedCard.type === 'map' && (
                  <div className="edit-section">
                    <label>Location Label</label>
                    <input
                      type="text"
                      value={selectedCard.title || ''}
                      onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                    />
                  </div>
                )}

                {selectedCard.type === 'faq' && (
                  <div className="edit-section">
                    <label>Question</label>
                    <input
                      type="text"
                      value={selectedCard.title || ''}
                      onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                    />
                  </div>
                )}
                {selectedCard.type === 'music' && (
                  <>
                    <div className="edit-section">
                      <label>Track Name</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>

                    <div className="edit-section">
                      <label>Music Style</label>
                      <select
                        className="w-full h-10 px-3 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                        value={selectedCard.musicType || 'slow'}
                        onChange={(e) => updateCard(selectedCard.id, { musicType: e.target.value as any })}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: `right 0.5rem center`,
                          backgroundRepeat: `no-repeat`,
                          backgroundSize: `1.5em 1.5em`,
                          paddingRight: `2.5rem`
                        }}
                      >
                        <option value="slow">Slow & Calm</option>
                        <option value="lofi">Lofi Relaxation</option>
                        <option value="ambient">Nice Royalty Free</option>
                      </select>
                    </div>
                  </>
                )}

                {selectedCard.type === 'text' && (
                  <>
                    <div className="edit-section">
                      <label>Title</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>

                    <div className="edit-section">
                      <label>Position</label>
                      <div className="layout-presets-v3">
                        {[
                          { id: 'left', icon: <AlignLeft size={16} /> },
                          { id: 'center', icon: <AlignCenter size={16} /> },
                          { id: 'right', icon: <AlignRight size={16} /> }
                        ].map((a) => (
                          <button
                            key={a.id}
                            className={`layout-btn-v3 ${(selectedCard.textAlign || 'left') === a.id ? 'active' : ''}`}
                            onClick={() => updateCard(selectedCard.id, { textAlign: a.id })}
                            title={a.id}
                          >
                            {a.icon}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="edit-section">
                      <label>Size</label>
                      <div className="layout-presets-v3">
                        {[
                          { id: 'h1', label: 'T1' },
                          { id: 'h2', label: 'T2' },
                          { id: 'h3', label: 'T3' }
                        ].map((s) => (
                          <button
                            key={s.id}
                            className={`layout-btn-v3 ${(selectedCard.fontSize || 'h3') === s.id ? 'active' : ''}`}
                            onClick={() => updateCard(selectedCard.id, { fontSize: s.id })}
                            style={{ fontSize: '12px', fontWeight: 600 }}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="edit-section">
                      <div className="flex-between">
                        <label>100% width</label>
                        <input
                          type="checkbox"
                          className="toggle-switch"
                          checked={selectedCard.isFullWidth || false}
                          onChange={(e) => {
                            updateCard(selectedCard.id, {
                              isFullWidth: e.target.checked
                            });
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Link Specific Fields */}
                {selectedCard.type === 'link' && (
                  <>
                    <div className="edit-section">
                      <label>Update link</label>
                      <div className="input-with-action">
                        <input
                          type="text"
                          placeholder="https://..."
                          value={selectedCard.link || ''}
                          onChange={(e) => updateCard(selectedCard.id, { link: e.target.value })}
                        />
                        <button className="btn-sync-link">
                          <RefreshCw size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="edit-section">
                      <label>Appearance</label>
                      <div className="color-presets">
                        {['#ffffff', '#f4f4f5', '#18181b', '#3E87F8', '#10b981', '#f59e0b', '#ef4444'].map(color => (
                          <button
                            key={color}
                            className={`color-preset-btn ${selectedCard.backgroundColor === color ? 'active' : ''}`}
                            style={{ background: color }}
                            onClick={() => updateCard(selectedCard.id, { backgroundColor: color, textColor: color === '#ffffff' || color === '#f4f4f5' ? '#0f172a' : '#ffffff' })}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="edit-section">
                      <div className="flex-between">
                        <label>Tracking link</label>
                        <input type="checkbox" className="toggle-switch" />
                      </div>
                    </div>

                    <div className="edit-section">
                      <label>Layout</label>
                      <div className="layout-presets-v3">
                        {[
                          { name: 'Square', span: 'span 1 / span 1', icon: 'square' },
                          { name: 'Tall', span: 'span 1 / span 2', icon: 'tall' },
                          { name: 'Wide', span: 'span 2 / span 1', icon: 'wide' },
                          { name: 'Bar', span: 'span 2 / span 1', icon: 'bar' },
                          { name: 'Large', span: 'span 2 / span 2', icon: 'large' }
                        ].map(preset => (
                          <button
                            key={preset.name}
                            className={`layout-btn-v3 ${selectedCard.span === preset.span && (preset.name !== 'Bar' || selectedCard.description === 'mini-layout') ? 'active' : ''}`}
                            onClick={() => {
                              const updates: any = { span: preset.span };
                              if (preset.name === 'Bar') updates.description = 'mini-layout';
                              else if (selectedCard.description === 'mini-layout') updates.description = '';
                              updateCard(selectedCard.id, updates);
                            }}
                          >
                            <div className={`layout-icon-v3 ${preset.icon}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="edit-section">
                      <label>Thumbnail / Media</label>
                      <input
                        type="text"
                        placeholder="Image URL..."
                        value={selectedCard.image || ''}
                        onChange={(e) => updateCard(selectedCard.id, { image: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {/* Default/Generic fields for everything else */}
                {!['link', 'github', 'spotify', 'profile', 'image', 'map', 'faq', 'youtube', 'carousel', 'text', 'music'].includes(selectedCard.type) && (
                  <>
                    <div className="edit-section">
                      <label>Title</label>
                      <input
                        type="text"
                        value={selectedCard.title || ''}
                        onChange={(e) => updateCard(selectedCard.id, { title: e.target.value })}
                      />
                    </div>
                    <div className="edit-section">
                      <label>Description</label>
                      <textarea
                        value={selectedCard.description || ''}
                        onChange={(e) => updateCard(selectedCard.id, { description: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <div className="edit-section">
                      <label>URL / Link</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={selectedCard.link || ''}
                        onChange={(e) => updateCard(selectedCard.id, { link: e.target.value })}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="sidebar-footer">
                <button className="btn-done" onClick={() => setSelectedCardId(null)}>Done</button>
              </div>
            </div>
          ) : (
            <div className="empty-style">
              <Search size={48} className="empty-icon" />
              <p>Select a widget to edit its style</p>
            </div>
          )}
        </aside>
      </main>

      <style jsx>{`
        .dashboard {
          height: 100vh;
          background: #fdfdfd;
          display: flex;
          flex-direction: column;
          font-family: 'Outfit', sans-serif;
          transition: background 0.3s;
        }

        .dashboard.theme-dark { background: #09090b; color: white; }
        .dashboard.theme-dark .dashboard-header,
        .dashboard.theme-dark .adding-sidebar,
        .dashboard.theme-dark .style-sidebar { background: #09090b; border-color: #27272a; }
        .dashboard.theme-dark .site-selector,
        .dashboard.theme-dark .device-toggle,
        .dashboard.theme-dark .nav-tabs-v2,
        .dashboard.theme-dark .search-box input,
        .dashboard.theme-dark .item-icon { background: #18181b; }
        .dashboard.theme-dark .domain-text,
        .dashboard.theme-dark h3,
        .dashboard.theme-dark .sidebar-tabs button.active { color: white; }
        .dashboard.theme-dark .preview-canvas { background: #121214; }

        .dashboard-header {
          height: 64px;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          z-index: 100;
        }

        .header-left, .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-icon-square {
          width: 36px;
          height: 36px;
          background: #0066FF; /* Typelink Brand Blue */
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .btn-icon-square:hover { transform: scale(1.05); }

        .site-selector {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px 4px 6px;
          background: #ffffff;
          border: 1px solid #EAEAEA;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .site-selector:hover { border-color: #cbd5e1; background: #f8fafc; }
        .dashboard.theme-dark .site-selector { background: #18181b; border-color: #27272a; }
        .dashboard.theme-dark .site-selector:hover { background: #27272a; }

        .site-avatar {
            width: 24px;
            height: 24px;
            background: #8b5cf6;
            color: white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 800;
        }

        .domain-text {
          font-weight: 700;
          font-size: 14px;
          color: #18181b;
        }

        .rotate-90 { transform: rotate(90deg); }

        .device-toggle {
          display: flex;
          background: #f4f4f5;
          padding: 4px;
          border-radius: 100px;
        }
        .device-toggle button {
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          color: #71717a;
          transition: all 0.2s;
        }
        .device-toggle button.active { background: white; color: #18181b; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

        .nav-tabs-v2 {
          display: flex;
          background: #f4f4f5;
          padding: 4px;
          border-radius: 12px;
          gap: 4px;
        }
        .nav-tabs-v2 button {
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #71717a;
        }
        .nav-tabs-v2 button.active { background: white; color: #18181b; }

        .btn-publish-v2 {
          background: #3E87F8;
          color: white;
          padding: 8px 20px;
          border: none;
          border-radius: 20px;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(62, 135, 248, 0.2);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-publish-v2:hover { background: #2b76e6; transform: translateY(-1px); }
        .btn-publish-v2:disabled { opacity: 0.7; cursor: not-allowed; }

        .dashboard-content {
          display: flex;
          flex: 1;
          height: calc(100vh - 64px);
          overflow: hidden;
        }

        /* --- Left Sidebar --- */
        .adding-sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 24px 24px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sidebar-header h3 { font-size: 15px; font-weight: 700; color: #18181b; }

        .search-box {
          margin: 0 24px 20px;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon-wrapper {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          color: #94a3b8;
          pointer-events: none;
        }
        .search-box input {
          width: 100%;
          height: 32px;
          padding: 0 10px 0 36px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
          transition: all 0.2s;
        }
        .search-box input:focus {
          background: white;
          border-color: #3E87F8;
        }
        .search-btn-inner {
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: #3E87F8;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .sidebar-tabs {
          margin: 0 24px 24px;
          display: flex;
          gap: 16px;
          border-bottom: 1px solid #f4f4f5;
        }
        .sidebar-tabs button {
          padding-bottom: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #a1a1aa;
        }
        .sidebar-tabs button.active { color: #18181b; border-bottom: 2px solid #18181b; }

        .widget-scroll-area {
          flex: 1;
          overflow-y: auto;
          padding: 0 24px 24px;
        }

        .widget-grid-v2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .widget-item-card {
          padding: 16px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .widget-item-card:hover { 
          background: #3E87F8; 
          border-color: #3E87F8;
          transform: translateY(-2px); 
        }
        .widget-item-card:hover .item-icon { background: rgba(255,255,255,0.2); color: white; }
        .widget-item-card:hover span { color: white; }
        .item-icon { 
          width: 32px; 
          height: 32px; 
          background: #f4f4f5; 
          border-radius: 8px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: #71717a; 
        }

        /* --- Design Tools --- */
        .theme-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .theme-btn { padding: 8px; background: #f4f4f5; border-radius: 8px; font-size: 12px; font-weight: 700; color: #71717a; border: 1px solid transparent; }
        .theme-btn.active { border-color: #3e87f8; background: white; color: #3e87f8; }
        .font-select { width: 100%; padding: 10px; background: #f4f4f5; border-radius: 10px; border: none; font-size: 14px; font-weight: 700; }

        /* --- Center Canvas --- */
        .preview-canvas {
          flex: 1;
          background: #f1f5f9;
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 80px 40px;
          overflow-y: auto;
        }

        .preview-container {
          width: 100%;
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .preview-mockup.mobile {
          width: 375px;
          min-height: 720px;
          height: auto;
          border-radius: 44px;
          position: relative;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.15);
          overflow: visible !important;
          border: 1px solid rgba(0,0,0,0.08);
          background: #ffffff;
          margin-bottom: 50px;
        }

        .preview-mockup.desktop {
          width: 1000px;
          height: 700px;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }

        .phone-screen {
          min-height: 720px;
          height: auto;
          overflow-y: visible;
          overflow-x: visible;
          padding: 0;
          border-radius: 44px;
          position: relative;
        }

        .preview-bento-scroll {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: min-content;
          gap: 16px;
          padding: 24px;
          padding-bottom: 100px;
          position: relative;
          background: #ffffff;
          min-height: 720px;
          border-radius: 44px;
        }

        .hero-widget {
          margin: -24px -24px 24px -24px;
          width: calc(100% + 48px);
          min-height: 480px;
          display: flex;
          flex-direction: column;
          z-index: 20;
          position: relative;
        }
        .hero-widget .bento-card:not(.is-upload-state) {
           border: none !important;
           background: transparent !important;
           box-shadow: none !important;
        }
        .hero-widget .bento-card.is-upload-state {
           border: 2px dotted #a1a1aa !important;
           background: #fff !important;
           border-radius: 24px !important;
           margin: 20px;
           box-shadow: none !important;
        }
        .hero-widget .profile-overlay {
           background: transparent !important;
           justify-content: flex-end;
           padding-bottom: 80px;
        }

        .hero-widget .widget-floating-actions {
          top: 100px !important;
          right: 32px !important;
          z-index: 9999 !important;
        }

        .preview-item-wrapper.selected {
          z-index: 9999 !important;
        }
        .preview-item-wrapper.selected :global(.bento-card::after) {
          display: none !important;
        }
        .preview-item-wrapper.selected :global(.bento-card) {
          border-color: transparent !important;
        }
        .preview-item-wrapper {
          position: relative;
          cursor: pointer;
          overflow: visible;
        }

        .selection-indicator {
            position: absolute;
            inset: 0;
            border: 2px solid #3e87f8;
            border-radius: 24px;
            pointer-events: none;
            z-index: 10;
        }
        .selection-indicator.is-setup {
            border-style: dotted;
        }

        .widget-floating-actions {
            position: absolute;
            top: -12px;
            right: -12px;
            background: white;
            padding: 4px;
            border-radius: 10px;
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center;
            gap: 2px;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.1);
            z-index: 50 !important;
            white-space: nowrap !important;
            width: max-content !important;
        }
        
        .hero-widget .widget-floating-actions {
          top: 32px !important;
          right: 32px !important;
          z-index: 100 !important;
        }

        .action-btn {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #71717a;
            transition: all 0.1s;
        }
        .action-btn:hover { color: #3E87F8; background: #f1f5f9; }
        .action-btn:active { transform: scale(0.9); }
        .action-btn:hover { background: #f4f4f5; color: #000; }
        .action-btn svg { width: 14px; height: 14px; }
        .action-btn.delete:hover { background: #fee2e2; color: #ef4444; }

        /* --- Right Sidebar --- */
        .style-sidebar {
          width: 340px;
          background: white;
          border-left: 1px solid rgba(0,0,0,0.06);
          position: relative;
          display: none;
        }
        .style-sidebar.visible { display: block; }

        .style-inner { display: flex; flex-direction: column; height: 100%; }

        .editor-controls { padding: 24px; flex: 1; overflow-y: auto; }

        .edit-section { margin-bottom: 24px; }
        .edit-section label { display: block; font-size: 13px; font-weight: 700; color: #71717a; margin-bottom: 8px; }
        .edit-section input, .edit-section textarea {
          width: 100%;
          padding: 10px;
          background: #f4f4f5;
          border: 1px solid transparent;
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
        }
        .edit-section input:focus { border-color: #3e87f8; outline: none; background: white; }

        .size-selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .size-option-btn {
          padding: 10px;
          background: #f4f4f5;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #71717a;
        }
        .size-option-btn.active { background: #18181b; color: white; }

        .color-picker {
            padding: 2px !important;
            height: 38px !important;
            cursor: pointer;
        }
        .edit-row { display: flex; gap: 12px; }
        .flex-1 { flex: 1; }
        .edit-section textarea {
          width: 100%;
          padding: 10px;
          background: #f4f4f5;
          border: 1px solid transparent;
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          resize: none;
        }
        .edit-section textarea:focus { border-color: #3e87f8; outline: none; background: white; }

        .sidebar-footer { padding: 24px; border-top: 1px solid #f4f4f5; display: flex; justify-content: center; }
        .btn-delete-widget { color: #ef4444; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
        .btn-done { background: #18181b; color: white; padding: 8px 24px; border-radius: 10px; font-weight: 700; }

        .btn-upload-v3, .btn-add-slide {
          width: 100%;
          padding: 10px;
          background: #f4f4f5;
          border: 1px dashed #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 700;
          font-size: 13px;
          transition: all 0.2s;
        }
        .btn-upload-v3:hover, .btn-add-slide:hover { background: #e2e8f0; border-color: #3E87F8; color: #3E87F8; }

        .carousel-images-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }
        .carousel-img-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          background: #fff;
          border: 1px solid #EAEAEA;
          border-radius: 12px;
        }
        .carousel-img-item img {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
        }
        .img-actions {
          margin-left: auto;
          display: flex;
          gap: 4px;
        }
        .img-actions button {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4f4f5;
          color: #71717a;
        }
        .img-actions button:hover { background: #e2e8f0; color: #18181b; }
        .img-actions button.delete:hover { background: #fee2e2; color: #ef4444; }

        .layout-picker {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .layout-opt {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 12px 8px;
          background: #fff;
          border: 1px solid #EAEAEA;
          border-radius: 12px;
          transition: all 0.2s;
        }
        .layout-opt.active { border-color: #3E87F8; background: #eff6ff; color: #3E87F8; }
        .dot-icon { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

        .btn-done {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: #f8fafc;
          border: 1px solid #EAEAEA;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          font-size: 14px;
          color: #0f172a;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-upload-v3:hover { background: #f1f5f9; border-color: #cbd5e1; }

        .empty-style {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #a1a1aa;
          padding: 40px;
          text-align: center;
        }
        .empty-icon { margin-bottom: 20px; opacity: 0.2; }

        .loading {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #71717a;
        }
        .empty-state-sidebar { padding: 40px; text-align: center; color: #71717a; }

        /* --- Modal Styles --- */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .publish-modal {
          background: white;
          width: 90%;
          max-width: 440px;
          padding: 40px;
          border-radius: 32px;
          text-align: center;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.25);
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #f0fdf4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .publish-modal h2 { font-size: 24px; font-weight: 900; margin-bottom: 12px; color: #18181b; }
        .publish-modal p { color: #71717a; font-size: 15px; margin-bottom: 24px; }

        .live-link-box {
          background: #f4f4f5;
          padding: 16px;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          font-weight: 700;
          color: #18181b;
        }
        .copy-icon { color: #a1a1aa; cursor: pointer; }

        .modal-actions { display: flex; flex-direction: column; gap: 12px; }
        .btn-view-site { background: #3e87f8; color: white; border: none; padding: 14px; border-radius: 12px; font-weight: 700; cursor: pointer; }
        .btn-close-modal { background: #f4f4f5; color: #71717a; border: none; padding: 14px; border-radius: 12px; font-weight: 700; cursor: pointer; }

        .premium-style-panel {
          margin-bottom: 24px;
        }
        .style-tabs-v3 {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          border-bottom: 1px solid #f4f4f5;
          padding-bottom: 8px;
        }
        .style-tab-btn {
          font-size: 14px;
          font-weight: 700;
          color: #71717a;
          position: relative;
          padding: 8px 4px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .style-tab-btn.active { color: #3E87F8; }
        .style-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -9px;
          left: 0;
          right: 0;
          height: 2px;
          background: #3E87F8;
          border-radius: 2px;
        }

        .presets-grid-v3 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }
        .preset-item-v3 {
          aspect-ratio: 1;
          border-radius: 10px;
          border: 1px solid #EAEAEA;
          position: relative;
          transition: all 0.2s;
          cursor: pointer;
          overflow: hidden;
        }
        .preset-item-v3.active { border-color: #3E87F8; transform: scale(1.05); box-shadow: 0 4px 12px rgba(62, 135, 248, 0.2); }
        .preset-item-v3.active::after {
          content: '✓';
          position: absolute;
          top: 4px;
          right: 4px;
          width: 14px;
          height: 14px;
          background: #3E87F8;
          color: white;
          font-size: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .image-preset { background-size: cover; background-position: center; }
        .preset-preview-inner {
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          height: 6px;
          background: rgba(100, 100, 100, 0.1);
          border-radius: 1px;
        }

        .style-footer-toggles {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid #f4f4f5;
        }
        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .toggle-row label { font-size: 13px; font-weight: 700; color: #71717a; }
        .toggle-v3 {
          width: 38px;
          height: 20px;
          background: #e4e4e7;
          border-radius: 100px;
          position: relative;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .toggle-v3.active { background: #3E87F8; }
        .toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .toggle-v3.active .toggle-thumb { left: 20px; }

        .btn-done {
          width: 100%;
          background: #3E87F8;
          color: white;
          padding: 12px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-done:hover { background: #2b76e6; }

        /* Color Presets */
        .color-presets {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 8px;
        }
        .color-preset-btn {
          height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .color-preset-btn:hover { transform: scale(1.05); }
        .color-preset-btn.active { border: 2px solid #3E87F8; }

        /* Layout Presets V3 */
        .layout-presets-v3 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-top: 8px;
        }
        .layout-btn-v3 {
          height: 64px;
          background: white;
          border: 1px solid #EAEAEA;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .layout-btn-v3:hover { border-color: #3E87F8; }
        .layout-btn-v3.active { border-color: #3E87F8; background: #eff6ff; }
        .layout-btn-v3.active .layout-icon-v3 { background: #3E87F8; }

        .layout-icon-v3 { background: #cbd5e1; border-radius: 2px; }
        .layout-icon-v3.square { width: 14px; height: 14px; }
        .layout-icon-v3.tall { width: 14px; height: 24px; }
        .layout-icon-v3.wide { width: 24px; height: 14px; }
        .layout-icon-v3.bar { width: 32px; height: 8px; }
        .layout-icon-v3.large { width: 24px; height: 24px; }

        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .toggle-switch { width: 36px; height: 20px; }

        .input-with-action { position: relative; }
        .btn-sync-link {
          position: absolute;
          right: 4px;
          top: 4px;
          bottom: 4px;
          width: 32px;
          background: #eff6ff;
          border: none;
          border-radius: 8px;
          color: #3E87F8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .preview-footer {
          padding: 40px 0;
          display: flex;
          justify-content: center;
          opacity: 0.6;
        }
        .powered-by {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 800;
          color: #18181b;
        }
        .dashboard.theme-dark .footer-logo { color: white; }
        .dashboard.theme-dark .powered-by { color: #94a3b8; }
      `}</style>
    </div >
  );
}
