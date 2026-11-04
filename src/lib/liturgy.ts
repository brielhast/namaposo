// ============================================================
//  Mesin Kalender Liturgi + Utilitas Tanggal (Bahasa Indonesia)
//  Untuk kebutuhan gereja Protestan / Namaposo Emanuel
// ============================================================

export const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
export const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

export const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function diffDays(a: Date, b: Date): number {
  const MS = 86400000;
  return Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / MS);
}

/** Format: "Minggu, 15 Juni 2025" atau tanpa nama hari */
export function fmtID(d: Date, withDay = true): string {
  const s = `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;
  return withDay ? `${HARI[d.getDay()]}, ${s}` : s;
}

/** Paskah (Computus, kalender Gregorian) */
export function getEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/** Minggu tepat sebelum `date` (secara ketat) */
function sundayStrictlyBefore(date: Date): Date {
  const d = startOfDay(date);
  const shift = d.getDay() === 0 ? 7 : d.getDay();
  return addDays(d, -shift);
}

/** Minggu Pertama Advent = 4 Minggu sebelum Natal */
export function adventStart(year: number): Date {
  return addDays(sundayStrictlyBefore(new Date(year, 11, 25)), -21);
}

// ------------------------------------------------------------
//  Warna & Masa Liturgi
// ------------------------------------------------------------

export type LitColor = 'ungu' | 'putih' | 'hijau' | 'merah';

export const LIT_COLORS: Record<LitColor, { name: string; hex: string; soft: string; desc: string }> = {
  ungu: {
    name: 'Ungu',
    hex: '#6D28D9',
    soft: '#EDE9FE',
    desc: 'Simbol pertobatan, persiapan, dan penantian.',
  },
  putih: {
    name: 'Putih & Emas',
    hex: '#C9A227',
    soft: '#FBF3DC',
    desc: 'Simbol sukacita, kemuliaan, dan kemenangan.',
  },
  hijau: {
    name: 'Hijau',
    hex: '#2E7D46',
    soft: '#E6F4EA',
    desc: 'Simbol pertumbuhan iman dan pengharapan.',
  },
  merah: {
    name: 'Merah',
    hex: '#B3382C',
    soft: '#FBE7E4',
    desc: 'Simbol Roh Kudus, api, dan pengorbanan.',
  },
};

export type SeasonKey =
  | 'advent' | 'christmas' | 'epiphany' | 'afterEpiphany'
  | 'lent' | 'holyWeek' | 'easter' | 'pentecost'
  | 'afterPentecost' | 'reformation' | 'allSaints';

export interface Season {
  key: SeasonKey;
  name: string;
  short: string;
  color: LitColor;
  rangeLabel: string;
  desc: string;
}

export const SEASONS: Record<SeasonKey, Season> = {
  advent: {
    key: 'advent', name: 'Masa Advent', short: 'Advent', color: 'ungu',
    rangeLabel: '4 Minggu sebelum Natal',
    desc: 'Masa penantian dan persiapan hati menyambut kelahiran Tuhan Yesus Kristus.',
  },
  christmas: {
    key: 'christmas', name: 'Masa Natal', short: 'Natal', color: 'putih',
    rangeLabel: '25 Des – 5 Jan',
    desc: 'Masa perayaan kelahiran Sang Juru Selamat bagi seluruh dunia.',
  },
  epiphany: {
    key: 'epiphany', name: 'Masa Epifania', short: 'Epifania', color: 'putih',
    rangeLabel: '6 Januari',
    desc: 'Allah menyatakan diri-Nya kepada semua bangsa melalui Kristus.',
  },
  afterEpiphany: {
    key: 'afterEpiphany', name: 'Masa Sesudah Epifania', short: 'Sesudah Epifania', color: 'hijau',
    rangeLabel: '7 Jan – sebelum Prapaskah',
    desc: 'Masa pertumbuhan iman dan penghayatan panggilan Kristen sehari-hari.',
  },
  lent: {
    key: 'lent', name: 'Masa Prapaskah', short: 'Prapaskah', color: 'ungu',
    rangeLabel: 'Rabu Abu – sebelum Pekan Suci',
    desc: 'Masa pertobatan, pemeriksaan diri, dan persiapan menyambut Paskah.',
  },
  holyWeek: {
    key: 'holyWeek', name: 'Pekan Suci', short: 'Pekan Suci', color: 'merah',
    rangeLabel: 'Minggu Palem – Sabtu Suci',
    desc: 'Pekan peringatan penderitaan dan kematian Tuhan Yesus Kristus.',
  },
  easter: {
    key: 'easter', name: 'Masa Paskah', short: 'Paskah', color: 'putih',
    rangeLabel: 'Hari Paskah – sebelum Pentakosta',
    desc: 'Masa perayaan kebangkitan Tuhan Yesus Kristus dari antara orang mati.',
  },
  pentecost: {
    key: 'pentecost', name: 'Hari Pentakosta', short: 'Pentakosta', color: 'merah',
    rangeLabel: '50 hari setelah Paskah',
    desc: 'Peringatan turunnya Roh Kudus atas para murid dan lahirnya gereja.',
  },
  afterPentecost: {
    key: 'afterPentecost', name: 'Masa Sesudah Pentakosta', short: 'Sesudah Pentakosta', color: 'hijau',
    rangeLabel: 'Sesudah Pentakosta – Advent',
    desc: 'Masa hidup dalam Roh, kesaksian, dan pelayanan di tengah dunia.',
  },
  reformation: {
    key: 'reformation', name: 'Hari Reformasi', short: 'Reformasi', color: 'merah',
    rangeLabel: '31 Oktober',
    desc: 'Peringatan pembaruan gereja: agar iman senantiasa diperbarui.',
  },
  allSaints: {
    key: 'allSaints', name: 'Hari Raya Orang Kudus', short: 'Orang Kudus', color: 'putih',
    rangeLabel: '1 November',
    desc: 'Mengenang para pengikut Kristus yang telah mendahului kita.',
  },
};

/** Urutan masa liturgi untuk tampilan kalender */
export const SEASON_ORDER: SeasonKey[] = [
  'advent', 'christmas', 'epiphany', 'afterEpiphany',
  'lent', 'holyWeek', 'easter', 'pentecost', 'afterPentecost',
];

/** Tentukan masa liturgi untuk sebuah tanggal */
export function getSeason(d0: Date): Season {
  const d = startOfDay(d0);
  const y = d.getFullYear();

  const epiphany = new Date(y, 0, 6);
  const easter = getEaster(y);
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const pentecost = addDays(easter, 49);
  const advStart = adventStart(y);

  // 25 Des – 5 Jan : Masa Natal (lintas tahun)
  if (d.getMonth() === 11 && d.getDate() >= 25) return SEASONS.christmas;
  if (d.getMonth() === 0 && d.getDate() <= 5) return SEASONS.christmas;

  // Advent (sering dimulai akhir November — 4 Minggu sebelum Natal)
  if (d >= advStart && d < new Date(y, 11, 25)) return SEASONS.advent;

  // Epifania
  if (sameDay(d, epiphany)) return SEASONS.epiphany;

  // Sesudah Epifania (hijau)
  if (d > epiphany && d < ashWednesday) return SEASONS.afterEpiphany;

  // Prapaskah
  if (d >= ashWednesday && d < palmSunday) return SEASONS.lent;

  // Pekan Suci
  if (d >= palmSunday && d < easter) return SEASONS.holyWeek;

  // Paskah
  if (d >= easter && d < pentecost) return SEASONS.easter;

  // Pentakosta
  if (sameDay(d, pentecost)) return SEASONS.pentecost;

  // Sesudah Pentakosta (hijau)
  if (d > pentecost && d < advStart) {
    if (d.getMonth() === 9 && d.getDate() === 31) return SEASONS.reformation;
    if (d.getMonth() === 10 && d.getDate() === 1) return SEASONS.allSaints;
    return SEASONS.afterPentecost;
  }

  // Fallback: awal Januari sebelum Epifania (mis. 1–5 Jan sudah ditangani di atas)
  return SEASONS.afterEpiphany;
}

/** Label untuk sebuah hari Minggu, mis. "Hari Minggu Advent ke-II" */
export function getSundayLabel(sun: Date): string {
  const d = startOfDay(sun);
  const y = d.getFullYear();
  const easter = getEaster(y);
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const pentecost = addDays(easter, 49);
  const advStart = adventStart(y);
  const epiphany = new Date(y, 0, 6);

  const weeksSince = (from: Date) => Math.floor(diffDays(from, d) / 7);

  if (d >= advStart && d < new Date(y, 11, 25)) {
    return `Hari Minggu Advent ke-${ROMAN[weeksSince(advStart) + 1]}`;
  }
  if (d >= new Date(y, 11, 25) || (d.getMonth() === 0 && d < epiphany)) {
    return 'Hari Minggu Sesudah Natal';
  }
  if (sameDay(d, epiphany)) return 'Hari Raya Epifania';
  if (d > pentecost && d < advStart) {
    if (d.getMonth() === 9 && d.getDate() === 31) return 'Hari Minggu Reformasi';
    return `Hari Minggu Sesudah Pentakosta ke-${weeksSince(pentecost)}`;
  }
  if (sameDay(d, pentecost)) return 'Hari Raya Pentakosta';
  if (d >= easter && d < pentecost) {
    const n = weeksSince(easter);
    return n === 0 ? 'Hari Raya Paskah' : `Hari Minggu Paskah ke-${ROMAN[n]}`;
  }
  if (d >= palmSunday && d < easter) return 'Hari Minggu Palem';
  if (d >= ashWednesday && d < palmSunday) {
    return `Hari Minggu Prapaskah ke-${ROMAN[weeksSince(ashWednesday) + 1]}`;
  }
  if (d > epiphany && d < ashWednesday) {
    return `Hari Minggu Sesudah Epifania ke-${ROMAN[weeksSince(epiphany) + 1]}`;
  }
  return 'Hari Minggu';
}

/** Tanggal Minggu terdekat (hari ini bila hari ini Minggu) */
export function nextSunday(from: Date): Date {
  const d = startOfDay(from);
  const add = (7 - d.getDay()) % 7;
  return addDays(d, add);
}

// ------------------------------------------------------------
//  Jadwal mingguan berulang + status "sedang berlangsung"
// ------------------------------------------------------------

export interface WeeklySlot {
  day: number;   // 0 = Minggu
  start: number; // menit dari tengah malam
  end: number;
}

export type SlotStatus = 'live' | 'upcoming' | 'past' | 'other';

export function slotStatus(now: Date, s: WeeklySlot): SlotStatus {
  const mins = now.getHours() * 60 + now.getMinutes();
  if (now.getDay() === s.day) {
    if (mins >= s.start && mins < s.end) return 'live';
    if (mins < s.start) return 'upcoming';
    return 'past';
  }
  return 'other';
}

/** Tanggal berikutnya sebuah slot berulang terjadi */
export function nextSlotDate(now: Date, s: WeeklySlot): Date {
  const today = startOfDay(now);
  let add = (s.day - today.getDay() + 7) % 7;
  const mins = now.getHours() * 60 + now.getMinutes();
  if (add === 0 && mins >= s.start) add = 7;
  return addDays(today, add);
}

export function fmtTime(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export interface Countdown {
  d: number; h: number; m: number; s: number;
}

export function fmtCountdown(ms: number): Countdown {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

/** Hitung mundur ringkas: "2 hari 05 jam" / "3 jam 12 menit" / "45 menit" */
export function fmtCountdownShort(ms: number): string {
  const { d, h, m } = fmtCountdown(ms);
  if (d > 0) return `${d} hari ${String(h).padStart(2, '0')} jam`;
  if (h > 0) return `${h} jam ${String(m).padStart(2, '0')} menit`;
  return `${m} menit`;
}

/** Ayat hari ini — dipilih konsisten berdasarkan hari dalam tahun */
export function verseOfTheDay<T>(verses: T[], now: Date): T {
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((startOfDay(now).getTime() - start.getTime()) / 86400000);
  return verses[dayOfYear % verses.length];
}
