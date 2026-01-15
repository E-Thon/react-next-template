'use client';

import Link from "next/link";
import { useState } from "react";
import Navigation from "../navigation/Navigation";
import Searchfield from "../searchfield/Searchfield";
import "./_header.scss";

export default function Header() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    // TODO: Get user from auth context/session
    const user = null;

    return (
        <header className="header">
            <div className="header__container">
                <Link href="/" className="header__logo">
                    Shop
                </Link>

                <Navigation />

                <Searchfield />

                <div className="header__user-menu">
                    {user ? (
                        <div className="user-dropdown">
                            <button
                                className="user-dropdown__toggle"
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            >
                                {user.name}
                            </button>
                            {isUserMenuOpen && (
                                <div className="user-dropdown__menu">
                                    <Link href="/profile">Profile</Link>
                                    <Link href="/favorites">Favorites</Link>
                                    <Link href="/order-history">Order History</Link>
                                    <button className="user-dropdown__logout">
                                        {/* TODO: Add logout function */}
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/login" className="header__login-btn">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}