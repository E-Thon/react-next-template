'use client';

import Link from "next/link";
import "./_footer.scss";
import NewsletterSignup from "../newsletter-signup/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Legal</h3>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <NewsletterSignup />
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}