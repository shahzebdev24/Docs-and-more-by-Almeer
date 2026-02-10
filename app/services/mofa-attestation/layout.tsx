import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Official MOFA Attestation Services in Pakistan | Fast & Reliable",
    description: "Get your documents attested by the Ministry of Foreign Affairs (MOFA) Pakistan. We handle degree, marriage, and birth certificate attestation with secure pickup and delivery.",
};

export default function MofaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "MOFA Attestation Services",
                        "description": "Professional Ministry of Foreign Affairs (MOFA) attestation for degrees, marriage certificates, and birth certificates in Pakistan.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Docs & More by Almeer"
                        },
                        "offeredBy": {
                            "@type": "LocalBusiness",
                            "name": "Docs & More by Almeer"
                        },
                        "serviceType": "Document Attestation",
                        "areaServed": "PK"
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How long does MOFA attestation take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Typically, it takes 2-4 working days depending on the volume and specific verification requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is personal presence required at MOFA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, when you use our service, we handle the entire process on your behalf. You don't need to visit MOFA yourself."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What documents can be attested by MOFA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Educational certificates (after HEC/IBCC), marriage certificates, birth certificates, power of attorney, and commercial documents."
                                }
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
