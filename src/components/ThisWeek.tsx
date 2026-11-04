import { CalendarDays, Church, Palette } from 'lucide-react';
import { useNow } from '../hooks/useNow';
import {
  BULAN,
  HARI,
  LIT_COLORS,
  SEASONS,
  SEASON_ORDER,
  addDays,
  fmtCountdown,
  fmtID,
  fmtTime,
  getSeason,
  getSundayLabel,
  nextSunday,
  slotStatus,
} from '../lib/liturgy';
import { WORSHIP_SCHEDULE } from '../data/content';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

function CountdownBox({ v, l }: { v: number; l: string }) {
  return (
    <div className="rounded-xl bg-cream/10 px-2 py-3 text-center ring-1 ring-cream/15">
      <p className="font-display text-2xl font-semibold tabular-nums text-cream sm:text-3xl">
        {String(v).padStart(2, '0')}
      </p>
      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-cream/50">{l}</p>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-600/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-red-700">
      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-live-pulse" />
      Live
    </span>
  );
}

export default function ThisWeek() {
  const now = useNow(1000);
  const season = getSeason(now);
  const color = LIT_COLORS[season.color];
  const sunday = nextSunday(now);

  // Target: Kebaktian Minggu I pukul 07:00
  const target = new Date(sunday);
  target.setHours(7, 0, 0, 0);
  if (sunday.getTime() === now.getTime() && now.getTime() >= target.getTime()) {
    target.setTime(addDays(target, 7).getTime());
  }
  const cd = fmtCountdown(target.getTime() - now.getTime());

  const sortedSchedule = [...WORSHIP_SCHEDULE].sort((a, b) => a.day - b.day || a.start - b.start);

  return (
    <section id="ibadah" className="relative bg-parchment/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Ibadah & Kalender Liturgi"
          title="Minggu ini kita"
          italic="beribadah bersama"
          desc="Ikuti iritme kalender liturgi gereja — masa, warna, dan jadwal ibadah yang sedang berlangsung pekan ini."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-5">
          {/* Kartu Minggu Ini */}
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-deep p-8 text-cream shadow-2xl shadow-forest-deep/30 sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/25" />
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-28 h-72 w-72 rounded-full border border-gold/10" />

              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                <CalendarDays size={14} />
                Minggu Ini
              </p>

              <p className="mt-5 font-display text-5xl font-medium leading-none sm:text-6xl">
                {sunday.getDate()}{' '}
                <span className="text-3xl italic text-gold sm:text-4xl">{BULAN[sunday.getMonth()]}</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-cream/75">
                {getSundayLabel(sunday)} · {sunday.getFullYear()}
              </p>
              <p className="mt-1 text-xs text-cream/50">
                Hari ini: {fmtID(now)}
              </p>

              <div className="mt-7 rounded-2xl bg-cream/8 p-4 ring-1 ring-cream/10">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full ring-2 ring-cream/30"
                    style={{ background: color.hex }}
                  />
                  <p className="text-sm font-bold">{season.name}</p>
                  <span className="ml-auto rounded-full bg-cream/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream/70">
                    {color.name}
                  </span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-cream/65">{season.desc}</p>
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-cream/50">
                Menuju Kebaktian Minggu I · 07:00 WITA
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                <CountdownBox v={cd.d} l="Hari" />
                <CountdownBox v={cd.h} l="Jam" />
                <CountdownBox v={cd.m} l="Menit" />
                <CountdownBox v={cd.s} l="Detik" />
              </div>
            </div>
          </Reveal>

          {/* Kalender Liturgi + Jadwal */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-ink/10 bg-white/75 p-6 backdrop-blur sm:p-8">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-deep">
                  <Palette size={14} className="text-gold-deep" />
                  Kalender Liturgi Gereja
                </p>

                <div className="-mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-2">
                  {SEASON_ORDER.map((key) => {
                    const s = SEASONS[key];
                    const c = LIT_COLORS[s.color];
                    const active = s.key === season.key;
                    return (
                      <div
                        key={key}
                        className={`flex min-w-[118px] flex-1 flex-col items-start rounded-2xl border p-3.5 transition-all duration-500 ${
                          active
                            ? 'border-transparent text-white shadow-xl'
                            : 'border-ink/10 bg-cream/70 text-ink-soft hover:-translate-y-0.5'
                        }`}
                        style={active ? { background: c.hex } : undefined}
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            background: active ? '#ffffff' : c.hex,
                            boxShadow: active ? '0 0 0 3px rgba(255,255,255,0.25)' : undefined,
                          }}
                        />
                        <p className="mt-2.5 text-[13px] font-bold leading-tight">{s.short}</p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide opacity-60">
                          {c.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Gereja kini berjalan dalam <strong className="text-ink">{season.name}</strong> (
                  {season.rangeLabel}). {season.desc} Warna liturgi{' '}
                  <strong className="text-ink">{color.name}</strong> — {color.desc.toLowerCase()}
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-[2rem] border border-ink/10 bg-white/75 p-6 backdrop-blur sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-deep">
                    <Church size={14} className="text-gold-deep" />
                    Jadwal Ibadah Mingguan
                  </p>
                  <span className="rounded-full bg-forest/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">
                    Setiap pekan · WITA
                  </span>
                </div>

                <div className="mt-4 divide-y divide-ink/8">
                  {sortedSchedule.map((w) => {
                    const st = slotStatus(now, { day: w.day, start: w.start, end: w.end });
                    return (
                      <div
                        key={w.title}
                        className={`group flex items-start gap-4 rounded-xl px-2 py-4 transition-colors sm:px-3 ${
                          st === 'live' ? 'bg-red-600/6' : 'hover:bg-cream/80'
                        }`}
                      >
                        <div
                          className={`w-16 shrink-0 rounded-xl px-2 py-2 text-center ${
                            st === 'live' ? 'bg-red-600 text-cream' : 'bg-forest/8 text-forest'
                          }`}
                        >
                          <p className="text-[10px] font-bold uppercase tracking-wider">
                            {HARI[w.day].slice(0, 3)}
                          </p>
                          <p className="text-sm font-bold tabular-nums">{fmtTime(w.start)}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-bold text-ink">{w.title}</p>
                            {st === 'live' && <LiveBadge />}
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-ink-soft">
                            {fmtTime(w.start)}–{fmtTime(w.end)} WITA · {w.place}
                          </p>
                          <p className="mt-0.5 text-[11px] italic text-ink-soft/70">{w.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 rounded-xl bg-cream/80 p-3.5 text-[11px] leading-relaxed text-ink-soft">
                  Kebaktian Minggu berlangsung di <strong className="text-ink">Gereja Imanuel</strong>, Jl.
                  Diponegoro No. 7, Gorontalo. Persekutuan Rabu berputar di rumah anggota — cek grup
                  namaposo untuk lokasi pekan ini.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
