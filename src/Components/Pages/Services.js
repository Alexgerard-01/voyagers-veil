import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const services = [
  {
    icon: '🧭',
    title: 'Custom Trip Planning',
    desc: 'Get personalized itineraries tailored to your travel style and budget.',
  },
  {
    icon: '🌍',
    title: 'Curated Destinations',
    desc: 'Explore handpicked spots from remote islands to cultural cities.',
  },
  {
    icon: '📸',
    title: 'Inspiration Gallery',
    desc: 'Find your next adventure through breathtaking visuals and reels.',
  },
  {
    icon: '💬',
    title: 'Verified Traveler Reviews',
    desc: 'Real stories, real people. Get tips from fellow explorers.',
  },
  {
    icon: '💰',
    title: 'Exclusive Member Perks',
    desc: 'Early access to deals, cashback, and loyalty rewards.',
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/sign-up');
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>What We Offer</h1>
      <div style={cardGridStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={handleCardClick}
            className="service-card"
          >
            <div style={iconStyle}>{service.icon}</div>
            <h3 style={cardTitleStyle}>{service.title}</h3>
            <p style={descStyle}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles
const containerStyle = {
  padding: '4rem 2rem',
  background: '#f9f9f9',
};

const titleStyle = {
  textAlign: 'center',
  color: '#252e48',
  fontSize: '36px',
  marginBottom: '3rem',
};

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  maxWidth: '1000px',
  margin: '0 auto',
};

const cardStyle = {
  background: '#2E2E2E',
  padding: '2rem',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  color: '#ffffff',
};

const cardTitleStyle = {
  color: '#ffffff',
  fontSize: '20px',
  marginBottom: '10px',
};

const descStyle = {
  color: '#e0e0e0',
  fontSize: '16px',
};

const iconStyle = {
  fontSize: '40px',
  marginBottom: '1rem',
  color: '#d1d1d1',
};
