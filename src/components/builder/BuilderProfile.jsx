import React from 'react';
import { MapPin, Star, MessageSquare } from 'lucide-react';
import styles from './BuilderProfile.module.css';

const BuilderProfile = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.avatar}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" alt="Builder Profile" />
            </div>

            <div className={styles.info}>
                <h2 className={styles.name}>Alex Sterling</h2>
                <div className={styles.meta}>
                    <div className={styles.location}>
                        <MapPin size={16} />
                        <span>San Francisco, CA</span>
                    </div>
                    <div className={styles.rating}>
                        <Star size={16} fill="#F59E0B" color="#F59E0B" />
                        <span>4.9 (127 Reviews)</span>
                    </div>
                </div>
            </div>

            <button
                className={styles.chatBtn}
                onClick={() => alert("Opening secure chat with Alex Sterling...")}
            >
                <MessageSquare size={18} />
                <span>Message Builder</span>
            </button>
        </div>
    );
};

export default BuilderProfile;
