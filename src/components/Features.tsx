'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Users, Smartphone } from 'lucide-react'; // Changed icons
import styles from './Features.module.css';

const features = [
    {
        title: "1-on-1 Personal Training",
        description: "Experience the gold standard in fitness coaching. Personalized sessions designed to maximize your strength, improve your technique, and push your limits.",
        icon: Dumbbell,
        visualColor: "#3b82f6"
    },
    {
        title: "Body Transformation",
        description: "A comprehensive approach to reshaping your physique. We combine tailored nutrition plans with rigorous training protocols.",
        icon: Users,
        visualColor: "#ef4444"
    },
    {
        title: "Online Coaching",
        description: "World-class training, wherever you are. Receive custom workout plans, nutritional guidance, and regular check-ins.",
        icon: Smartphone,
        visualColor: "#10b981"
    }
];

export default function Features() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        OUR EXPERTISE
                    </motion.h2>
                    {/* Removed subtitle as not in requirements */}
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div>
                                <div className={styles.cardIcon}>
                                    <feature.icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                            <div className={styles.cardVisual}>
                                {/* Abstract visual for the card */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: feature.visualColor,
                                    opacity: 0.2
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    width: '40px',
                                    height: '4px',
                                    background: feature.visualColor,
                                    borderRadius: '2px'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '30px',
                                    left: '20px',
                                    width: '60px',
                                    height: '4px',
                                    background: feature.visualColor,
                                    borderRadius: '2px',
                                    opacity: 0.6
                                }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
