import { Link } from 'react-router-dom';
import { furnitureData } from '../data/furniture';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const featuredProducts = furnitureData.slice(0, 6);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Timeless Elegance</h1>
          <p className="hero-subtitle">Discover our collection of classic furniture, handcrafted for generations</p>
          <Link to="/products" className="hero-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-overlay"></div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature">
            <span className="feature-icon">✋</span>
            <h3>Handcrafted</h3>
            <p>Each piece is carefully crafted by skilled artisans</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🌳</span>
            <h3>Premium Materials</h3>
            <p>Only the finest wood and materials are used</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🛡️</span>
            <h3>Quality Guarantee</h3>
            <p>Built to last with our comprehensive warranty</p>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="section-container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

