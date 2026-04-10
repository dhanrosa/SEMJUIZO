/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Music, Users, Star, Eye } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Star, label: 'Ano', value: '1+' },
    { icon: Music, label: 'Shows em 2025', value: '+200' },
    { icon: Eye, label: 'Visualizações', value: '400k+' },
    { icon: Users, label: 'Seguidores', value: '+15k' },
  ];

  return (
    <section id="sobre" className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08),_transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
          Nossa História
        </h2>
        <h3 className="mx-auto mb-8 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
          Uma experiência que seu público sente do começo ao fim.
        </h3>

        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-zinc-300 md:text-xl">
          <p>
            O <span className="font-bold text-white">Grupo Sem Juízo</span> nasceu como muitos outros projetos, mas rapidamente se destacou pela
            união de seus integrantes, <span className="font-bold text-white">compromisso com a qualidade musical</span> e
            uma <span className="font-bold text-white">presença de palco marcante</span>.
          </p>
          <p>
            Em menos de um ano, esse grupo independente conquistou seu espaço em Curitiba, levando
            energia, profissionalismo e uma
            <span className="font-bold text-white"> conexão real com o público</span> por onde passa.
          </p>
          <p>
            Mais que um show, entregamos uma <span className="font-bold text-white">experiência completa</span>: do primeiro acorde ao último refrão,
            o público vive uma atmosfera <span className="font-bold text-white">envolvente</span>, <span className="font-bold text-white">vibrante</span> e
            <span className="font-bold text-white"> impossível de ficar parado</span>.
          </p>
          <p>
            Nosso repertório passeia pelos <span className="font-bold text-white">grandes sucessos do pagode</span> dos clássicos que marcaram época
            aos hits atuais, com influências que vão de <span className="font-bold text-white">Revelação</span> a
            <span className="font-bold text-white"> Pedro Sampaio</span>, de <span className="font-bold text-white">Raça Negra</span> a
            <span className="font-bold text-white"> Léo Santana</span>, de <span className="font-bold text-white">Menos e Mais</span> e
            <span className="font-bold text-white"> Thiaguinho</span> até <span className="font-bold text-white">Ivete Sangalo</span>.
          </p>
          <p>
            O resultado é um show <span className="font-bold text-white">dinâmico</span>, <span className="font-bold text-white">versátil</span> e
            <span className="font-bold text-white"> pensado para fazer seu evento acontecer de verdade</span>.
          </p>
          <p>
            E quando essa energia encontra o seu público, o resultado é simples:
            <span className="block pt-2 text-2xl font-black text-white md:text-3xl">um show inesquecível.</span>
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-8 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-4 h-6 w-6 text-amber-500" />
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
