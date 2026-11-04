import { BookOpen, HandHeart, Sprout, Users } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const VALUES = [
  {
    icon: BookOpen,
    title: 'Bertumbuh dalam Firman',
    desc: 'Alkitab menjadi dasar setiap persekutuan, keputusan, dan arah hidup kami.',
  },
  {
    icon: Users,
    title: 'Erat dalam Persekutuan',
    desc: 'Dari rumah ke rumah kami saling mengenal, mendoakan, dan menopang.',
  },
  {
    icon: HandHeart,
    title: 'Melayani dengan Kasih',
    desc: 'Diakonia dan kepedulian nyata bagi jemaat dan tetangga yang membutuhkan.',
  },
  {
    icon: Sprout,
    title: 'Bersaksi Setiap Hari',
    desc: 'Hidup yang diperbarui Kristus menjadi berkat di tengah masyarakat.',
  },
];

const STATS = [
  { n: '18', l: 'Keluarga Anggota' },
  { n: '64', l: 'Jiwa Bertumbuh Bersama' },
  { n: '20', l: 'Pengurus & Koordinator' },
  { n: '38', l: 'Tahun Melayani' },
];

export default function About() {
  return (
    <section id="tentang" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Informasi Namaposo"
          title="Keluarga kecil dengan"
          italic="kasih yang besar"
          desc="Namaposo Emanuel adalah persekutuan keluarga jemaat GPIB Imanuel Gorontalo. Dalam bahasa Gorontalo, “namaposo” berarti persekutuan keluarga — dan itulah identitas kami."
        />

        {/* Kartu Statistik */}
        <Reveal delay={150}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-ink/10 bg-white/85 p-5 text-center shadow-lg backdrop-blur transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="font-display text-3xl font-semibold text-forest">{s.n}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Narasi & Nilai-Nilai */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Kami berkumpul secara rutin dari rumah ke rumah untuk bersekutu dalam Firman, doa, dan
                perjamuan kasih. Setiap keluarga punya tempat, setiap anggota punya peran — sebagian
                melayani lewat musik, sebagian lewat masakan, sebagian lewat tangan yang terampil
                merajut dan menenun.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Bagi kami, gereja tidak berhenti di bangku ibadah. Ia hidup di dapur, di teras rumah,
                di pasar, dan di setiap ruang kehidupan sehari-hari.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={180 + i * 90}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white/70 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl hover:shadow-forest/10">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-gold">
                    <v.icon size={20} />
                  </span>
                  <p className="mt-4 text-sm font-bold text-ink">{v.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}