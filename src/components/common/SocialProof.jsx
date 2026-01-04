import React from 'react';
import { Star, Trophy, Users, Shield, Building2 } from 'lucide-react';
import styles from './SocialProof.module.css';

const SocialProof = () => {
    return (
        <section className={styles.socialSection}>
            <div className="container">
                {/* Stats */}
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}><Building2 size={32} /></div>
                        <h3>500+</h3>
                        <p>Active Projects</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}><Users size={32} /></div>
                        <h3>1,200+</h3>
                        <p>Verified Builders</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}><Trophy size={32} /></div>
                        <h3>98%</h3>
                        <p>Success Rate</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}><Shield size={32} /></div>
                        <h3>$250M+</h3>
                        <p>Value Secured</p>
                    </div>
                </div>

                {/* Testimonials */}
                <div className={styles.testimonials}>
                    <div className={styles.sectionHeader}>
                        <h2>Trusted by Industry Leaders</h2>
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.quote}>"BuildConnect transformed how we source materials. The marketplace is a game-changer for project timelines."</div>
                            <div className={styles.author}>
                                <div className={styles.avatar}>JD</div>
                                <div>
                                    <h5>James Dalton</h5>
                                    <span>Procurement Manager, Apex Construct</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.quote}>"Finding reliable sub-contractors used to take weeks. Now it takes minutes. The vetting process gives us total peace of mind."</div>
                            <div className={styles.author}>
                                <div className={styles.avatar}>SR</div>
                                <div>
                                    <h5>Sarah Ross</h5>
                                    <span>Owner, Ross Developments</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.quote}>"As a supplier, this platform has doubled our reach. The direct connection to builders eliminates so much friction."</div>
                            <div className={styles.author}>
                                <div className={styles.avatar}>MK</div>
                                <div>
                                    <h5>Michael Koff</h5>
                                    <span>Director, SteelWorks Ltd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
