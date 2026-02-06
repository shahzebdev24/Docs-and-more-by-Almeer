"use client"
import { motion } from "framer-motion";

export default function ValueProposition() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto w-[90%] md:w-[60%] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8">
                        Our Commitment
                    </h2>
                    <p className="text-xl text-[#36454F] leading-relaxed mb-12 font-medium">
                        At Docs & More by Almeer, we're dedicated to providing unparalleled attestation services. Our commitment to efficiency, accuracy, and customer satisfaction ensures a seamless experience for all your document authentication needs. Discover what makes our services stand out from the rest:
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#B87333] text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg shadow-[#B87333]/20 hover:bg-[#8D5A28] transition-all"
                    >
                        Contact for Consultation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
