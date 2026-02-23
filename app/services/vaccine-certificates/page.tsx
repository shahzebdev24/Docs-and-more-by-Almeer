"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, ShieldCheck, Clock, ArrowRight, HelpCircle,
    Syringe, ShieldAlert, Award, Search, Info, Zap,
    FileText, Globe, HeartPulse, UserCheck
} from "lucide-react";

const vaccineServices = [
    {
        title: "Polio Vaccine Certificate",
        description: "Official Polio immunization certificate mandatory for international travelers from Pakistan.",
        icon: <HeartPulse className="w-8 h-8 text-white" />,
        features: ["Yellow Book Issuance", "NADRA Digital Record Support", "Airport Acceptance Guaranteed", "Travel Clearance Support"]
    },
    {
        title: "Corona (COVID-19) Certificate",
        description: "Standard computerized Corona vaccination certificate for international travel and hassan/visa compliance.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        features: ["Booster Record Updates", "Global QR Verification", "Passport Linking Service", "Digital & Hard Copy Assistance"]
    }
];

const faqs = [
    {
        question: "Is the Polio certificate mandatory for travel?",
        answer: "Yes, for many countries, especially in the Middle East and East Asia, an official Polio vaccination certificate (often called the Yellow Card) is mandatory for travelers departing from Pakistan."
    },
    {
        question: "How long is the Polio certificate valid?",
        answer: "Standard international Polio certificates are valid for 1 year from the date of vaccination."
    },
    {
        question: "Can you help update Corona records in NADRA?",
        answer: "If you have been vaccinated but the records are not appearing in the digital system, we can facilitate the communication with the relevant health desks for record updating."
    },
    {
        question: "Is the digital QR code accepted at airports?",
        answer: "Yes, the digital vaccine certificates with QR codes are globally recognized and accepted at all international airports and embassies."
    }
];

export default function VaccineCertificates() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="pt-[280px] md:pt-[320px] pb-24 bg-[#FDFBF7] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#006A70]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#B87333]/5 rounded-full blur-3xl"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Travel Health Compliance</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Vaccine <span className="text-[#B87333]">Certificates</span>
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Facilitating official Polio and Corona vaccine certificates required for
                                international travel and immigration. Secure your journey with verified health documentation.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Request Certificate
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white"
                        >
                            <Image
                                src="/ibcc-hero.png"
                                alt="Polio and Corona Vaccine Certificates"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vaccine Services Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Essential <span className="text-[#B87333]">Travel Health</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Official certificates accepted by all global airlines and embassies.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-12">
                    {vaccineServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-black text-[#006A70] mb-6 tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-lg mb-8">{service.description}</p>
                            <ul className="space-y-4">
                                {service.features.map((feat, idx) => (
                                    <li key={idx} className="flex gap-4 items-center text-[#36454F] font-bold">
                                        <CheckCircle className="w-6 h-6 text-[#B87333]" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Global Compliance Banner */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="lg:w-1/2">
                        <Globe className="w-16 h-16 text-[#B87333] mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Verified <span className="text-[#B87333]">Global Recognition</span></h2>
                        <p className="text-xl opacity-90 leading-relaxed mb-10">
                            Our certificate facilitation ensures that your vaccination records are
                            correctly synchronized with NADRA and linked to your passport.
                            Avoid last-minute denials at airports with verifiable QR-coded documents.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-center">
                                <span className="block text-2xl font-black text-[#B87333]">QR Scan</span>
                                <span className="text-xs uppercase font-bold opacity-60">Authentication</span>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-center">
                                <span className="block text-2xl font-black text-[#B87333]">100%</span>
                                <span className="text-xs uppercase font-bold opacity-60">Legality</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20">
                        <h3 className="text-2xl font-bold mb-6 text-[#B87333] uppercase tracking-tight">Compliance Tips</h3>
                        <ul className="space-y-6 text-lg font-medium">
                            <li className="flex gap-4">
                                <ShieldAlert className="text-[#B87333] shrink-0 mt-1" />
                                Always check the destination country's vaccine requirements 14 days before travel.
                            </li>
                            <li className="flex gap-4">
                                <ShieldAlert className="text-[#B87333] shrink-0 mt-1" />
                                Ensure your name matches exactly with your passport in the vaccination system.
                            </li>
                            <li className="flex gap-4">
                                <ShieldAlert className="text-[#B87333] shrink-0 mt-1" />
                                Keep both digital and scanned colored hard copies during travel.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Information Message */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-amber-50 p-12 rounded-[50px] border border-dashed border-amber-200 flex flex-col md:flex-row gap-8 items-center">
                        <Info className="w-16 h-16 text-amber-500 shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black text-amber-800 uppercase tracking-tight mb-4">Polio "Yellow Book" Notice</h4>
                            <p className="text-lg text-amber-900 font-medium leading-relaxed">
                                The physical international vaccination certificate (Yellow Card) is often
                                required by airlines at the check-in counter. We facilitate the issuance
                                of both the computerized and the traditional physical card for your
                                travel convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center tracking-tight">Vaccine <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Everything travelers need to know about certificates.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                            >
                                <div className="flex gap-4">
                                    <HelpCircle className="w-6 h-6 text-[#B87333] shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#006A70] mb-3 leading-tight">{faq.question}</h4>
                                        <p className="text-[#36454F] font-medium leading-relaxed opacity-80">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
            <Footer />
        </main>
    );
}

