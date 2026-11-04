import { ArrowDown, CalendarClock, Cross, ShoppingBag } from 'lucide-react';
import { useNow } from '../hooks/useNow';
import {
  fmtID,
  fmtTime,
  fmtCountdownShort,
  getSeason,
  getSundayLabel,
  LIT_COLORS,
  nextSunday,
} from '../lib/liturgy';
import { getLiveItems, getNextEvent } from '../lib/live';
import Reveal from './Reveal';

function InfoChip({
  label,
  value,
  sub,
  accent,
  dot,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
  dot?: string;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 backdrop-blur transition-transform duration-500 hover:-translate-y-1 ${
        accent ? 'border-forest/20 bg-forest text-cream shadow-xl shadow-forest/20' : 'border-ink/10 bg-white/70'
      }`}
    >
      <p
        className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] ${
          accent ? 'text-gold' : 'text-ink-soft'
        }`}
      >
        {dot && (
          <span
            className={`h-2 w-2 rounded-full ${accent ? 'animate-live-pulse bg-red-400' : ''}`}
            style={accent ? undefined : { background: dot }}
          />
        )}
        {label}
      </p>
      <p className={`mt-1.5 text-[15px] font-bold leading-snug ${accent ? 'text-cream' : 'text-ink'}`}>{value}</p>
      <p className={`mt-0.5 text-xs leading-relaxed ${accent ? 'text-cream/70' : 'text-ink-soft/80'}`}>{sub}</p>
    </div>
  );
}

export default function Hero() {
  const now = useNow();
  const season = getSeason(now);
  const color = LIT_COLORS[season.color];
  const sunday = nextSunday(now);
  const live = getLiveItems(now);
  const next = getNextEvent(now);

  let nextLabel = 'Ibadah Berikutnya';
  let nextValue = '—';
  let nextSub = '';
  if (live.length > 0) {
    nextLabel = 'Sedang Berlangsung';
    nextValue = live[0].title;
    nextSub = `Di ${live[0].place} · hingga ${fmtTime(live[0].end)} WITA`;
  } else if (next) {
    const startAt = new Date(next.date);
    startAt.setMinutes(next.start);
    nextValue = next.title;
    nextSub = `${fmtCountdownShort(startAt.getTime() - now.getTime())} lagi · ${fmtTime(next.start)} WITA · ${next.place}`;
  }

  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* dekorasi latar */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[560px] w-[560px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-12%] h-[520px] w-[520px] rounded-full bg-forest/10 blur-3xl" />
        <Cross
          className="absolute left-[6%] top-24 text-forest/8"
          size={140}
          strokeWidth={1}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-24 lg:pt-44">
        {/* Kolom kiri */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-gold-deep">
              <span className="h-px w-10 bg-gold" />
              Persekutuan Keluarga Jemaat — Gorontalo
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-balance mt-6 font-display text-[clamp(3.4rem,8vw,7rem)] font-medium leading-[0.92] tracking-tight text-ink">
              Namaposo
              <span className="block font-light italic text-forest">Emanuel</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Rumah bagi setiap keluarga untuk <em className="font-display italic text-forest">bertumbuh</em>,{' '}
              <em className="font-display italic text-forest">bersekutu</em>, dan{' '}
              <em className="font-display italic text-forest">melayani</em> bersama dalam kasih Kristus —
              dari rumah ke rumah, dari hati ke hati.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#kegiatan"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-cream shadow-xl shadow-forest/25 transition-all hover:-translate-y-1 hover:bg-forest-deep"
              >
                Lihat Kegiatan Kami
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#toko"
                className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white/50 px-7 py-3.5 text-sm font-bold text-ink backdrop-blur transition-all hover:-translate-y-1 hover:border-forest/40"
              >
                <ShoppingBag size={16} />
                Toko Namaposo
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <InfoChip
                label="Hari Ini"
                value={fmtID(now)}
                sub={`${season.name} · Warna: ${color.name}`}
                dot={color.hex}
              />
              <InfoChip
                label="Minggu Ini"
                value={fmtID(sunday, false)}
                sub={getSundayLabel(sunday)}
              />
              <InfoChip
                label={nextLabel}
                value={nextValue}
                sub={nextSub}
                accent={live.length > 0}
                dot={live.length > 0 ? '#dc2626' : color.hex}
              />
            </div>
          </Reveal>
        </div>

        {/* Kolom kanan — Kartu Jadwal Ibadah */}
        <Reveal delay={250} className="relative">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-t-[13rem] rounded-b-[2.4rem] border border-gold/50"
            />
            <div className="relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-t-[12rem] rounded-b-[2rem] bg-gradient-to-b from-forest-deep via-forest to-forest-deep p-8 text-cream shadow-2xl shadow-forest/30">
              <div className="mt-12 text-center">
                <span className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <Cross size={32} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-wide text-cream">
                  GPIB Imanuel Gorontalo
                </h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-gold">
                  Persekutuan Namaposo
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-cream/10 p-5 backdrop-blur border border-cream/15">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-forest-deep">
                  <CalendarClock size={22} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    Kebaktian Minggu
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-cream">
                    07:00 &amp; 09:30 WITA
                  </p>
                  <p className="text-xs text-cream/70">
                    Gereja Imanuel Gorontalo
                  </p>
                </div>
              </div>
            </div>

            {/* Lencana teks berputar */}
            <div className="absolute -right-4 -top-4 h-28 w-28 sm:-right-8 sm:top-8 lg:-right-10">
              <div className="relative h-full w-full rounded-full bg-forest-deep p-2 shadow-xl shadow-forest/40">
                <svg className="h-full w-full animate-spin-slow" viewBox="0 0 120 120" aria-hidden="true">
                  <defs>
                    <path
                      id="badge-circle"
                      d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fill="#faf6ec"
                    fontSize="9.5"
                    letterSpacing="2"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontWeight="700"
                  >
                    <textPath href="#badge-circle">SOLI DEO GLORIA • NAMAPOSO EMANUEL •</textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-forest-deep">
                  <Cross size={22} strokeWidth={2.4} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}