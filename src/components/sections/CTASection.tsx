import AnimatedSection from "@/components/ui/AnimatedSection";
import { WA_CONV } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-dark via-rose to-rose-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(300_18%_32%_/_0.15),transparent_60%)]" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="wrap relative z-10 text-center text-white">
        <AnimatedSection>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/60 mb-5">
            Você não precisa continuar sozinho
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto">
            O primeiro passo já é o mais corajoso.
          </h2>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Estou aqui para te acolher, ouvir de verdade e caminhar ao seu lado
            nessa jornada de autoconhecimento e cuidado.
          </p>
          <a
            href={WA_CONV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-rose-dark px-10 py-5 rounded-full font-semibold font-sans text-sm transition-all hover:bg-white/95 hover:-translate-y-1 hover:shadow-2xl"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Quero iniciar minha terapia
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
