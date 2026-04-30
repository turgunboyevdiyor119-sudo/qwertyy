import { Bell, User, Search, Play, Plus } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container home-page">
      {/* Custom Home Navbar */}
      <header className="home-header">
        <div className="logo-area">
          <div className="logo-icon">🎬</div>
          <h1 className="logo-text text-gold">CINESTREAM</h1>
        </div>
        <div className="header-actions">
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><User size={20} /></button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Movies, series, actors..." className="search-input" />
        </div>
      </div>

      <div className="home-content">
        {/* Featured Premiere */}
        <section className="featured-section">
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=600&auto=format&fit=crop" alt="Dune Awakening" className="featured-bg" />
            <div className="featured-content">
              <div className="badge">FEATURED PREMIERE</div>
              <h2 className="featured-title">Dune: Awakening</h2>
              <p className="featured-desc">A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir...</p>
              <div className="featured-actions">
                <button className="primary-btn"><Play size={18} fill="black" /> Watch Now</button>
                <button className="secondary-btn"><Plus size={18} /> My List</button>
              </div>
            </div>
          </div>
        </section>

        {/* New Premieres */}
        <section className="scroll-section">
          <div className="section-title">
            <span>New Premieres</span>
            <span className="view-all">View all &gt;</span>
          </div>
          <div className="horizontal-scroll">
            <MovieCard id="1" title="Neon Horizon" genre="Sci-Fi" year="2024" rating="8.4" imageUrl="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=300&q=80" />
            <MovieCard id="2" title="The Silent Witness" genre="Thriller" year="2024" rating="7.9" imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80" />
            <MovieCard id="3" title="Final Destination" genre="Action" year="2024" rating="8.1" imageUrl="https://images.unsplash.com/photo-1580204529202-220d9181144c?w=300&q=80" />
          </div>
        </section>

        {/* Family Pass Special */}
        <section className="promo-section">
          <div className="promo-banner">
            <h3>FAMILY PASS SPECIAL</h3>
            <p>Stream on 5 devices simultaneously. Get 3 months for the price of 1!</p>
            <button className="promo-btn">Claim Offer</button>
            <div className="promo-avatars">
              <div className="avatar">👦</div>
              <div className="avatar">👩</div>
              <div className="avatar">👨</div>
              <div className="avatar more">+2</div>
            </div>
          </div>
        </section>

        {/* Popular Movies */}
        <section className="grid-section">
          <div className="section-title">
            <span>Popular Movies</span>
            <div className="filter-pills">
              <span className="pill active">Action</span>
              <span className="pill">Comedy</span>
            </div>
          </div>
          <div className="movies-grid">
            <MovieCard id="4" title="The Midnight Sky" genre="Trending now" width="100%" aspect="16/9" imageUrl="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80" />
            <MovieCard id="5" title="Retro Drive" genre="New 4K Restore" width="100%" aspect="16/9" imageUrl="https://images.unsplash.com/photo-1493225457124-a1a2a5fae569?w=400&q=80" />
            <MovieCard id="6" title="Project Genesis" genre="Trending now" width="100%" aspect="16/9" imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" />
            <MovieCard id="7" title="Deep Silence" genre="Critically acclaimed" width="100%" aspect="16/9" imageUrl="https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&q=80" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
