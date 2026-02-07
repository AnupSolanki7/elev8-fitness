'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Working with ELEV8 was the turning point in my fitness journey. The attention to detail and level of support are unmatched. I've never been stronger or more confident.",
        name: "Marc D.",
        role: "Member"
    },
    {
        quote: "This isn't just a workout plan; it's a lifestyle overhaul. The discipline I learned here has translated into every area of my life. Truly transformative.",
        name: "Sarah J.",
        role: "Member"
    },
    {
        quote: "I wasted years on fad diets and random workouts. ELEV8 gave me the structure I needed to finally see progress. The results speak for themselves.",
        name: "James T.",
        role: "Member"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                    >
                        REAL RESULTS
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <p className={styles.quote}>&quot;{t.quote}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar} /> {/* Placeholder avatar */}
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: '#666' }}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
