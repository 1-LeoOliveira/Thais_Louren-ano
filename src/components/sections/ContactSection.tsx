import { Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WA_AGENDA, WA_GERAL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  return (
    <section id="contato" className="section-pad bg-ivory-warm">
      <div className="wrap">
        <AnimatedSection className="text-center mb-14 max-w-xl mx-auto">
          <span className="ornament justify-center flex mb-5">Contato</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-5">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="font-body text-warm-stone leading-relaxed">
            Me chame pelo WhatsApp e vamos marcar uma conversa. Sem compromisso,
            sem julgamento — só cuidado.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="card text-center h-full flex flex-col items-center justify-center gap-5 py-10">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <WhatsAppIcon className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-sans font-semibold text-slate mb-1">WhatsApp</p>
                <p className="font-sans text-sm text-warm-stone mb-4">(16) 99741-8366</p>
              </div>
              <a
                href={WA_AGENDA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose w-full"
              >
                Agendar sessão
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="card text-center h-full flex flex-col items-center justify-center gap-5 py-10">
              <div className="w-16 h-16 rounded-2xl bg-rose-muted/30 flex items-center justify-center">
                <Phone className="w-7 h-7 text-rose-dark" />
              </div>
              <div>
                <p className="font-sans font-semibold text-slate mb-1">Ligação</p>
                <p className="font-sans text-sm text-warm-stone mb-4">(16) 99741-8366</p>
              </div>
              <a
                href="tel:+5516997418366"
                className="btn-outline w-full"
              >
                Ligar agora
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={200} className="text-center mt-8">
          <p className="font-sans text-sm text-warm-stone">
            Atendimento <strong className="text-slate">online</strong> · Presencial sob consulta ·
            Convênio e particular
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
