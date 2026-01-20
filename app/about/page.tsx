import React from 'react';
import { Card } from '@/components/ui/Card';
import { Target, Users, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 pb-12">
            {/* Hero */}
            <section className="relative py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black italic mb-8">
                        MORE THAN A <span className="text-cyan-400">GYM</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Elev8 Performance was born from a simple belief: everyone deserves the tools and guidance usually reserved for professional athletes. We are a sanctuary for those who refuse to settle for average.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <Target className="text-cyan-400 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Pecision</h3>
                        <p className="text-slate-400">We don't guess. We assess. Every program is built on data and biomechanics.</p>
                    </Card>
                    <Card>
                        <Users className="text-teal-400 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
                        <p className="text-slate-400">Surround yourself with driven individuals who push each other to be better.</p>
                    </Card>
                    <Card>
                        <Heart className="text-purple-400 w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Passion</h3>
                        <p className="text-slate-400">We live this. Our coaches are lifelong students of human performance.</p>
                    </Card>
                </div>
            </section>

            {/* Story/Team Section Placeholder */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="w-full h-96 bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors" />
                            <p className="text-slate-500 font-mono text-sm">[ TEAM PHOTO PLACEHOLDER ]</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR <span className="text-gradient">STORY</span></h2>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Founded in 2024, Elev8 began as a small garage training facility. Today, we stand as a beacon of high-performance training, helping hundreds of members transform their physiques and mentalities.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            We aren't here to hold your hand. We're here to hand you the blueprint to success and push you until you build it.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
