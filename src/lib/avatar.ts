/** Inisial nama tanpa gelar (Pdt., Bpk., Ibu, Sdr., Sdri.) */
export function initials(name: string): string {
  const cleaned = name
    .replace(/\b(Pdt\.|Bpk\.|Ibu|Sdri\.|Sdr\.)\b/g, ' ')
    .replace(/,.*$/, '')
    .trim();
  const parts = cleaned.split(/\s+/);
  const a = parts[0]?.[0] ?? '';
  const b = parts[1]?.[0] ?? '';
  return (a + b).toUpperCase();
}

export const AVATAR_STYLES = [
  { bg: '#1e4a38', fg: '#faf6ec' },
  { bg: '#c6a15b', fg: '#17251e' },
  { bg: '#c4703a', fg: '#faf6ec' },
  { bg: '#2c6e63', fg: '#faf6ec' },
  { bg: '#8a5a44', fg: '#faf6ec' },
  { bg: '#4a5d43', fg: '#faf6ec' },
] as const;

export function avatarStyle(i: number) {
  return AVATAR_STYLES[i % AVATAR_STYLES.length];
}
