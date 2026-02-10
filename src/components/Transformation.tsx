'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import styles from './Transformation.module.css';

interface TransformationImage {
    id: number;
    type: 'pair' | 'single';
    before?: string;
    after?: string;
    combined?: string;
}

const transformations: TransformationImage[] = [
    { id: 1, type: 'pair', before: '/transformation/transform_1a.jpg', after: '/transformation/transform_1b.jpg' },
    { id: 2, type: 'pair', before: '/transformation/transform_2a.jpg', after: '/transformation/transform_2b.jpg' },
    { id: 3, type: 'single', combined: '/transformation/transform_3ab.jpg' },
    { id: 4, type: 'pair', before: '/transformation/transform_4a.jpg', after: '/transformation/transform_4b.jpg' },
    { id: 5, type: 'pair', before: '/transformation/transform_5a.jpg', after: '/transformation/transform_5b.jpg' },
    // { id: 6, type: 'single', combined: '/transformation/transform_6ab.jpeg' },
    { id: 7, type: 'pair', before: '/transformation/transform_7a.jpeg', after: '/transformation/transform_7b.jpeg' },
    { id: 8, type: 'single', combined: '/transformation/transform_8ab.jpeg' },
    { id: 9, type: 'single', combined: '/transformation/transform_9ab.jpeg' },
    { id: 10, type: 'single', combined: '/transformation/transform_10ab.jpeg' },
    { id: 11, type: 'single', combined: '/transformation/transform_11ab.jpeg' },
    { id: 11, type: 'single', combined: '/transformation/transform_12ab.jpeg' },
    { id: 11, type: 'single', combined: '/transformation/transform_13ab.jpeg' },
]; ``

export default function Transformation() {
    // Duplicate the array to ensure seamless looping
    const displayTransformations = [...transformations, ...transformations];

    return (
        <section className={styles.section} id="transformation">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        THE ROAD TO EXCELLENCE
                    </motion.h2>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Real results from dedicated individuals. See what's possible with commitment and the right guidance.
                    </motion.p>
                </div>

                <div className={styles.carouselContainer}>
                    <motion.div
                        className={styles.carouselTrack}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed here
                            repeatType: "loop"
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {displayTransformations.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className={styles.card}
                            >
                                {item.type === 'pair' ? (
                                    <div className={styles.pairContainer}>
                                        <div className={styles.imageWrapper}>
                                            <span className={styles.label}>Before</span>
                                            <img src={item.before} alt="Before transformation" className={styles.image} />
                                        </div>
                                        <div className={styles.imageWrapper}>
                                            <span className={styles.label}>After</span>
                                            <img src={item.after} alt="After transformation" className={styles.image} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.singleContainer}>
                                        <div className={styles.imageWrapper}>
                                            <span className={styles.label}>Before</span>
                                            <span className={styles.label}>After</span>
                                            <img src={item.combined} alt="Transformation journey" className={styles.image} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
