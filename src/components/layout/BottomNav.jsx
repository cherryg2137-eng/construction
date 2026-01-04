import React from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, Home, Truck, Settings } from 'lucide-react';
import styles from './BottomNav.module.css';

const BottomNav = () => {
    return (
        <nav className={styles.bottomNav}>
            <NavLink
                to="/builder"
                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
                <Briefcase />
            </NavLink>

            <NavLink
                to="/owner"
                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
                <Home />
            </NavLink>

            <NavLink
                to="/supplier"
                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
                <Truck />
            </NavLink>

            <NavLink
                to="/settings"
                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
                <Settings />
            </NavLink>
        </nav>
    );
};

export default BottomNav;
