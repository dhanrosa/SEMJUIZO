/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

const youtubeVideoId = 'WUAzpgLG2jI';

export default function PromoVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const embedUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '1',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      loop: '1',
      playlist: youtubeVideoId,
    });

    return `https://www.youtube.com/embed/${youtubeVideoId}?${params.toString()}`;
  }, []);

  const postToPlayer = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args: [],
      }),
      'https://www.youtube.com'
    );
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          postToPlayer('playVideo');
          return;
        }

        postToPlayer('pauseVideo');
      },
      { threshold: 0.45 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleIframeLoad = () => {
    postToPlayer('mute');
  };

  const toggleMute = () => {
    if (isMuted) {
      postToPlayer('unMute');
      setIsMuted(false);
      return;
    }

    postToPlayer('mute');
    setIsMuted(true);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-zinc-950 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] bg-black">
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title="Sem Juizo ao vivo"
              className="aspect-video w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={handleIframeLoad}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-zinc-950/20" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-7">
              <div className="pointer-events-none max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">Video Promocional</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-4xl">Sem Juizo ao vivo</h2>
              </div>

              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-100 backdrop-blur-sm transition-colors hover:border-amber-500 hover:text-white"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-amber-500" />}
                <span>{isMuted ? 'Ativar audio' : 'Mutar audio'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
