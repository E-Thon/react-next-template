'use client';

import Link from "next/link";
import "./_ButtonLink.scss";

interface ButtonLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function ButtonLink({ href, text, className }: ButtonLinkProps) {
  return (
    <Link href={href} className={`button-link ${className || ''}`}>
      <button>{text}</button>
    </Link>
  );
}
