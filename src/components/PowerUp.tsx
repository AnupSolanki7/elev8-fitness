'use client';

import styles from './PowerUp.module.css';

export default function PowerUp() {
    return (
        <section className={styles.section}>
            <div className={styles.track}>
                {/* Repeating text for continuous loop */}
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
                <span className={styles.text}>Power Up! 💪</span>
            </div>
        </section>
    );
}
