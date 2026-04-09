/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, FileArchive, MicVocal } from 'lucide-react';

const materials = [
  {
    title: 'Press Kit',
    description: 'Fotos, identidade visual e materiais oficiais do Grupo Sem Juizo para divulgacao e apresentacoes comerciais.',
    href: 'https://drive.google.com/drive/folders/1oNHwpqVk8FLb1-ummplsYR9psSZ2NPaM?usp=drive_link',
    icon: FileArchive,
  },
  {
    title: 'Rider Tecnico e Mapa de Palco',
    description: 'Acesse os documentos tecnicos de estrutura, necessidades de palco e organizacao para producao do evento.',
    href: 'https://drive.google.com/drive/folders/1c3z6u42t16k3q1FE1OUdfo3pyJgBsBvp?usp=drive_link',
    icon: MicVocal,
  },
];

export default function Materials() {
  return (
    <section id="materiais" className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-500">Materiais</h2>
          <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">Tudo pronto para divulgacao e producao</h3>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Centralizamos os arquivos principais em duas pastas para facilitar o acesso rapido de contratantes, produtores e equipes tecnicas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {materials.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <item.icon className="h-7 w-7" />
              </div>

              <div className="flex items-start justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-black text-white">{item.title}</h4>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{item.description}</p>
                </div>

                <div className="rounded-full border border-zinc-700 p-3 text-zinc-300 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                <span>Abrir pasta no Google Drive</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
