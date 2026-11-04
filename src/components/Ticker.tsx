import { Sparkles } from 'lucide-react';

const ITEMS = [
  'Soli Deo Gloria',
  'Persekutuan',
  'Pelayanan',
  'Kasih Kristus',
  'Doa Tak Kendur',
  'Satu Keluarga, Satu Pengharapan',
  'Bertumbuh Bersama',
  'Namaposo Emanuel',
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-display text-lg italic tracking-wide text-cream/90 sm:text-xl">
            {t}
          </span>
          <Sparkles size={14} className="shrink-0 text-gold" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-cream/10 bg-forest-deep py-4">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
