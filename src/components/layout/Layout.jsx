import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            {/* Show Footer on Desktop, BottomNav on Mobile */}
            <div className="desktop-only">
                <Footer />
            </div>
            <div className="mobile-only">
                <BottomNav />
            </div>
        </div>
    );
};

export default Layout;
