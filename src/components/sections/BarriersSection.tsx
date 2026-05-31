import AnimatedSection from "@/components/ui/AnimatedSection";
import { WA_CONV } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const myths = [
  {
    myth: "\"Terapia é coisa de louco.\"",
    truth:
      "Terapia é cuidado com a saúde mental — tão importante quanto cuidar do corpo. Quem busca ajuda demonstra coragem e autoconsciência.",
  },
  {
    myth: "\"Não sei se realmente preciso.\"",
    truth:
      "Você não precisa estar em crise para se beneficiar da terapia. Autoconhecimento e clareza emocional transformam a vida de qualquer pessoa.",
  },
  {
    myth: "\"Tenho medo de ser julgado.\"",
    truth:
      "O espaço terapêutico é confidencial e livre de julgamentos. Aqui você pode ser exatamente quem é.",
  },
  {
    myth: "\"Online não funciona como o presencial.\"",
    truth:
      "A pesquisa mostra que a terapia online é tão eficaz quanto a presencial. Você ganha conforto, praticidade e acesso ao cuidado de onde estiver.",
  },
];

export default function BarriersSection() {
  return (
    <section className="section-pad bg-slate text-white overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-plum-light/10 blur-3xl pointer-events-none" />

      <div className="wrap relative z-10">
        <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
          <span className="ornament justify-center flex mb-5" style={{ color: "hsl(var(--rose-light))" }}>
            Você tem dúvidas?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-5">
            O que pode estar te impedindo de buscar ajuda
          </h2>
          <p className="font-body text-white/60 leading-relaxed">
            É normal ter dúvidas ou receios. Veja como cada crença pode ser
            ressignificada.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {myths.map((m, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <p className="font-display text-lg text-rose-light mb-4 italic">{m.myth}</p>
                <p className="font-body text-white/75 leading-relaxed text-sm">{m.truth}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p className="font-body text-white/60 mb-6 text-lg">
            Ainda com dúvidas? Me chama no WhatsApp — sem compromisso.
          </p>
          <a
            href={WA_CONV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate px-10 py-5 rounded-full font-semibold font-sans text-sm transition-all hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Tirar dúvidas pelo WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
