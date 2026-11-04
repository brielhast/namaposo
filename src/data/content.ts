// ============================================================
//  Data Konten Website Namaposo GKPS Bekasi
//  (Bisa disesuaikan langsung oleh pengurus namaposo)
// ============================================================

import { addDays, startOfDay } from '../lib/liturgy';

// ------------------------------------------------------------
//  AYAT HARI INI
// ------------------------------------------------------------

export interface Verse {
  ref: string;
  text: string;
}

export const VERSES: Verse[] = [
  { ref: 'Yohanes 3:16', text: 'Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.' },
  { ref: 'Mazmur 23:1', text: 'TUHAN adalah gembalaku, takkan kekurangan aku.' },
  { ref: 'Roma 8:28', text: 'Kita tahu sekarang, bahwa Allah turut bekerja dalam segala sesuatu untuk mendatangkan kebaikan bagi mereka yang mengasihi Dia.' },
  { ref: 'Filipi 4:13', text: 'Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.' },
  { ref: 'Amsal 3:5-6', text: 'Percayalah kepada TUHAN dengan segenap hatimu, dan jangan bersandar kepada pengertianmu sendiri. Akui Dia dalam segala lakumu, maka Ia akan meluruskan jalanmu.' },
  { ref: 'Yesaya 41:10', text: 'Jangan takut, sebab Aku menyertai engkau, jangan bimbang, sebab Aku ini Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau.' },
  { ref: 'Matius 11:28', text: 'Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.' },
  { ref: 'Yeremia 29:11', text: 'Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.' },
  { ref: 'Mazmur 46:2', text: 'Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti.' },
  { ref: 'Ibrani 11:1', text: 'Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari segala sesuatu yang tidak kita lihat.' },
  { ref: 'Galatia 2:20', text: 'Namun aku hidup, tetapi bukan lagi aku sendiri yang hidup, melainkan Kristus yang hidup di dalam aku.' },
  { ref: 'Mazmur 119:105', text: 'Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku.' },
  { ref: 'Roma 12:12', text: 'Bersukacitalah dalam pengharapan, sabarlah dalam kesesakan, dan bertekunlah dalam doa!' },
  { ref: 'Kolose 3:23', text: 'Apa pun juga yang kamu perbuat, kerjakanlah itu sekuat tenaga, seperti untuk Tuhan dan bukan untuk manusia.' },
  { ref: '1 Petrus 5:7', text: 'Serahkanlah segala kekuatiranmu kepada-Nya, sebab Ia yang memelihara kamu.' },
  { ref: 'Matius 6:33', text: 'Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.' },
  { ref: 'Filipi 4:6-7', text: 'Janganlah hendaknya kamu kuatir tentang apa pun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.' },
  { ref: 'Mazmur 27:1', text: 'TUHAN adalah terangku dan keselamatanku, kepada siapakah aku harus takut?' },
  { ref: 'Yesaya 40:31', text: 'Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: sebagaimana rajawali naik terbang dengan kekuatan sayapnya.' },
  { ref: 'Ratapan 3:22-23', text: 'Tak berkesudahan kasih setia TUHAN, tak habis-habisnya rahmat-Nya, selalu baru setiap pagi; besar kesetiaan-Mu!' },
  { ref: 'Efesus 2:8', text: 'Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah.' },
  { ref: '1 Yohanes 4:19', text: 'Kita mengasihi, karena Allah lebih dahulu mengasihi kita.' },
  { ref: 'Mazmur 37:5', text: 'Serahkanlah hidupmu kepada TUHAN dan percayalah kepada-Nya, dan Ia akan bertindak.' },
  { ref: 'Roma 15:13', text: 'Semoga Allah, sumber pengharapan, memenuhi kamu dengan segala sukacita dan damai sejahtera dalam imanmu.' },
  { ref: '2 Korintus 5:17', text: 'Jika ada orang yang di dalam Kristus, ia adalah ciptaan baru; yang lama sudah berlalu, sesungguhnya yang baru sudah datang.' },
  { ref: 'Yosua 1:9', text: 'Kuatkan dan teguhkanlah hatimu! Janganlah kecut dan tawar hati, sebab TUHAN, Allahmu, menyertai engkau, ke mana pun engkau pergi.' },
  { ref: 'Yakobus 1:5', text: 'Jika seorang dari kamu kekurangan hikmat, hendaklah ia memintanya kepada Allah, yang memberi kepada semua orang dengan murah hati dan tanpa mencela.' },
  { ref: 'Mazmur 91:1-2', text: 'Orang yang duduk dalam lindungan Yang Mahatinggi dan bernaung dalam naungan Yang Mahakuasa akan berkata kepada TUHAN: "Tempat perlindunganku dan kubu pertahananku, Allahku, yang kupercayai."' },
];

