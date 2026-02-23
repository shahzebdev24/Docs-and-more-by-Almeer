"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, BookOpen, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, GraduationCap,
    Search, Award, ClipboardCheck, Info
} from "lucide-react";

const steps = [
    {
        title: "Board Verification",
        description: "Your certificates must first be verified by the respective issuing Board (BISE) in a sealed envelope.",
        icon: <ClipboardCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Online Appointment",
        description: "Schedule your slot through the IBCC web portal for either physical appearance or courier processing.",
        icon: <Search className="w-8 h-8 text-white" />
    },
    {
        title: "IBCC Stamping",
        description: "Official attestation from IBCC with secure holographic stickers and computerized verification codes.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Secure Delivery",
        description: "Your school/college certificates are delivered back to you, ready for global use.",
        icon: <Award className="w-8 h-8 text-white" />
    }
];

const requirements = [
    {
        type: "Mandatory Documents",
        list: [
            "Original Matric (SSC) Certificate",
            "Original Inter (HSSC) Certificate",
            "Verified copy from issuing Board (BISE)",
            "Copy of CNIC of the applicant"
        ]
    },
    {
        type: "Additional Items",
        list: [
            "Original Result Cards (if required)",
            "Equivalence Certificate (for O/A Levels)",
            "Marriage Certificate (if name differs)",
            "Passport copy (for international students)"
        ]
    }
];

const faqs = [
    {
        question: "Is IBCC attestation mandatory for MOFA?",
        answer: "Yes, for any school or college level certificate, IBCC attestation is a prerequisite before the Ministry of Foreign Affairs (MOFA) can attest them."
    },
    {
        question: "Can I attest O/A Level certificates?",
        answer: "O/A Level certificates first require an Equivalence Certificate from IBCC. Once equivalence is issued, the same can be attested by them."
    },
    {
        question: "How much time does it take?",
        answer: "Standard courier processing takes 7-10 working days. Urgent same-day attestation is also available through limited walk-in appointments."
    },
    {
        question: "Do I need to verify from the Board first?",
        answer: "Yes, IBCC will only attest your certificates if they are accompanied by a verification report in a sealed envelope from your issuing Board of Intermediate and Secondary Education (BISE)."
    }
];

export default function IbccAttestation() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Secondary Education Trust</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                IBCC <span className="text-[#B87333]">Certificate</span> Attestation
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official legalization for Matric, Inter, and O/A Level certificates.
                                Your essential bridge to higher education and global careers.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start IBCC Attestation
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
                                alt="IBCC Attestation Services"
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Inter Board Coordination Commission <span className="text-[#B87333]">(IBCC)</span></h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            IBCC attestation is vital for all school and college-level academic documents in Pakistan.
                            From local Matric/Inter certificates to O/A Level equivalence, we ensure your
                            educational foundations are legally verified for use in universities,
                            immigration processes, or professional registrations worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Verification Stats */}
            <section className="pb-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <BookOpen className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">O/A Level</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Equivalence Experts</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Security</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Hologram Verification</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Clock className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">7-10 Days</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Standard Processing</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Workflow Section */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Seamless <span className="text-[#B87333]">IBCC</span> Workflow</h2>
                    <p className="text-xl opacity-80 font-medium">From Board verification to final attestation.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-6 transition-transform">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">IBCC <span className="text-[#B87333]">Checklist</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Everything you need for a successful attestation.</p>
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
                                <GraduationCap className="w-8 h-8 text-[#B87333]" />
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
                        <h4 className="text-[#006A70] font-black uppercase text-sm tracking-widest mb-2">Important Requirement</h4>
                        <p className="text-[#006A70]/80 font-bold text-lg leading-snug">
                            IBCC strictly requires a "Board Verification Report" in a sealed envelope. Certificates without this prerequisite from the issuing board will not be processed.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">IBCC <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert insights for your certificate verification.</p>
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

