'use client';

import Link from "next/link";

export default function Basket() {
  // TODO: Get cart items from context/state
  const cartItems: any[] = [];

  return (
    <div className="wrapper">
      <h1>Shopping Basket</h1>

      {cartItems.length === 0 ? (
        <div className="empty-basket">
          <p>Your basket is empty</p>
          <Link href="/list" className="btn btn--primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="basket">
          <table className="basket__table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    {/* TODO: Add remove function */}
                    <button>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="basket__summary">
            <h2>Order Summary</h2>
            {/* TODO: Calculate total */}
            <p>Total: $0.00</p>
            <button className="btn btn--primary">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
