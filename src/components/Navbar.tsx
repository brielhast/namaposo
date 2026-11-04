import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNow } from '../hooks/useNow';
import { getLiveItems } from '../lib/live';

const LINKS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#ibadah', label: 'Ibadah & Liturgi' },
  { href: '#ayat', label: 'Ayat Hari Ini' },
  { href: '#kegiatan', label: 'Kegiatan' },
  { href: '#ultah', label: 'Ulang Tahun' },
  { href: '#struktur', label: 'Struktur' },
  { href: '#toko', label: 'Toko' },
];

function LogoMark() {
  return (
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
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const now = useNow(15000);
  const live = getLiveItems(now);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_rgba(23,37,30,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#beranda" className="flex items-center gap-2.5" aria-label="Namaposo Emanuel — beranda">
            <LogoMark />
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] font-semibold tracking-tight text-ink">
                Namaposo
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.42em] text-gold-deep">
                Emanuel
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigasi utama">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-semibold tracking-wide text-ink-soft transition-colors hover:text-forest"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {live.length > 0 && (
              <a
                href="#kegiatan"
                className="hidden items-center gap-2 rounded-full bg-red-600/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-red-700 sm:flex"
              >
                <span className="h-2 w-2 rounded-full bg-red-600 animate-live-pulse" />
                Live · {live[0].title}
              </a>
            )}
            <a
              href="#ibadah"
              className="hidden rounded-full bg-forest px-5 py-2.5 text-[13px] font-bold text-cream shadow-lg shadow-forest/20 transition-transform hover:-translate-y-0.5 md:block"
            >
              Jadwal Ibadah
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-cream/70 text-ink lg:hidden"
              aria-label="Buka menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu seluler */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-forest-deep text-cream transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-5">
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold">Namaposo</span>
            <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.42em] text-gold">Emanuel</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/20"
            aria-label="Tutup menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Menu seluler">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-cream/10 py-4 font-display text-3xl font-medium transition-all duration-500 hover:pl-3 hover:text-gold ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${80 + i * 50}ms` }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="px-8 pb-10 text-xs uppercase tracking-[0.3em] text-cream/40">
          Soli Deo Gloria — Gorontalo
        </p>
      </div>
    </>
  );
}
