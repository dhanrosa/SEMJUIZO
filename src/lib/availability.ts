/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  addMinutes, 
  subMinutes, 
  isWithinInterval, 
  areIntervalsOverlapping, 
  startOfDay, 
  endOfDay, 
  isSameDay,
  setHours,
  setMinutes,
  isBefore,
  isAfter,
  addDays
} from 'date-fns';
import { CalendarEvent, TimeSlot, DayAvailability } from '../types';

const BUFFER_MINUTES = 90;

/**
 * Calculates the blocked interval for an event including buffers.
 */
export function getBlockedInterval(event: CalendarEvent): TimeSlot {
  return {
    start: subMinutes(event.start, BUFFER_MINUTES),
    end: addMinutes(event.end, BUFFER_MINUTES),
  };
}

/**
 * Merges overlapping time slots.
 */
export function mergeIntervals(intervals: TimeSlot[]): TimeSlot[] {
  if (intervals.length === 0) return [];

  // Sort by start time
  const sorted = [...intervals].sort((a, b) => a.start.getTime() - b.start.getTime());
  
  const merged: TimeSlot[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];

    if (current.start <= lastMerged.end) {
      // Overlap, merge
      lastMerged.end = new Date(Math.max(lastMerged.end.getTime(), current.end.getTime()));
    } else {
      merged.push(current);
    }
  }

  return merged;
}

/**
 * Calculates free slots for a specific day given blocked intervals.
 * Assumes a standard working window (e.g., 08:00 to 04:00 next day for shows).
 */
export function getFreeSlots(day: Date, blockedIntervals: TimeSlot[]): TimeSlot[] {
  const dayStart = startOfDay(day);
  const dayEnd = endOfDay(day);
  
  // For shows, we might consider the "day" to extend into the next morning
  // But let's stick to the 24h window for simplicity in the calendar view, 
  // or define a custom "show window" like 10:00 AM to 04:00 AM next day.
  const windowStart = setHours(setMinutes(dayStart, 0), 10); // 10:00 AM
  const windowEnd = addMinutes(addDays(dayStart, 1), 240); // 04:00 AM next day

  const freeSlots: TimeSlot[] = [];
  let currentStart = windowStart;

  const relevantBlocked = blockedIntervals
    .filter(b => areIntervalsOverlapping(
      { start: b.start, end: b.end },
      { start: windowStart, end: windowEnd }
    ))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  for (const block of relevantBlocked) {
    if (isAfter(block.start, currentStart)) {
      freeSlots.push({ start: currentStart, end: block.start });
    }
    currentStart = isAfter(block.end, currentStart) ? block.end : currentStart;
  }

  if (isBefore(currentStart, windowEnd)) {
    freeSlots.push({ start: currentStart, end: windowEnd });
  }

  // Filter out slots shorter than 1 hour (too short for a show)
  return freeSlots.filter(slot => (slot.end.getTime() - slot.start.getTime()) >= 60 * 60 * 1000);
}

/**
 * Gets availability for a specific day.
 */
export function getDayAvailability(day: Date, allEvents: CalendarEvent[]): DayAvailability {
  const dayEvents = allEvents.filter(e => isSameDay(e.start, day) || isSameDay(e.end, day));
  const blockedIntervals = mergeIntervals(dayEvents.map(getBlockedInterval));
  const freeSlots = getFreeSlots(day, blockedIntervals);

  let status: DayAvailability['status'] = 'available';
  if (dayEvents.length > 0) {
    status = freeSlots.length > 0 ? 'partial' : 'unavailable';
  }

  return {
    date: day,
    status,
    events: dayEvents,
    blockedIntervals,
    freeSlots
  };
}
