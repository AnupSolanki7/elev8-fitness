"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur bg-[var(--color-background)]/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-xl tracking-wide">
          ELEV8
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
