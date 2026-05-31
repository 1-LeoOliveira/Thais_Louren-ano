import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const avatarColors = [
  "bg-rose-400", "bg-purple-400", "bg-teal-500",
  "bg-amber-500", "bg-indigo-500", "bg-pink-400",
];

// Substitua pelos depoimentos reais da Thais
const reviews = [
  {
    name: "Ana C.",
    text: "A Thais me ajudou a entender o que estava sentindo sem me colocar num caixote. Pela primeira vez me senti realmente ouvida e não julgada. Transformador.",
    rating: 5,
  },
  {
    name: "Lucas M.",
    text: "Tinha muito preconceito com terapia mas decidi tentar. Desde a primeira sessão me senti acolhido. A Thais tem um jeito único de fazer você se sentir seguro.",
    rating: 5,
  },
  {
    name: "Fernanda R.",
    text: "Comecei por ansiedade e fui descobrindo muito mais sobre mim mesma. A Thais não tem pressa, respeita seu ritmo. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Mariana S.",
    text: "O atendimento online foi uma surpresa positiva. A qualidade é a mesma — e a praticidade fez toda a diferença para eu conseguir manter a constância.",
    rating: 5,
  },
  {
    name: "Rafael T.",
    text: "Homem adulto que nunca imaginaria fazer terapia. Hoje agradeço por ter dado esse passo. A Thais cria um espaço sem julgamentos que é raro.",
    rating: 5,
  },
  {
    name: "Camila L.",
    text: "Passei por um luto muito difícil e a Thais foi fundamental. Escuta profunda, sem querer apressar o processo. Muito grata.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section id="depoimentos" className="section-pad bg-linen/40">
      <div className="wrap">
        <AnimatedSection className="text-center mb-12">
          <span className="ornament justify-center flex mb-5">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate mb-4">
            O que dizem quem já passou por aqui
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="font-sans font-semibold text-slate ml-1">5.0</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimatedSection key={i} delay={i * 90}>
              <div className="card h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-body text-warm-stone text-sm leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${avatarColors[i % avatarColors.length]}`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <p className="font-sans font-semibold text-slate text-sm">{r.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
