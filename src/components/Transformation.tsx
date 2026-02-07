'use client';

import { motion } from 'framer-motion';
import styles from './Transformation.module.css';

export default function Transformation() {
    return (
        <section className={styles.section} id="transformation">
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        THE ROAD TO EXCELLENCE
                    </motion.h2>

                    <motion.p
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Transformation is not an event; it&apos;s a process. It begins with a commitment to change and is sustained through structure and accountability. We guide you through every phase, from building a solid foundation to refining your physique. Our data-driven approach ensures that every rep, every meal, and every recovery session contributes to your ultimate goal. Success is inevitable when preparation meets discipline.
                    </motion.p>
                </div>

                <div className={styles.visuals}>
                    <motion.div
                        className={styles.imageOne}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
                            alt="Trainer"
                            className={styles.img}
                        />
                    </motion.div>
                    <motion.div
                        className={styles.imageTwo}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                            alt="Action"
                            className={styles.img}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
