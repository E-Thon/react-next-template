'use client';

import ProductCard, { Product } from "../products/ProductCard";

// TODO: Replace with actual API call
const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 29.99,
    image: "/placeholder.jpg",
    description: "Amazing product",
  },
  {
    id: "2",
    name: "Product 2",
    price: 39.99,
    image: "/placeholder.jpg",
    description: "Great quality",
  },
  {
    id: "3",
    name: "Product 3",
    price: 49.99,
    image: "/placeholder.jpg",
    description: "Best seller",
  },
];

export default function FeaturedItems() {
  return (
    <div className="featured-items">
      {FEATURED_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
