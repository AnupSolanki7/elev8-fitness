'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Image Side */}
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                            alt="Our Philosophy"
                            width={800}
                            height={600}
                            className={styles.aboutImage}
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                    >                <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                            ELITE COACHING.<br />ZERO EXCUSES.
                        </motion.h2>

                        <span className={styles.subTitle}>OUR PHILOSOPHY</span>
                        <p className={styles.description}>
                            ELEV8 Performance is not for everyone. We work exclusively with individuals who are ready to commit to the process of becoming their best selves. Our philosophy is built on the pillars of discipline, consistency, and science-backed training.
                        </p>
                        <p className={styles.description}>
                            We don&apos;t believe in quick fixes or shortcuts. We believe in the power of hard work and structured programming to deliver sustainable, life-changing results.
                        </p>
                        {/* <button className={styles.button}>Read More</button> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
