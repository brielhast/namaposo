import { useMemo } from 'react';
import {
  BookOpen,
  CalendarClock,
  HeartHandshake,
  Home,
  Hourglass,
  MapPin,
  Radio,
  Sprout,
  Sunrise,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { ACTIVITIES, getSpecialEvents } from '../data/content';
import { useNow } from '../hooks/useNow';
import { getLiveItems, getNextEvent } from '../lib/live';
import {
  BULAN,
  HARI,
  diffDays,
  fmtCountdown,
  fmtCountdownShort,
  fmtTime,
  slotStatus,
} from '../lib/liturgy';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const ICONS: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  'book-open': BookOpen,
  home: Home,
  users: Users,
  'heart-handshake': HeartHandshake,
  sprout: Sprout,
};

function LiveBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-600/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-red-700">
      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-live-pulse" />
      Sedang berlangsung
    </span>
  );
}

function Banner({ now }: { now: Date }) {
  const live = getLiveItems(now);
  const next = getNextEvent(now);

  if (live.length > 0) {
    const l = live[0];
    const endAt = new Date(now);
    endAt.setHours(0, 0, 0, 0);
    endAt.setMinutes(l.end);
    return (
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-800 via-red-900 to-forest-deep p-8 text-cream shadow-2xl shadow-red-900/30 sm:p-10">
        <div aria-hidden="true" className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-cream/8" />
        <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-red-200">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 animate-live-pulse" />
          Sedang berlangsung sekarang
        </p>
        <p className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">{l.title}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/75">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-gold" /> {l.place}
          </span>
          <span className="inline-flex items-center gap-2">
            <Hourglass size={15} className="text-gold" />
            {fmtCountdownShort(Math.max(0, endAt.getTime() - now.getTime()))} lagi · hingga{' '}
            {fmtTime(l.end)} WIB
          </span>
        </div>
        {live.length > 1 && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
            +{live.length - 1} kegiatan lain juga sedang berlangsung
          </p>
        )}
      </div>
    );
  }

  if (next) {
    const startAt = new Date(next.date);
    startAt.setMinutes(next.start);
    const cd = fmtCountdown(startAt.getTime() - now.getTime());
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/80 p-8 shadow-xl shadow-forest/5 backdrop-blur sm:p-10">
        <div aria-hidden="true" className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-gold/15" />
        <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-deep">
          <CalendarClock size={14} />
          Acara berikutnya
        </p>
        <p className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {next.title}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-forest" /> {next.place}
          </span>
          <span className="inline-flex items-center gap-2">
            <Radio size={15} className="text-forest" /> {fmtTime(next.start)} WIB
          </span>
        </div>
        <div className="mt-6 flex max-w-md items-center gap-2">
          {[
            { v: cd.d, l: 'Hari' },
            { v: cd.h, l: 'Jam' },
            { v: cd.m, l: 'Menit' },
            { v: cd.s, l: 'Detik' },
          ].map((b) => (
            <div key={b.l} className="flex-1 rounded-xl bg-forest/8 px-2 py-2.5 text-center">
              <p className="font-display text-xl font-semibold tabular-nums text-forest">
                {String(b.v).padStart(2, '0')}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-forest/60">{b.l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

const ACCENT: Record<string, string> = {
  gold: 'bg-gold text-forest-deep',
  terra: 'bg-terra text-cream',
  forest: 'bg-forest text-cream',
};

export default function Activities() {
  const now = useNow(1000);
  const events = useMemo(() => getSpecialEvents(), []);

  return (
    <section id="kegiatan" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Kegiatan Namaposo"
          title="Hidup kami"
          italic="tidak pernah diam"
          desc="Dari doa pagi hingga kerja bakti — inilah rutinitas namaposo yang bisa Anda ikuti, lengkap dengan penanda acara yang sedang berlangsung saat ini."
        />

        <Reveal delay={120}>
          <div className="mt-12">
            <Banner now={now} />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a, i) => {
            const st = slotStatus(now, { day: a.day, start: a.start, end: a.end });
            const Icon = ICONS[a.icon] ?? Users;
            return (
              <Reveal key={a.title} delay={i * 80}>
                <article
                  className={`group flex h-full flex-col rounded-2xl border p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 ${
                    st === 'live'
                      ? 'border-red-600/30 bg-red-600/5 shadow-lg shadow-red-600/10'
                      : 'border-ink/10 bg-white/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-500 ${
                        st === 'live'
                          ? 'bg-red-600 text-cream'
                          : 'bg-forest/8 text-forest group-hover:bg-forest group-hover:text-gold'
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <span className="rounded-full border border-ink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                      {a.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">{a.desc}</p>
                  <div className="mt-5 border-t border-ink/8 pt-4 text-xs font-semibold text-ink-soft">
                    <p>
                      Setiap {HARI[a.day]} · {fmtTime(a.start)}–{fmtTime(a.end)} WIB
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-ink-soft/80">
                      <MapPin size={12} className="shrink-0 text-gold-deep" />
                      {a.place}
                    </p>
                  </div>
                  {st === 'live' && (
                    <div className="mt-4">
                      <LiveBadge />
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Agenda khusus */}
        <div className="mt-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Agenda <span className="font-light italic text-forest">khusus</span>
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
                Akan datang
              </p>
            </div>
          </Reveal>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {events.map((e, i) => {
              const left = diffDays(now, e.date);
              return (
                <Reveal key={e.title} delay={i * 90}>
                  <article className="group flex h-full gap-5 rounded-2xl border border-ink/10 bg-white/70 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 sm:p-6">
                    <div
                      className={`flex h-[76px] w-[64px] shrink-0 flex-col items-center justify-center rounded-2xl ${ACCENT[e.accent] ?? ACCENT.forest}`}
                    >
                      <span className="font-display text-2xl font-semibold leading-none">
                        {e.date.getDate()}
                      </span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-wider">
                        {BULAN[e.date.getMonth()].slice(0, 3)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-lg font-semibold leading-tight text-ink">
                          {e.title}
                        </h4>
                        <span className="rounded-full bg-forest/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-forest">
                          {left <= 0 ? 'Hari ini' : `${left} hari lagi`}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{e.desc}</p>
                      <p className="mt-2 text-xs font-semibold text-ink-soft/80">
                        {e.time} · {e.place}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
