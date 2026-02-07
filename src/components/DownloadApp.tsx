'use client';

import { motion } from 'framer-motion';
import styles from './DownloadApp.module.css';

export default function DownloadApp() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Discover Your<br />Strength!
                </motion.h2>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Download the app today and start your journey to a healthier, stronger you.
                </motion.p>

                <motion.div
                    className={styles.phoneMockup}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.screenContent}>
                        App Interface
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
