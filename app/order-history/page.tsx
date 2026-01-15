'use client';

import Link from "next/link";

interface Order {
  id: string;
  date: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

export default function OrderHistory() {
  // TODO: Get order history from context/state/API
  const orders: Order[] = [];

  return (
    <div className="wrapper">
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <p>You haven't placed any orders yet</p>
          <Link href="/list" className="btn btn--primary">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="orders">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-card__header">
                <h3>Order #{order.id}</h3>
                <p className="order-card__date">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

              <div className="order-card__items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-card__total">
                <strong>Total: ${order.total.toFixed(2)}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
