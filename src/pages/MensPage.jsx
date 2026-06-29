import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function MensPage() {
  const baseProducts = [
    {
      id: 1,
      name: 'ELIUX',
      price: '$595',
      colors: '3 COLORS',
      image: 'https://dita.com/cdn/shop/files/ELIUX_DTS751-A-01_FRONT_ee9f30c1-e6fe-4c95-bc7d-addc5259bc4f_1000x.jpg?v=1757544049',
      imageAngle: 'https://dita.com/cdn/shop/files/ELIUX_DTS751-A-01_ANGLE_1000x.jpg?v=1757544049'
    },
    {
      id: 2,
      name: 'MACH-NINE',
      price: 'From $1,405',
      colors: '2 COLORS',
      image: 'https://dita.com/cdn/shop/files/MACH-NINE_DTS478-A-01_FRONT_4642dba8-b5c0-4f04-9077-ad2ab041acde_1000x.jpg?v=1767915240',
      imageAngle: 'https://dita.com/cdn/shop/files/MACH-NINE_DTS478-A-02_ANGLE_1000x.jpg?v=1767915240'
    },
    {
      id: 3,
      name: 'METAMORPHIS',
      price: 'From $785',
      colors: '3 COLORS',
      image: 'https://dita.com/cdn/shop/files/METAMORPHIS_DTS202-A-01_FRONT_e57da9c2-ba41-4953-98d0-d9e90b8a418a_1000x.jpg?v=1767912065',
      imageAngle: 'https://dita.com/cdn/shop/files/METAMORPHIS_DTS202-A-01_ANGLE_1000x.jpg?v=1767912065'
    },
    {
      id: 4,
      name: 'ARTOA.88X',
      price: '$635',
      colors: '4 COLORS',
      image: 'https://dita.com/cdn/shop/files/ARTOA-88x_DTS471-A-02_FRONT_190ce0e1-1bc4-45fd-a93a-67aa6a11ddda_1000x.jpg?v=1756316075',
      imageAngle: 'https://dita.com/cdn/shop/files/ARTOA-88x_DTS471-A-02_ANGLE_1000x.jpg?v=1756316075'
    },
    {
      id: 5,
      name: 'HYPERLUX-3000',
      price: '$1,205',
      colors: '2 COLORS',
      image: 'https://dita.com/cdn/shop/files/HYPERLUX-3000_DTX198-A-01_FRONT_17956741-e772-4dd6-9799-540fed68c274_1000x.jpg?v=1757011438',
      imageAngle: 'https://dita.com/cdn/shop/files/HYPERLUX-3000_DTX198-A-02_ANGLE_1000x.jpg?v=1757011438'
    },
    {
      id: 6,
      name: 'MASTIX OPTICAL',
      price: '$565',
      colors: '3 COLORS',
      image: 'https://dita.com/cdn/shop/products/MASTIX_DTX712-A-01_Front_580a7b49-dc6e-48c6-8d43-22b47d814189_1000x.jpg?v=1645834570',
      imageAngle: 'https://dita.com/cdn/shop/products/MASTIX_DTX712-A-01_Angle_1000x.jpg?v=1715117571'
    },
    {
      id: 7,
      name: 'FLIGHT-SEVEN OPTICAL',
      price: '$605',
      colors: '2 COLORS',
      image: 'https://dita.com/cdn/shop/products/FLIGHTSEVEN_DTX111-57-01_FRONT_1e2d0770-5b79-4323-83d8-37c2ae3fb819_1000x.jpg?v=1645834110',
      imageAngle: 'https://dita.com/cdn/shop/products/FLIGHTSEVEN_DTX111-57-01_ANGLE_1000x.jpg?v=1747854834'
    },
    {
      id: 8,
      name: 'KHAYSUN',
      price: '$735',
      colors: '4 COLORS',
      image: 'https://dita.com/cdn/shop/files/KHAYSUN_DTX480-A-01_FRONT_e5573e65-2be0-47b5-a762-52890bcd0854_1000x.jpg?v=1767911307',
      imageAngle: 'https://dita.com/cdn/shop/files/KHAYSUN_DTX480-A-01_ANGLE_1000x.jpg?v=1767911307'
    }
  ];

  const products = [
    ...baseProducts,
    ...baseProducts.map(p => ({ ...p, id: p.id + 8 })),
    ...baseProducts.map(p => ({ ...p, id: p.id + 16 }))
  ];

  const recentlyViewed = [
    baseProducts[7],
    baseProducts[6],
    baseProducts[5],
    baseProducts[4]
  ];

  return (
    <>
    <div className="plp-page">
      <div className="plp-header">
        <h1 className="plp-title">MENS</h1>
      </div>
      
      <div className="plp-toolbar">
        <div className="plp-toolbar-left">
          <button className="plp-filter-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            Show filters
          </button>
          <span className="plp-product-count">{products.length} products</span>
        </div>
        <div className="plp-toolbar-right">
          <button className="plp-sort-btn">
            Sort by Featured
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '4px' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="plp-grid">
        <motion.div 
          className="plp-feature-item"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_04_D.jpg" alt="Mens Feature" className="plp-feature-img" />
        </motion.div>
        
        {products.map((product, index) => (
          <motion.a 
            href={`#product/${product.id}`}
            key={product.id} 
            className="plp-product-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + (index * 0.1) }}
          >
            <div className="plp-product-img-wrapper">
              <img src={product.image} alt={product.name} className="plp-product-img primary-img" />
              <img src={product.imageAngle} alt={`${product.name} Angle`} className="plp-product-img secondary-img" />
            </div>
            <div className="plp-product-info">
              <h3 className="plp-product-title">{product.name}</h3>
              <p className="plp-product-price">{product.price}</p>
              <p className="plp-product-colors">{product.colors}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="plp-pagination">
        <button className="plp-page-btn active">1</button>
        <button className="plp-page-btn">2</button>
        <button className="plp-page-btn">3</button>
        <button className="plp-page-btn next">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="plp-description">
        <p>
          Discover men's luxury eyewear crafted with uncompromising attention to detail. DITA's collection of sunglasses and optical frames combines innovative design, premium materials, and Japanese craftsmanship to create distinctive silhouettes that transcend trends. From bold statement pieces to refined everyday essentials, each frame is engineered for exceptional quality and enduring style. Explore men's sunglasses and optical frames designed for those who appreciate precision, performance, and modern luxury.
        </p>
      </div>

      <div className="plp-recently-viewed">
        <h2 className="plp-section-title">RECENTLY VIEWED</h2>
        <div className="plp-recent-grid">
          {recentlyViewed.map((product) => (
            <a href={`#product/${product.id}`} key={`recent-${product.id}`} className="plp-product-card">
              <div className="plp-product-img-wrapper">
                <img src={product.image} alt={product.name} className="plp-product-img primary-img" />
                <img src={product.imageAngle} alt={`${product.name} Angle`} className="plp-product-img secondary-img" />
              </div>
              <div className="plp-product-info">
                <h3 className="plp-product-title">{product.name}</h3>
                <p className="plp-product-price">{product.price}</p>
                <p className="plp-product-colors">{product.colors}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default MensPage;
