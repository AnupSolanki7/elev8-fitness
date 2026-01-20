import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black italic mb-6">GET IN <span className="text-cyan-400">TOUCH</span></h1>
                    <p className="text-xl text-slate-400">Ready to start? Have questions? We're here to help.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">First Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Last Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email Address</label>
                                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Your Goal</label>
                                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors">
                                    <option>Muscle Gain</option>
                                    <option>Weight Loss</option>
                                    <option>Athletic Performance</option>
                                    <option>General Health</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Message</label>
                                <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Tell us about yourself..." />
                            </div>

                            <Button className="w-full flex items-center justify-center gap-2">
                                SEND MESSAGE <Send size={18} />
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Visit Us</h4>
                                        <p className="text-slate-400">123 Performance Way<br />Fitness City, ST 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Call Us</h4>
                                        <p className="text-slate-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Email Us</h4>
                                        <p className="text-slate-400">hello@elev8performance.com</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono">
                                [ GOOGLE MAPS PLACEHOLDER ]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
