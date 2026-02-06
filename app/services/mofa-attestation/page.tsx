"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import { CheckCircle, FileText, Globe, ShieldCheck, Clock, ArrowRight, HelpCircle } from "lucide-react";

const steps = [
    {
        title: "Document Submission",
        description: "Submit your original documents along with a copy of your CNIC to our office.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Verification Check",
        description: "Our experts review your documents to ensure they meet MOFA's specific requirements.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "MOFA Processing",
        description: "We handle the entire submission and collection process at the Ministry of Foreign Affairs.",
        icon: <Globe className="w-8 h-8 text-white" />
    },
    {
        title: "Safe Delivery",
        description: "Once attested, your documents are securely delivered back to your doorstep.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "How long does MOFA attestation take?",
        answer: "Typically, it takes 2-4 working days depending on the volume and specific verification requirements."
    },
    {
        question: "Is personal presence required at MOFA?",
        answer: "No, when you use our service, we handle the entire process on your behalf. You don't need to visit MOFA yourself."
    },
    {
        question: "What documents can be attested by MOFA?",
        answer: "Educational certificates (after HEC/IBCC), marriage certificates, birth certificates, power of attorney, and commercial documents."
    }
];

export default function MofaAttestation() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Expert Legalization</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Ministry of Foreign Affairs <span className="text-[#B87333]">(MOFA)</span> Attestation
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Swift, secure, and professional MOFA attestation services in Pakistan.
                                We handle the bureaucracy so you can focus on your global journey.
                            </p>
                            <Link href="/contact" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Your Process
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
                                alt="MOFA Attestation Services"
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
                <div className="mx-auto w-[90%] md:w-[60%] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">What is MOFA Attestation?</h2>
                        <p className="text-xl text-[#36454F] leading-relaxed font-medium">
                            MOFA attestation is a mandatory step for using Pakistani documents abroad.
                            The Ministry of Foreign Affairs verifies the signatures and seals on your documents,
                            making them legally valid for international use. Whether it's for a visa,
                            employment, or education, we ensure your documents are processed accurately and quickly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Our Seamless <span className="text-[#B87333]">Process</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Simple steps to get your documents attested without the sweat.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#006A70]/20 group-hover:rotate-6 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4 group-hover:text-[#B87333] transition-colors uppercase tracking-tight">{step.title}</h3>
                            <p className="text-[#36454F] font-medium text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-[#006A70] mb-8">Required <span className="text-[#B87333]">Documents</span></h2>
                            <div className="space-y-6">
                                {[
                                    "Original documents to be attested",
                                    "Clear copy of CNIC (Front & Back)",
                                    "HEC Attestation (for degree documents)",
                                    "IBCC Attestation (for school/college certificates)",
                                    "Passport copy (for specific embassy requirements)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <CheckCircle className="w-6 h-6 text-[#B87333]" />
                                        <span className="text-lg text-[#36454F] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#006A70] p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h3 className="text-3xl font-bold mb-6">Expert Tip</h3>
                            <p className="text-xl leading-relaxed opacity-90 font-medium">
                                Always ensure your educational documents are pre-verified by HEC or IBCC before sending them for MOFA attestation.
                                This saves time and prevents rejection at the ministry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4">Common <span className="text-[#B87333]">Questions</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Everything you need to know about MOFA attestation.</p>
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
                                        <h4 className="text-xl font-bold text-[#006A70] mb-3">{faq.question}</h4>
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
