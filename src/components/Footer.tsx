'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id='contact' className={styles.footer}>
            <div className={styles.container}>
                {/* Left Side: Info & Links */}
                <div className={styles.infoSection}>
                    <div className={styles.infoGrid}>
                        <div className={styles.column}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>CONTACT US</h4>
                            <p>123-456-7890</p>
                            <a href="mailto:info@elev8performance.com" className={styles.link}>info@elev8performance.com</a>
                            <p>500 Terry Francine Street,<br />San Francisco, CA 94158</p>
                        </div>

                        <div className={styles.column}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>LINKS</h4>
                            <Link href="#about" className={styles.link}>About</Link>
                            <Link href="#features" className={styles.link}>Services</Link>
                            <Link href="#transformations" className={styles.link}>Stories</Link>
                            <Link href="#" className={styles.link}>Privacy Policy</Link>
                        </div>
                    </div>
                    <p className={styles.copyright}>© 2035 by Elev8 Performance. Powered and secured by Wix</p>
                </div>

                {/* Right Side: Overflowing Form */}
                <motion.div
                    className={styles.formContainer}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <h3 className={styles.formTitle}>Contact Us</h3>
                    <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Number"
                            className={styles.input}
                            required
                        />
                        <textarea
                            placeholder="Note"
                            className={`${styles.input} ${styles.textarea}`}
                            required
                        />
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </footer>
    );
}
