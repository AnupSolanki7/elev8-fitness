"use client";

import { motion } from "framer-motion";

const journeys = [
    {
        name: "Client A",
        duration: "16 Weeks Transformation",
        result: "Lost 12kg fat • Gained muscle • Improved strength",
    },
    {
        name: "Client B",
        duration: "12 Weeks Transformation",
        result: "Fat loss • Better posture • Increased endurance",
    },
];

export default function TransformationJourney() {
    return (
        <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">
                    Transformation Journeys
                </h2>

                <p className="mt-4 text-center text-[var(--color-muted)] max-w-3xl mx-auto">
                    Real people. Real discipline. Real results.
                </p>

                <div className="mt-16 space-y-16">
                    {journeys.map((j, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Before / After */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-72 rounded-xl bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center text-sm text-muted">
                                    Before
                                </div>
                                <div className="h-72 rounded-xl bg-neutral-400 dark:bg-neutral-600 flex items-center justify-center text-sm text-muted">
                                    After
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <h3 className="text-2xl font-semibold">{j.name}</h3>
                                <p className="mt-2 text-sm text-[var(--color-muted)]">
                                    {j.duration}
                                </p>

                                <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
                                    {j.result}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
