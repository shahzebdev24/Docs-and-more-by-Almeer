"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, BookOpen, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark,
    Search, Award, ClipboardCheck, Info, MapPin,
    FileText, UserCheck, RefreshCw
} from "lucide-react";

const karachiBoards = [
    {
        name: "BSEK (Matric Board)",
        description: "Board of Secondary Education Karachi handles all matters for 9th and 10th grade students.",
        location: "Nazimabad, Karachi"
    },
    {
        name: "BIEK (Inter Board)",
        description: "Board of Intermediate Education Karachi for 11th and 12th grade (Pre-Med, Pre-Eng, Commerce, Arts).",
        location: "North Nazimabad, Karachi"
    }
];

const bsekServices = [
    {
        title: "Certificate Issuance",
        description: "Application for original Matric certificates (Sanad), Duplicate Sanad, or PAC (Provisional Certificate).",
        icon: <Award className="w-8 h-8 text-white" />
    },
    {
        title: "Marksheet Services",
        description: "Getting Duplicate marksheets, consolidated marksheets, or verification for foreign evaluation.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Corrections",
        description: "Correction of Name, Father's Name, or Date of Birth in Board records and certificates.",
        icon: <RefreshCw className="w-8 h-8 text-white" />
    },
    {
        title: "Migration/NOC",
        description: "Issuance of Migration Certificate or NOC for students moving to other boards or provinces.",
        icon: <MapPin className="w-8 h-8 text-white" />
    }
];

const steps = [
    {
        title: "Form Submission",
        description: "Preparation and submission of the specific Board form along with required fee challans at authorized banks.",
        icon: <ClipboardCheck className="w-8 h-8 text-[#B87333]" />
    },
    {
        title: "Departmental Follow-up",
        description: "Navigating through the relevant Board departments for file movements and signatures.",
        icon: <UserCheck className="w-8 h-8 text-[#B87333]" />
    },
    {
        title: "Final Collection",
        description: "Safe collection of your verified or newly issued documents from the Board office.",
        icon: <ShieldCheck className="w-8 h-8 text-[#B87333]" />
    }
];

const faqs = [
    {
        question: "How long does it take for a Duplicate Marksheet from BSEK?",
        answer: "Standard processing takes 10-15 working days. Urgent delivery options are also available for 3-5 working days."
    },
    {
        question: "Can I correct my date of birth after many years?",
        answer: "Yes, but it requires a specific legal procedure including a court decree or hospital record verification depending on the case."
    },
    {
        question: "Do you handle BIEK (Inter Board) works as well?",
        answer: "Yes, we handle all documents related to BIEK Karachi, including Marksheets, Certificates, and Verifications."
    },
    {
        question: "Do I need to visit the Board office personally?",
        answer: "With our specialized facilitation service, you don't need to stand in long queues. We handle the entire process on your behalf."
    }
];

export default function KarachiBoardServices() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Local Board Experts</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Karachi Board <span className="text-[#B87333]">Services</span>
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Comprehensive facilitation for all BSEK (Matric) and BIEK (Inter) board matters.
                                We handle the queues, paperwork, and follow-ups so you don't have to.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Your Board Work
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
                                alt="Karachi Board Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Boards Cards */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
                    {karachiBoards.map((board, i) => (
                        <div key={i} className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-3xl font-black text-[#006A70] mb-4 tracking-tight">{board.name}</h3>
                            <p className="text-lg text-[#36454F] font-medium mb-6">{board.description}</p>
                            <div className="flex items-center gap-2 text-[#B87333] font-bold uppercase tracking-widest text-sm">
                                <MapPin className="w-5 h-5" />
                                {board.location}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Services Grid */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Matric & Inter <span className="text-[#B87333]">Solutions</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">A complete range of services at your fingertips.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bsekServices.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#B87333] transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Local Workflow */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Our Local <span className="text-[#B87333]">Karachi Expertise</span></h2>
                        <p className="text-xl text-[#36454F] font-medium opacity-80">The fastest way to get your Board work done correctly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="mb-6 inline-block p-4 bg-[#FDFBF7] rounded-full border border-gray-100 shadow-inner">
                                    {step.icon}
                                </div>
                                <h4 className="text-2xl font-black text-[#006A70] mb-4 tracking-tight uppercase">{step.title}</h4>
                                <p className="text-[#36454F] font-medium opacity-80 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Notice */}
            <section className="py-24 bg-[#006A70]">
                <div className="mx-auto w-[90%] md:w-[60%] text-center text-white">
                    <Info className="w-16 h-16 mx-auto mb-8 text-[#B87333]" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Don't get stuck in the Nazimabad queues!"</h2>
                    <p className="text-xl opacity-90 font-medium leading-[1.8]">
                        We provide door-to-door service in Karachi. We will pick up your documents,
                        complete the Board formalities, and deliver the final attested certificates
                        right back to your doorstep. Secure, transparent, and professional.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Board Work <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Expert insights for your Karachi Board queries.</p>
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

