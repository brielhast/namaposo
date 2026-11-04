import Reveal from './Reveal';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  italic: string;
  desc?: string;
  dark?: boolean;
}

export default function SectionHead({ eyebrow, title, italic, desc, dark }: SectionHeadProps) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p
          className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] ${
            dark ? 'text-gold' : 'text-gold-deep'
          }`}
        >
          <span className={`h-px w-10 ${dark ? 'bg-gold' : 'bg-gold'}`} />
          {eyebrow}
        </p>
        <h2
          className={`text-balance mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl ${
            dark ? 'text-cream' : 'text-ink'
          }`}
        >
          {title} <span className={`font-light italic ${dark ? 'text-gold' : 'text-forest'}`}>{italic}</span>
        </h2>
        {desc && (
          <p className={`mt-5 text-[15px] leading-relaxed ${dark ? 'text-cream/70' : 'text-ink-soft'}`}>{desc}</p>
        )}
      </div>
    </Reveal>
  );
}
