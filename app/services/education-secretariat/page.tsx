"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Landmark, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, GraduationCap,
    Search, Award, ClipboardCheck, Info
} from "lucide-react";

const steps = [
    {
        title: "Board/EDO Verify",
        description: "Ensure your primary or secondary documents are already verified by the local Board or EDO office.",
        icon: <ClipboardCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Secretariat Submission",
        description: "Submission of documents to the Provincial Education Secretariat for higher-level endorsement.",
        icon: <Landmark className="w-8 h-8 text-white" />
    },
    {
        title: "Official Endorsement",
        description: "The Secretariat reviews the previous verifications and applies the official provincial seal.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Verified Dispatch",
        description: "Collection of your multi-level verified documents for further MOFA or Embassy countersignatures.",
        icon: <Award className="w-8 h-8 text-white" />
    }
];

const requirements = [
    {
        type: "Essential Documents",
        list: [
            "Original Certificate / Diploma",
            "Previous Verification slips (Board/EDO)",
            "Copy of CNIC of the applicant",
            "Application form for Secretariat"
        ]
    },
    {
        type: "Supporting Papers",
        list: [
            "Father's CNIC Copy",
            "NOC (if document from different province)",
            "School Registration certificate copy",
            "Passport copy (if for foreign use)"
        ]
    }
];

const faqs = [
    {
        question: "What is Education Secretariat attestation?",
        answer: "It is a provincial-level verification required for certain certificates (like nursing diplomas or specific school documents) before they can be sent to MOFA."
    },
    {
        question: "Is it required for university degrees?",
        answer: "No, university degrees are directly handled by HEC. Secretariat attestation is usually for school-level or technical diplomas that fall under provincial jurisdiction."
    },
    {
        question: "Where are the Secretariat offices located?",
        answer: "They are located in the provincial capitals: Karachi, Lahore, Peshawar, and Quetta."
    },
    {
        question: "How long is the processing time?",
        answer: "Typically, it takes 5-10 working days depending on the type of document and current department load."
    }
];

export default function EducationSecretariat() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Provincial Level Verification</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Education <span className="text-[#B87333]">Secretariat</span> Attestation
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                High-level provincial endorsement for your diplomas and certificates.
                                Bridging the gap between district offices and federal attestation.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Secretariat Process
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
                                src="/secretariat-hero.png"
                                alt="Education Secretariat Attestation"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[65%] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Role of the <span className="text-[#B87333]">Education Secretariat</span></h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            The Provincial Education Secretariat provides an essential layer of authentication for documents issued within its jurisdiction.
                            This attestation is often required for nursing diplomas, technical certifications, and school documents
                            before they can be legally recognized at the federal level or by international embassies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Verification Stats */}
            <section className="pb-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <Landmark className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Provincial</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">High Authority</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <GraduationCap className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Technical</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Diploma Experts</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <ShieldCheck className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Verified</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Multi-Level Check</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Workflow Section */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Secretariat <span className="text-[#B87333]">Workflow</span></h2>
                    <p className="text-xl opacity-80 font-medium">Navigating provincial hurdles with professional ease.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{step.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Secretariat <span className="text-[#B87333]">Checklist</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Be prepared with the right documentation.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
                    {requirements.map((req, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <FileCheck className="w-8 h-8 text-[#B87333]" />
                                <h3 className="text-2xl font-black text-[#006A70] uppercase tracking-tight">{req.type}</h3>
                            </div>
                            <ul className="space-y-5">
                                {req.list.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-center text-lg text-[#36454F] font-medium leading-tight">
                                        <CheckCircle className="w-6 h-6 text-[#B87333] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] mt-12 bg-[#006A70]/5 p-8 rounded-3xl border border-dashed border-[#006A70]/30 flex gap-6 items-start">
                    <Info className="w-8 h-8 text-[#006A70] shrink-0 mt-1" />
                    <div>
                        <h4 className="text-[#006A70] font-black uppercase text-sm tracking-widest mb-2">Important Notice</h4>
                        <p className="text-[#006A70]/80 font-bold text-lg leading-snug">
                            Secretariat attestation is provincial. You must apply to the Secretariat of the province where your diploma or certificate was issued.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">Secretariat <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Professional answers to your provincial verification questions.</p>
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
