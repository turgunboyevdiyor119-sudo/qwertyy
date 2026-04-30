import { useState } from 'react';
import { ChevronRight, Heart, Bell, Shield } from 'lucide-react';
import TopBar from '../components/TopBar';
import MovieCard from '../components/MovieCard';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Favorites');

  return (
    <div className="page-container profile-page">
      <TopBar title="Profile" showBack={true} rightIcon="settings" />

      {/* User Info */}
      <div className="user-profile-header">
        <div className="avatar-large">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Alex Johnson" />
        </div>
        <h2 className="user-name">Alex Johnson</h2>
        <p className="user-role text-gold">Movie Enthusiast</p>
        <p className="member-since">Member since March 2022</p>
        <button className="primary-btn edit-profile-btn">Edit Profile</button>
      </div>

      {/* Stats */}
      <div className="user-stats">
        <div className="stat-box">
          <div className="stat-number text-gold">124</div>
          <div className="stat-label">FAVORITES</div>
        </div>
        <div className="stat-box">
          <div className="stat-number text-gold">45</div>
          <div className="stat-label">WATCHLIST</div>
        </div>
        <div className="stat-box">
          <div className="stat-number text-gold">12</div>
          <div className="stat-label">REVIEWS</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <div className={`tab ${activeTab === 'Favorites' ? 'active' : ''}`} onClick={() => setActiveTab('Favorites')}>Favorites</div>
        <div className={`tab ${activeTab === 'Watchlist' ? 'active' : ''}`} onClick={() => setActiveTab('Watchlist')}>Watchlist</div>
        <div className={`tab ${activeTab === 'Reviews' ? 'active' : ''}`} onClick={() => setActiveTab('Reviews')}>Reviews</div>
      </div>

      {/* Tab Content (Movies Grid) */}
      <div className="tab-content">
        <div className="movies-grid">
          <MovieCard id="8" title="Interstellar" genre="2014" year="Sci-Fi" width="100%" aspect="2/3" imageUrl="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80" />
          <MovieCard id="9" title="The Dark Knight" genre="2008" year="Action" width="100%" aspect="2/3" imageUrl="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80" />
          <MovieCard id="10" title="Spirited Away" genre="2001" year="Animation" width="100%" aspect="2/3" imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80" />
          <MovieCard id="11" title="Pulp Fiction" genre="1994" year="Crime" width="100%" aspect="2/3" imageUrl="https://images.unsplash.com/photo-1535016120720-40c746a6580c?w=400&q=80" />
        </div>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <h3 className="section-title">Account Settings</h3>
        
        <div className="settings-list">
          <div className="settings-item">
            <div className="settings-item-left">
              <UserIcon />
              <span>Personal ma'lumotlar</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
          
          <div className="settings-item">
            <div className="settings-item-left">
              <Bell size={20} className="text-gold" />
              <span>Notifications</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
          
          <div className="settings-item">
            <div className="settings-item-left">
              <Shield size={20} className="text-gold" />
              <span>Privacy & Security</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom User Icon to match design
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default Profile;
