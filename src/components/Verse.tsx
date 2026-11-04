import { useState } from 'react';
import { BookOpen, Check, Copy, Quote } from 'lucide-react';
import { useNow } from '../hooks/useNow';
import { VERSES } from '../data/content';
import { fmtID, verseOfTheDay } from '../lib/liturgy';
import Reveal from './Reveal';

export default function Verse() {
  const now = useNow(60000);
  const v = verseOfTheDay(VERSES, now);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`"${v.text}" — ${v.ref}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="ayat" className="relative overflow-hidden bg-forest-deep py-24 text-cream sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/12 blur-3xl" />
        <Quote className="absolute left-[6%] top-[12%] h-auto w-[110px] text-cream/6 sm:w-[150px]" />
        <Quote className="absolute bottom-[8%] right-[6%] h-auto rotate-180 w-[110px] text-cream/6 sm:w-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            <BookOpen size={13} />
            Ayat Hari Ini · {fmtID(now)}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <blockquote className="mt-9">
            <p className="text-balance font-display text-[1.45rem] font-light italic leading-[1.6] text-cream sm:text-[2.05rem]">
              &ldquo;{v.text}&rdquo;
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 font-display text-xl italic text-gold">{v.ref}</p>
          <button
            onClick={copy}
            className={`mt-7 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              copied
                ? 'border-gold bg-gold text-forest-deep'
                : 'border-cream/20 text-cream/80 hover:border-gold/60 hover:text-gold'
            }`}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Ayat tersalin' : 'Salin ayat'}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
