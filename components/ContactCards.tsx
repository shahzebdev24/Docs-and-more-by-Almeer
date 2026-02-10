"use client"
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
    {
        title: "Call Us",
        detail: "0312-2373233",
        subDetail: "Mon-Fri 9AM-6PM",
        icon: <Phone className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Email Us",
        detail: "docsandmorebyalmeer@gmail.com",
        subDetail: "24/7 Support",
        icon: <Mail className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    },
    {
        title: "Sharah-e-Faisal Office",
        detail: "Office No. 6/7, S.M.C.H.S., Block-B",
        subDetail: "Shahrah-e-Faisal, Karachi",
        icon: <MapPin className="w-8 h-8 text-white" />,
        color: "bg-[#006A70]"
    }
];

export default function ContactCards() {
    return (
        <section className="pb-24 pt-12 bg-white">
            <div className="mx-auto w-[90%] md:w-[75%] lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_-12px_rgba(184,115,51,0.15)] transition-all duration-300 cursor-pointer h-full"
                        >
                            <div className={`${card.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#006A70]/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4">
                                {card.title}
                            </h3>
                            <p className="text-lg font-bold text-[#B87333] mb-2 leading-tight">
                                {card.detail}
                            </p>
                            <p className="text-sm text-[#36454F] font-medium opacity-80">
                                {card.subDetail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
