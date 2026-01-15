'use client';

import Link from "next/link";
import ProductCard, { Product } from "../_components/products/ProductCard";

export default function Favorites() {
  // TODO: Get favorites from context/state
  const favoriteProducts: Product[] = [];

  return (
    <div className="wrapper">
      <h1>My Favorites</h1>

      {favoriteProducts.length === 0 ? (
        <div className="empty-favorites">
          <p>You haven't added any favorites yet</p>
          <Link href="/list" className="btn btn--primary">
            Browse Items
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
