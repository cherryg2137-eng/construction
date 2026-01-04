import React from 'react';
import CreateProjectForm from '../components/owner/CreateProjectForm';
import BuilderMatchList from '../components/owner/BuilderMatchList';

const OwnerDashboard = () => {
    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <CreateProjectForm />
                <BuilderMatchList />
            </div>
        </div>
    );
};

export default OwnerDashboard;
