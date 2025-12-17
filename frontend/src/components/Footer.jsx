import './Footer.css';
import logo from '/l1.png'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sri Jayam Furniture</h3>
          <p>Timeless elegance for your home. Handcrafted furniture that lasts generations.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <img src={logo} className='w-32 h-32'/>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>123 Furniture Street</p>
          <p>Classic City, CC 12345</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Sri Jayam Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

