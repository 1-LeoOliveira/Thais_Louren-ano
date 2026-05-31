import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    icon: "✦",
    title: "Sem rótulos prematuros",
    desc: "Sou contra encaixotar pessoas em diagnósticos logo de cara. Cada história é singular e precisa ser compreendida em profundidade antes de qualquer conclusão.",
  },
  {
    icon: "◎",
    title: "Escuta genuína",
    desc: "Minha prioridade é que você se sinta verdadeiramente ouvido — não apenas escutado. Há uma diferença enorme entre as duas coisas.",
  },
  {
    icon: "◈",
    title: "Orientação psicanalítica",
    desc: "Estudo continuamente Freud, Melanie Klein, Winnicott e Ferenczi. Participação ativa em congressos e formações garante uma prática fundamentada.",
  },
  {
    icon: "◇",
    title: "Olhar para além do sintoma",
    desc: "Não trato apenas o que aparece na superfície — busco compreender as raízes do sofrimento e o que ele está tentando comunicar.",
  },
  {
    icon: "○",
    title: "Flexibilidade e acesso",
    desc: "Atendimento online para que você cuide da sua saúde mental de onde estiver, no horário que funciona para a sua vida.",
  },
  {
    icon: "△",
    title: "Convênio e particular",
    desc: "Aceito convênio e atendimento particular — porque o cuidado com a saúde mental não deve ser barreira para ninguém.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="wrap">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="ornament justify-center flex mb-5">Meu diferencial</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate">
            Por que trabalhar comigo
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d, i) => (
            <AnimatedSection key={i} delay={i * 75}>
              <div className="card h-full">
                <span className="text-2xl text-rose mb-5 block">{d.icon}</span>
                <h3 className="font-display text-xl text-slate mb-3">{d.title}</h3>
                <p className="font-sans text-sm text-warm-stone leading-relaxed">{d.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
