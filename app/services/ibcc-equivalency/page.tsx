"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, FileText, ShieldCheck, Clock, ArrowRight,
    HelpCircle, FileCheck, GraduationCap, BookOpen, Award,
    ClipboardList, Info, Globe, Star
} from "lucide-react";

const steps = [
    {
        title: "Submit O/A Level Results",
        description: "Provide your original Cambridge / Edexcel O-Level or A-Level result slips and certificates to initiate the process.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "IBCC Verification",
        description: "IBCC verifies your foreign board results with the issuing examination authority for authenticity.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Grade Conversion",
        description: "Your O/A Level grades are converted into the Pakistani SSC / HSSC equivalent grading scale as per IBCC policy.",
        icon: <ClipboardList className="w-8 h-8 text-white" />
    },
    {
        title: "Equivalence Certificate Issued",
        description: "IBCC issues the official Equivalence Certificate, enabling you to apply to Pakistani universities and government departments.",
        icon: <Award className="w-8 h-8 text-white" />
    }
];

const requirements = [
    {
        type: "For O-Level (SSC Equivalent)",
        list: [
            "Original O-Level Result Slips (5 passes minimum including English & Urdu/Pak Studies)",
            "Certificate of Results issued by Cambridge / Edexcel",
            "CNIC copy of the applicant",
            "2 recent passport-size photographs",
            "School leaving / Transfer Certificate (if applicable)"
        ]
    },
    {
        type: "For A-Level (HSSC Equivalent)",
        list: [
            "Original A-Level Result Slips (minimum 2 principal subjects)",
            "O-Level IBCC Equivalence Certificate (prerequisite)",
            "AS Level results (if applicable)",
            "CNIC copy of the applicant",
            "2 recent passport-size photographs"
        ]
    }
];

const faqs = [
    {
        question: "What is IBCC Equivalency for O/A Levels?",
        answer: "IBCC Equivalency is an official certificate issued by the Inter Board Coordination Commission (IBCC) that converts your Cambridge O-Level or A-Level grades into the Pakistani SSC or HSSC equivalent, making them recognized by Pakistani universities, government departments, and professional bodies."
    },
    {
        question: "Is O-Level equivalence required for A-Level equivalence?",
        answer: "Yes. To obtain an A-Level (HSSC) equivalence certificate, you must first have a valid O-Level (SSC) equivalence certificate issued by IBCC. Both must be processed in sequence."
    },
    {
        question: "How many O-Level subjects are required for equivalence?",
        answer: "IBCC generally requires at least 5 O-Level passes, which must include English and either Urdu or Pakistan Studies. Additional subject requirements may apply depending on the field of study you wish to pursue."
    },
    {
        question: "How long does the IBCC equivalency process take?",
        answer: "Standard processing typically takes 7–15 working days. Urgent processing may be available in some cases. We ensure your application is submitted correctly the first time to avoid delays."
    },
    {
        question: "Can I apply to Pakistani universities with an IBCC equivalence?",
        answer: "Yes. The IBCC Equivalence Certificate is widely accepted by all HEC-recognized universities and government services in Pakistan. It officially equates your foreign-board education to local standards."
    }
];

