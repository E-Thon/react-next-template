'use client';

import { FormEvent, useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to subscribe email
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <p>Subscribe to get updates on new products</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="newsletter__message">{message}</p>}
    </div>
  );
}