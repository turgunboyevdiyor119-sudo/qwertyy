import { useState } from 'react';
import { Check, X } from 'lucide-react';
import TopBar from '../components/TopBar';
import './Premium.css';

const Premium = () => {
  const [billingCycle, setBillingCycle] = useState('Yearly');

  return (
    <div className="page-container premium-page">
      <TopBar title="Premium Subscription" showBack={true} />

      <div className="premium-hero">
        <div className="premium-hero-content">
          <div className="unlock-badge">UNLOCK FULL ACCESS</div>
          <h1 className="premium-title">Elevate Your<br/>Experience</h1>
          <p className="premium-desc">Stream in high definition, download for offline viewing, and enjoy an uninterrupted experience without ads.</p>
        </div>
      </div>

      <div className="billing-toggle">
        <button className={`toggle-btn ${billingCycle === 'Monthly' ? 'active' : ''}`} onClick={() => setBillingCycle('Monthly')}>Monthly</button>
        <button className={`toggle-btn ${billingCycle === 'Yearly' ? 'active' : ''}`} onClick={() => setBillingCycle('Yearly')}>Yearly</button>
      </div>

      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="pricing-card basic-card">
          <h2 className="plan-name">Basic</h2>
          <div className="plan-price">
            <span className="amount">$0</span>
            <span className="period">/month</span>
          </div>
          <button className="secondary-btn full-width plan-btn">Current Plan</button>
          <ul className="plan-features">
            <li><Check size={16} className="text-gold" /> Ad-supported streaming</li>
            <li><Check size={16} className="text-gold" /> Standard quality (480p)</li>
            <li><Check size={16} className="text-gold" /> 1 device at a time</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card premium-card">
          <div className="most-popular">MOST POPULAR</div>
          <h2 className="plan-name">Premium</h2>
          <div className="plan-price">
            <span className="amount">$9.99</span>
            <span className="period">/month</span>
          </div>
          <button className="primary-btn full-width plan-btn">UPGRADE NOW</button>
          <ul className="plan-features">
            <li><Check size={16} className="text-gold" /> No ads. Ever.</li>
            <li><Check size={16} className="text-gold" /> Ultra HD Quality (4K)</li>
            <li><Check size={16} className="text-gold" /> 4 devices simultaneously</li>
            <li><Check size={16} className="text-gold" /> Unlimited offline downloads</li>
          </ul>
        </div>
      </div>

      <div className="compare-section">
        <h3 className="compare-title">Compare Features</h3>
        
        <div className="compare-table">
          <div className="compare-header">
            <div className="feature-col">FEATURE</div>
            <div className="free-col">FREE</div>
            <div className="premium-col text-gold">PREMIUM</div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Ad-free Experience</div>
            <div className="free-col"><X size={18} className="text-muted" /></div>
            <div className="premium-col"><Check size={18} className="text-gold" /></div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Video Quality</div>
            <div className="free-col">480p</div>
            <div className="premium-col text-gold">4K + HDR</div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Offline Mode</div>
            <div className="free-col"><X size={18} className="text-muted" /></div>
            <div className="premium-col"><Check size={18} className="text-gold" /></div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Simultaneous Streams</div>
            <div className="free-col">1</div>
            <div className="premium-col text-gold">4</div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Early Access to Originals</div>
            <div className="free-col"><X size={18} className="text-muted" /></div>
            <div className="premium-col"><Check size={18} className="text-gold" /></div>
          </div>
          
          <div className="compare-row">
            <div className="feature-col">Customer Support</div>
            <div className="free-col">Standard</div>
            <div className="premium-col text-gold">24/7 Priority</div>
          </div>
        </div>
      </div>
      
      <p className="disclaimer">
        Subscription automatically renews unless canceled at least 24 hours before the end of the current period. Manage your subscription in Account Settings. Terms and conditions apply.
      </p>
    </div>
  );
};

export default Premium;
