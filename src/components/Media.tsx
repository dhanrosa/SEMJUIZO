/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Maximize2 } from 'lucide-react';

const PHOTOS = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
];

export default function Media() {
  return (
    <section id="midia" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Galeria & Vídeos</h3>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {PHOTOS.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-zinc-800"
            >
              <img 
                src={src} 
                alt={`Show ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 group"
            >
              {/* Placeholder for Video */}
              <img 
                src={`https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200&auto=format&fit=crop`} 
                alt="Thumbnail Vídeo" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-8 h-8 text-zinc-950 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">Live Session</p>
                <h4 className="text-xl font-bold text-white">Sem Juizo - Medley Clássicos 2024</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
