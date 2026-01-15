'use client';

import { useState } from "react";
import Image from "next/image";
import "./_product-card.scss";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // TODO: Add to cart context/state
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          priority={false}
        />
      </div>
      
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>

        <div className="product-card__actions">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="product-card__quantity"
          />
          <button onClick={handleAddToCart} className="btn btn--small">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
