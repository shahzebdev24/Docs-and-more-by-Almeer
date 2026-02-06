"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    Zap, ShieldCheck, Globe, Clock, Search, Award,
    CheckCircle, Smartphone, FileCheck, Users,
    Headset, Target, TrendingUp, Lock
} from "lucide-react";

const coreFeatures = [
    {
        title: "Real-Time Document Tracking",
        description: "Monitor your document's journey through every government department with live GPS-enabled field updates and automated WhatsApp notifications.",
        icon: <Search className="w-8 h-8 text-white" />,
        details: [
            "Live portal dashboard access",
            "Automated status alerts via WhatsApp",
            "Field agent GPS tracking",
            "Estimated completion timeline"
        ]
    },
    {
        title: "Express Priority Processing",
        description: "Leverage our VIP channels for urgent cases requiring attestation within 24-48 hours through established departmental relationships.",
        icon: <Zap className="w-8 h-8 text-white" />,
        details: [
            "Same-day MOFA processing available",
            "Priority queue management",
            "Direct liaison with senior officials",
            "Emergency weekend processing"
        ]
    },
    {
        title: "Military-Grade Security",
        description: "Your original documents are stored in biometric-secured vaults with 24/7 CCTV surveillance and insured transit protocols.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        details: [
            "Biometric access control",
            "Climate-controlled storage",
            "Insured courier partnerships",
            "Zero data breach history"
        ]
    },
    {
        title: "Global Embassy Network",
        description: "Direct facilitation with 50+ foreign embassies and consulates across Pakistan for seamless international attestation.",
        icon: <Globe className="w-8 h-8 text-white" />,
        details: [
            "Saudi Embassy & Culture Office",
            "UAE, Qatar, Oman liaison",
            "European consulate coordination",
            "US & UK attestation support"
        ]
    },
    {
        title: "24/7 Concierge Support",
        description: "Dedicated case managers available around the clock to guide you through complex legal requirements and answer queries.",
        icon: <Headset className="w-8 h-8 text-white" />,
        details: [
            "Personal case manager assignment",
            "Multi-language support team",
            "Video consultation available",
            "Instant query resolution"
        ]
    },
    {
        title: "Quality Assurance Protocol",
        description: "Multi-point verification system ensuring every seal, stamp, and signature meets international embassy standards before delivery.",
        icon: <CheckCircle className="w-8 h-8 text-white" />,
        details: [
            "Triple-verification process",
            "Embassy standard compliance",
            "Digital backup archiving",
            "Lifetime re-verification support"
        ]
    }
];

const stats = [
    { value: "99.9%", label: "Accuracy Rate", sub: "Zero Rejections" },
    { value: "150k+", label: "Documents Processed", sub: "Since 2010" },
    { value: "48h", label: "Express Service", sub: "Available" },
    { value: "50+", label: "Embassy Partners", sub: "Worldwide" }
];

export default function KeyFeaturesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="pt-[280px] md:pt-[320px] pb-32 bg-[#FDFBF7] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006A70]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B87333]/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-6 block">What Sets Us Apart</span>
                        <h1 className="text-6xl md:text-9xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic">
                            Elite <span className="text-[#B87333] not-italic">Features</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#36454F]/80 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
                            We've engineered a high-tech legal ecosystem designed to handle your most
                            sensitive paperwork with the precision and care it deserves.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Banner */}
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

            {/* Core Features Grid */}
            <section className="py-32 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-24">
                        <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Infrastructure</span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#006A70] tracking-tighter uppercase italic mb-8">
                            The <span className="text-[#B87333] not-italic">Almeer</span> Advantage
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                            Six pillars of excellence that make us Pakistan's most trusted attestation partner.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {coreFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-20 h-20 bg-[#006A70] rounded-[2rem] flex items-center justify-center mb-10 shadow-xl group-hover:bg-[#B87333] transition-colors duration-500 transform group-hover:rotate-12">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-[#006A70] mb-6 uppercase tracking-tighter leading-none italic">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <div className="space-y-3 border-t border-gray-100 pt-8">
                                    {feature.details.map((detail, idx) => (
                                        <div key={idx} className="flex gap-3 items-center text-sm font-bold text-[#36454F]">
                                            <CheckCircle className="w-4 h-4 text-[#B87333] shrink-0" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Innovation Section */}
            <section className="py-32 bg-[#00383C] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#B87333]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Lock className="w-20 h-20 text-[#B87333] mb-10" />
                            <h2 className="text-5xl font-black mb-8 italic tracking-tighter leading-none">
                                Technology Meets <span className="text-[#B87333] not-italic">Trust</span>
                            </h2>
                            <p className="text-xl opacity-90 leading-relaxed font-medium mb-12">
                                Our proprietary document management system combines cutting-edge technology
                                with human expertise to deliver unmatched accuracy and speed.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="border border-white/10 p-8 rounded-[40px] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                    <TrendingUp className="w-10 h-10 text-[#B87333] mb-6" />
                                    <h4 className="font-black text-lg mb-2">AI-Powered Routing</h4>
                                    <p className="text-sm opacity-60 font-medium">Intelligent document routing based on destination requirements.</p>
                                </div>
                                <div className="border border-white/10 p-8 rounded-[40px] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                    <Target className="w-10 h-10 text-[#B87333] mb-6" />
                                    <h4 className="font-black text-lg mb-2">Predictive Analytics</h4>
                                    <p className="text-sm opacity-60 font-medium">Accurate timeline predictions using historical data.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[50px] border border-white/10 shadow-2xl">
                                <h3 className="text-3xl font-black mb-10 tracking-tighter text-[#B87333]">Why Clients Choose Us</h3>
                                <div className="space-y-8">
                                    {[
                                        "Direct High-Level Departmental Access",
                                        "Pre-Submission Document Audit",
                                        "Multilingual Embassy Coordination",
                                        "Lifetime Document Re-Verification"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <CheckCircle className="w-6 h-6 text-[#B87333] shrink-0 mt-1" />
                                            <p className="text-lg font-bold">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
            <Footer />
        </main>
    );
}
