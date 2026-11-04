import { MEMBERS } from '../data/content';
import { avatarStyle, initials } from '../lib/avatar';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const naungan = MEMBERS.filter((m) => m.tier === 'naungan');
const inti = MEMBERS.filter((m) => m.tier === 'inti');
const bidang = MEMBERS.filter((m) => m.tier === 'bidang');

function TierLabel({ text }: { text: string }) {
  return (
    <Reveal>
      <div className="mt-12 flex items-center gap-4 first:mt-0">
        <span className="shrink-0 rounded-full bg-forest/8 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-forest">
          {text}
        </span>
        <span className="rule-lit flex-1 text-ink/20" />
      </div>
    </Reveal>
  );
}

export default function Structure() {
  return (
    <section id="struktur" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Struktur Organisasi"
            title="Dua puluh pelayan,"
            italic="satu tujuan"
            desc="Ini dia keluarga yang mengoordinasikan pelayanan namaposo — kenalan dulu biar makin akrab!"
          />
          <Reveal delay={120}>
            <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 backdrop-blur">
              <div className="flex -space-x-2.5">
                {[0, 1, 2, 3, 4].map((i) => {
                  const av = avatarStyle(i * 3);
                  return (
                    <span
                      key={i}
                      className="grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold ring-2 ring-cream"
                      style={{ background: av.bg, color: av.fg }}
                    >
                      {initials(MEMBERS[i * 3].name)}
                    </span>
                  );
                })}
              </div>
              <div className="leading-tight">
                <p className="font-display text-2xl font-semibold text-forest">20</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  Pengurus & Anggota
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Naungan gereja */}
        <TierLabel text="Naungan Gereja" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {naungan.map((m, i) => {
            const av = avatarStyle(i);
            return (
              <Reveal key={m.name} delay={i * 100}>
                <article className="relative h-full overflow-hidden rounded-[2rem] bg-forest-deep p-7 text-cream shadow-xl shadow-forest-deep/25 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-gold/20"
                  />
                  <div className="flex items-start gap-5">
                    <div
                      className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-bold ring-2 ring-gold/30"
                      style={{ background: av.bg, color: av.fg }}
                    >
                      {initials(m.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gold">
                        {m.role.split('—')[0]}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug">
                        {m.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-cream/70">
                        {m.role.includes('—') ? m.role.split('—')[1] : m.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[13px] leading-relaxed text-cream/65">{m.note}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Pengurus harian */}
        <TierLabel text="Pengurus Harian" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inti.map((m, i) => {
            const av = avatarStyle(i + 2);
            return (
              <Reveal key={m.name} delay={i * 70}>
                <article className="group flex h-full items-start gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl hover:shadow-forest/10">
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-xs font-bold transition-transform duration-500 group-hover:scale-110"
                    style={{ background: av.bg, color: av.fg }}
                  >
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug text-ink">{m.name}</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                      {m.role}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{m.note}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Koordinator & anggota */}
        <TierLabel text="Koordinator Bidang & Anggota" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {bidang.map((m, i) => {
            const av = avatarStyle(i + 4);
            return (
              <Reveal key={m.name} delay={i * 45}>
                <article className="group flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-white/70 p-5 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full text-xs font-bold transition-transform duration-500 group-hover:scale-110"
                    style={{ background: av.bg, color: av.fg }}
                  >
                    {initials(m.name)}
                  </div>
                  <h3 className="mt-3.5 text-[13px] font-bold leading-snug text-ink">{m.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider leading-relaxed text-ink-soft">
                    {m.role}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-xs leading-relaxed text-ink-soft/70">
            Musyawarah pengurus namaposo berlangsung setiap awal semester — ketua, wakil, sekretaris,
            dan bendahara dipilih untuk masa bakti dua tahun.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
