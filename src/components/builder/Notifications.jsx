import React from 'react';
import { Bell, MapPin, DollarSign } from 'lucide-react';
import styles from './Notifications.module.css';

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            title: "Luxury Family House Construction",
            location: "Green Valley, Austin",
            budget: "$500k - $750k",
            status: "New"
        },
        {
            id: 2,
            title: "Commercial Office Renovation",
            location: "Downtown",
            budget: "$200k - $300k",
            status: "Verified"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>New Projects for You</h3>
                <span className={styles.badge}>2 New</span>
            </div>

            <div className={styles.list}>
                {notifications.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.itemHeader}>
                            <h4>{item.title}</h4>
                            <span className={styles.statusBadge}>{item.status}</span>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <MapPin size={16} />
                                <span>{item.location}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <DollarSign size={16} />
                                <span>{item.budget}</span>
                            </div>
                        </div>

                        <button className={styles.applyBtn}>Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
