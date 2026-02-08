'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className="flex flex-col items-start">
                    <span className="text-2xl font-black tracking-wide">
                        Elev<span className="text-[#1b3898]">8</span>
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                        Performance
                    </span>
                </Link>


                <div className='flex items-center gap-12'>
                    <ul className={`${styles.navLinks} text-[#1b3898]`}>
                        <li><Link href="#about" className={styles.navLink}>About</Link></li>
                        <li><Link href="#features" className={styles.navLink}>Features</Link></li>
                        <li><Link href="#testimonials" className={styles.navLink}>Stories</Link></li>
                        <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                    </ul>

                    <Link
                        href="https://wa.me/919XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.ctaButton}>
                            Connect Now
                        </button>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
