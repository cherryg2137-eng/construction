import React, { useState, useEffect } from 'react';
import { Search, Construction, Settings, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Construction size={28} strokeWidth={2.5} />
          </div>
          <span className={styles.brandName}>BuildConnect</span>
        </Link>

        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search projects, builders, or materials..."
            className={styles.searchInput}
          />
        </div>

        <nav className={styles.desktopNav}>
          <Link to="/builder" className={styles.navLink}>For Builders</Link>
          <Link to="/owner" className={styles.navLink}>For Owners</Link>
          <Link to="/supplier" className={styles.navLink}>Marketplace</Link>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className={styles.iconBtn}>
              <Bell size={20} />
            </button>
            <button className={styles.iconBtn}>
              <Settings size={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
