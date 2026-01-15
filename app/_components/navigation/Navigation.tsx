'use client';

import Link from "next/link";
import "./_Navigation.scss";

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li>
                    <Link href="/list">List</Link>
                </li>
                <li>
                    <Link href="/list-details">Details</Link>
                </li>
                <li>
                    <Link href="/basket">Basket</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
