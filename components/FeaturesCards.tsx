"use client"
import { motion } from "framer-motion";
import { Users, Zap, DollarSign, Truck, Lock, Globe, CheckCircle } from "lucide-react";

const cards = [
    {
        title: "Institutional Expertise",
        description: "14+ years of specialized experience navigating MOFA, HEC, IBCC, and embassy protocols with direct departmental relationships.",
        icon: <Users className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Express Processing",
        description: "Priority channels for urgent cases with 24-48 hour attestation available through our VIP departmental access.",
        icon: <Zap className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Transparent Pricing",
        description: "All-inclusive rates with zero hidden fees. Clear quotations provided upfront with detailed timeline breakdowns.",
        icon: <DollarSign className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Nationwide Logistics",
        description: "Free pickup and delivery across all major Pakistani cities with insured courier partnerships and real-time tracking.",
        icon: <Truck className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Military-Grade Security",
        description: "Biometric vaults, 24/7 surveillance, and climate-controlled storage ensuring your original documents are absolutely protected.",
        icon: <Lock className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Global Embassy Network",
        description: "Direct facilitation with 50+ foreign embassies and consulates, ensuring seamless international attestation acceptance.",
        icon: <Globe className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    }
];

export default function FeaturesCards() {
    return (
        <section className="py-16 md:py-32 bg-transparent relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B87333]/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>

            <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Core Strengths</span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#006A70] tracking-tighter uppercase mb-8">
                        What Makes Us <span className="text-[#B87333]">Different</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                        Six pillars of excellence that have earned the trust of 150,000+ global citizens.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className={`${card.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-xl transform group-hover:bg-[#B87333] transition-all duration-500 group-hover:rotate-12`}>
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-6 uppercase tracking-tighter leading-none italic">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed mb-6">
                                {card.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#B87333] opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle className="w-4 h-4" />
                                Verified Excellence
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
