import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './PortfolioGrid.module.css';

const PortfolioGrid = () => {
    const [projects] = useState([
        {
            id: 1,
            title: "Modern Villa",
            image: "https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?auto=format&fit=crop&q=80&w=400&h=300",
            location: "Beverly Hills",
        },
        {
            id: 2,
            title: "Urban Apartment",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400&h=300",
            location: "New York City",
        },
        {
            id: 3,
            title: "Eco Office",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300",
            location: "San Francisco",
        }
    ]);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>Past Projects</h3>
                <button className={styles.addBtn}>
                    <Plus size={18} />
                    <span>Add Project</span>
                </button>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={project.image} alt={project.title} />
                            <div className={styles.overlay}>
                                <button className={styles.viewBtn}>View Details</button>
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <h4>{project.title}</h4>
                            <p>{project.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGrid;
