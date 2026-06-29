import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredNav(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 150);
  };

  const megaMenuData = {
    SUNGLASSES: {
      collections: [
        { name: "Men's", link: "/mens" },
        { name: "Women's", link: "#" },
        { name: "New Arrivals", link: "#" },
        { name: "Best Sellers", link: "#" },
        { name: "Asian Fit", link: "#" }
      ],
      materials: [
        { name: "Titanium", link: "#" },
        { name: "Acetate", link: "#" },
        { name: "Mixed Media", link: "#" },
        { name: "Epiluxury", link: "#" }
      ],
      discover: [
        { name: "Campaign", link: "#" },
        { name: "Craftsmanship", link: "#" },
        { name: "Flagships", link: "#" },
        { name: "Journal", link: "#" }
      ],
      images: [
        {
          src: "https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_04_D.jpg",
          title: "MEN'S COLLECTION",
          subtitle: "Explore the new releases"
        },
        {
          src: "https://media.oliverpeoples.com/op_stories/2024/N1/OP_W04_N1_14_D.jpg",
          title: "WOMEN'S COLLECTION",
          subtitle: "Iconic acetate shapes"
        },
        {
          src: "https://dita.com/cdn/shop/files/IMG_8948_ColorGraded_3e88b4ba-9034-4003-b685-1d9f8d346bdc_1400x.jpg?v=1709253236",
          title: "CRAFTSMANSHIP",
          subtitle: "Handcraft meets high tech"
        }
      ]
    }
  };

  // Duplicate for MENS and OPTICAL to demonstrate functionality
  megaMenuData['MENS'] = megaMenuData['SUNGLASSES'];
  megaMenuData['OPTICAL'] = megaMenuData['SUNGLASSES'];
  megaMenuData['NEW ARRIVALS'] = megaMenuData['SUNGLASSES'];
  megaMenuData['MOREYES LANCIER'] = megaMenuData['SUNGLASSES'];



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For MensPage, the header background is white, so we might want to force the 'scrolled' class 
  // or modify styling later. For now, keep it as is.
  const isMensPage = location.pathname === '/mens';
  const isMegaMenuOpen = hoveredNav !== null;
  const headerClass = `header ${isScrolled || isMensPage || isMegaMenuOpen ? 'scrolled' : ''} ${isMegaMenuOpen ? 'mega-open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="nav-container">
        {/* Left navigation menu */}
        <nav className="nav-left">
          <ul className="nav-links">
            {['MENS', 'SUNGLASSES', 'OPTICAL', 'NEW ARRIVALS', 'MOREYES LANCIER', 'STORES'].map((item) => (
              <li 
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item === 'MENS' ? '/mens' : '/'}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src="https://ttfdcqpzaxnxduvlhtgi.supabase.co/storage/v1/object/public/WAYD-gallery/Artboard%202.svg" alt="MOREYES Logo" className="nav-logo-img" />
          </Link>
        </div>

        {/* Right actions/icons */}
        <div className="nav-right">
          <button className="nav-icon-btn" aria-label="Search">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button className="nav-icon-btn" aria-label="Account">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button className="nav-icon-btn cart-btn" aria-label="Shopping Cart">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isMegaMenuOpen && megaMenuData[hoveredNav] && (
          <motion.div
            className="mega-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={() => handleMouseEnter(hoveredNav)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mega-menu-content">
              <div className="mega-menu-links">
                <div className="mega-column">
                  <h4 className="mega-title">COLLECTIONS</h4>
                  <ul>
                    {megaMenuData[hoveredNav].collections.map((item, i) => (
                      <li key={i}><Link to={item.link}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="mega-column">
                  <h4 className="mega-title">MATERIALS</h4>
                  <ul>
                    {megaMenuData[hoveredNav].materials.map((item, i) => (
                      <li key={i}><Link to={item.link}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="mega-column">
                  <h4 className="mega-title">DISCOVER</h4>
                  <ul>
                    {megaMenuData[hoveredNav].discover.map((item, i) => (
                      <li key={i}><Link to={item.link}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mega-menu-images">
                {megaMenuData[hoveredNav].images.map((img, i) => (
                  <div className="mega-img-card" key={i}>
                    <div className="mega-img-wrapper">
                      <img src={img.src} alt={img.title} />
                    </div>
                    <h5 className="mega-img-title">{img.title}</h5>
                    <p className="mega-img-subtitle">{img.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
