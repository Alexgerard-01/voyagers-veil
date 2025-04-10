import React, { useState, useEffect } from 'react';
import '../../App.css';
import CardItem from '../CardItem';

const images = [
  {
    src: '/images/thailand.jpeg',
    caption: 'Relax on untouched beaches ',
  },
  {
    src: '/images/dubai.jpeg',
    caption: 'Live the high life in dazzling Dubai',
  },
  {
    src: '/images/japan.jpeg',
    caption: 'Discover the soul of Japan ',
  },
];

export default function Destinations() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    height: '500px',
    backgroundImage: `url(${images[current].src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '40px',
    textShadow: '0 2px 6px rgba(0,0,0,0.7)',
  };

  const captionStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '24px',
  };

  const gridStyle = {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    background: '#f9f9f9',
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={captionStyle}>{images[current].caption}</div>
      </div>

      <h2 style={{ textAlign: 'center', margin: '2rem 0', color: '#252e48' }}>
        Top Picks For You
      </h2>
      <div style={gridStyle}>
        <CardItem
          src='/images/france.jpg'
          text='Fall in love with the charm of Paris and Provence'
          label='Culture'
          path='/sign-up'
        />
        <CardItem
          src='/images/tajmahal.jpeg'
          text='The symbol of eternal love – The Taj Mahal'
          label='Historic'
          path='/sign-up'
        />
        <CardItem
          src='/images/newyork.jpg'
          text='Feel the spirit of freedom at New York’s Statue of Liberty'
          label='Iconic'
          path='/sign-up'
        />
      </div>
    </div>
  );
}
