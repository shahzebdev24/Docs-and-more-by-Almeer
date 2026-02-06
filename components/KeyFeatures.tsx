"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Zap, ShieldCheck, Globe, Clock,
    Search, Award, CheckCircle, Smartphone
} from "lucide-react";

const features = [
    {
        title: "Digital Live Tracking",
        description: "Real-time updates on your document's status through our integrated tracking portal and automated WhatsApp alerts.",
        icon: <Search className="w-6 h-6 text-[#B87333]" />
    },
    {
        title: "Express 48h Processing",
        description: "Priority channels for urgent cases needing MOFA or Embassy attestation within record-breaking timelines.",
        icon: <Zap className="w-6 h-6 text-[#B87333]" />
    },
    {
        title: "Confidentiality First",
        description: "Proprietary secure handling protocols to ensure your original identity documents are protected 24/7.",
        icon: <ShieldCheck className="w-6 h-6 text-[#B87333]" />
    },
    {
        title: "24/7 Concierge Support",
        description: "Dedicated case managers available around the clock to guide you through complex legal requirements.",
        icon: <Smartphone className="w-6 h-6 text-[#B87333]" />
    }
];

export default function KeyFeatures() {
    return (
        <section id="key-features" className="py-32 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006A70]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

            <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-20">

                    {/* Left Side: Content & List */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-6 block underline decoration-2 underline-offset-8">Distinction in Service</span>
                            <h2 className="text-5xl md:text-7xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic uppercase">
                                Elite <span className="text-[#B87333] not-italic">Infrastructure</span>
                            </h2>
                            <p className="text-xl text-[#36454F]/80 font-medium leading-relaxed mb-16 max-w-2xl border-l-4 border-gray-100 pl-8">
                                We've built more than just a service; we've built a high-tech legal ecosystem
                                designed to handle your most sensitive paperwork with the precision of a Swiss watch.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group"
                                    >
                                        <div className="flex gap-6">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-50 group-hover:bg-[#006A70] transition-all duration-500 transform group-hover:rotate-12">
                                                <div className="group-hover:text-white transition-colors duration-500">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-[#006A70] mb-3 uppercase tracking-tighter italic group-hover:text-[#B87333] transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-500 font-medium leading-relaxed italic text-sm group-hover:text-gray-800 transition-colors">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Premium Image Layout */}
                    <motion.div
                        className="lg:col-span-12 xl:col-span-5 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[20px] border-white group">
                            <Image
                                src="/key-features-img.png"
                                alt="Elite Document Management"
                                width={800}
                                height={1000}
                                className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00383C]/60 to-transparent"></div>

                            {/* Floating Card on Image */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl p-8 rounded-[30px] border border-white/20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-[#B87333] rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-white font-black uppercase text-sm tracking-widest">ISO Certified Handling</h4>
                                </div>
                                <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-loose">
                                    Trusted by major corporate recruiters and international legal firms.
                                </p>
                            </motion.div>
                        </div>

                        {/* Decorative floating dots or accents */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B87333]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#006A70]/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
