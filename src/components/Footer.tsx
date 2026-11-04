import { Church, Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useNow } from '../hooks/useNow';
import { waLink } from '../data/content';
import { fmtID, getSeason, getSundayLabel, LIT_COLORS, nextSunday } from '../lib/liturgy';

const NAV = [
  { href: '#tentang', label: 'Tentang Namaposo' },
  { href: '#ibadah', label: 'Ibadah & Liturgi' },
  { href: '#ayat', label: 'Ayat Hari Ini' },
  { href: '#kegiatan', label: 'Kegiatan' },
  { href: '#ultah', label: 'Ulang Tahun' },
  { href: '#struktur', label: 'Struktur' },
  { href: '#toko', label: 'Toko Namaposo' },
];

const SCHEDULE = [
  { d: 'Minggu', t: 'Kebaktian 07:00 & 09:30 WITA' },
  { d: 'Rabu', t: 'Persekutuan Doa 19:00 WITA' },
  { d: 'Jumat', t: 'Ibadah Puasa & Doa 18:00 WITA' },
  { d: 'Sabtu', t: 'Latihan Pujian 16:00 WITA' },
];

export default function Footer() {
  const now = useNow(60000);
  const season = getSeason(now);
  const color = LIT_COLORS[season.color];
  const sunday = nextSunday(now);
  const year = now.getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-30%] left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gold/8 blur-3xl" />
        <p className="absolute inset-x-0 bottom-[-1.2em] select-none text-center font-display text-[18vw] font-semibold leading-none text-cream/4">
          EMANUEL
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                <path d="M20 2.5C11.4 2.5 5.5 9.8 5.5 18.6V37.5h29V18.6C34.5 9.8 28.6 2.5 20 2.5Z" fill="#1e4a38" />
                <path
                  d="M20 6.5c-6.3 0-10.8 5.6-10.8 12.3v14.7h21.6V18.8C30.8 12.1 26.3 6.5 20 6.5Z"
                  fill="none"
                  stroke="#c6a15b"
                  strokeWidth="1.3"
                />
                <circle cx="20" cy="17" r="3.6" fill="#c6a15b" />
                <path d="M20 23v10M16.4 26.8h7.2" stroke="#faf6ec" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <span className="leading-none">
                <span className="block font-display text-2xl font-semibold">Namaposo</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.42em] text-gold">
                  Emanuel
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Persekutuan keluarga jemaat GPIB Imanuel Gorontalo — bertumbuh, bersekutu, dan melayani
              bersama dalam kasih Kristus.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: color.hex, boxShadow: `0 0 12px ${color.hex}` }}
              />
              <p className="text-xs font-semibold text-cream/75">
                {season.name} · Warna liturgi {color.name}
              </p>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Navigasi</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm font-semibold text-cream/70 transition-all hover:pl-1.5 hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jadwal singkat */}
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
              <Clock size={12} />
              Jadwal Singkat
            </p>
            <ul className="mt-5 space-y-4">
              {SCHEDULE.map((s) => (
                <li key={s.d}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/45">{s.d}</p>
                  <p className="mt-0.5 text-sm font-semibold text-cream/80">{s.t}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
              <Church size={12} />
              Sekretariat
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed text-cream/75">
                  Jl. Diponegoro No. 7, Kota Gorontalo, 96115
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={waLink('Halo, saya ingin bertanya tentang Namaposo Emanuel.')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/75 transition-colors hover:text-gold"
                >
                  +62 812-3456-7890 (Ibu Rina)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href="mailto:namaposo.emanuel@email.com"
                  className="text-cream/75 transition-colors hover:text-gold"
                >
                  namaposo.emanuel@email.com
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/8 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Minggu ini</p>
              <p className="mt-1.5 text-sm font-bold">{fmtID(sunday)}</p>
              <p className="text-xs text-cream/60">{getSundayLabel(sunday)}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40 sm:flex-row">
          <p>© {year} Namaposo Emanuel — GPIB Imanuel Gorontalo</p>
          <p className="flex items-center gap-2">
            Soli Deo Gloria
            <span className="h-1 w-1 rounded-full bg-gold" />
            Gorontalo, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
