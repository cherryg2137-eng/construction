import React from 'react';
import { Construction, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link to="/" className={styles.logo}>
                            <Construction size={28} strokeWidth={2.5} color="#F59E0B" />
                            BuildConnect
                        </Link>
                        <p className={styles.description}>
                            The leading ecosystem for the modern construction industry. Connecting owners, builders, and suppliers in one seamless platform.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}><Twitter size={18} /></a>
                            <a href="#" className={styles.socialIcon}><Linkedin size={18} /></a>
                            <a href="#" className={styles.socialIcon}><Github size={18} /></a>
                            <a href="#" className={styles.socialIcon}><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.col}>
                        <h4>Platform</h4>
                        <div className={styles.links}>
                            <Link to="/owner">For Owners</Link>
                            <Link to="/builder">For Builders</Link>
                            <Link to="/supplier">Marketplace</Link>
                            <Link to="/">Pricing</Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className={styles.col}>
                        <h4>Company</h4>
                        <div className={styles.links}>
                            <Link to="/">About Us</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Contact</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className={styles.col}>
                        <h4>Legal</h4>
                        <div className={styles.links}>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Service</Link>
                            <Link to="/">Cookie Policy</Link>
                            <Link to="/">Security</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2026 BuildConnect Inc. All rights reserved.</p>
                    <div className={styles.links} style={{ flexDirection: 'row', gap: '2rem' }}>
                        <span>Made with ❤️ for Construction</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
