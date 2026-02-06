"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, GraduationCap, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark,
    Search, Award, ClipboardCheck, Info, FileText,
    UserPlus, RefreshCw, FileSearch
} from "lucide-react";

const biekServices = [
    {
        title: "Inter Certificate",
        description: "Application for original Intermediate Certificates (Pre-Med, Pre-Eng, Commerce, Arts, Home Economics).",
        icon: <Award className="w-8 h-8 text-white" />
    },
    {
        title: "Duplicate Documents",
        description: "Swift processing for lost or damaged Inter Marksheets, Roll Number Slips, and Certificates.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Migration Certificate",
        description: "Getting NOC and Migration certificates for students transferring to other Boards or Universities.",
        icon: <RefreshCw className="w-8 h-8 text-white" />
    },
    {
        title: "Scrutiny / Re-counting",
        description: "Handling the complete scrutiny application process and follow-up for result re-counting.",
        icon: <FileSearch className="w-8 h-8 text-white" />
    }
];

const requirements = [
    {
        type: "Standard Application",
        list: [
            "Original Marksheet of HSC Part-I & II",
            "Copy of Matric Certificate (Sanad)",
            "Copy of CNIC or B-Form",
            "Passport size photographs (White bg)"
        ]
    },
    {
        type: "Special Cases",
        list: [
            "Original FIR for Duplicate Certificate",
            "Newspaper cutting for lost docs",
            "Authority Letter (if applying via agent)",
            "Letter from College Principal"
        ]
    }
];

const faqs = [
    {
        question: "Where is BIEK Karachi located?",
        answer: "The Board of Intermediate Education Karachi is located at Bakhtiari Youth Center, North Nazimabad, Karachi."
    },
    {
        question: "Can I apply for an urgent Marksheet?",
        answer: "Yes, BIEK offers an 'Urgent' processing category where marksheets can be issued within 3-5 working days."
    },
    {
        question: "How do I verify my Inter results for foreign universities?",
        answer: "You need to apply for 'Direct Verification' from BIEK. They will issue a verified copy in a sealed envelope or send it directly to the university/WES."
    },
    {
        question: "What is the process for name correction?",
        answer: "Name correction requires an application along with the Matric certificate copy and an affidavit. In some cases, a public notice in a newspaper is also required."
    }
];

export default function BiekKarachiServices() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Intermediate Board Experts</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                BIEK <span className="text-[#B87333]">Karachi</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Dedicated facilitation for all Intermediate (HSC) board matters in Karachi.
                                Swift, reliable, and professional handling of BIEK documentation.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start BIEK Work
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
                                alt="BIEK Karachi Intermediate Board"
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Intermediate Board <span className="text-[#B87333]">Facilitation</span></h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            The Board of Intermediate Education Karachi (BIEK) is the sole authority for Higher Secondary Education
                            within the Karachi region. Navigating the North Nazimabad office can be time-consuming.
                            Our team provides end-to-end support for all BIEK matters, ensuring your documents are processed
                            accurately and delivered to your doorstep.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Expert <span className="text-[#B87333]">BIEK Solutions</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Comprehensive coverage for all Intermediate groups.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {biekServices.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#B87333] transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4 group-hover:text-[#B87333] transition-colors tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-12 text-center items-center">
                    <div>
                        <div className="text-5xl font-black text-[#B87333] mb-4">Urgent</div>
                        <h4 className="text-xl font-bold opacity-80">Processing Support</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20">
                        <UserPlus className="w-16 h-16 mx-auto mb-6 text-[#B87333]" />
                        <h4 className="text-2xl font-bold mb-4 italic">"Authorized Agents"</h4>
                        <p className="text-sm opacity-80 leading-relaxed">
                            We act as your authorized representatives at BIEK, handling all departmental
                            queries and file submissions professionally.
                        </p>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-[#B87333] mb-4">Doorstep</div>
                        <h4 className="text-xl font-bold opacity-80">Delivery in Karachi</h4>
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">BIEK <span className="text-[#B87333]">Checklist</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Be prepared with the right documents for a smooth process.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
                    {requirements.map((req, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <ClipboardCheck className="w-8 h-8 text-[#B87333]" />
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
                        <h4 className="text-[#006A70] font-black uppercase text-sm tracking-widest mb-2">Important BIEK Note</h4>
                        <p className="text-[#006A70]/80 font-bold text-lg leading-snug">
                            Intermediate certificates (Sanad) are only issued after a certain period from the announcement of results. For immediate needs, we can facilitate the issuance of a 'Provisional Certificate'.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">BIEK <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert insights for your Intermediate Board queries.</p>
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
