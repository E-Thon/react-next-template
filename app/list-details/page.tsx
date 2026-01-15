'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductDetails {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  details: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

// TODO: Replace with API call to fetch product details by ID
const PRODUCT_DETAILS: ProductDetails = {
  id: "1",
  name: "Product Name",
  price: 99.99,
  image: "/placeholder.jpg",
  description: "This is a great product",
  details: "Detailed description of the product with all specifications and features.",
  inStock: true,
  rating: 4.5,
  reviews: 128,
};

export default function ListDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = () => {
    // TODO: Add to cart
    console.log(`Added ${quantity} of ${PRODUCT_DETAILS.name} to cart`);
  };

  return (
    <div className="wrapper">
      <Link href="/list" className="back-link">
        ← Back to Products
      </Link>

      <div className="product-details">
        <div className="product-details__image">
          <Image
            src={PRODUCT_DETAILS.image}
            alt={PRODUCT_DETAILS.name}
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="product-details__content">
          <h1>{PRODUCT_DETAILS.name}</h1>

          <div className="product-details__rating">
            <span className="rating">{PRODUCT_DETAILS.rating} ★</span>
            <span className="reviews">({PRODUCT_DETAILS.reviews} reviews)</span>
          </div>

          <p className="product-details__description">
            {PRODUCT_DETAILS.description}
          </p>

          <div className="product-details__details">
            <p>{PRODUCT_DETAILS.details}</p>
          </div>

          <div className="product-details__price">
            <span className="price">${PRODUCT_DETAILS.price.toFixed(2)}</span>
            {PRODUCT_DETAILS.inStock ? (
              <span className="in-stock">In Stock</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>

          <div className="product-details__actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                disabled={!PRODUCT_DETAILS.inStock}
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="btn btn--primary"
              disabled={!PRODUCT_DETAILS.inStock}
            >
              Add to Basket
            </button>

            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`btn btn--secondary ${isFavorited ? "favorited" : ""}`}
            >
              {isFavorited ? "❤ Favorited" : "♡ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}