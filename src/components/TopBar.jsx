import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Settings } from 'lucide-react';
import './TopBar.css';

const TopBar = ({ title, showBack = false, rightIcon = 'share', transparent = false }) => {
  const navigate = useNavigate();

  return (
    <header className={`top-bar ${transparent ? 'transparent' : ''}`}>
      <div className="top-bar-left">
        {showBack && (
          <button onClick={() => navigate(-1)} className="icon-btn">
            <ArrowLeft size={24} />
          </button>
        )}
      </div>
      
      <h1 className="top-bar-title">{title}</h1>
      
      <div className="top-bar-right">
        {rightIcon === 'share' && (
          <button className="icon-btn">
            <Share2 size={24} />
          </button>
        )}
        {rightIcon === 'settings' && (
          <button className="icon-btn">
            <Settings size={24} />
          </button>
        )}
      </div>
    </header>
  );
};

export default TopBar;
