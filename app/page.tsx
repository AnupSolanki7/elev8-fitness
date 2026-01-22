import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Dumbbell, Timer, Zap, Trophy, Users, Brain, Activity, Quote, Star, Instagram, Linkedin, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[70vh] bg-gradient-to-l from-cyan-900/20 to-transparent blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50vh] bg-gradient-to-r from-teal-900/20 to-transparent blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                ELEV8 YOUR <br />
                <span className="text-gradient">PERFORMANCE</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Unlock your true potential with science-based training, elite coaching, and a community driven by results. The only limit is the one you set.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="w-full sm:w-auto">START YOUR JOURNEY</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">VIEW PROGRAMS</Button>
              </div>
            </div>

            <div className="flex-1 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <Zap size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- PHILOSOPHY (HEART TO HEART) ------------------- */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="text-cyan-400 w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">HEART TO <span className="text-cyan-400">HEART</span></h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Elev8 is more than just a gym—it's a global fitness community simplifying performance for everyone. Whether you're a seasoned athlete or just starting, we use data-driven <strong>Bio-Metrics</strong> to discover the best in you.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            People's experience is the <span className="text-cyan-400 font-bold">HEART</span> of Elev8. We believe in building a connection between your mind, body, and the community around you.
          </p>
        </div>
      </section>

      {/* ------------------- FEATURES (BIO SCALE) ------------------- */}
      <section className="py-24 bg-[#0a2a3a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR <span className="text-gradient">ECOSYSTEM</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A simple way to a personalized fitness journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 text-cyan-400">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Group Workouts</h3>
              <p className="text-sm text-slate-400">Pump it up with workout buddies who are just as fitness-savvy as you.</p>
            </Card>

            <Card className="p-6 text-center hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center mb-4 text-teal-400">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bio Scale</h3>
              <p className="text-sm text-slate-400">Access your body stats with the ultimate tool for precise tracking.</p>
            </Card>

            <Card className="p-6 text-center hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 text-purple-400">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wellness Wisdom</h3>
              <p className="text-sm text-slate-400">Discover the secrets to a healthier you with bite-sized wellness wisdom.</p>
            </Card>

            <Card className="p-6 text-center hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center mb-4 text-pink-400">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Leaderboard</h3>
              <p className="text-sm text-slate-400">Stay motivated with our dynamic live leaderboard, igniting your spirit.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------- PROGRAMS PREVIEW (START YOUR JOURNEY) ------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#051923] via-[#08202d] to-[#051923] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">START YOUR <span className="text-cyan-400">JOURNEY</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "HYPERTROPHY", subtitle: "Build Muscle", desc: "For those looking to gain size and strength.", link: "/programs" },
              { title: "ATHLETE", subtitle: "Performance", desc: "Explosive power & agility training.", link: "/programs" },
              { title: "LIFESTYLE", subtitle: "General Health", desc: "Sustainable fitness for busy professionals.", link: "/programs" }
            ].map((prog, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{prog.title}</h3>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4">{prog.subtitle}</p>
                <p className="text-slate-400 mb-8">{prog.desc}</p>
                <Link href={prog.link} className="inline-flex items-center gap-2 text-white font-bold group-hover:text-cyan-400 transition-colors">
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- REAL RESULTS (TRANSFORMATIONS) ------------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">REAL <span className="text-gradient">RESULTS</span></h2>
            <p className="text-slate-400">See what happens when you commit to the process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "David K.", loss: "-25 lbs", gain: "+8 lbs Lean Muscle", time: "12 Weeks", desc: "Completely recomposed his physique for his wedding." },
              { name: "Sarah M.", loss: "-18% Body Fat", gain: "2x Strength", time: "6 Months", desc: "From desk job posture to deadlifting 200lbs." },
              { name: "James R.", loss: "-40 lbs", gain: "Marathon Ready", time: "8 Months", desc: "Reclaimed his health and vitality at age 45." }
            ].map((item, i) => (
              <Card key={i} className="p-0 overflow-hidden border-none bg-transparent group">
                {/* Simple Image Split - Grayscale to Color on Hover */}
                <div className="relative h-64 w-full flex grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="w-1/2 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                  </div>
                  <div className="w-1/2 bg-slate-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 to-transparent" />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-cyan-400 text-sm font-medium bg-cyan-900/10 px-2 py-1 rounded">{item.time}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[40px]">{item.desc}</p>

                  <div className="flex items-center gap-6 text-sm border-t border-white/5 pt-4">
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">Lost</span>
                      <span className="font-bold text-white">{item.loss}</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">Gained</span>
                      <span className="font-bold text-white">{item.gain}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- CLIENT TESTIMONIALS (MEET THE COMMUNITY) ------------------- */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">MEET THE <span className="text-cyan-400">COMMUNITY</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Program Manager", quote: "I've tried every gym in the city. Elev8 is different. The coaches actually care about your form and progress.", result: "Lost 15lbs, Gained Confidence" },
              { name: "Mike T.", role: "Entrepreneur", quote: "The structure I needed. The 6am crew pushes me harder than I ever would on my own.", result: "2x Strength Increase" },
              { name: "Elena R.", role: "Marathon Runner", quote: "Came here for strength training to support my running. My race times have never been better.", result: "PR Marathon Time" }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex text-cyan-400 mb-4 gap-1">
                    {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <Quote className="text-slate-600 mb-4 transform scale-x-[-1]" size={40} />
                  <p className="text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div>
                  <div className="w-full h-px bg-white/10 mb-4" />
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{testimonial.result}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- MEET OUR TEAM ------------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MEET THE <span className="text-gradient">TEAM</span></h2>
            <p className="text-slate-400">Learn from the best in the industry.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Sterling", role: "Head Coach", spec: "Hypertrophy" },
              { name: "Maria Rodriguez", role: "Nutritionist", spec: "Performance Diet" },
              { name: "Jayce Davidson", role: "Speed Coach", spec: "Athletics" },
              { name: "Chloe Kim", role: "Mobility Specialist", spec: "Recovery" }
            ].map((coach, i) => (
              <div key={i} className="group relative">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051923] to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-xs">
                    [PHOTO]
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-2">{coach.role}</p>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <Instagram size={18} className="text-slate-400 hover:text-white cursor-pointer" />
                      <Linkedin size={18} className="text-slate-400 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- CTA SECTION ------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">ASCEND?</span></h2>
          <p className="text-xl text-slate-300 mb-10">
            Your future self is waiting. Don't let another day pass without taking action towards the strongest version of you.
          </p>
          <Button size="lg" className="shadow-[0_0_40px_rgba(0,212,255,0.4)]">CLAIM YOUR FREE TRIAL</Button>
        </div>
      </section>
    </div>
  );
}