// ------------------------------------------------------------
//  JADWAL IBADAH GEREJA (berulang setiap minggu)
// ------------------------------------------------------------

export interface WorshipItem {
  title: string;
  day: number;      // 0 = Minggu
  start: number;    // menit dari tengah malam
  end: number;
  place: string;
  note: string;
}

export const WORSHIP_SCHEDULE: WorshipItem[] = [
  { title: 'Kebaktian Minggu I', day: 0, start: 7 * 60, end: 8 * 60 + 30, place: 'GKPS Bekasi', note: 'Sekolah Minggu berlangsung bersamaan' },
  { title: 'Kebaktian Minggu II', day: 0, start: 10 * 60, end: 11 * 60 + 30, place: 'GKPS Bekasi', note: 'Sekolah Minggu berlangsung bersamaan' },
  { title: 'Partonggoan Namaposo', day: 3, start: 19 * 60, end: 20 * 60 + 30, place: 'Rumah anggota (rotasi)', note: 'Dipimpin bergantian oleh anggota Namaposo' },
];

// ------------------------------------------------------------
//  KEGIATAN NAMAPOSO (rutin mingguan)
// ------------------------------------------------------------

export interface ActivityItem {
  icon: string;
  title: string;
  desc: string;
  day: number;
  start: number;
  end: number;
  place: string;
  tag: string;
}

// ------------------------------------------------------------
//  AGENDA KHUSUS
// ------------------------------------------------------------

export interface SpecialEvent {
  title: string;
  desc: string;
  date: Date;
  time: string;
  place: string;
  accent: string;
}

function nextWeekday(target: number, minDaysAhead: number): Date {
  const today = startOfDay(new Date());
  let d = addDays(today, minDaysAhead);
  while (d.getDay() !== target) d = addDays(d, 1);
  return d;
}

export function getSpecialEvents(): SpecialEvent[] {
  return [
    {
      title: 'Bazar Namaposo',
      desc: 'Bazar persekutuan Namaposo GKPS Bekasi.',
      date: addDays(startOfDay(new Date()), 30),
      time: 'COMING SOON',
      place: 'Pendopo GKPS Bekasi',
      accent: 'terra',
    },
    {
      title: 'Natal Namaposo Resort Bekasi',
      desc: 'Perayaan Natal Namaposo GKPS Resort Bekasi — Coming Soon!',
      date: addDays(startOfDay(new Date()), 30),
      time: 'Coming Soon',
      place: 'GKPS Bekasi',
      accent: 'gold',
    },
  ];
}

// ------------------------------------------------------------
//  STRUKTUR ORGANISASI
// ------------------------------------------------------------

export interface Member {
  name: string;
  role: string;
  note: string;
  tier: 'naungan' | 'inti' | 'bidang';
}

export const MEMBERS: Member[] = [
  { name: 'Pdt. Aleks Frank D. Sitopu', role: 'Pendeta Resort GKPS Jemaat', note: 'Mendampingi dan menopang rohani seluruh Namaposo GKPS Bekasi.', tier: 'naungan' },
  { name: 'Feliks Gerald Purba', role: 'Ketua Namaposo', note: 'Mengoordinasikan seluruh program dan kegiatan Namaposo.', tier: 'inti' },
  { name: 'Roni Zendrato', role: 'Wakil Ketua Namaposo', note: 'Mengoordinasikan seluruh program dan kegiatan Namaposo.', tier: 'inti' },
  { name: 'Monica Simamora', role: 'Sekretaris Namaposo', note: 'Mengoordinasikan seluruh program dan kegiatan Namaposo.', tier: 'inti' },
  { name: 'Ardon Yemiko Purba', role: 'Wakil Sekretaris Namaposo', note: 'Mengoordinasikan seluruh program dan kegiatan Namaposo.', tier: 'inti' },
];

// ------------------------------------------------------------
//  ULANG TAHUN ANGGOTA
// ------------------------------------------------------------

export interface Birthday {
  name: string;
  role: string;
  date: Date;
}

export function getBirthdays(): Birthday[] {
  const today = startOfDay(new Date());
  const mk = (offset: number, name: string, role: string): Birthday => ({
    name, role, date: addDays(today, offset),
  });
  return [
    mk(0, 'Anggota Namaposo', 'Anggota'),
  ];
}