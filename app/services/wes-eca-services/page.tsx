"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, GraduationCap, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Globe,
    Search, Award, Zap, Info, Library, Send
} from "lucide-react";

const ecaAgencies = [
    {
        name: "WES (World Education Services)",
        description: "The most popular ECA provider for Canada Express Entry and US immigration.",
        icon: <Award className="w-8 h-8 text-white" />
    },
    {
        name: "ICAS (Canada)",
        description: "Specialized in comprehensive assessment for education and immigration in Canada.",
        icon: <Library className="w-8 h-8 text-white" />
    },
    {
        name: "CES (University of Toronto)",
        description: "Comparative Education Service for academic and professional recognition.",
        icon: <GraduationCap className="w-8 h-8 text-white" />
    },
    {
        name: "IQAS / ICES",
        description: "Assessment services for Alberta and British Columbia immigration pathways.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    }
];

const studentServices = [
    {
        title: "HEC/Board Verification",
        description: "Handling the prerequisite verification from HEC and relevant Boards for ECA.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Sealed Envelope Handling",
        description: "Official sealing of documents from institutions and secure dispatch to evaluation agencies.",
        icon: <Send className="w-8 h-8 text-white" />
    },
    {
        title: "Portal Management",
        description: "Setting up and managing your WES/ICAS accounts with 100% accuracy.",
        icon: <Zap className="w-8 h-8 text-white" />
    },
    {
        title: "Transcripts Facilitation",
        description: "Applying and collecting official transcripts from universities across Pakistan.",
        icon: <Library className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "What is an ECA (Educational Credential Assessment)?",
        answer: "An ECA is used to verify that your foreign degree, diploma, or certificate is valid and equal to a Canadian or US credential. It's mandatory for immigration programs like Express Entry."
    },
    {
        question: "How long does WES evaluation take?",
        answer: "Once WES receives all required documents in the correct format (sealed), they typically take 35 business days to complete the evaluation."
    },
    {
        question: "Can I send the documents myself?",
        answer: "WES and other agencies require documents to be sent in a sealed envelope directly from the issuing institution (University/Board). We facilitate this entire process on your behalf."
    },
    {
        question: "Do you handle verification for ICAS and CES too?",
        answer: "Yes, we handle the document requirements and verification cycles for WES, ICAS, CES, IQAS, and ICES professional assessments."
    }
];

export default function WesEcaServices() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Academic Recognition</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                WES & <span className="text-[#B87333]">ECA</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Facilitating World Education Services (WES), ICAS, CES, and other immigration
                                assessments. We handle the sealed envelopes and institutional verifications for you.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start My ECA Process
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
                                alt="WES and ECA Assessment Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Assessment Agencies Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">ECA Agencies <span className="text-[#B87333]">We Support</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Official assessment for Canada and USA immigration.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ecaAgencies.map((agency, i) => (
                        <div key={i} className="bg-[#FDFBF7] p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                {agency.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#006A70] mb-4">{agency.name}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{agency.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Complete <span className="text-[#B87333]">Facilitation Cycle</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">From university transcripts to the final ECA report.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {studentServices.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 group"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#B87333] transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4 group-hover:text-[#B87333] transition-colors tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sealed Envelope Banner */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="lg:w-1/2">
                        <Send className="w-16 h-16 text-[#B87333] mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic">The <span className="text-[#B87333]">Sealed Envelope</span> Guarantee</h2>
                        <p className="text-xl opacity-90 leading-relaxed mb-10">
                            WES and ICAS strictly reject documents not sent in a school-sealed envelope.
                            We manage the entire liaison with your University or Board to ensure
                            the envelope is correctly attested, sealed, and dispatched according
                            to international standards.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <span className="block text-2xl font-black text-[#B87333]">Correct</span>
                                <span className="text-xs uppercase font-bold opacity-60 italic">Format Dispatch</span>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <span className="block text-2xl font-black text-[#B87333]">Tracked</span>
                                <span className="text-xs uppercase font-bold opacity-60 italic">International Courier</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20">
                        <h3 className="text-2xl font-bold mb-6 text-[#B87333] uppercase">Our ECA Process</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Review of your documents based on the chosen ECA body.
                            </li>
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Handling HEC and Board verification prerequisites.
                            </li>
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Institutional sealing and direct dispatch to WES/ICAS.
                            </li>
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Continuous follow-up until your evaluation is complete.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Info Message */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-amber-50 p-12 rounded-[50px] border border-dashed border-amber-200 flex flex-col md:flex-row gap-8 items-center">
                        <Info className="w-16 h-16 text-amber-500 shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black text-amber-800 uppercase tracking-tight mb-4">Canada Immigration Note</h4>
                            <p className="text-lg text-amber-900 font-medium leading-relaxed">
                                Most Canadian immigration streams require an ECA for all degrees
                                obtained outside of Canada. Ensure you choose the correct agency
                                (e.g., WES for general streams, IQAS for specific provinces)
                                before starting your verification cycle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">ECA & WES <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert common questions about educational assessments.</p>
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
