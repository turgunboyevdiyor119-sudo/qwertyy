import { Link, useLocation } from 'react-router-dom';
import { Home, Film, Headphones, Bookmark, Grid } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '#movies', icon: Film, label: 'Movies' },
    { path: '#audio', icon: Headphones, label: 'Audio' },
    { path: '/profile', icon: Bookmark, label: 'My List' },
    { path: '/premium', icon: Grid, label: 'More' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path || 
                         (item.path === '/profile' && location.pathname.includes('/profile')) ||
                         (item.path === '/premium' && location.pathname.includes('/premium'));

        return (
          <Link 
            key={item.label} 
            to={item.path.startsWith('#') ? '/' : item.path} 
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
