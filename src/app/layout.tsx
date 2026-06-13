import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thais Lourençano — Psicóloga",
  description:
    "Psicoterapia online para adolescentes e adultos. Atendimento acolhedor, com orientação psicanalítica. CRP 06/194313.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Thais Lourençano — Psicóloga",
    description:
      "Psicoterapia online para adolescentes e adultos. Atendimento acolhedor, com orientação psicanalítica. CRP 06/194313.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1080,
        height: 1080,
        alt: "Thais Lourençano Psicóloga",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thais Lourençano — Psicóloga",
    description:
      "Psicoterapia online para adolescentes e adultos. Atendimento acolhedor, com orientação psicanalítica. CRP 06/194313.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