export default function IbccEquivalency() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Cambridge Board Recognition</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                IBCC <span className="text-[#B87333]">Equivalency</span> A & O Level
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Convert your Cambridge O-Level and A-Level results into official Pakistani SSC & HSSC equivalence. Recognized by all HEC universities and government departments.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Get Equivalency Now
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white bg-gradient-to-br from-[#006A70] to-[#004f54] flex flex-col items-center justify-center gap-8 p-12"
                        >
                            <div className="absolute inset-0 opacity-10">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="absolute w-32 h-32 rounded-full border-2 border-white" style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }} />
                                ))}
                            </div>
                            <div className="relative z-10 text-center">
                                <GraduationCap className="w-24 h-24 text-[#B87333] mx-auto mb-6" />
                                <div className="text-white font-black text-3xl tracking-tight mb-4">O & A Level</div>
                                <div className="text-white/70 font-bold text-lg uppercase tracking-widest mb-8">Equivalency Certificate</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                                        <div className="text-[#B87333] font-black text-2xl">SSC</div>
                                        <div className="text-white/70 text-xs font-bold mt-1 uppercase tracking-wider">O-Level Equiv.</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                                        <div className="text-[#B87333] font-black text-2xl">HSSC</div>
                                        <div className="text-white/70 text-xs font-bold mt-1 uppercase tracking-wider">A-Level Equiv.</div>
                                    </div>
                                </div>
                            </div>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">What is <span className="text-[#B87333]">IBCC Equivalency?</span></h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            The Inter Board Coordination Commission (IBCC) issues Equivalency Certificates for students who have completed their O-Level (equivalent to Matric/SSC) or A-Level (equivalent to Intermediate/HSSC) from Cambridge, Edexcel, or other foreign examination boards. This certificate is mandatory for university admissions, government jobs, and any further educational or professional requirements in Pakistan.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="pb-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <BookOpen className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">Cambridge</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">& Edexcel Boards</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Globe className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">All HEC</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Universities Accept</div>
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-8 rounded-[30px] flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Clock className="w-12 h-12 text-[#B87333]" />
                        <div>
                            <div className="text-2xl font-black text-[#006A70]">7–15 Days</div>
                            <div className="text-sm font-bold opacity-60 uppercase tracking-wider">Standard Processing</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Workflow Section */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Step-by-Step <span className="text-[#B87333]">Process</span></h2>
                    <p className="text-xl opacity-80 font-medium">From result submission to your official IBCC Equivalency Certificate.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                                {step.icon}
                            </div>
                            <div className="text-white/40 font-black text-4xl mb-2">0{i + 1}</div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{step.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Required <span className="text-[#B87333]">Documents</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Everything needed for a smooth equivalency application.</p>
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
                                    <li key={idx} className="flex gap-4 items-start text-lg text-[#36454F] font-medium leading-tight">
                                        <CheckCircle className="w-6 h-6 text-[#B87333] shrink-0 mt-0.5" />
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
                        <h4 className="text-[#006A70] font-black uppercase text-sm tracking-widest mb-2">Important Note</h4>
                        <p className="text-[#006A70]/80 font-bold text-lg leading-snug">
                            O-Level Equivalence is a mandatory prerequisite before applying for A-Level Equivalence. Both certificates must be obtained in the correct sequence. We guide you through both stages seamlessly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Why Choose <span className="text-[#B87333]">Docs & More?</span></h2>
                        <p className="text-xl text-[#36454F] font-medium opacity-80">Experience matters when it comes to IBCC equivalency procedures.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Star className="w-10 h-10 text-[#B87333]" />, title: "Expert Guidance", desc: "Our team knows every IBCC requirement in detail, ensuring your application is error-free and complete from day one." },
                            { icon: <FileCheck className="w-10 h-10 text-[#B87333]" />, title: "Document Preparation", desc: "We check and prepare all your documents, minimizing rejection risk and unnecessary back-and-forth with IBCC." },
                            { icon: <Clock className="w-10 h-10 text-[#B87333]" />, title: "Fast Turnaround", desc: "We track your application status at every step and notify you the moment your certificate is ready." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center"
                            >
                                <div className="mb-6 transform group-hover:scale-110 transition-transform flex justify-center">{item.icon}</div>
                                <h3 className="text-2xl font-black text-[#006A70] mb-4">{item.title}</h3>
                                <p className="text-[#36454F] font-medium leading-relaxed opacity-80">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[55%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">Frequently <span className="text-[#B87333]">Asked</span> Questions</h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Clear answers about IBCC O/A Level equivalency.</p>
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
                                    <HelpCircle className="w-6 h-6 text-[#B87333] shrink-0 mt-1" />
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

