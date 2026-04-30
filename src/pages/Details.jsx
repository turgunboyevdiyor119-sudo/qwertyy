import { useParams } from 'react-router-dom';
import { Play, Download, Plus, Star, Send } from 'lucide-react';
import TopBar from '../components/TopBar';
import './Details.css';

const Details = () => {
  const { id } = useParams(); // Simulate fetching by ID

  return (
    <div className="page-container details-page">
      <TopBar title="Cinema Details" showBack={true} rightIcon="share" transparent={true} />
      
      {/* Hero Image Section */}
      <div className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop" 
          alt="Interstellar" 
          className="hero-image" 
        />
        <div className="hero-overlay"></div>
        <div className="now-streaming">
          <div className="play-button-large">
            <Play size={24} fill="var(--accent-color)" stroke="none" />
          </div>
          <div className="streaming-text">
            <strong>NOW STREAMING</strong>
            <span>Available in 4K Ultra HD</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="details-content">
        <h1 className="movie-title-large">Interstellar</h1>
        
        <div className="meta-info">
          <span className="rating"><Star size={14} fill="var(--accent-color)" stroke="none" /> 8.7</span>
          <span>2014</span>
          <span className="pg-badge">PG-13</span>
          <span>2h 49m</span>
        </div>

        <div className="genre-tags">
          <span className="tag">Sci-Fi</span>
          <span className="tag">Adventure</span>
          <span className="tag">Drama</span>
        </div>

        <p className="description">
          When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
        </p>

        <div className="action-buttons">
          <button className="primary-btn full-width">
            <Download size={20} /> Download Now
          </button>
          <button className="secondary-btn full-width">
            <Plus size={20} /> Watchlist
          </button>
        </div>

        {/* User Reviews */}
        <div className="reviews-section">
          <div className="section-title">
            <span>User Reviews</span>
            <span className="view-all">See All</span>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer">
                <div className="reviewer-avatar">AJ</div>
                <div>
                  <div className="reviewer-name">Alex Johnson</div>
                  <div className="review-date">2 days ago</div>
                </div>
              </div>
              <div className="review-rating"><Star size={12} fill="var(--accent-color)" stroke="none" /> 10</div>
            </div>
            <p className="review-text">A masterpiece of modern cinema. The visual effects and Hans Zimmer's score are absolutely breathtaking. A must-watch on the biggest screen possible.</p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer">
                <div className="reviewer-avatar">SW</div>
                <div>
                  <div className="reviewer-name">Sarah Williams</div>
                  <div className="review-date">1 week ago</div>
                </div>
              </div>
              <div className="review-rating"><Star size={12} fill="var(--accent-color)" stroke="none" /> 9</div>
            </div>
            <p className="review-text">Emotionally resonant and scientifically ambitious. It tackles complex themes of love and time with such grace. Nolan at his best.</p>
          </div>
        </div>

        {/* Share your thoughts */}
        <div className="write-review">
          <div className="section-title">Share your thoughts</div>
          <div className="review-input-container">
            <input type="text" placeholder="Write a review..." className="review-input" />
            <button className="send-btn">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
