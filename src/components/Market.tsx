import { useState } from 'react';
import { HandHeart, MessageCircle, Store } from 'lucide-react';
import { PRODUCTS, fmtIDR, waLink } from '../data/content';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const CATS = ['Semua', 'Makanan', 'Minuman', 'Kerajinan'] as const;
type Cat = (typeof CATS)[number];

export default function Market() {
  const [cat, setCat] = useState<Cat>('Semua');
  const list = cat === 'Semua' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <section id="toko" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Toko Namaposo"
            title="Dari dapur keluarga,"
            italic="untuk Anda"
            desc="Hasil karya anggota namaposo: makanan, minuman, dan kerajinan tangan. Setiap pembelian Anda menjadi berkat bagi pelayanan kasih kami."
          />
          <Reveal delay={120}>
            <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-forest-deep">
                <Store size={20} />
              </span>
              <p className="max-w-[220px] text-xs font-semibold leading-relaxed text-ink-soft">
                Dikelola langsung oleh ibu-ibu namaposo, dibuat segar di setiap pesanan.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  cat === c
                    ? 'bg-forest text-cream shadow-lg shadow-forest/25'
                    : 'border border-ink/15 text-ink-soft hover:border-forest/40 hover:text-forest'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/80 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-2xl hover:shadow-forest/15">
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft backdrop-blur">
                    {p.category}
                  </span>
                  {p.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-deep shadow-lg">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">{p.name}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-soft">{p.desc}</p>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-ink/8 pt-4">
                    <div>
                      <p className="font-display text-lg font-semibold leading-none text-forest">
                        {fmtIDR(p.price)}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/70">
                        / {p.unit}
                      </p>
                    </div>
                    <a
                      href={waLink(
                        `Halo, saya ingin memesan ${p.name} (${fmtIDR(p.price)} / ${p.unit}) dari Toko Namaposo.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-xs font-bold text-cream transition-all hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/25"
                    >
                      <MessageCircle size={14} />
                      Pesan
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-[2rem] border border-forest/15 bg-forest/5 p-7 text-center sm:flex-row sm:text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest text-gold">
              <HandHeart size={22} />
            </span>
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">Terima kasih!</strong> Seluruh hasil penjualan Toko Namaposo
              digunakan untuk pelayanan diakonia — kunjungan orang sakit, bantuan jemaat yang
              membutuhkan, dan dana kasih namaposo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
