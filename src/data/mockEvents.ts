/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { setHours, setMinutes, addDays, startOfMonth } from 'date-fns';
import { CalendarEvent } from '../types';

const today = new Date();
const currentMonth = startOfMonth(today);

export const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    title: 'Show no Bar do Alemão',
    start: setHours(setMinutes(addDays(currentMonth, 10), 0), 22), // 22:00
    end: setHours(setMinutes(addDays(currentMonth, 11), 0), 0),   // 00:00
    location: 'Curitiba, PR',
  },
  {
    id: '2',
    title: 'Evento Corporativo - Volvo',
    start: setHours(setMinutes(addDays(currentMonth, 15), 0), 15), // 15:00
    end: setHours(setMinutes(addDays(currentMonth, 15), 0), 17),   // 17:00
    location: 'Curitiba, PR',
  },
  {
    id: '3',
    title: 'Casamento Marina & João',
    start: setHours(setMinutes(addDays(currentMonth, 15), 0), 21), // 21:00
    end: setHours(setMinutes(addDays(currentMonth, 15), 30), 23), // 23:30
    location: 'São José dos Pinhais, PR',
  },
  {
    id: '4',
    title: 'Pagode da Ressaca',
    start: setHours(setMinutes(addDays(currentMonth, 20), 0), 11), // 11:00
    end: setHours(setMinutes(addDays(currentMonth, 20), 0), 12),   // 12:00
    location: 'Curitiba, PR',
  },
  {
    id: '5',
    title: 'Festival de Inverno',
    start: setHours(setMinutes(addDays(currentMonth, 25), 0), 18), // 18:00
    end: setHours(setMinutes(addDays(currentMonth, 25), 0), 20),   // 20:00
    location: 'Curitiba, PR',
  },
  {
    id: '6',
    title: 'Show Noturno',
    start: setHours(setMinutes(addDays(currentMonth, 25), 0), 23), // 23:00
    end: setHours(setMinutes(addDays(currentMonth, 26), 0), 1),    // 01:00
    location: 'Curitiba, PR',
  }
];
