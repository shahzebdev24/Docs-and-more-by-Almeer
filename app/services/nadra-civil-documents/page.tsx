"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, ShieldCheck, Clock, ArrowRight, HelpCircle,
    FileText, Heart, Users, UserMinus, ShieldAlert, Award,
    Search, Landmark, Info, Zap
} from "lucide-react";

const documentTypes = [
    {
        title: "Birth Certificate",
        description: "Official Nadra Computerized Birth Certificate for identification and school admissions.",
        icon: <Heart className="w-8 h-8 text-white" />
    },
    {
        title: "Marriage (MRC)",
        description: "Registration of Marriage (Nikah Nama) and issuance of Nadra Marriage Certificate for visa purposes.",
        icon: <Users className="w-8 h-8 text-white" />
    },
    {
        title: "Divorce Certificate",
        description: "Legal documentation and registration of divorce through relevant Union Council and Nadra.",
        icon: <UserMinus className="w-8 h-8 text-white" />
    },
    {
        title: "Death Certificate",
        description: "Official registration and certificate issuance for estate, legal, and insurance matters.",
        icon: <ShieldAlert className="w-8 h-8 text-white" />
    },
    {
        title: "FRC (Family Reg.)",
        description: "Family Registration Certificate showing relations, essential for visa and immigration.",
        icon: <Award className="w-8 h-8 text-white" />
    },
    {
        title: "Non-Availablity",
        description: "Official Non-Availability Certificate in case records are not found in old data.",
        icon: <Search className="w-8 h-8 text-white" />
    }
];

const processSteps = [
    {
        title: "Information Collection",
        description: "We gather necessary details and previous manual records (e.g., Hospital slips, Nikah Nama).",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Council Submission",
        description: "Liaison with the relevant Union Council or Cantonment Board for data entry.",
        icon: <Landmark className="w-8 h-8 text-white" />
    },
    {
        title: "NADRA Registration",
        description: "Official computerization of the manual records into the NADRA central database.",
        icon: <Zap className="w-8 h-8 text-white" />
    },
    {
        title: "Final Delivery",
        description: "Delivery of the authentic, computerized certificate to your preferred location.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "Can I get a Birth Certificate if I am 40+ years old?",
        answer: "Yes, we can facilitate the 'Late Registration' process. This requires specific documentation but is entirely possible through official channels."
    },
    {
        question: "Why is an FRC important for a UK/USA visa?",
        answer: "Foreign embassies use the FRC (Family Registration Certificate) to verify familial links as it is a centralized and highly secure document from NADRA."
    },
    {
        question: "How long does it take to get a NADRA MRC?",
        answer: "Once the manual Nikah Nama is provided, the computerized certificate usually takes 3-7 working days depending on the Union Council's jurisdiction."
    },
    {
        question: "What if my Nikah Nama is lost?",
        answer: "We can help search the records at the relevant Union Council or facilitate the issuance of a duplicate based on official registration numbers."
    }
];

export default function NadraCivilDocuments() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Official Identity</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                NADRA & <span className="text-[#B87333]">Civil</span> Documents
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official facilitation for Birth, Marriage, Divorce, and Family registration.
                                Accurate computerization of your жизненно zaroori documents through official NADRA channels.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Registration
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
                                alt="NADRA and Civil Documents Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Document Categories Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Documents We <span className="text-[#B87333]">Handle</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Complete life-cycle documentation for every citizen.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {documentTypes.map((doc, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg group">
                                {doc.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-4 tracking-tight">{doc.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{doc.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Registration <span className="text-[#B87333]">Workflow</span></h2>
                    <p className="text-xl opacity-80 font-medium">Turning manual records into digital global identity.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {processSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-white/70 text-sm font-medium leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why NADRA Computerized? */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">Why Computerized <span className="text-[#B87333]">Certificates?</span></h2>
                        <ul className="space-y-6">
                            {[
                                "Globally accepted for visa and immigration.",
                                "Tamper-proof security features (QR/Barcodes).",
                                "Easy verification through NADRA database.",
                                "Required for MOFA and Embassy attestation."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center text-lg text-[#36454F] font-bold">
                                    <ShieldCheck className="w-6 h-6 text-[#B87333]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm relative overflow-hidden">
                        <Info className="w-16 h-16 text-[#006A70] mb-6" />
                        <h3 className="text-2xl font-black text-[#006A70] mb-4">Old Data Search</h3>
                        <p className="text-gray-600 font-medium leading-relaxed italic">
                            "If your records are decades old and not found in the computerized system,
                            don't worry. Our team specializes in searching manual archives across
                            Pakistan's Union Councils to bring your documents into the 21st century."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Civil Document <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert answers for NADRA and Civil documentation.</p>
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

