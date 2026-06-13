import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thais Lourençano — Psicóloga",
  description:
    "Psicoterapia online para adolescentes e adultos. Atendimento acolhedor, com orientação psicanalítica. CRP 06/194313.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
