"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Globe, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark,
    MapPin, ClipboardCheck, Info, Search,
    FileText, UserCheck, Zap, Award, Languages
} from "lucide-react";

const embassies = [
    { name: "Saudi Arabia", details: "Includes Saudi Embassy & Saudi Culture (Sacm) attestation.", icon: <span className="text-2xl">🇸🇦</span> },
    { name: "United Arab Emirates", details: "MoFA & UAE Embassy attestation for all documents.", icon: <span className="text-2xl">🇦🇪</span> },
    { name: "Qatar", details: "Official Qatar Embassy legalisation services.", icon: <span className="text-2xl">🇶🇦</span> },
    { name: "Oman", details: "Oman Embassy attestation for work and family visas.", icon: <span className="text-2xl">🇴🇲</span> },
    { name: "Bahrain", details: "Bahrain Embassy verification for your documents.", icon: <span className="text-2xl">🇧🇭</span> },
    { name: "Kuwait", details: "Kuwait Embassy attestation for professional use.", icon: <span className="text-2xl">🇰🇼</span> },
    { name: "Iraq", details: "Official Iraq Embassy verification for credentials.", icon: <span className="text-2xl">🇮🇶</span> },
    { name: "Iran", details: "Iran Embassy attestation for legal and academic docs.", icon: <span className="text-2xl">🇮🇷</span> },
    { name: "Others", details: "China, Turkey, UK, USA and European Embassies.", icon: <Globe className="w-6 h-6 text-[#B87333]" /> }
];

const steps = [
    {
        title: "Local Verification",
        description: "Documents must first be attested by MOFA Pakistan and relevant bodies (HEC/IBCC).",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Translation",
        description: "Legal translation of documents into Arabic or the destination's official language.",
        icon: <Languages className="w-8 h-8 text-white" />
    },
    {
        title: "Embassy Submission",
        description: "Safe handling and submission to the respective Embassy or Consulate in Pakistan.",
        icon: <Landmark className="w-8 h-8 text-white" />
    },
    {
        title: "Final Dispatch",
        description: "Delivery of your fully legalised documents to your doorstep.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "What is Saudi Culture (SACM) attestation?",
        answer: "For Saudi Arabia, degrees must be verified by the Saudi Culture Office before embassy attestation. This requires university verification and data flow checks."
    },
    {
        question: "Is MOFA attestation required before Embassy?",
        answer: "Yes, almost all embassies require the document to be first attested by the Ministry of Foreign Affairs (MOFA) of Pakistan."
    },
    {
        question: "How much time does UAE attestation take?",
        answer: "UAE embassy attestation typically takes 3-5 working days after MOFA verification is complete."
    },
    {
        question: "Do you handle attestation for non-educational documents?",
        answer: "Yes, we handle Birth Certificates, Marriage Certificates (Nikah Nama), Police Clearance, and Commercial documents for all embassies."
    }
];

export default function EmbassyAttestation() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Global Legalisation</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Embassy <span className="text-[#B87333]">Attestation</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official verification from Saudi Arabia, UAE, Qatar, and all major Global Embassies.
                                Secure processing for your visas, employment, and international moves.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Embassy Process
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
                                src="/mofa-hero.png"
                                alt="Embassy Attestation Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Embassies Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Expertise Across <span className="text-[#B87333]">All Major Embassies</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Specialized handling for Middle Eastern and Global Consulates.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {embassies.map((embassy, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-[#FDFBF7] p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                        >
                            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-50 shrink-0">
                                {embassy.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#006A70] mb-2">{embassy.name}</h3>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed">{embassy.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Saudi Focus Section */}
            <section className="py-24 bg-[#006A70] text-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 italic">Specialized <span className="text-[#B87333]">Saudi Culture</span> & Embassy Care</h2>
                        <p className="text-xl opacity-90 leading-relaxed mb-8">
                            Saudi attestation is a multi-step process. We handle everything from
                            **Saudi Culture (SACM)** verification to the final **Saudi Embassy** stamp.
                            Our deep understanding of their portal requirements and university
                            verification protocols ensures your file is never rejected.
                        </p>
                        <ul className="space-y-4">
                            {["University Verification Liaison", "Saudi Culture Portal Management", "Medical & Degree Combined Bundles", "Urgent Submission Options"].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center font-bold">
                                    <CheckCircle className="w-6 h-6 text-[#B87333]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-center">
                        <Landmark className="w-20 h-20 text-[#B87333] mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Registered Agent</h3>
                        <p className="opacity-80 font-medium">
                            Authorized handling of your sensitive documents with top-tier security
                            and professional accountability at all Gulf Consulates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">How It <span className="text-[#B87333]">Works</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">A streamlined path to international document legalisation.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#006A70] mb-3 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support Message */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[60%] text-center">
                    <Info className="w-12 h-12 text-[#B87333] mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-[#006A70] mb-6">Need Help with Another Country?</h2>
                    <p className="text-lg text-[#36454F] font-medium leading-relaxed mb-10">
                        Even if your target embassy isn't listed, we can likely facilitate the process.
                        We work with European, American, and Asian consulates for all categories
                        of documents. Contact our expert consultants for a custom quote.
                    </p>
                    <Link href="/contact" className="text-[#B87333] font-black text-xl flex items-center justify-center gap-2 hover:gap-4 transition-all">
                        Consult Our Experts <ArrowRight />
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Embassy <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert insights for your global attestation needs.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#FDFBF7] p-8 rounded-3xl shadow-sm border border-gray-100"
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
