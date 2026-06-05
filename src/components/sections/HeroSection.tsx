import { WA_CONV, WA_AGENDA, NAME, CRP } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory-warm to-linen" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-rose-muted/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-rose-muted/20 blur-3xl" />
      <div className="absolute top-32 right-1/4 w-48 h-48 rounded-full bg-linen/60 blur-2xl" />

      {/* Decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-2xl max-h-2xl rounded-full border border-rose-muted/40 opacity-50" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[42vw] h-[42vw] max-w-xl max-h-xl rounded-full border border-rose-muted/20 opacity-40" />

      <div className="wrap relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center py-16 lg:py-0">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p
              className="ornament mb-7 anim-fade-in"
              style={{ opacity: 0, animationDelay: "0s" }}
            >
              Psicóloga Clínica · CRP {CRP}
            </p>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-[3.4rem] text-slate mb-7 anim-fade-up"
              style={{ opacity: 0, animationDelay: "0.1s" }}
            >
              Um espaço para se ouvir,{" "}
              <em className="text-rose-dark not-italic">se compreender</em>{" "}
              e se olhar com cuidado.
            </h1>

            <p
              className="font-body text-warm-stone text-lg leading-relaxed mb-10 anim-fade-up"
              style={{ opacity: 0, animationDelay: "0.2s" }}
            >
              Psicoterapia online para adolescentes e adultos. Um lugar seguro
              onde você pode ser você — sem rótulos, sem julgamentos, com
              acolhimento genuíno.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-10 anim-fade-up"
              style={{ opacity: 0, animationDelay: "0.3s" }}
            >
              <a href={WA_CONV} target="_blank" rel="noopener noreferrer" className="btn-rose">
                <WhatsAppIcon className="w-4 h-4" />
                Quero iniciar minha psicoterapia
              </a>
              <a href="#sobre" className="btn-outline">
                Conheça a Thais
              </a>
            </div>

            <div
              className="flex flex-wrap gap-x-7 gap-y-3 font-sans text-sm text-warm-stone anim-fade-up"
              style={{ opacity: 0, animationDelay: "0.4s" }}
            >
              {["100% Online", "Particular e Convênio", "Adolescentes e Adultos"].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end anim-scale-in"
            style={{ opacity: 0, animationDelay: "0.15s" }}
          >
            <div className="relative">
              {/* Glow blob */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-rose-muted/40 to-linen/60 blur-2xl" />

              {/* Photo placeholder — substitua o src pela foto da Thais */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/foto-hero.jpg"
                alt={`${NAME} — Psicóloga`}
                className="relative w-full max-w-sm lg:max-w-md rounded-[2.5rem] object-cover shadow-2xl aspect-[3/4] object-top"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-rose-muted/30">
                <p className="font-display text-2xl text-slate">5+</p>
                <p className="font-sans text-xs text-warm-stone">anos de experiência</p>
              </div>

              {/* Online badge */}
              <div className="absolute -top-4 -right-4 bg-rose text-white rounded-xl px-4 py-2 shadow-lg font-sans text-xs font-semibold tracking-wide">
                Online ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
