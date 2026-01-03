"use client";

import { motion } from "framer-motion";
import Image from "./Image";

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Body Transformation Client",
        quote:
            "ELEV8 completely changed my lifestyle. The coaching was structured, disciplined, and results-driven.",
    },
    {
        name: "Ankit Verma",
        role: "Online Coaching Client",
        quote:
            "I lost fat, gained confidence, and finally understood how fitness actually works.",
    },
    {
        name: "Priya Sharma",
        role: "Personal Training Client",
        quote:
            "The accountability and support made all the difference. Highly recommended.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">
                    What Our Clients Say
                </h2>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-[var(--color-background)]"
                        >
                            <p className="text-[var(--color-muted)] leading-relaxed">
                                “{t.quote}”
                            </p>

                            <div className="mt-6">
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-sm text-[var(--color-muted)]">
                                    {t.role}
                                </p>
                            </div>
                            <Image src="/images/testimonial.jpg" alt="testimonial" className="w-full h-64 object-cover rounded-lg mt-4" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
