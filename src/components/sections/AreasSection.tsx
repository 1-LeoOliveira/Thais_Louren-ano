import {
  Brain,
  Heart,
  Flower2,
  Star,
  Zap,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const areas = [
  {
    icon: Brain,
    title: "Transtornos de Ansiedade",
    desc: "Preocupação excessiva, ataques de pânico, fobias, ansiedade social — entendendo o que está por trás e desenvolvendo recursos internos.",
  },
  {
    icon: Heart,
    title: "Transtornos Depressivos",
    desc: "Um espaço para atravessar a tristeza profunda, o vazio e o desânimo com acolhimento e sem pressa.",
  },
  {
    icon: Flower2,
    title: "Luto",
    desc: "Perdas de todas as formas — pessoas, relacionamentos, fases da vida. Espaço para sentir, elaborar e seguir em frente.",
  },
  {
    icon: Star,
    title: "Autoconhecimento",
    desc: "Compreender quem você é, o que quer e o que sente. Clareza para tomar decisões com mais segurança.",
  },
  {
    icon: Zap,
    title: "Autoestima",
    desc: "Desenvolver uma relação mais gentil e honesta consigo mesmo, superando padrões de autocrítica excessiva.",
  },
  {
    icon: Users,
    title: "Saúde da Mulher",
    desc: "Questões relacionadas à feminilidade, ciclos de vida, maternidade, relacionamentos e corpo — com olhar sensível e específico.",
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="section-pad bg-ivory-warm">
      <div className="wrap">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="ornament justify-center mb-5 flex">Como posso ajudar</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-5">
            Questões que podemos trabalhar juntos
          </h2>
          <p className="font-body text-warm-stone leading-relaxed">
            Cada pessoa chega com sua história única. Conheça as principais
            áreas em que atuo com cuidado e dedicação.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="card h-full group">
                <div className="w-12 h-12 rounded-2xl bg-rose-muted/40 flex items-center justify-center mb-5 group-hover:bg-rose-muted/60 transition-colors">
                  <a.icon className="w-5 h-5 text-rose-dark" />
                </div>
                <h3 className="font-display text-xl text-slate mb-3">{a.title}</h3>
                <p className="font-sans text-sm text-warm-stone leading-relaxed">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
