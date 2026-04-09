/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MessageSquare, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import bannerImage from '../public/banner.png';
import logoRetoSj from '../public/logoretosj.png';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToAgenda = () => {
    document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={bannerImage}
          alt="Show ao vivo" 
          className="w-full h-full object-cover opacity-60 scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
            O Melhor do Pagode de Curitiba
          </span>
          
          <img
            src={logoRetoSj}
            alt="Sem Juizo"
            className="mx-auto mb-6 h-20 w-auto max-w-full object-contain md:h-[6.7rem] lg:h-[8.4rem]"
          />
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Energia, carisma e o repertório que seu evento merece. Transformamos qualquer ocasião em um show inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToAgenda}
              className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <Calendar className="w-5 h-5" />
              <span>Ver Datas Disponíveis</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-zinc-900/50 hover:bg-zinc-800 text-white font-bold rounded-xl border border-zinc-800 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-amber-500" />
              <span>Solicitar Orçamento</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
