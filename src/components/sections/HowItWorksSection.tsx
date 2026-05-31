import { Monitor, MessageSquare, Heart, Repeat } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WA_AGENDA } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Primeiro contato",
    desc: "Me chame pelo WhatsApp. Vamos conversar brevemente para entender sua necessidade e agendar sua primeira sessão.",
  },
  {
    icon: Monitor,
    step: "02",
    title: "Primeira sessão de acolhimento",
    desc: "Neste encontro faço seu acolhimento, ouço o que te trouxe até aqui e realizo uma anamnese aprofundada para entender melhor sua história e queixa.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Construção do vínculo",
    desc: "Juntos construímos o espaço terapêutico — um lugar seguro, sem rótulos ou diagnósticos precipitados, onde você pode ser quem realmente é.",
  },
  {
    icon: Repeat,
    step: "04",
    title: "Processo contínuo",
    desc: "Sessões semanais de 50 minutos, online, no horário que funciona para você. Cada encontro é um passo a mais no seu autoconhecimento.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-pad bg-off-white">
      <div className="wrap">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="ornament justify-center flex mb-5">Como funciona</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-5">
            Da primeira mensagem ao processo terapêutico
          </h2>
          <p className="font-body text-warm-stone leading-relaxed">
            Simples, acessível e 100% online. Veja como é iniciar sua terapia.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex gap-6 md:gap-10 mb-10 last:mb-0">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose text-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <s.icon className="w-6 h-6" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-rose-muted to-transparent min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10 last:pb-0">
                  <span className="font-sans text-xs font-bold text-rose tracking-widest uppercase block mb-1">
                    Passo {s.step}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-slate mb-3">{s.title}</h3>
                  <p className="font-body text-warm-stone leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Info cards */}
        <AnimatedSection delay={300}>
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Duração da sessão", value: "50 minutos" },
              { label: "Frequência sugerida", value: "Semanal" },
              { label: "Modalidade", value: "Online · Presencial" },
            ].map((info, i) => (
              <div
                key={i}
                className="text-center py-7 px-5 rounded-3xl bg-linen border border-rose-muted/30"
              >
                <p className="font-sans text-xs text-warm-stone uppercase tracking-widest mb-2">
                  {info.label}
                </p>
                <p className="font-display text-xl text-slate">{info.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="text-center mt-12">
          <a href={WA_AGENDA} target="_blank" rel="noopener noreferrer" className="btn-rose gap-2">
            <WhatsAppIcon className="w-4 h-4" />
            Agendar minha primeira sessão
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
