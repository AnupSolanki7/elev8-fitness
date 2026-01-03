"use client";

import { motion } from "framer-motion";
import Image from "./Image";

const team = [
    {
        name: "Head Coach",
        role: "Founder & Personal Trainer",
    },
    {
        name: "Assistant Coach",
        role: "Strength & Conditioning",
    },
    {
        name: "Nutrition Coach",
        role: "Diet & Lifestyle Expert",
    },
];

export default function Team() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">
                    Meet Our Team
                </h2>

                <p className="mt-4 text-center text-[var(--color-muted)] max-w-2xl mx-auto">
                    A dedicated team focused on performance, discipline, and results.
                </p>

                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            {/* Image placeholder */}``
                            <Image src="/images/testimonial.jpg" alt="testimonial" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm text-[var(--color-muted)]">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
