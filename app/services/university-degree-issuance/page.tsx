"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, GraduationCap, FilePlus, Copy,
    ShieldCheck, Clock, ArrowRight, HelpCircle,
    Landmark, Search, AlertTriangle, FileText
} from "lucide-react";

const issuanceTypes = [
    {
        title: "First-Time Issuance",
        description: "Apply for your original degree/transcript after successfully completing your academic requirements.",
        icon: <FilePlus className="w-10 h-10 text-white" />,
        features: ["Fresh Graduate Application", "Official Convocation Support", "Urgent/Normal Processing", "HEC Pre-compliance"]
    },
    {
        title: "Duplicate Degree",
        description: "In case of loss or damage, apply for a duplicate degree with official university endorsements.",
        icon: <Copy className="w-10 h-10 text-white" />,
        features: ["FIR/Affidavit Assistance", "Newspaper Add Management", "University Portal Filing", "Official Verification"]
    }
];

const requirements = [
    {
        type: "For First Time",
        list: [
            "Final Marksheet / Transcript copy",
            "Clearance Certificate from Dept/Library",
            "Copy of CNIC & Passport",
            "Prescribed University Fee Challan"
        ]
    },
    {
        type: "For Duplicate",
        list: [
            "Copy of lost degree (if available)",
            "Original Affidavit on Stamp Paper",
            "Press Cutting of Lost Intimation",
            "Police Report (FIR) Original copy"
        ]
    }
];

const faqs = [
    {
        question: "How long does it take to issue a first-time degree?",
        answer: "Standard processing time is usually 2-4 months after the convocation. However, most universities offer an 'Urgent Mode' which can take 15-30 working days."
    },
    {
        question: "Is a duplicate degree different from the original?",
        answer: "The content and validity are exactly the same, but the university usually stamps 'DUPLICATE' on the back or front as per their policy."
    },
    {
        question: "Can you help if I am abroad?",
        answer: "Yes, we can facilitate the entire application and collection process via authorized letters of authority, saving you the trip back to Pakistan."
    },
    {
        question: "Do I need to visit the university personally?",
        answer: "In most cases, we can handle it on your behalf with a Power of Attorney or Authority Letter, depending on the specific university's regulations."
    }
];

export default function UniversityDegree() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Academic Achievement</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                University <span className="text-[#B87333]">Degree</span> Issuance
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Facilitating first-time applications and duplicate degree processing.
                                We bridge the gap between you and your university for a hassle-free experience.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                    Apply Now
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white"
                        >
                            <Image
                                src="/hec-hero.png"
                                alt="University Degree Management"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Issuance Types Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">How Can We <span className="text-[#B87333]">Assist You?</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Professional facilitation for your most valuable academic credentials.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-12">
                    {issuanceTypes.map((type, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-20 h-20 bg-[#006A70] rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                                {type.icon}
                            </div>
                            <h3 className="text-3xl font-black text-[#006A70] mb-6 tracking-tight">{type.title}</h3>
                            <p className="text-[#36454F] font-medium text-lg leading-relaxed mb-8">{type.description}</p>
                            <div className="space-y-4">
                                {type.features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-4 items-center text-[#006A70] font-bold">
                                        <CheckCircle className="w-5 h-5 text-[#B87333]" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Steps & Guidance Section */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[60%] text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">The <span className="text-[#B87333]">Smooth</span> Way Forward</h2>
                    <p className="text-xl opacity-80 font-medium leading-relaxed mb-16">
                        Dealing with university admin can be exhausting. We take over the paperwork,
                        fee submissions, and department visits so you don't have to wait in queues.
                        Whether you graduated recently or years ago, we ensure your degree reaches you safely.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <Landmark className="w-12 h-12 text-[#B87333] mb-4" />
                            <h4 className="text-lg font-bold">University Liaison</h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <FileText className="w-12 h-12 text-[#B87333] mb-4" />
                            <h4 className="text-lg font-bold">Document Prep</h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="w-12 h-12 text-[#B87333] mb-4" />
                            <h4 className="text-lg font-bold">Secured Dispatch</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Required <span className="text-[#B87333]">Documentation</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Prepare your file with these essential papers.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
                    {requirements.map((req, i) => (
                        <div key={i} className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#006A70]/5 rounded-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
                            <h3 className="text-2xl font-black text-[#006A70] uppercase tracking-tight mb-8 relative z-10">{req.type}</h3>
                            <ul className="space-y-5 relative z-10">
                                {req.list.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-center text-lg text-[#36454F] font-medium leading-tight">
                                        <CheckCircle className="w-6 h-6 text-[#B87333] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] mt-12 bg-orange-50 p-8 rounded-3xl border border-dashed border-orange-200 flex gap-6 items-start">
                    <AlertTriangle className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-orange-700 font-black uppercase text-sm tracking-widest mb-2">Notice for Duplicate Degrees</h4>
                        <p className="text-orange-800 font-bold text-lg leading-snug">
                            Applying for a duplicate degree always requires an official FIR from a police station and an advertisement in a widely circulated newspaper as proof of loss. We can help guide you through these legal formalities.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">Issuance <span className="text-[#B87333]">Insights</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Everything you need to know about the degree process.</p>
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

