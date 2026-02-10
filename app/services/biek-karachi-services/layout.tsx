import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "BIEK Karachi Services | Intermediate Certificate & Attestation",
    description: "Get your BIEK Karachi Intermediate certificates, transcripts, and board attestation fast. We handle the process for you with secure delivery.",
};

export default function BiekLayout({
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
                        "name": "BIEK Karachi Certificate & Attestation Services",
                        "description": "Swift processing for BIEK Karachi Intermediate certificates, transcripts, and board attestation.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Docs & More by Almeer"
                        },
                        "serviceType": "Educational Board Services",
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
                                "name": "Where is BIEK Karachi located?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The Board of Intermediate Education Karachi is located at Bakhtiari Youth Center, North Nazimabad, Karachi."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I apply for an urgent Marksheet?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, BIEK offers an 'Urgent' processing category where marksheets can be issued within 3-5 working days."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I verify my Inter results for foreign universities?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You need to apply for 'Direct Verification' from BIEK. They will issue a verified copy in a sealed envelope or send it directly to the university/WES."
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
