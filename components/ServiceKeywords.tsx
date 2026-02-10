"use client"
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServiceKeywords() {
    const categories = [
        {
            title: "Document Types",
            items: ["Degree & Transcripts", "Marriage Certificates", "Birth Certificates", "Divorce Certificates", "Police Clearance", "Power of Attorney", "Commercial Documents", "Experience Letters"]
        },
        {
            title: "Institutions We Cover",
            items: ["Ministry of Foreign Affairs (MOFA)", "HEC Pakistan", "IBCC Attestation", "Saudi Embassy", "UAE Embassy", "Qatar Embassy", "Apostille Certification", "Saudi Culture (Omsir)"]
        },
        {
            title: "Areas Served",
            items: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala"]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto w-[90%] md:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="text-[#006A70] text-xl font-black uppercase tracking-tighter italic mb-8 border-b-2 border-[#B87333]/20 pb-4">
                                {cat.title}
                            </h3>
                            <ul className="grid grid-cols-1 gap-4">
                                {cat.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-[#B87333]" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
