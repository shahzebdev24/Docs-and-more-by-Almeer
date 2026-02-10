"use client"
import { motion, Variants, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Globe, Zap } from "lucide-react";

const stats = [
    { value: "14+", label: "Years", sub: "Since 2010", targetNumber: 14 },
    { value: "150k+", label: "Clients", sub: "Worldwide", targetNumber: 150 },
    { value: "99.9%", label: "Success", sub: "Rate", targetNumber: 99.9 },
    { value: "50+", label: "Embassies", sub: "Connected", targetNumber: 50 }
];

function AnimatedCounter({ target, suffix = "", isDecimal = false }: { target: number; suffix?: string; isDecimal?: boolean }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {isDecimal ? count.toFixed(1) : Math.floor(count)}
            {suffix}
        </span>
    );
}

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden pt-[280px] md:pt-[320px] pb-20"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006A70]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B87333]/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

            {/* Content */}
            <motion.div
                className="mx-auto w-[90%] md:w-[70%] relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="grid lg:grid-cols-12 items-center gap-20">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <motion.div variants={itemVariants}>
                            <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-6 block">
                                Pakistan's Premier Attestation Partner
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-[#006A70] mb-8 leading-none tracking-tighter italic">
                                Your Gateway to <span className="text-[#B87333] not-italic">Global</span> Mobility
                            </h1>
                            <p className="text-xl md:text-2xl text-[#36454F]/80 mb-12 leading-relaxed font-medium border-l-4 border-gray-100 pl-8">
                                Elite document legalization services for MOFA, HEC, embassies, and international
                                authorities. Trusted by 150,000+ global citizens since 2010.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-6 mb-12">
                                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-50">
                                    <CheckCircle className="w-6 h-6 text-[#B87333]" />
                                    <span className="font-black text-sm uppercase tracking-wider text-[#006A70]">ISO Certified</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-50">
                                    <Award className="w-6 h-6 text-[#B87333]" />
                                    <span className="font-black text-sm uppercase tracking-wider text-[#006A70]">Govt. Authorized</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-50">
                                    <Zap className="w-6 h-6 text-[#B87333]" />
                                    <span className="font-black text-sm uppercase tracking-wider text-[#006A70]">48h Express</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/contact"
                                    className="bg-[#00383C] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-[#B87333] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 group"
                                >
                                    Start Your Process
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    href="/services/mofa-attestation"
                                    className="bg-white text-[#00383C] border-2 border-[#00383C] px-12 py-6 rounded-full font-black text-xl hover:bg-[#00383C] hover:text-white transition-all shadow-lg"
                                >
                                    View Services
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 relative">
                        <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[20px] border-white group">
                            <Image
                                src="/hero-image.png"
                                alt="Professional MOFA and Embassy Attestation Services in Pakistan"
                                width={800}
                                height={1000}
                                priority
                                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00383C]/60 to-transparent"></div>

                            {/* Floating Trust Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl p-8 rounded-[30px] border border-white/20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-[#B87333] rounded-full flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-white font-black uppercase text-sm tracking-widest">Global Recognition</h4>
                                </div>
                                <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-loose">
                                    Accepted by embassies and authorities in 100+ countries worldwide.
                                </p>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B87333]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#006A70]/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>

                {/* Stats Bar with Animated Counters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                >
                    <div className="group">
                        <div className="text-4xl md:text-5xl font-black text-[#006A70] mb-2 group-hover:text-[#B87333] transition-colors">
                            <AnimatedCounter target={14} suffix="+" />
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B87333] mb-1">
                            Years
                        </div>
                        <div className="text-[10px] uppercase font-medium text-gray-400">
                            Since 2010
                        </div>
                    </div>

                    <div className="group">
                        <div className="text-4xl md:text-5xl font-black text-[#006A70] mb-2 group-hover:text-[#B87333] transition-colors">
                            <AnimatedCounter target={150} suffix="k+" />
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B87333] mb-1">
                            Clients
                        </div>
                        <div className="text-[10px] uppercase font-medium text-gray-400">
                            Worldwide
                        </div>
                    </div>

                    <div className="group">
                        <div className="text-4xl md:text-5xl font-black text-[#006A70] mb-2 group-hover:text-[#B87333] transition-colors">
                            <AnimatedCounter target={99.9} suffix="%" isDecimal />
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B87333] mb-1">
                            Success
                        </div>
                        <div className="text-[10px] uppercase font-medium text-gray-400">
                            Rate
                        </div>
                    </div>

                    <div className="group">
                        <div className="text-4xl md:text-5xl font-black text-[#006A70] mb-2 group-hover:text-[#B87333] transition-colors">
                            <AnimatedCounter target={50} suffix="+" />
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B87333] mb-1">
                            Embassies
                        </div>
                        <div className="text-[10px] uppercase font-medium text-gray-400">
                            Connected
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
