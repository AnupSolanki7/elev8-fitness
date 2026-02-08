'use client';

import { motion } from 'framer-motion';
import HeroImage from '../app/assets/images/Float2.jpeg';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    UNLEASH YOUR<br />TRUE POTENTIAL.
                </motion.h1>

                <motion.p
                    style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    Precision coaching for high-performance individuals who demand results.
                </motion.p>

                <motion.button
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: 'white',
                        background: 'var(--primary-blue)',
                        border: 'none',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        marginBottom: '3rem'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    START YOUR TRANSFORMATION
                </motion.button>

                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src={HeroImage}
                            alt="Fitness Motivation"
                            className={styles.heroImage}
                            width={800}
                            height={600}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
