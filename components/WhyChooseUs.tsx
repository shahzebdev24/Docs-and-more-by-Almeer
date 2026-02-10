"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

const advantages = [
    {
        icon: <MapPin className="w-6 h-6 text-[#B87333]" />,
        title: "Strategic Karachi Location",
        description: "Minutes from MOFA, embassies, and federal departments for rapid processing."
    },
    {
        icon: <Users className="w-6 h-6 text-[#B87333]" />,
        title: "Dedicated Case Managers",
        description: "Personal expert assigned to guide you through every step of the process."
    },
    {
        icon: <Award className="w-6 h-6 text-[#B87333]" />,
        title: "14+ Years of Excellence",
        description: "Trusted legacy since 2010 with zero rejection track record."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-[#B87333]" />,
        title: "Transparent Pricing",
        description: "No hidden fees, clear timelines, and honest communication always."
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#006A70]/5 rounded-full blur-[120px] -ml-64 -mt-64"></div>

            <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-20">

                    {/* Image Side */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[20px] border-white group">
                            <Image
                                src="/Whychosseus.png"
                                alt="Best Document Attestation Company in Pakistan - Docs & More"
                                width={1200}
                                height={1400}
                                className="w-full h-[700px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00383C]/60 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#B87333]/10 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[#B87333] font-black tracking-[0.4em] uppercase text-xs mb-6 block underline decoration-2 underline-offset-8">
                            The Almeer Difference
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic uppercase">
                            Why <span className="text-[#B87333] not-italic">150,000+</span> Trust Us
                        </h2>
                        <p className="text-xl text-[#36454F]/80 font-medium leading-relaxed mb-12 border-l-4 border-gray-100 pl-8">
                            We're not just another attestation agency. We're a legal facilitation consultancy
                            with deep institutional relationships, cutting-edge technology, and an unwavering
                            commitment to your success.
                        </p>

                        {/* Advantages Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {advantages.map((adv, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-50 group-hover:bg-[#006A70] transition-all duration-500">
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {adv.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-[#006A70] mb-2 uppercase tracking-tight group-hover:text-[#B87333] transition-colors">
                                            {adv.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            {adv.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Trust Points */}
                        <div className="mt-12 p-8 bg-[#FDFBF7] rounded-[40px] border border-gray-50">
                            <h4 className="text-sm font-black uppercase tracking-widest text-[#006A70] mb-6">
                                What Sets Us Apart
                            </h4>
                            <div className="space-y-4">
                                {[
                                    "Direct high-level departmental access at MOFA & HEC",
                                    "Nationwide pickup & delivery across all major cities",
                                    "International client support with remote facilitation",
                                    "Real-time tracking with WhatsApp status updates"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-[#B87333] shrink-0 mt-0.5" />
                                        <p className="text-sm font-bold text-gray-600">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
