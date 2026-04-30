import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ id, title, rating, year, genre, imageUrl, width = '140px', aspect = '2/3' }) => {
  return (
    <Link to={`/details/${id}`} className="movie-card" style={{ width }}>
      <div className="movie-poster-container" style={{ aspectRatio: aspect }}>
        <img 
          src={imageUrl || `https://via.placeholder.com/300x450/242424/ffffff?text=${encodeURIComponent(title)}`} 
          alt={title} 
          className="movie-poster" 
        />
        {rating && (
          <div className="movie-rating">
            <span className="rating-star">★</span> {rating}
          </div>
        )}
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        {(year || genre) && (
          <p className="movie-meta">
            {genre} {genre && year ? ' • ' : ''} {year}
          </p>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
