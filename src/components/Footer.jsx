import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4 className="footer-title">SOCIAL</h4>
          <ul className="footer-links">
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#pinterest">Pinterest</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">SUPPORT</h4>
          <ul className="footer-links">
            <li><a href="#client-services">Client Services</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#warranty">MOREYES Limited Warranty</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
            <li><a href="#shipping">Shipping policy</a></li>
            <li><a href="#product-care">Product Care</a></li>
            <li><a href="#size-guide">Size Guide</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">LEGAL</h4>
          <ul className="footer-links">
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#terms-sale">Terms of Sale</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#declaration">Declaration of Conformity</a></li>
            <li><a href="#accessibility">Accessibility Statement</a></li>
            <li><a href="#cookies">Cookies Declaration</a></li>
            <li><a href="#california-privacy">California Privacy Addendum</a></li>
            <li><a href="#data-requests">Customer Data Requests</a></li>
            <li><a href="#do-not-sell">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="#cookies-settings">Cookies Settings</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">MOREYES, INC. HEADQUARTERS</h4>
          <p className="footer-text">1 Columbia</p>
          <p className="footer-text">Aliso Viejo, CA 92656</p>
          <p className="footer-text" style={{marginTop: '16px'}}>United States</p>
          <p className="footer-text" style={{marginTop: '16px'}}>(888) 245-2202</p>
        </div>
        <div className="footer-column newsletter-col">
          <h4 className="footer-title">NEWSLETTER</h4>
          <p className="footer-text">WANT MORE FROM MOREYES? The latest news, events and product releases, sent right to your inbox.</p>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Your e-mail" className="footer-newsletter-input" />
            <button type="submit" className="footer-newsletter-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <select className="footer-region-select">
            <option>United States (USD $)</option>
          </select>
        </div>
        <div className="footer-bottom-center">
          <p>© 2024 MOREYES, Inc. All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <div className="accessibility-icons">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
