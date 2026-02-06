"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Globe, ShieldCheck, Clock, ArrowRight,
    HelpCircle, Plane, Briefcase, Users, Star,
    Search, Award, Zap, Info, MapPin
} from "lucide-react";

const visaTypes = [
    {
        title: "Dubai (UAE) Visas",
        description: "Comprehensive visa solutions for Dubai, including Visit, Tourist, and Work visas.",
        icon: <Plane className="w-8 h-8 text-white" />,
        features: ["30/60 Days Tourist Visas", "Employment Visa Filing", "Partner/Investor Visas", "Family Entry Permits"]
    },
    {
        title: "Gulf (GCC) Visas",
        description: "Official visa processing for Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.",
        icon: <Globe className="w-8 h-8 text-white" />,
        features: ["Saudi Umrah/Work Visas", "Qatar Tourist Permits", "Oman Residency Filing", "Bahrain Business Visas"]
    },
    {
        title: "Schengen & Europe",
        description: "Expert consultancy and document preparation for UK, USA, and European countries.",
        icon: <Star className="w-8 h-8 text-white" />,
        features: ["Standard Visit Visas", "Work Permit Assistance", "Study Visa Consultation", "Document Legalization"]
    }
];

const doneBaseFeatures = [
    {
        title: "Done-Base Process",
        description: "Payment only after successful visa approval for specific countries and categories.",
        icon: <Award className="w-10 h-10 text-[#B87333]" />
    },
    {
        title: "100% Transparency",
        description: "Step-by-step updates on your application status directly from the embassy portals.",
        icon: <Search className="w-10 h-10 text-[#B87333]" />
    },
    {
        title: "Rapid Turnaround",
        description: "Fast-track processing to ensure you meet your travel timelines without delays.",
        icon: <Zap className="w-10 h-10 text-[#B87333]" />
    }
];

const faqs = [
    {
        question: "What does 'Done-Base' visa processing mean?",
        answer: "It means that for specific categories (mostly Middle Eastern work or visit visas), a significant part of the facilitation fee is only payable once your visa is successfully issued."
    },
    {
        question: "How long does a Dubai 30-day visa take?",
        answer: "Standard processing time for a Dubai tourist visa is 24 to 72 working hours (1-3 days)."
    },
    {
        question: "Do you handle work permits for Europe?",
        answer: "We provide consultancy and documentation support for European work visas. The actual issuance depends on the employer's sponsorship and embassy regulations."
    },
    {
        question: "What documents are needed for a Saudi Visit Visa?",
        answer: "Generally, a passport valid for 6 months, white background photographs, and sometimes a sponsor's invitation or local chamber of commerce letter."
    }
];

export default function VisaProcessing() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Global Mobility</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Visa <span className="text-[#B87333]">Processing</span> Solutions
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Specialized in Dubai, Saudi, and Global Visas. We offer transparent
                                "Done-Base" processing for guaranteed peace of mind.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Apply for Visa Now
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
                                src="/mofa-hero.png"
                                alt="Visa Processing Services Dubai and Global"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Done-Base Highligts */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-12">
                    {doneBaseFeatures.map((feat, i) => (
                        <div key={i} className="text-center group">
                            <div className="mb-6 inline-block p-6 bg-[#FDFBF7] rounded-[30px] border border-gray-100 shadow-sm group-hover:bg-[#006A70] group-hover:rotate-6 transition-all duration-300">
                                {feat.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-4 tracking-tight uppercase">{feat.title}</h3>
                            <p className="text-[#36454F] font-medium opacity-80 leading-relaxed">{feat.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visa Categories Grid */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Explore Our <span className="text-[#B87333]">Visa Services</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Specialized handling for the world's most popular destinations.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {visaTypes.map((visa, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                {visa.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-6 tracking-tight">{visa.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed mb-8">{visa.description}</p>
                            <ul className="space-y-4">
                                {visa.features.map((feat, idx) => (
                                    <li key={idx} className="flex gap-3 items-center text-[#36454F] font-bold">
                                        <CheckCircle className="w-5 h-5 text-[#B87333]" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Dubai Banner */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="lg:w-1/2">
                        <MapPin className="w-16 h-16 text-[#B87333] mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Dubai Entry <span className="text-[#B87333]">Expertise</span></h2>
                        <p className="text-xl opacity-90 leading-relaxed mb-10">
                            We are authorized facilitators for UAE visas. Whether you're heading for a
                            vacation or a job hunt, our direct links with the immigration department
                            ensure that your visa is issued without technical errors.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-black text-[#B87333] mb-2">99%</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Success Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-[#B87333] mb-2">24h</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Rapid Response</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20">
                        <h3 className="text-2xl font-bold mb-6 text-[#B87333] uppercase">Why Dubai with us?</h3>
                        <ul className="space-y-5">
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                No need for expensive credit cards; we handle the payments.
                            </li>
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Support for all nationalities residing in Pakistan.
                            </li>
                            <li className="flex gap-4 items-start font-medium leading-relaxed text-lg">
                                <CheckCircle className="text-[#B87333] shrink-0 mt-1" />
                                Direct verification of e-visas through official portals.
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
                            <h4 className="text-2xl font-black text-amber-800 uppercase tracking-tight mb-4">Note on European Visas</h4>
                            <p className="text-lg text-amber-900 font-medium leading-relaxed">
                                Please be advised that Schengen, UK, and USA visas involve strict embassy
                                interviews and biological verification. We provide the most accurate
                                consultancy and document preparation to maximize your chances,
                                but the final decision rests solely with the embassy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Visa <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Answers to your international travel processing.</p>
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
