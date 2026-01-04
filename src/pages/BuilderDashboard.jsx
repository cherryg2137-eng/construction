import React from 'react';
import BuilderProfile from '../components/builder/BuilderProfile';
import PortfolioGrid from '../components/builder/PortfolioGrid';
import Notifications from '../components/builder/Notifications';

const BuilderDashboard = () => {
    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <BuilderProfile
                    name="Alex Sterling"
                    location="Austin, Texas"
                    rating="4.8"
                />
                <Notifications />
                <PortfolioGrid />
            </div>
        </div>
    );
};

export default BuilderDashboard;
