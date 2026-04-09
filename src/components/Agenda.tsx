/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  addMonths,
  subMonths,
  isSameDay,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  Calendar as CalendarIcon,
  MapPin,
} from 'lucide-react';
import { getDayAvailability } from '../lib/availability';
import { MOCK_EVENTS } from '../data/mockEvents';
import { cn } from '../lib/utils';

function withPortugueseLocale(url?: string) {
  if (!url) return undefined;

  try {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set('hl', 'pt-BR');
    return parsedUrl.toString();
  } catch {
    return url;
  }
}

const googleCalendarEmbedUrl = withPortugueseLocale(import.meta.env.VITE_GOOGLE_CALENDAR_EMBED_URL?.trim());
const googleCalendarPublicUrl = withPortugueseLocale(import.meta.env.VITE_GOOGLE_CALENDAR_PUBLIC_URL?.trim());
const hasGoogleCalendar = Boolean(googleCalendarEmbedUrl);

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const selectedDayInfo = useMemo(() => {
    if (!selectedDay) return null;
    return getDayAvailability(selectedDay, MOCK_EVENTS);
  }, [selectedDay]);

  return (
    <section id="agenda" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-4">Agenda</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {hasGoogleCalendar ? 'Agenda Google' : 'Datas Disponiveis'}
          </h3>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            {hasGoogleCalendar
              ? 'Consulte os compromissos publicados diretamente na agenda oficial do Google e abra o calendario completo em uma nova aba.'
              : 'Consulte nossa disponibilidade em tempo real. Bloqueamos automaticamente 90 minutos antes e depois de cada show para logistica.'}
          </p>
        </div>

        {hasGoogleCalendar && googleCalendarEmbedUrl ? (
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-2 md:p-3">
              <iframe
                src={googleCalendarEmbedUrl}
                title="Agenda do Google"
                className="h-[720px] w-full rounded-[1.25rem] bg-zinc-950 [filter:invert(0.94)_hue-rotate(180deg)_saturate(0.85)_contrast(0.92)_brightness(0.9)]"
                loading="lazy"
              />
            </div>

            <div className="flex justify-center">
              <a
                href={googleCalendarPublicUrl || googleCalendarEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-amber-400"
              >
                <CalendarIcon className="h-4 w-4" />
                <span>Abrir Agenda no Google</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white capitalize">
                  {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
                </h4>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextMonth} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
                  <div key={day} className="text-center text-[10px] uppercase tracking-widest text-zinc-500 font-bold py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {days.map((day, idx) => {
                  const availability = getDayAvailability(day, MOCK_EVENTS);
                  const isSelected = selectedDay && isSameDay(day, selectedDay);
                  const isCurrentMonth = isSameMonth(day, monthStart);

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedDay(day)}
                      className={cn(
                        'relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 border',
                        !isCurrentMonth ? 'opacity-20 pointer-events-none' : 'opacity-100',
                        isSelected
                          ? 'bg-amber-500 border-amber-400 text-zinc-950 scale-105 z-10 shadow-lg shadow-amber-500/20'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      )}
                    >
                      <span className="text-sm font-bold">{format(day, 'd')}</span>

                      {isCurrentMonth && (
                        <div className="absolute bottom-2 flex gap-0.5">
                          {availability.status === 'available' && (
                            <div className={cn('w-1.5 h-1.5 rounded-full', isSelected ? 'bg-zinc-950' : 'bg-emerald-500')} />
                          )}
                          {availability.status === 'partial' && (
                            <div className={cn('w-1.5 h-1.5 rounded-full', isSelected ? 'bg-zinc-950' : 'bg-amber-500')} />
                          )}
                          {availability.status === 'unavailable' && (
                            <div className={cn('w-1.5 h-1.5 rounded-full', isSelected ? 'bg-zinc-950' : 'bg-rose-500')} />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-zinc-400 font-medium">Disponivel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs text-zinc-400 font-medium">Parcial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-xs text-zinc-400 font-medium">Ocupado</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                {selectedDayInfo && (
                  <motion.div
                    key={selectedDayInfo.date.toISOString()}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">Detalhes do Dia</p>
                        <h4 className="text-2xl font-black text-white capitalize">
                          {format(selectedDayInfo.date, "EEEE, d 'de' MMMM", { locale: ptBR })}
                        </h4>
                      </div>
                      <div
                        className={cn(
                          'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
                          selectedDayInfo.status === 'available'
                            ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                            : selectedDayInfo.status === 'partial'
                              ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                              : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                        )}
                      >
                        {selectedDayInfo.status === 'available' ? 'Livre' : selectedDayInfo.status === 'partial' ? 'Parcial' : 'Ocupado'}
                      </div>
                    </div>

                    {selectedDayInfo.events.length > 0 && (
                      <div className="mb-8">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                          <AlertCircle className="w-3 h-3" /> Shows Confirmados
                        </h5>
                        <div className="space-y-3">
                          {selectedDayInfo.events.map((event) => (
                            <div key={event.id} className="bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl">
                              <p className="text-white font-bold text-sm mb-1">{event.title}</p>
                              <div className="flex items-center gap-4 text-xs text-zinc-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" /> {event.location}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Horarios Livres
                      </h5>
                      {selectedDayInfo.freeSlots.length > 0 ? (
                        <div className="grid grid-cols-1 gap-2">
                          {selectedDayInfo.freeSlots.map((slot, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl">
                              <span className="text-emerald-500 font-bold text-sm">
                                {format(slot.start, 'HH:mm')} as {format(slot.end, 'HH:mm')}
                              </span>
                              <button
                                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-zinc-950 px-3 py-1.5 rounded-lg hover:bg-emerald-400 transition-colors"
                              >
                                Reservar
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-rose-500/5 border border-rose-500/10 p-6 rounded-xl text-center">
                          <p className="text-rose-500 text-sm font-medium">Sem janelas disponiveis para este dia.</p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>Solicitar Outra Data</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
