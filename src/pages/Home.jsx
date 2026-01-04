import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Home as HomeIcon, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialProof from '../components/common/SocialProof';
import styles from './Home.module.css';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div className={styles.container} ref={containerRef}>

            {/* Hero Section - Professional & Clean */}
            <section className={styles.hero}>
                <motion.div style={{ y: heroY }} className={styles.heroBg}>
                    {/* Clean Background Image (Optional: Replace with high-res Architecture) */}
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&h=1200"
                        alt="Modern Architecture"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                    />
                    <div className={styles.overlay}></div>
                </motion.div>

                <div className={styles.heroContent}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.title}
                    >
                        Building the <span className="text-gradient">Future</span> of Construction
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.subtitle}
                    >
                        Connect with top builders, manage projects efficiently, and source premium materials. The all-in-one ecosystem for the construction industry.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={styles.actions}
                    >
                        <Link to="/owner" className="btn-primary">
                            Start a Project <ArrowRight size={18} />
                        </Link>
                        <Link to="/builder" className="btn-accent" style={{ background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                            Join as Builder
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Roles Section - Clean Cards */}
            <section className={styles.rolesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Select Your Role</h2>
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.roleGrid}>
                        <Link to="/builder" className={styles.cardLink}>
                            <div className={styles.roleCard}>
                                <div className={styles.iconBox}>
                                    <Briefcase size={32} />
                                </div>
                                <h3>For Builders</h3>
                                <p>Showcase your portfolio, find new projects, and manage your reputation.</p>
                                <span className={styles.learnMore}>Get Started &rarr;</span>
                            </div>
                        </Link>

                        <Link to="/owner" className={styles.cardLink}>
                            <div className={styles.roleCard}>
                                <div className={styles.iconBox}>
                                    <HomeIcon size={32} />
                                </div>
                                <h3>For Owners</h3>
                                <p>Post projects, review builder profiles, and track construction progress.</p>
                                <span className={styles.learnMore}>Start Building &rarr;</span>
                            </div>
                        </Link>

                        <Link to="/supplier" className={styles.cardLink}>
                            <div className={styles.roleCard}>
                                <div className={styles.iconBox}>
                                    <Truck size={32} />
                                </div>
                                <h3>Marketplace</h3>
                                <p>Connect with builders and owners to supply high-quality materials.</p>
                                <span className={styles.learnMore}>Browse Products &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof Section (Stats & Testimonials) */}
            <SocialProof />
        </div>
    );
};

export default Home;
