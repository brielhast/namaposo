// ============================================================
//  Logika "sedang berlangsung" & acara berikutnya
// ============================================================

import { ACTIVITIES, WORSHIP_SCHEDULE } from '../data/content';
import { nextSlotDate, slotStatus, fmtTime, type WeeklySlot } from './liturgy';

export interface LiveItem {
  title: string;
  place: string;
  end: number;
}

/** Daftar ibadah/kegiatan yang SEDANG berlangsung sekarang */
export function getLiveItems(now: Date): LiveItem[] {
  const live: LiveItem[] = [];
  WORSHIP_SCHEDULE.forEach((w) => {
    const slot: WeeklySlot = { day: w.day, start: w.start, end: w.end };
    if (slotStatus(now, slot) === 'live') {
      live.push({ title: w.title, place: w.place, end: w.end });
    }
  });
  ACTIVITIES.forEach((a) => {
    const slot: WeeklySlot = { day: a.day, start: a.start, end: a.end };
    if (slotStatus(now, slot) === 'live') {
      live.push({ title: a.title, place: a.place, end: a.end });
    }
  });
  return live;
}

export interface NextEvent {
  title: string;
  place: string;
  date: Date;
  start: number;
  end: number;
}

/** Ibadah/kegiatan terdekat berikutnya */
export function getNextEvent(now: Date): NextEvent | null {
  const pool = [
    ...WORSHIP_SCHEDULE.map((w) => ({ title: w.title, place: w.place, day: w.day, start: w.start, end: w.end })),
    ...ACTIVITIES.map((a) => ({ title: a.title, place: a.place, day: a.day, start: a.start, end: a.end })),
  ];

  let best: NextEvent | null = null;
  pool.forEach((it) => {
    const slot: WeeklySlot = { day: it.day, start: it.start, end: it.end };
    if (slotStatus(now, slot) === 'live') return; // sedang berlangsung — bukan "berikutnya"
    const date = nextSlotDate(now, slot);
    if (!best || date.getTime() < best.date.getTime()) {
      best = { title: it.title, place: it.place, date, start: it.start, end: it.end };
    }
  });
  return best;
}

export { fmtTime };
