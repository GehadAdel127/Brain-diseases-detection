import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>The Book Lover</h3>
          <p>Your go-to place for discovering new books, authors, and articles. Read, learn, and get inspired.</p>
        </div>

        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/articles">Articles</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="https://facebook.com" className="social-icon facebook"></Link>
            <Link to="https://twitter.com" className="social-icon twitter"></Link>
            <Link to="https://instagram.com" className="social-icon instagram"></Link>
            <Link to="https://linkedin.com" className="social-icon linkedin"></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 The Book Lover. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
