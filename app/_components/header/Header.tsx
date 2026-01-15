'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="headerElm">
            <nav>
                <Link href="/">
                    <Image 
                        src="/newsify_logo.png" 
                        alt="Newsify Home" 
                        width={50} 
                        height={50}
                    />
                    Newsify
                </Link>
            </nav>
        </header>
    );
}
