/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
}

export interface TimeSlot {
  start: Date;
  end: Date;
}

export interface DayAvailability {
  date: Date;
  status: 'available' | 'partial' | 'unavailable';
  events: CalendarEvent[];
  blockedIntervals: TimeSlot[];
  freeSlots: TimeSlot[];
}
