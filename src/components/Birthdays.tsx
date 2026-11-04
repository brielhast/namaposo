import { useMemo } from 'react';
import { Cake, MessageCircle, PartyPopper } from 'lucide-react';
import { getBirthdays, waLink } from '../data/content';
import { diffDays, fmtID } from '../lib/liturgy';
import { avatarStyle, initials } from '../lib/avatar';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Birthdays() {
  const birthdays = useMemo(
    () => getBirthdays().sort((a, b) => a.date.getTime() - b.date.getTime()),
    []
  );
  const today = birthdays.filter((b) => diffDays(new Date(), b.date) === 0);

  return (
    <section id="ultah" className="relative bg-parchment/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Ulang Tahun Anggota"
          title="Turut berbahagia"
          italic="dalam Tuhan"
          desc="Setiap kehidupan adalah anugerah. Mari rayakan anggota namaposo yang sedang dan akan berulang tahun — sapa mereka, doakan mereka."
        />

        {today.length > 0 && (
          <Reveal delay={100}>
            <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-gold via-gold to-terra p-8 text-forest-deep shadow-2xl shadow-gold/30 sm:p-10">
              <PartyPopper
                className="absolute -right-4 -top-4 h-28 w-28 rotate-12 text-forest-deep/15"
                aria-hidden="true"
              />
              <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Cake size={15} />
                Hari ini kita merayakan
              </p>
              <p className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Selamat ulang tahun, {today.map((b) => b.name.split(' ').slice(0, 2).join(' ')).join(' & ')}!
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-forest-deep/75">
                Panjang umur, sehat selalu, dan semakin dekat dengan Tuhan. Tuhan Yesus memberkati.
              </p>
            </div>
          </Reveal>
        )}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${today.length > 0 ? 'mt-6' : 'mt-12'}`}>
          {birthdays.map((b, i) => {
            const left = diffDays(new Date(), b.date);
            const av = avatarStyle(i);
            return (
              <Reveal key={b.name} delay={i * 70}>
                <article
                  className={`flex h-full flex-col items-center rounded-2xl border p-6 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 ${
                    left === 0
                      ? 'border-gold/60 bg-gold/15 shadow-lg shadow-gold/20'
                      : 'border-ink/10 bg-white/70'
                  }`}
                >
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full text-sm font-bold ring-4 ring-cream"
                    style={{ background: av.bg, color: av.fg }}
                  >
                    {initials(b.name)}
                  </div>
                  <p className="mt-4 text-sm font-bold leading-snug text-ink">{b.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                    {b.role}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-forest/8 px-3.5 py-1.5 text-xs font-bold text-forest">
                    <Cake size={12} />
                    {fmtID(b.date, false)}
                  </p>
                  <p
                    className={`mt-2.5 text-[10px] font-bold uppercase tracking-[0.22em] ${
                      left === 0 ? 'text-terra' : 'text-gold-deep'
                    }`}
                  >
                    {left === 0 ? 'Hari ini!' : left === 1 ? 'Besok' : `Dalam ${left} hari`}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              href={waLink(
                'Selamat ulang tahun! Tuhan Yesus senantiasa memberkati, menyertai, dan menyertai setiap langkahmu.'
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-cream shadow-xl shadow-forest/25 transition-all hover:-translate-y-1 hover:bg-forest-deep"
            >
              <MessageCircle size={16} />
              Kirim ucapan di grup namaposo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
