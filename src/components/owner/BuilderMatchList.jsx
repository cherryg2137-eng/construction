import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import styles from './BuilderMatchList.module.css';

const BuilderMatchList = () => {
    // Mock data for matched builders
    const matchedBuilders = [
        {
            id: 1,
            name: "BuildRight Construction",
            similarity: "98% Match",
            location: "2.5 km away",
            projects: 45,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            id: 2,
            name: "Elite Homes",
            similarity: "92% Match",
            location: "5 km away",
            projects: 32,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
        }
    ];

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Recommended Builders</h3>
            <div className={styles.list}>
                {matchedBuilders.map(builder => (
                    <div key={builder.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <img src={builder.image} alt={builder.name} className={styles.avatar} />
                            <div>
                                <h4 className={styles.name}>{builder.name}</h4>
                                <div className={styles.matchTag}>
                                    <CheckCircle size={14} />
                                    <span>{builder.similarity}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <MapPin size={14} />
                                <span>{builder.location}</span>
                            </div>
                            <div className={styles.stat}>
                                <span>{builder.projects} Projects</span>
                            </div>
                        </div>

                        <button
                            className={styles.contactBtn}
                            onClick={() => alert(`Connection request sent to ${builder.name}`)}
                        >
                            Contact Builder
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuilderMatchList;
