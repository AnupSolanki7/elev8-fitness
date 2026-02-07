'use client';

import { motion } from 'framer-motion';
import styles from './CallToAction.module.css';

export default function CallToAction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        STOP WAITING.<br />START EVOLVING.
                    </motion.h2>

                    <motion.p
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        The only thing standing between you and your goals is action. Take the first step towards a stronger, healthier, and more capable version of yourself.
                    </motion.p>

                    <motion.button
                        className={styles.button}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        APPLY FOR COACHING
                    </motion.button>
                </div>

                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, x: 50, rotate: 3 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
                        alt="Start Evolving"
                        className={styles.ctaImage}
                    />
                </motion.div>
            </div>
        </section>
    );
}
