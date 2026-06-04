import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WA_CONV } from "@/lib/constants";

const benefits = [
  "Se ouvir com mais clareza e sem julgamento",
  "Compreender melhor a si mesmo e suas emoções",
  "Tomar decisões com mais segurança e confiança",
  "Reduzir os níveis de ansiedade no dia a dia",
  "Construir relacionamentos mais saudáveis",
  "Desenvolver autoestima e autocuidado genuínos",
  "Elaborar perdas e atravessar momentos difíceis",
  "Se olhar com cuidado — e não com crítica",
];

export default function BenefitsSection() {
  return (
    <section className="section-pad bg-rose/10">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="ornament mb-5 block">Transformação</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-7">
              O que muda com o processo terapêutico
            </h2>
            <p className="font-body text-warm-stone text-lg leading-relaxed mb-10">
              A terapia não é um conserto, é um processo de descoberta. No
              nosso trabalho juntos, você começa a se ver com outros olhos e a
              agir de formas que fazem mais sentido para quem você realmente é.
            </p>
            <a
              href={WA_CONV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose"
            >
              Quero iniciar meu processo terapêutico
            </a>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur rounded-2xl px-6 py-4 border border-rose-muted/30 hover:border-rose-light/50 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-dark" />
                  </div>
                  <p className="font-body text-slate leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
