"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, GraduationCap, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark, History,
    BookOpen, Search, AlertCircle
} from "lucide-react";

const steps = [
    {
        title: "Portal Registration",
        description: "Create your profile on the HEC e-portal and upload scanned copies of all required documents.",
        icon: <Landmark className="w-8 h-8 text-white" />
    },
    {
        title: "Application Review",
        description: "HEC initial review of your digital application to confirm eligibility and correctness of data.",
        icon: <Search className="w-8 h-8 text-white" />
    },
    {
        title: "Physical Submission",
        description: "Submission of original documents through authorized courier services or walk-in as per schedule.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Document Collection",
        description: "Receive your attested documents with official HEC QR-coded stamps securely back at your location.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const requirements = [
    {
        type: "Primary Requirements",
        list: [
            "Original Degree / Diploma",
            "Original Marksheets / Transcripts",
            "Copy of CNIC (Applicant)",
            "HEC Application Form (Printed)"
        ]
    },
    {
        type: "Associated Docs",
        list: [
            "Matric & Inter Certificates (Original)",
            "Equivalence Certificate (if degree is foreign)",
            "Marriage Certificate (if name change)",
            "Passport Copy (for dual nationals)"
        ]
    }
];

const faqs = [
    {
        question: "Is personal visit to HEC required?",
        answer: "No, HEC now primarily processes attestation through courier services like TCS. Personal walk-in is only available for urgent cases with prior appointments."
    },
    {
        question: "How long does HEC verification take?",
        answer: "Standard courier processing usually takes 10-15 working days. Urgent walk-in cases can be processed on the same day if selected during the portal application."
    },
    {
        question: "Can I attest a duplicate degree?",
        answer: "Yes, but you must provide an affidavit and a newspaper advertisement proof mentioning the loss of the original degree."
    },
    {
        question: "Which degrees does HEC attest?",
        answer: "HEC attests degrees and transcripts from all HEC-recognized public and private sector universities in Pakistan."
    }
];

export default function HecAttestation() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Academic Trust</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                HEC <span className="text-[#B87333]">Degree</span> Attestation
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official verification for your higher education documents.
                                We facilitate the complete HEC attestation process with speed and precision.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start HEC Verification
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
                                src="/hec-hero.png"
                                alt="HEC Attestation Services"
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Higher Education Commission <span className="text-[#B87333]">(HEC)</span> Verification</h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            Attestation from the Higher Education Commission (HEC) is the primary requirement for all university level certificates
                            in Pakistan. Whether you are applying for MOFA, foreign embassies, or employment abroad, HEC verification
                            proves the authenticity of your degree as part of the accredited higher education system.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Stats */}
            <section className="pb-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <GraduationCap className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">100%</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Legal Assurance</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <History className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Fast Track</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Urgent Processing</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm">
                        <ShieldCheck className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">QR-Coded</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Secure Scanning</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our HEC Attestation <span className="text-[#B87333]">Workflow</span></h2>
                    <p className="text-xl opacity-80 font-medium">Streamlining the path to academic recognition.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{step.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Document Requirements */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Requirement <span className="text-[#B87333]">Checklist</span></h2>
                        <p className="text-xl text-[#36454F] font-medium opacity-80">Make sure you have these ready for a smooth application.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {requirements.map((req, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <BookOpen className="w-8 h-8 text-[#B87333]" />
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

                    <div className="mt-12 bg-[#006A70]/5 p-8 rounded-3xl border border-dashed border-[#006A70]/30 flex gap-6 items-start">
                        <AlertCircle className="w-8 h-8 text-[#006A70] shrink-0" />
                        <p className="text-[#006A70] font-bold text-lg">
                            <span className="uppercase tracking-widest block text-sm opacity-60 mb-1">Important Note</span>
                            HEC only attests certificates issued by recognized universities. Any degree from a non-recognized institution will be rejected instantaneously.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">Academic <span className="text-[#B87333]">Assistance</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert answers for common HEC hurdles.</p>
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
