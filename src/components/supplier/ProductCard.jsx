import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useApp();

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} />
                {product.discount && <span className={styles.discount}>-{product.discount}%</span>}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.category}>{product.category}</span>
                    <div className={styles.rating}>
                        <Star size={14} fill="#F59E0B" color="#F59E0B" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <h3 className={styles.name}>{product.name}</h3>

                <div className={styles.footer}>
                    <div className={styles.priceBlock}>
                        <span className={styles.price}>${product.price}</span>
                        <span className={styles.unit}>/ {product.unit}</span>
                    </div>

                    <button
                        className={styles.addBtn}
                        onClick={() => addToCart(product.name)}
                        title="Add to Cart"
                    >
                        <ShoppingCart size={18} />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
