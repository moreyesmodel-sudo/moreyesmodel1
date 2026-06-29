import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Background Image */}
        <div className="hero-bg">
          <img src="https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_Hero_01_D.jpg" alt="MOREYES Eyewear Campaign" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="hero-content">
          {/* Brand Lockup */}
          <div className="brand-lockup">
            <h1 className="brand-title">MOREYES</h1>
          </div>

          {/* Campaign Copy & Button */}
          <div className="campaign-info">
            <p className="campaign-subtitle">A NEW PERSPECTIVE.</p>
            <p className="campaign-subtitle">DISCOVER THE LATEST COLLECTION.</p>
            <a href="#learn-more" className="btn-learn-more">EXPLORE NOW</a>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="categories-section">
        <div className="categories-grid">
          <a href="#mens" className="category-card">
            <img src="https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_04_D.jpg" alt="Men's Eyewear" className="category-img" />
            <div className="category-overlay"></div>
            <span className="category-label">MEN'S</span>
          </a>
          <a href="#womens" className="category-card">
            <img src="https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_14_D.jpg" alt="Women's Eyewear" className="category-img" id="womens-category-img" />
            <div className="category-overlay"></div>
            <span className="category-label">WOMEN'S</span>
          </a>
          <a href="#customize" className="category-card">
            <img src="https://i.shgcdn.com/09d8b4b1-b6ce-44a3-b4a2-88e3b9aeb5e3/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Customize Flight" className="category-img" />
            <div className="category-overlay"></div>
            <span className="category-label">CUSTOMIZE YOUR FLIGHT.006x</span>
          </a>
          <a href="#accessories" className="category-card">
            <img src="/assets/accessories_category.png" alt="Accessories" className="category-img" />
            <div className="category-overlay"></div>
            <span className="category-label">ACCESSORIES</span>
          </a>
        </div>
      </section>

      {/* Sunglasses Banner Section */}
      <section className="banner-section">
        <div className="banner-bg" style={{ overflow: 'hidden' }}>
          <img src="https://media.oliverpeoples.com/2025/OPStories/1_N1/02/OPS_N1_05_D.jpg" alt="Sunglasses Campaign" className="banner-img" />
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: "0%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "#0a0a0a",
              zIndex: 5
            }}
          />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <h2 className="banner-title">SUNGLASSES</h2>
          <div className="banner-buttons">
            <a href="#mens-sunglasses" className="btn-outline">FOR HIM</a>
            <a href="#womens-sunglasses" className="btn-outline">FOR HER</a>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="product-carousel-section">
        <div className="product-grid-4">
          <motion.a href="#product/artoa-88x" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.0 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/ARTOA-88x_DTS471-A-02_FRONT_190ce0e1-1bc4-45fd-a93a-67aa6a11ddda_1000x.jpg?v=1756316075" alt="ARTOA.88X" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/ARTOA-88x_DTS471-A-02_ANGLE_1000x.jpg?v=1756316075" alt="ARTOA.88X Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">ARTOA.88X</h3>
              <p className="product-price">$635</p>
            </div>
          </motion.a>
          <motion.a href="#product/metamorphis" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/METAMORPHIS_DTS202-A-01_FRONT_e57da9c2-ba41-4953-98d0-d9e90b8a418a_1000x.jpg?v=1767912065" alt="METAMORPHIS" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/METAMORPHIS_DTS202-A-01_ANGLE_1000x.jpg?v=1767912065" alt="METAMORPHIS Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">METAMORPHIS</h3>
              <p className="product-price">$785</p>
            </div>
          </motion.a>
          <motion.a href="#product/mach-nine" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/MACH-NINE_DTS478-A-01_FRONT_4642dba8-b5c0-4f04-9077-ad2ab041acde_1000x.jpg?v=1767915240" alt="MACH-NINE" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/MACH-NINE_DTS478-A-02_ANGLE_1000x.jpg?v=1767915240" alt="MACH-NINE Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">MACH-NINE</h3>
              <p className="product-price">$1,405</p>
            </div>
          </motion.a>
          <motion.a href="#product/eliux" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/ELIUX_DTS751-A-01_FRONT_ee9f30c1-e6fe-4c95-bc7d-addc5259bc4f_1000x.jpg?v=1757544049" alt="ELIUX" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/ELIUX_DTS751-A-01_ANGLE_1000x.jpg?v=1757544049" alt="ELIUX Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">ELIUX</h3>
              <p className="product-price">$595</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Optical Banner Section */}
      <section className="banner-section">
        <div className="banner-bg" style={{ overflow: 'hidden' }}>
          <img src="https://media.oliverpeoples.com/op_stories/2024/N2/OPs_W37_N2_04_D.jpg" alt="Optical Campaign" className="banner-img" />
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: "0%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "#0a0a0a",
              zIndex: 5
            }}
          />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <h2 className="banner-title">OPTICAL</h2>
          <div className="banner-buttons">
            <a href="#mens-optical" className="btn-outline">FOR HIM</a>
            <a href="#womens-optical" className="btn-outline">FOR HER</a>
          </div>
        </div>
      </section>

      {/* Optical Product Grid Section */}
      <section className="product-carousel-section">
        <div className="product-grid-4">
          <motion.a href="#product/hyperlux-3000" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.0 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/HYPERLUX-3000_DTX198-A-01_FRONT_17956741-e772-4dd6-9799-540fed68c274_1000x.jpg?v=1757011438" alt="HYPERLUX-3000" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/HYPERLUX-3000_DTX198-A-02_ANGLE_1000x.jpg?v=1757011438" alt="HYPERLUX-3000 Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">HYPERLUX-3000</h3>
              <p className="product-price">$1,205</p>
            </div>
          </motion.a>
          <motion.a href="#product/mastix-optical" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/products/MASTIX_DTX712-A-01_Front_580a7b49-dc6e-48c6-8d43-22b47d814189_1000x.jpg?v=1645834570" alt="MASTIX OPTICAL" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/products/MASTIX_DTX712-A-01_Angle_1000x.jpg?v=1715117571" alt="MASTIX OPTICAL Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">MASTIX OPTICAL</h3>
              <p className="product-price">$565</p>
            </div>
          </motion.a>
          <motion.a href="#product/flight-seven-optical" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/products/FLIGHTSEVEN_DTX111-57-01_FRONT_1e2d0770-5b79-4323-83d8-37c2ae3fb819_1000x.jpg?v=1645834110" alt="FLIGHT-SEVEN OPTICAL" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/products/FLIGHTSEVEN_DTX111-57-01_ANGLE_1000x.jpg?v=1747854834" alt="FLIGHT-SEVEN OPTICAL Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">FLIGHT-SEVEN OPTICAL</h3>
              <p className="product-price">$605</p>
            </div>
          </motion.a>
          <motion.a href="#product/khaysun" className="product-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="product-img-wrapper">
              <img src="https://dita.com/cdn/shop/files/KHAYSUN_DTX480-A-01_FRONT_e5573e65-2be0-47b5-a762-52890bcd0854_1000x.jpg?v=1767911307" alt="KHAYSUN" className="product-img primary-img" />
              <img src="https://dita.com/cdn/shop/files/KHAYSUN_DTX480-A-01_ANGLE_1000x.jpg?v=1767911307" alt="KHAYSUN Angle" className="product-img secondary-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">KHAYSUN</h3>
              <p className="product-price">$735</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Epiluxury Section */}
      <section className="epiluxury-section">
        <div className="epiluxury-image-container" style={{ overflow: 'hidden' }}>
          <img src="/assets/epiluxury_banner.png" alt="MOREYES EPILUXURY" className="epiluxury-img" />
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: "0%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "#0a0a0a",
              zIndex: 5
            }}
          />
          <div className="epiluxury-overlay"></div>
        </div>
        <div className="epiluxury-content">
          <h2 className="epiluxury-title">MOREYES EPILUXURY</h2>
          <p className="epiluxury-subtitle">THERE ARE COUNTLESS LUXURY BRANDS, BUT THERE IS ONLY ONE EPILUXURY EYEWEAR BRAND IN THE WORLD.</p>
          <a href="#discover-epiluxury" className="btn-outline">DISCOVER EPILUXURY</a>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="feature-section-wrapper">
        <div className="feature-split-section">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="feature-img-wrapper">
              <motion.img 
                src="https://dita.com/cdn/shop/files/IMG_8948_ColorGraded_3e88b4ba-9034-4003-b685-1d9f8d346bdc_1400x.jpg?v=1709253236" 
                alt="Japanese Craftsmanship" 
                className="feature-img" 
                style={{ filter: 'grayscale(100%)' }} 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
            <div className="feature-info">
              <h3 className="feature-title">JAPANESE CRAFTSMANSHIP</h3>
              <p className="feature-desc">It takes countless master craftsmen, with decades of experience, months to craft a single MOREYES frame. Discover why MOREYES's design and manufacturing standards are regarded as the benchmark by which other luxury eyewear brands are judged.</p>
              <a href="#explore-craftsmanship" className="feature-link">EXPLORE MOREYES CRAFTSMANSHIP</a>
            </div>
          </motion.div>
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="feature-img-wrapper">
              <motion.img 
                src="https://images.unsplash.com/photo-1593214451196-37e0651f8ef2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxib29rbWFya3MtcGFnZXwxNHx8fGVufDB8fHx8fA%3D%3D" 
                alt="MOREYES Flagships" 
                className="feature-img" 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
            <div className="feature-info">
              <h3 className="feature-title">MOREYES FLAGSHIPS</h3>
              <p className="feature-desc">Our flagship stores are the purest distillation of the MOREYES brand.</p>
              <a href="#explore-flagships" className="feature-link">EXPLORE MOREYES FLAGSHIPS</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-bg">
          <motion.img 
            src="/assets/newsletter_bg.png" 
            alt="MOREYES Hardware" 
            className="newsletter-img" 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
        <div className="newsletter-content">
          <div className="newsletter-box">
            <h3 className="newsletter-title">SIGN UP FOR MOREYES UPDATES</h3>
            <p className="newsletter-desc">You are signing up to receive MOREYES emails. You can withdraw your consent at any time. Read our <a href="#privacy">Privacy Policy</a> for more details.</p>
            <form className="newsletter-form">
              <label htmlFor="email" className="newsletter-label">Email</label>
              <div className="newsletter-input-group">
                <input type="email" id="email" placeholder="Enter email here ..." className="newsletter-input" />
                <button type="button" className="newsletter-btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            <h4 className="service-title">COMPLIMENTARY SHIPPING</h4>
            <p className="service-desc">Free worldwide shipping and returns - customs and duties taxes included.</p>
          </div>
          <div className="service-card">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <h4 className="service-title">CUSTOMER SERVICE</h4>
            <p className="service-desc">We are available from Monday-Friday to answer your questions.</p>
          </div>
          <div className="service-card">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <h4 className="service-title">SECURE PAYMENT</h4>
            <p className="service-desc">Your payment information is processed securely.</p>
          </div>
          <div className="service-card">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <h4 className="service-title">CONTACT US</h4>
            <p className="service-desc">Need to contact us? Send us an e-mail at support@moreyes.com</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default HomePage;
