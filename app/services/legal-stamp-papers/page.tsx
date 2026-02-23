"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Gavel, FileText, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark,
    Scale, PenTool, Award, Info, Zap
} from "lucide-react";

const legalServices = [
    {
        title: "E-Stamp Papers",
        description: "Official E-Stamp papers of various denominations for sales deeds, agreements, and legal contracts.",
        icon: <Landmark className="w-8 h-8 text-white" />
    },
    {
        title: "Affidavits",
        description: "Drafting and notary attestation of affidavits for loss of documents, name changes, or family declarations.",
        icon: <Scale className="w-8 h-8 text-white" />
    },
    {
        title: "Power of Attorney",
        description: "Drafting of General and Special Power of Attorney for property, bank, or legal representation.",
        icon: <PenTool className="w-8 h-8 text-white" />
    },
    {
        title: "Rental Agreements",
        description: "Legally binding residential and commercial rental agreements with official witness clauses.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Partnership Deeds",
        description: "Drafting and registration of business partnership deeds and associated legal paperwork.",
        icon: <Award className="w-8 h-8 text-white" />
    },
    {
        title: "Indemnity Bonds",
        description: "Specialized indemnity bonds required for HEC, universities, and government departments.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    }
];

const commonAffidavits = [
    { title: "Lost Degree/Certificate", use: "Required for applying for duplicate academic documents from Board/Uni." },
    { title: "Name Correction", use: "For correcting spelling mistakes in official documents or identity cards." },
    { title: "Change of Profession", use: "Legal declaration for updating professional status in passport or CNIC." },
    { title: "Parentage Correction", use: "Correcting father or mother's name in educational or civil records." },
    { title: "No-Objection (NOC)", use: "Authorized declaration for traveling, employment, or property matters." },
    { title: "Family Statement", use: "Declaration of family members for succession or dependency claims." }
];

const faqs = [
    {
        question: "What is an E-Stamp paper?",
        answer: "E-Stamp is a secure digital system for paying stamp duty to the government. It replaces the old manual stamp papers with a verifiable, QR-coded legal document."
    },
    {
        question: "Which denomination stamp paper do I need?",
        answer: "The value depends on the type of legal document (e.g., Rs. 100 for some affidavits, higher for property deeds). Our team can guide you based on current government regulations."
    },
    {
        question: "Do you provide Notary Public attestation?",
        answer: "Yes, we facilitate the drafting and subsequent attestation from an authorized Notary Public or Oath Commissioner."
    },
    {
        question: "How long does it take to get a stamp paper?",
        answer: "Standard E-Stamp papers can be generated and delivered within a few hours or the same working day."
    }
];

export default function LegalStampPapers() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Legally Binding</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Legal & <span className="text-[#B87333]">Stamp</span> Papers
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Facilitating E-Stamp papers, Affidavits, and Power of Attorney.
                                Professional legal drafting and authorized attestation at your doorstep.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Request Legal Service
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
                                alt="Legal and Stamp Paper Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Legal Services Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Our <span className="text-[#B87333]">Legal Solutions</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Authorized documentation for personal and professional use.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {legalServices.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Most Frequent Affidavits Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Most Frequent <span className="text-[#B87333]">Affidavits</span></h2>
                        <p className="text-xl text-[#36454F] font-medium opacity-80">Quick drafting and processing for common legal declarations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commonAffidavits.map((aff, i) => (
                            <div key={i} className="group p-8 rounded-[35px] bg-[#FDFBF7] border border-gray-100 hover:bg-[#006A70] transition-all duration-300">
                                <h4 className="text-xl font-bold text-[#006A70] group-hover:text-[#B87333] mb-3 transition-colors">{aff.title}</h4>
                                <p className="text-gray-600 group-hover:text-white/80 text-sm font-medium leading-relaxed transition-colors">{aff.use}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Section */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 italic">Verified <span className="text-[#B87333]">E-Stamp</span> Advantage</h2>
                        <ul className="space-y-6">
                            {[
                                "QR-Code verification for authenticity.",
                                "No more manual fraud or backdating.",
                                "Accepted by banks and courts across Pakistan.",
                                "Digital record for future reference."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center text-lg font-bold">
                                    <Zap className="w-6 h-6 text-[#B87333]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-center">
                        <Gavel className="w-20 h-20 text-[#B87333] mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Oath Commissioner</h3>
                        <p className="opacity-80 font-medium leading-relaxed">
                            Official attestation from authorized Notary Public and Oath Commissioners for all your legal declarations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Info Message */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-gray-50 p-12 rounded-[50px] border border-dashed border-gray-200 flex flex-col md:flex-row gap-8 items-center">
                        <Info className="w-16 h-16 text-[#006A70] shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black text-[#006A70] uppercase tracking-tight mb-4">Drafting Assistance</h4>
                            <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                Not sure about the legal wording? Our experts can help draft your affidavits,
                                rental agreements, and indemnity bonds following standard legal templates
                                to ensure they are accepted without any hiccups.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Legal <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Common questions about stamp papers and affidavits.</p>
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

