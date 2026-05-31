"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "A terapia online funciona igual à presencial?",
    a: "Sim! Pesquisas mostram que a terapia online é tão eficaz quanto a presencial. Você tem a vantagem de estar no seu próprio ambiente, com mais conforto e praticidade.",
  },
  {
    q: "Preciso estar em crise para fazer terapia?",
    a: "Não. A terapia é para qualquer pessoa que queira se conhecer melhor, tomar decisões com mais clareza ou desenvolver habilidades emocionais. Você não precisa estar no fundo do poço para buscar ajuda.",
  },
  {
    q: "Você aceita convênio?",
    a: "Sim, aceito convênio e atendimento particular. Me chame pelo WhatsApp para verificar quais convênios são aceitos atualmente.",
  },
  {
    q: "Como é a primeira sessão?",
    a: "A primeira sessão é um momento de acolhimento. Vamos conversar sobre o que te trouxe até aqui, e realizo uma anamnese aprofundada para entender melhor sua história e necessidade. Não há diagnóstico precipitado — o processo é feito com calma e cuidado.",
  },
  {
    q: "Você atende adolescentes?",
    a: "Sim, atendo adolescentes e adultos, tanto homens quanto mulheres. Minha preferência é por esse público.",
  },
  {
    q: "Com que frequência são as sessões?",
    a: "A frequência ideal é semanal, com sessões de 50 minutos. Isso pode ser ajustado de acordo com suas necessidades e disponibilidade.",
  },
  {
    q: "Você dá diagnósticos?",
    a: "Sou contra dar diagnósticos logo de cara. Acredito que encaixotar as pessoas em rótulos precipitados limita a compreensão de quem elas realmente são. O diagnóstico, quando necessário, vem depois de um processo cuidadoso de escuta.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-off-white">
      <div className="wrap">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="ornament justify-center flex mb-5">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate">
              Dúvidas frequentes
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-ivory rounded-2xl border border-rose-muted/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-linen/50 transition-colors"
                  >
                    <span className="font-sans font-semibold text-slate pr-4">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-rose flex-shrink-0 transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open === i ? "max-h-72" : "max-h-0"
                    }`}
                  >
                    <p className="px-7 pb-6 font-body text-warm-stone leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
