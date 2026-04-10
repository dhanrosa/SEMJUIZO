/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PromoVideo from './components/PromoVideo';
import About from './components/About';
import Agenda from './components/Agenda';
import Materials from './components/Materials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import iconInst from './public/iconinst.png';
import iconTik from './public/icontik.png';
import logoSj from './public/logosj.png';

const floatingWhatsappMessage = encodeURIComponent(
  'Olá! Gostaria saber informações sobre o show do Sem Juizo!',
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto">
            <a href="#" className="flex items-center gap-2">
              <img
                src={logoSj}
                alt="Logo Sem Juizo"
                className="h-24 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex gap-8 pointer-events-auto bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-6 py-3 rounded-full">
            <a href="#sobre" className="text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#agenda" className="text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Agenda</a>
            <a href="#materiais" className="text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Materiais</a>
            <a href="#contato" className="text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Contato</a>
            <div className="h-4 w-px bg-zinc-700" />
            <a
              href="https://instagram.com/semjuizooficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Sem Juizo"
              className="transition-opacity hover:opacity-80"
            >
              <img src={iconInst} alt="Instagram" className="h-4 w-4 object-contain" />
            </a>
            <a
              href="https://tiktok.com/@semjuizooficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok do Sem Juizo"
              className="transition-opacity hover:opacity-80"
            >
              <img src={iconTik} alt="TikTok" className="h-4 w-4 object-contain" />
            </a>
          </div>

          <div className="pointer-events-auto">
            <a
              href="#contato"
              className="bg-amber-500 text-zinc-950 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              Contratar
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <PromoVideo />
        <About />
        <Agenda />
        <Materials />
        <Contact />
      </main>

      <Footer />

      <motion.a
        href={`https://wa.me/5541995956970?text=${floatingWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
