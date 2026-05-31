import { Phone } from "lucide-react";
import { WA_GERAL, INSTAGRAM, NAME, CRP } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-slate text-white/70 py-12">
      <div className="wrap">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-display text-xl text-white mb-1">{NAME}</p>
            <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-3">Psicóloga</p>
            <p className="text-sm text-white/40">CRP {CRP}</p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400" />
                (16) 99741-8366
              </a>
              <a
                href={`tel:+5516997418366`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (16) 99741-8366
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white mb-4 text-sm tracking-wide uppercase">Redes Sociais</h4>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              @thaislouren.psi
            </a>
            <p className="text-sm mt-3 text-white/40">Atendimento online · Presencial sob consulta</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} {NAME} · Todos os direitos reservados</p>
          <p>Desenvolvido com cuidado</p>
        </div>
      </div>
    </footer>
  );
}
