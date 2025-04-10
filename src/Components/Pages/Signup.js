import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://67f7799342d6c71cca65565b.mockapi.io/api/users', formData);
      alert(`Welcome, ${formData.fullname}! 🎉`);
      console.log('User submitted:', formData);
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Something went wrong!');
    }
  };

  const containerStyle = {
    backgroundImage: "url('/images/img-8.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    color: '#fff',
    width: '320px'
  };

  const inputStyle = {
    padding: '12px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '12px',
    marginTop: '10px',
    backgroundColor: '#1f98f4',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0f75c7'
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Join the Adventure</h2>
          <input
            style={inputStyle}
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
