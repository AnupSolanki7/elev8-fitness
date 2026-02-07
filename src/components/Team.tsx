'use client';

import { motion } from 'framer-motion';
import styles from './Team.module.css';

const team = [
    {
        role: "Head Coach",
        description: "The visionary behind the ELEV8 method. Specializes in advanced hypertrophy training and performance optimization."
    },
    {
        role: "Performance Nutritionist",
        description: "Expert in fueling the body for peak performance. Creates sustainable nutritional strategies that align with your lifestyle and goals."
    }
];

export default function Team() {
    return (
        <section className={styles.section} id="team">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                    >
                        LEAD BY EXAMPLE
                    </motion.h2>
                    <motion.p
                        className={styles.intro}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: false }}
                    >
                        Our team is composed of industry-leading professionals who practice what they preach. We are dedicated to your success and bring decades of combined experience to every session.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <div className={styles.visual} />
                            <h3 className={styles.role}>{member.role}</h3>
                            <p className={styles.description}>{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
