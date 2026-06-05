import { WA_CONV, NAME, CRP } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function AboutSection() {
  return (
    <section id="sobre" className="section-pad bg-off-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] border-2 border-rose-muted/40" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/foto-sobre.jpg"
                alt={`${NAME} — Psicóloga Clínica`}
                className="relative rounded-[2.5rem] w-full object-cover shadow-xl aspect-[4/5] object-top"
              />
              {/* Quote card */}
              <div className="absolute -bottom-6 -right-4 bg-rose text-white rounded-2xl p-5 max-w-[220px] shadow-2xl">
                <p className="font-body text-sm leading-relaxed italic">
                  &ldquo;Cada pessoa merece ser vista além dos seus sintomas.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={150}>
            <span className="ornament mb-5 block">Sobre mim</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-8">
              Olá, sou {NAME}
            </h2>

            <div className="space-y-5 font-body text-warm-stone leading-relaxed">
              <p>
                Sou psicóloga clínica com orientação psicanalítica, profundamente
                influenciada pelos estudos de{" "}
                <em>Freud, Melanie Klein, Winnicott e Ferenczi</em>. Participo
                ativamente de congressos e formações contínuas porque acredito que
                cuidar bem das pessoas exige constante aprimoramento.
              </p>
              <p>
                Minha escuta é{" "}
                <strong className="text-slate">acolhedora, ética e livre de julgamentos</strong>.
                Acredito que cada pessoa vai muito além de um diagnóstico ou
                rótulo. Por isso, evito conclusões precipitadas e busco
                compreender cada história em sua singularidade, respeitando a
                complexidade de suas vivências, emoções e contextos. Cada
                trajetória merece ser ouvida com sensibilidade, profundidade e
                respeito.
              </p>
              <p>
                No espaço terapêutico, meu objetivo é que você se sinta
                verdadeiramente acolhido, consiga se ouvir com mais clareza e
                construa uma relação mais gentil consigo mesmo.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["CRP " + CRP, "Orientação Psicanalítica", "Online e Presencial"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full bg-linen text-warm-stone border border-rose-muted/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={WA_CONV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose mt-8 inline-flex gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Vamos conversar?
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
