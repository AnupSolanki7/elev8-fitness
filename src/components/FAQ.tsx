'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "Is the app free to use?",
        answer: "We offer a free version with basic features. To unlock personalized plans and advanced analytics, you can upgrade to Premium."
    },
    {
        question: "Can I connect my smart watch?",
        answer: "Yes! We support Apple Watch, Garmin, and Fitbit integration to sync your workouts and health data seamlessly."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Absolutely. There are no long-term contracts, and you can cancel your subscription from your account settings at any time."
    },
    {
        question: "Do you offer nutrition plans?",
        answer: "Yes, our Premium plan includes personalized nutrition advice and meal planning tools tailored to your fitness goals."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    FAQs
                </motion.h2>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`${styles.accordionItem} ${activeIndex === index ? styles.open : ''}`}>
                            <button className={styles.accordionButton} onClick={() => toggle(index)}>
                                {faq.question}
                                <ChevronDown className={styles.icon} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={styles.accordionContent}
                                    >
                                        <div className={styles.answerInner}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
