"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, FileText, Globe, ShieldCheck, Clock, ArrowRight,
    HelpCircle, FileCheck, Landmark, Briefcase, GraduationCap,
    Heart, MapPin, Zap, ShieldAlert, Award
} from "lucide-react";

const steps = [
    {
        title: "Initial Verification",
        description: "Your documents undergo a preliminary check to ensure they meet the criteria for Apostille certification.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Local Attestation",
        description: "Liaison with relevant local authorities (HEC, IBCC, etc.) as per requirements before the final seal.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Apostille Stamping",
        description: "Direct processing through the Ministry of Foreign Affairs (MOFA) for the official Apostille Hague seal.",
        icon: <Globe className="w-8 h-8 text-white" />
    },
    {
        title: "Final Dispatch",
        description: "Secure delivery of your internationally recognized documents to your office or home.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const docTypes = [
    {
        category: "Personal Documents",
        items: ["Birth Certificates", "Marriage Certificates (Nikah Nama)", "Death Certificates", "Police Clearance Certificates", "Divorce Certificates"],
        icon: <Heart className="w-10 h-10 text-[#B87333]" />
    },
    {
        category: "Educational Documents",
        items: ["Degrees & Diplomas", "Transcripts & Marksheets", "School Leaving Certificates", "Board Certificates (Matric/Inter)", "Technical Certifications"],
        icon: <GraduationCap className="w-10 h-10 text-[#B87333]" />
    },
    {
        category: "Commercial Documents",
        items: ["Power of Attorney", "Articles of Association", "Company Registration Documents", "Board Resolutions", "Export Certificates"],
        icon: <Briefcase className="w-10 h-10 text-[#B87333]" />
    }
];

const faqs = [
    {
        question: "What is an Apostille?",
        answer: "An Apostille is a certificate that authenticates the origin of a public document (e.g., a birth, marriage or death certificate, a judgment, an extract of a register or a notarial attestation) so it can be recognized in all countries that belong to the Hague Convention."
    },
    {
        question: "Is Pakistan part of the Hague Convention?",
        answer: "Yes, Pakistan joined the Hague Convention in early 2023, which simplified the process of document legalization for use in member countries."
    },
    {
        question: "How is it different from normal MOFA attestation?",
        answer: "Normal attestation is for non-Hague countries and often requires further embassy verification. Apostille is a one-step legalization recognized by over 120 member countries without further embassy stamping."
    },
    {
        question: "How much time does it take for Apostille?",
        answer: "For most documents, it takes between 3 to 7 working days, depending on whether prior HEC or IBCC attestation has already been completed."
    }
];

export default function ApostilleAttestation() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Global Legalization</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Apostille <span className="text-[#B87333]">Attestation</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Simplifying document legalization for over 120 countries. Get the official
                                Hague Apostille seal with Pakistan's most trusted verification experts.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Apostille Process
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
                                src="/apostille-hero.png"
                                alt="Apostille Attestation Services"
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Unlocking Global <span className="text-[#B87333]">Recognition</span></h2>
                        <p className="text-xl text-[#36454F] leading-[1.8] font-medium">
                            The Apostille is an specialized certificate issued by the Ministry of Foreign Affairs (MOFA)
                            following Pakistan's accession to the Hague Convention. It eliminates the need for
                            exhausting embassy visits, providing you with a single, universally accepted seal
                            for 120+ member states including the USA, UK, Germany, and Australia.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Countries Section */}
            <section className="py-24 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Universal Acceptance In <span className="text-[#B87333]">120+ Countries</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {["United Kingdom", "United States", "Germany", "France", "Australia", "Canada", "Italy", "Spain", "Netherlands", "Turkey", "Saudi Arabia", "South Korea"].map((country, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-sm font-bold tracking-wider uppercase">
                                {country}
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-lg opacity-80 font-medium">And many others signatory to the Hague Convention of 1961.</p>
                </div>
            </section>

            {/* Document Types Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Documents We <span className="text-[#B87333]">Process</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Comprehensive Apostille coverage for every life milestone.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {docTypes.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="mb-6 transform group-hover:scale-110 transition-transform">{doc.icon}</div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-6 tracking-tight">{doc.category}</h3>
                            <ul className="space-y-4 text-left">
                                {doc.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 items-start text-[#36454F] font-medium">
                                        <CheckCircle className="w-5 h-5 text-[#B87333] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Apostille vs <span className="text-[#B87333]">Standard Attestation</span></h2>
                        <p className="text-xl text-[#36454F] font-medium opacity-80">Understand the difference for your destination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-lg">
                            <div className="flex items-center gap-4 mb-8">
                                <Zap className="w-10 h-10 text-[#B87333]" />
                                <h3 className="text-2xl font-bold text-[#006A70]">Apostille Certification</h3>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-center font-medium"><CheckCircle className="text-green-500" /> One-stop MOFA seal</li>
                                <li className="flex gap-4 items-center font-medium"><CheckCircle className="text-green-500" /> Accepted by 120+ Hague Nations</li>
                                <li className="flex gap-4 items-center font-medium"><CheckCircle className="text-green-500" /> Faster turnaround (3-7 days)</li>
                                <li className="flex gap-4 items-center font-medium"><CheckCircle className="text-green-500" /> No embassy visit required</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-lg">
                            <div className="flex items-center gap-4 mb-8">
                                <Landmark className="w-10 h-10 text-gray-400" />
                                <h3 className="text-2xl font-bold text-gray-700">Standard Attestation</h3>
                            </div>
                            <ul className="space-y-6 opacity-60">
                                <li className="flex gap-4 items-center font-medium"><ShieldAlert className="text-gray-400" /> Multiple MOFA & Dept verify</li>
                                <li className="flex gap-4 items-center font-medium"><ShieldAlert className="text-gray-400" /> Mandatory for Non-Hague (UAE, China)</li>
                                <li className="flex gap-4 items-center font-medium"><ShieldAlert className="text-gray-400" /> Slower (Embassy specific delays)</li>
                                <li className="flex gap-4 items-center font-medium"><ShieldAlert className="text-gray-400" /> Mandatory physical embassy seal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Benefits Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <Award className="w-12 h-12 text-[#B87333] mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-[#006A70] mb-4">ISO Certified Quality</h4>
                        <p className="text-[#36454F] font-medium opacity-80">Strict adherence to document handling protocols.</p>
                    </div>
                    <div className="text-center">
                        <MapPin className="w-12 h-12 text-[#B87333] mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-[#006A70] mb-4">Nationwide Pickup</h4>
                        <p className="text-[#36454F] font-medium opacity-80">Services available across all major cities in Pakistan.</p>
                    </div>
                    <div className="text-center">
                        <ShieldCheck className="w-12 h-12 text-[#B87333] mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-[#006A70] mb-4">Data Protection</h4>
                        <p className="text-[#36454F] font-medium opacity-80">Your sensitive information is encrypted and secure.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[55%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Frequently <span className="text-[#B87333]">Asked</span> Questions</h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert answers to your Apostille queries.</p>
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

