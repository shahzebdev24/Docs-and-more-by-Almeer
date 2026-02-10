import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Apostille Certification Services in Pakistan | Hague Convention",
    description: "Official Apostille attestation for Hague Convention countries. Fast processing of educational, personal, and commercial documents for international use.",
};

export default function ApostilleLayout({
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
                        "name": "Official Apostille Certification Services",
                        "description": "Apostille attestation for educational, personal, and commercial documents recognition in Hague Convention countries.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Docs & More by Almeer"
                        },
                        "serviceType": "Legalization Service",
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
                                "name": "What is an Apostille?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "An Apostille is a certificate that authenticates the origin of a public document so it can be recognized in all countries that belong to the Hague Convention."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is Pakistan part of the Hague Convention?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Pakistan has acceded to the Hague Apostille Convention, allowing for simpler document recognition in member countries."
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
