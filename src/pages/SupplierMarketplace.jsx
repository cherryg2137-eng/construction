import React, { useState } from 'react';
import ProductCard from '../components/supplier/ProductCard';

const SupplierMarketplace = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Cement', 'Wood', 'Bricks', 'Steel', 'Tools'];

    const products = [
        {
            id: 1,
            name: "Premium Portland Cement",
            category: "Cement",
            price: 12.50,
            unit: "Bag",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=400&h=400",
            discount: 10
        },
        {
            id: 2,
            name: "Red Oak Timer Beam",
            category: "Wood",
            price: 45.00,
            unit: "pc",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            id: 3,
            name: "Standard Red Brick",
            category: "Bricks",
            price: 0.85,
            unit: "pc",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1549140409-7685a975775f?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            id: 4,
            name: "Construction Steel Rod",
            category: "Steel",
            price: 120.00,
            unit: "Bundle",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1535496660128-444aeb864b2d?auto=format&fit=crop&q=80&w=400&h=400"
        }
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(12px)',
                    padding: '2rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                    <h1 style={{ margin: 0, color: 'white' }}>SUPPLY_NET // MARKETPLACE</h1>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className="btn-neon"
                                style={{
                                    backgroundColor: selectedCategory === cat ? 'var(--color-accent)' : 'transparent',
                                    color: selectedCategory === cat ? 'black' : 'var(--color-accent)',
                                    minWidth: '100px'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplierMarketplace;
