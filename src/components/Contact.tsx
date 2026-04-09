/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Instagram, Music2 } from 'lucide-react';

const contactLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/semjuizooficial',
    value: '@semjuizooficial',
    icon: Instagram,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@semjuizooficial',
    value: '@semjuizooficial',
    icon: Music2,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contato" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-zinc-950/80"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Vamos Fechar esse Show?</h3>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Fale com a gente pelos canais oficiais e acompanhe o dia a dia do grupo nas redes sociais. Nossa equipe comercial responde o mais rapido possivel.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shrink-0">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">WhatsApp / Telefone</p>
                  <a href="https://wa.me/5541995956970" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                    (41) 99595-6970
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shrink-0">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">E-mail Comercial</p>
                  <a href="mailto:semjuizo.contato@gmail.com" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                    semjuizo.contato@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Base</p>
                  <p className="text-xl font-bold text-white">Curitiba, PR</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 text-zinc-200 transition-colors hover:border-amber-500 hover:text-white"
                >
                  <item.icon className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-3xl"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                <p className="text-zinc-400">Obrigado pelo interesse. Entraremos em contato em breve.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-amber-500 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Nome Completo</label>
                    <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">WhatsApp</label>
                    <input required type="tel" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Local / Empresa</label>
                  <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors" placeholder="Nome do local ou evento" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Data Desejada</label>
                    <input required type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Tipo de Evento</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors appearance-none">
                      <option>Show em Casa Noturna</option>
                      <option>Evento Corporativo</option>
                      <option>Casamento / Particular</option>
                      <option>Festival / Publico</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Mensagem</label>
                  <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition-colors resize-none" placeholder="Conte mais sobre seu evento..." />
                </div>

                <button
                  disabled={formState === 'sending'}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-800 text-zinc-950 font-black rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                  {formState === 'sending' ? 'Enviando...' : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Solicitar Orcamento</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
