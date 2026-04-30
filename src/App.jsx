import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Audio from './pages/Audio';
import Details from './pages/Details';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';
import './App.css';

// Wrapper to conditionally render BottomNav
const AppContent = () => {
  const location = useLocation();
  // We can hide bottom nav on specific routes if needed, e.g., details
  // const hideBottomNav = location.pathname.includes('/details');
  const hideBottomNav = false; 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!hideBottomNav && <BottomNav />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
