"use client"
import { motion } from "framer-motion";

const detailedCards = [
    {
        title: "Free Pickup & Delivery",
        description: "We provide free pickup and delivery across Pakistan, making the attestation process fast, secure, and convenient for our clients. You can also courier your documents to us from any city in Pakistan, and our team will handle the complete process from collection to delivery with care and reliability.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        color: "bg-[#005f60]"
    },
    {
        title: "Global Coverage",
        description: "We support attestation for documents issued in 150+ countries – including India, UK, USA, Canada, Australia, and more.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        color: "bg-[#B87333]"
    },
    {
        title: "Expert Handling",
        description: "Our experienced and licensed team understands all country-specific attestation requirements, including those from embassies, consulates, and the Ministry of Foreign Affairs (MOFA). We handle every step carefully to prevent delays, rejections, or errors, ensuring a smooth and reliable attestation process.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        color: "bg-[#B87333]"
    },
    {
        title: "Clear Pricing",
        description: "We believe in complete transparency. Get a clear, all-inclusive quote before you start — with no hidden fees, extra charges, or surprises. What you see is exactly what you pay.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: "bg-[#B87333]"
    },
    {
        title: "Fast Turnaround",
        description: "We understand that time is crucial. Our team ensures quick and efficient processing for all document types, keeping you updated at every stage. Clients consistently appreciate our speed, transparency, and 100% satisfaction guarantee — making us a trusted choice for urgent attestation needs.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        color: "bg-[#B87333]"
    },
    {
        title: "Friendly Support",
        description: "Our multilingual support team (English, Urdu & more) is available 7 days a week to assist you at every step of your attestation journey. Whether you have a quick question or need detailed guidance, we're always ready to help — friendly, responsive, and professional.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        color: "bg-[#B87333]"
    }
];

export default function DetailedFeatures() {
    return (
        <section className="pb-24 bg-white">
            <div className="mx-auto w-[90%] md:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                y: { type: "spring", stiffness: 300, damping: 20 },
                                scale: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-emerald-50/30 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer h-full"
                        >
                            <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#B87333]/15 transition-all duration-500 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#006A70] mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-[#36454F] leading-relaxed text-base group-hover:text-[#B87333] transition-colors font-medium">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
