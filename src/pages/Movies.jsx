import MovieCard from '../components/MovieCard';
import TopBar from '../components/TopBar';
import './Home.css'; // Reuse home styles for grid

const Movies = () => {
  return (
    <div className="page-container movies-page">
      <TopBar title="Movies" />
      
      <div className="home-content" style={{ padding: '20px' }}>
        <div className="section-title">
          <span>All Movies</span>
          <div className="filter-pills">
            <span className="pill active">All</span>
            <span className="pill">New</span>
          </div>
        </div>
        
        <div className="movies-grid">
          <MovieCard id="1" title="Neon Horizon" genre="Sci-Fi" year="2024" rating="8.4" width="100%" imageUrl="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=300&q=80" />
          <MovieCard id="2" title="The Silent Witness" genre="Thriller" year="2024" rating="7.9" width="100%" imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80" />
          <MovieCard id="3" title="Final Destination" genre="Action" year="2024" rating="8.1" width="100%" imageUrl="https://images.unsplash.com/photo-1580204529202-220d9181144c?w=300&q=80" />
          <MovieCard id="12" title="Legacy of Light" genre="Fantasy" year="2023" rating="8.5" width="100%" imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80" />
        </div>
      </div>
    </div>
  );
};

export default Movies;
