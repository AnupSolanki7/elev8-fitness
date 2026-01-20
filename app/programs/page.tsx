import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check } from 'lucide-react';

export default function ProgramsPage() {
    const programs = [
        {
            name: "HYPERTROPHY",
            price: "$149",
            period: "/month",
            description: "Build lean muscle and strength with scientifically programmed volume and intensity.",
            features: ["4x Weekly Sessions", "Custom Nutrition Plan", "Form Analysis", "App Access"],
            color: "cyan"
        },
        {
            name: "ATHLETE",
            price: "$199",
            period: "/month",
            description: "Explosive power, speed, and agility training for competitive field sport athletes.",
            features: ["5x Weekly Sessions", "Performance Testing", "Recovery Protocols", "1-on-1 Check-ins"],
            popular: true,
            color: "teal"
        },
        {
            name: "LIFESTYLE",
            price: "$99",
            period: "/month",
            description: "Sustainable fitness for busy professionals who want to look and feel their best.",
            features: ["3x Weekly Sessions", "Flexible Schedule", "Nutritional Guidance", "Community Support"],
            color: "slate"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="text-center px-4 mb-20">
                <h1 className="text-5xl md:text-7xl font-black italic mb-6">CHOOSE YOUR <span className="text-gradient">PATH</span></h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Whether you're training for a championship or life itself, we have a program engineered for your goals.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program, idx) => (
                    <Card key={idx} className={`relative flex flex-col ${program.popular ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,212,255,0.15)]' : ''}`}>
                        {program.popular && (
                            <div className="absolute top-0 right-0 bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl uppercase">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-black italic tracking-wider mb-2">{program.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">{program.price}</span>
                                <span className="text-slate-500">{program.period}</span>
                            </div>
                            <p className="text-slate-400 mt-4 h-20">{program.description}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {program.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <Check size={16} className={`text-${program.color === 'slate' ? 'cyan' : program.color}-400`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={program.popular ? 'primary' : 'outline'}
                            className="w-full uppercase tracking-wider"
                        >
                            Join {program.name}
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
