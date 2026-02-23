"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Languages, FileText, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Globe,
    Search, Award, MessageSquare, Info,
    Zap, Laptop, UserCheck
} from "lucide-react";

const languages = [
    { name: "Arabic", code: "AR", details: "Certified translation for Saudi Arabia, UAE, Qatar, and Gulf nations.", icon: <span className="text-2xl">🇦🇪</span> },
    { name: "English", code: "EN", details: "Standard & Legal translation for UK, USA, Canada, and Australia.", icon: <span className="text-2xl">🇬🇧</span> },
    { name: "Italian", code: "IT", details: "Official translation for Italian Embassy and legal matters.", icon: <span className="text-2xl">🇮🇹</span> },
    { name: "French", code: "FR", details: "Precise translation for France, Belgium, and African francophone countries.", icon: <span className="text-2xl">🇫🇷</span> },
    { name: "Turkish", code: "TR", details: "Legal & Commercial translation for Turkey residency and business.", icon: <span className="text-2xl">🇹🇷</span> },
    { name: "Others", code: "++", details: "German, Spanish, Chinese, and other global languages.", icon: <Globe className="w-6 h-6 text-[#B87333]" /> }
];

const serviceFeatures = [
    {
        title: "Legal & Certified",
        description: "Accepted by all major Embassies, MOFA, and international authorities.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Subject Experts",
        description: "Specialized translators for Medical, Legal, Academic, and Technical docs.",
        icon: <UserCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Zero Errors",
        description: "Rigorous quality checks and proofreading for 100% accuracy.",
        icon: <Zap className="w-8 h-8 text-white" />
    },
    {
        title: "Rapid Delivery",
        description: "Express translation options available for urgent requirements.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "Is your translation certified for Embassy use?",
        answer: "Yes, our translations are certified and include the official stamp of recognized translation agencies, making them acceptable by all foreign embassies and the Ministry of Foreign Affairs (MOFA)."
    },
    {
        question: "How do you charge for translation?",
        answer: "Translation charges are typically based on the number of pages, the complexity of the content, and the specific language pair required."
    },
    {
        question: "Can I get a digital copy first?",
        answer: "Absolutely. We send a scanned PDF copy for your review before providing the final hard copies with official stamps."
    },
    {
        question: "Do you translate Nikah Nama (Marriage Certificates)?",
        answer: "Yes, Nikah Nama translation into English or Arabic is one of our most requested services for visa and family immigration purposes."
    }
];

export default function TranslationServices() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Multilingual Expertise</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Professional <span className="text-[#B87333]">Translation</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Certified translations in Arabic, English, Italian, French, Turkish, and more.
                                Accurate, legal, and globally recognized for all your documentation needs.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Get a Quote
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
                                alt="Professional Translation Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Languages Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Languages We <span className="text-[#B87333]">Master</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Localized experts for every major global language.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {languages.map((lang, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-[#FDFBF7] p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                        >
                            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-50 shrink-0">
                                {lang.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#006A70] mb-2">{lang.name}</h3>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed">{lang.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Service Highlights */}
            <section className="py-24 bg-[#006A70] text-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Trust Our <span className="text-[#B87333]">Translations?</span></h2>
                    <p className="text-xl opacity-80 font-medium">Precision and legality are at the core of our service.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceFeatures.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-white/70 text-sm font-medium leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">From Document to <span className="text-[#B87333]">Global Success</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Drafting", desc: "Initial conversion by a native-level translator." },
                                { title: "Proofreading", desc: "Secondary review by a second expert for error-trapping." },
                                { title: "Certification", desc: "Applying official stamps and seals for embassy acceptance." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="text-4xl font-black text-[#B87333]/20 mt-[-5px]">{idx + 1}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#006A70] mb-2">{step.title}</h4>
                                        <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm">
                        <MessageSquare className="w-16 h-16 text-[#B87333] mb-8" />
                        <h3 className="text-3xl font-black text-[#006A70] mb-6 tracking-tight italic">"Accuracy is not an option; it's a requirement."</h3>
                        <p className="text-lg text-[#36454F] font-medium leading-[1.8] opacity-80">
                            Whether it's a complex medical report or a simple birth certificate,
                            our certified translators ensure that every word maintains its
                            legal and contextual meaning in the target language.
                        </p>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-[#006A70]/5 p-12 rounded-[50px] border border-dashed border-[#006A70]/30 flex flex-col md:flex-row gap-8 items-center">
                        <Info className="w-16 h-16 text-[#006A70] shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black text-[#006A70] uppercase tracking-tight mb-4">Certified Stamps</h4>
                            <p className="text-lg text-[#006A70] font-bold leading-relaxed opacity-80">
                                Most embassies (like Saudi, UAE, Italy) only accept translations from
                                registered and authorized translation agencies. We provide the
                                necessary certifications and stamps required for MOFA and Embassy
                                verification.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Translation <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Everything you need to know about our language services.</p>
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

