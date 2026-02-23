"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    Users, Target, Award, ShieldCheck, Globe,
    Clock, Rocket, Eye, CheckCircle, ChevronRight,
    Handshake, Scale, Quote
} from "lucide-react";

const stats = [
    { label: "Years of Trust", value: "14+", sub: "Since 2010" },
    { label: "Global Clients", value: "150k+", sub: "Worldwide" },
    { label: "Departments", value: "25+", sub: "Govt. Liaison" },
    { label: "Accuracy Rate", value: "99.9%", sub: "Zero Rejections" },
];

const values = [
    {
        title: "Absolute Integrity",
        description: "In a world of complex bureaucracy, honesty is our cornerstone. We provide realistic timelines and transparent fee structures with no hidden costs.",
        icon: <Scale className="w-8 h-8 text-white" />
    },
    {
        title: "Operational Excellence",
        description: "Our proprietary document management system ensures that every stamp, seal, and signature is verified multiple times before delivery.",
        icon: <Target className="w-8 h-8 text-white" />
    },
    {
        title: "Unmatched Security",
        description: "We handle your original identity documents with the sanctity they deserve, using secure vaults and insured specialized transit services.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    }
];

export default function AboutUs() {
    return (
        <main className="bg-white">
            {/* Premium Hero Section */}
            <section className="pt-[280px] md:pt-[320px] pb-32 bg-[#FDFBF7] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006A70]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <motion.div
                            className="lg:col-span-12 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-8 block">Defining Excellence Since 2010</span>
                            <h1 className="text-6xl md:text-9xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic">
                                Our <span className="text-[#B87333] not-italic">Identity</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#36454F]/80 font-medium max-w-4xl mx-auto leading-relaxed border-t border-gray-100 pt-10">
                                Docs & More by Almeer is more than an attestation agency; we are the bridge
                                to your global future. For over a decade, we have redefined the
                                standards of document legalisation in Pakistan through innovation,
                                speed, and unwavering ethics.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats - Premium Banner */}
            <section className="bg-white py-20 border-y border-gray-50">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="text-4xl md:text-6xl font-black text-[#006A70] mb-2">{stat.value}</div>
                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B87333] mb-1">{stat.label}</div>
                            <div className="text-[10px] uppercase font-medium text-gray-400">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Founder's Vision / Leadership Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative h-[600px] rounded-[50px] overflow-hidden shadow-2xl border-[15px] border-white z-10"
                            >
                                <Image
                                    src="/key-features-img.png"
                                    alt="Leadership at Docs & More"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#B87333] rounded-[40px] -z-0 opacity-10 blur-3xl"></div>
                        </div>

                        <div className="lg:col-span-7">
                            <Quote className="w-16 h-16 text-[#B87333]/20 mb-8" />
                            <h2 className="text-5xl font-black text-[#006A70] mb-8 leading-none tracking-tighter uppercase italic">
                                The Almeer <span className="text-[#B87333] not-italic">Legacy</span>
                            </h2>
                            <p className="text-2xl text-[#36454F] font-bold leading-relaxed mb-10 italic">
                                "The complexity of paperwork should never stand in the way of a brilliant career,
                                a family reunion, or a life-changing study opportunity."
                            </p>
                            <div className="space-y-8 text-lg font-medium text-gray-600 leading-relaxed">
                                <p>
                                    At Docs & More by Almeer, we believe that trust is earned through every
                                    successfully attested document. Our journey began with a simple observation:
                                    the traditional attestation landscape in Pakistan was fragmented, slow,
                                    and lacked transparency.
                                </p>
                                <p>
                                    We set out to change that by building a system where technology meets
                                    personal care. Today, we are proud to be the premier facilitator for
                                    thousands of overseas Pakistanis and international professionals.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-6">
                                <div className="h-[1px] w-20 bg-[#B87333]"></div>
                                <div className="text-sm font-black uppercase tracking-widest text-[#006A70]">Founder & Managing Director</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Modern Grid */}
            <section className="py-32 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-24">
                    <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our DNA</span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#006A70] tracking-tighter uppercase italic">The Values That <span className="text-[#B87333] not-italic">Drive Us</span></h2>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -20 }}
                            className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-[#006A70] rounded-[2rem] flex items-center justify-center mb-10 shadow-xl group-hover:bg-[#B87333] transition-colors duration-500 transform group-hover:rotate-12">
                                {v.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-6 uppercase tracking-tighter leading-none italic">{v.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-lg italic">"{v.description}"</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why We Are Different */}
            <section className="py-32 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-[#00383C] p-16 md:p-24 rounded-[80px] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B87333]/10 rounded-full blur-[100px] -mr-64 -mt-64"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                            <div>
                                <h2 className="text-5xl font-black mb-10 tracking-tighter leading-none italic uppercase">
                                    The <span className="text-[#B87333] not-italic underline underline-offset-8">Difference</span>
                                </h2>
                                <p className="text-xl text-white/70 font-medium leading-relaxed mb-12">
                                    Unlike generic agencies, we operate as a legal facilitation consultancy.
                                    Our depth of knowledge within the Ministry of Foreign Affairs and
                                    Foreign Embassies allows us to handle cases that others find impossible.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Direct High-Level Departmental Liaison",
                                        "Daily Physical Tracking in Capitals",
                                        "Pre-verification Audit of Scan Copies",
                                        "Multilingual Support for Foreign Embassies"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center font-black uppercase tracking-widest text-xs text-[#B87333]">
                                            <CheckCircle className="w-5 h-5" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                                    <Globe className="w-12 h-12 text-[#B87333] mb-8" />
                                    <h4 className="text-xl font-black uppercase leading-tight">Global Network</h4>
                                    <p className="text-sm opacity-60 font-medium mt-4 italic">Connecting Pakistan to North America, EU, and the Middle East.</p>
                                </div>
                                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                                    <Handshake className="w-12 h-12 text-[#B87333] mb-8" />
                                    <h4 className="text-xl font-black uppercase leading-tight">Institutional Trust</h4>
                                    <p className="text-sm opacity-60 font-medium mt-4 italic">Preferred verification partner for major corporate recruiters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need expert guidance message */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-[#FDFBF7] p-12 md:p-20 rounded-[80px] border border-gray-100 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#006A70]"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic uppercase">
                            Experience the <span className="text-[#B87333] not-italic">Standard</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-12">
                            Join over 150,000 global citizens who trusted Almeer Legacy with their most valuable documents.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#00383C] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-[#B87333] transition-all shadow-xl hover:-translate-y-2 flex items-center gap-4 group">
                                Start Your Process
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/services/mofa-attestation" className="bg-white text-[#00383C] border-2 border-[#00383C] px-12 py-6 rounded-full font-black text-xl hover:bg-[#00383C] hover:text-white transition-all">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

