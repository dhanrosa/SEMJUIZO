/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Mail, Music2, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-black text-white tracking-tighter">SEM JUIZO</p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Pagode Premium</p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#agenda" className="hover:text-amber-500 transition-colors">Agenda</a>
            <a href="#materiais" className="hover:text-amber-500 transition-colors">Materiais</a>
            <a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>

          <div className="grid gap-3 text-sm text-zinc-400">
            <a href="https://instagram.com/semjuizooficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
              <Instagram className="h-4 w-4" />
              <span>@semjuizooficial</span>
            </a>
            <a href="https://tiktok.com/@semjuizooficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
              <Music2 className="h-4 w-4" />
              <span>@semjuizooficial</span>
            </a>
            <a href="https://wa.me/5541995956970" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
              <Phone className="h-4 w-4" />
              <span>(41) 99595-6970</span>
            </a>
            <a href="mailto:semjuizo.contato@gmail.com" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
              <Mail className="h-4 w-4" />
              <span>semjuizo.contato@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900/50 text-center">
          <p className="text-xs text-zinc-600 font-medium">
            © {currentYear} Sem Juizo. Todos os direitos reservados.
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-zinc-700 font-bold">
            Curitiba • Parana • Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
