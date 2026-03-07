export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#963F36" />
                  <path d="M16 6 L16 26 M6 16 L26 16" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              Dentiva
            </a>
            <p>Your smile is our priority. Whether you need routine care, cosmetic enhancements.</p>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Oral Hygiene</a></li>
              <li><a href="#">Retainer Fitting</a></li>
              <li><a href="#">Preventive Care</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">404</a></li>
            </ul>
          </div>

          {/* Hours column */}
          <div className="footer-col">
            <h4>Hours</h4>
            <div className="footer-hours">
              <p>Sun: CLOSED</p>
              <p>Mon to Sun: 9 AM-7PM</p>
              <p>Sat to Fri: 10AM-7PM</p>
            </div>
          </div>

          {/* Newsletter column */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <div className="newsletter-form">
              <p>Discover new offers and stay up to date</p>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2025 &copy; Dentiva All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
