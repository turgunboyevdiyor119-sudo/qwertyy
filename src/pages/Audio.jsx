import TopBar from '../components/TopBar';
import { Headphones, Play, Heart } from 'lucide-react';
import './Premium.css'; // Reuse some layout styles

const Audio = () => {
  const soundtracks = [
    { id: 1, title: 'Interstellar Main Theme', artist: 'Hans Zimmer', duration: '4:05' },
    { id: 2, title: 'Cornfield Chase', artist: 'Hans Zimmer', duration: '2:06' },
    { id: 3, title: 'Day One', artist: 'Hans Zimmer', duration: '3:19' },
  ];

  return (
    <div className="page-container audio-page">
      <TopBar title="Audio & Music" />
      
      <div className="premium-hero" style={{ padding: '20px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Headphones size={48} className="text-gold" style={{ marginBottom: '16px' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Movie Soundtracks</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Listen to your favorite cinema scores</p>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 className="section-title">Popular Tracks</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {soundtracks.map(track => (
            <div key={track.id} className="settings-item" style={{ padding: '12px' }}>
              <div className="settings-item-left">
                <div className="play-button-small" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={14} fill="var(--accent-color)" stroke="none" />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{track.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{track.artist}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{track.duration}</span>
                <Heart size={16} className="text-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audio;
