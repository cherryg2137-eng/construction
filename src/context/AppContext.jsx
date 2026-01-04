import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [notificationCount, setNotificationCount] = useState(2); // Start with 2 mock notifications
    const [toastMessage, setToastMessage] = useState(null);

    const addToCart = (productName) => {
        setCartCount(prev => prev + 1);
        showToast(`Added ${productName} to cart`);
    };

    const addNotification = (message) => {
        setNotificationCount(prev => prev + 1);
        showToast(message);
    };

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    return (
        <AppContext.Provider value={{
            cartCount,
            notificationCount,
            addToCart,
            addNotification,
            toastMessage // Exposed for a global toast component if needed
        }}>
            {children}
            {/* Simple internal Toast for immediate feedback */}
            {toastMessage && (
                <div style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    backgroundColor: '#0F172A',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    zIndex: 9999,
                    animation: 'slideIn 0.3s ease-out',
                    borderLeft: '4px solid #F59E0B'
                }}>
                    {toastMessage}
                </div>
            )}
            <style>{`
                @keyframes slideIn {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
