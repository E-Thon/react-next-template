'use client';

import ProductCard, { Product } from "../_components/products/ProductCard";

// TODO: Replace with API call to fetch all products
const ALL_PRODUCTS: Product[] = [
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
  {
    id: "4",
    name: "Product 4",
    price: 59.99,
    image: "/placeholder.jpg",
    description: "Excellent choice",
  },
];

export default function ListPage() {
  return (
    <div className="wrapper">
      <h1>All Products</h1>
      <div className="products-grid">
        {ALL_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}