// ============================================================
//  Data Konten Website Namaposo Emanuel
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
  { title: 'Kebaktian Minggu I', day: 0, start: 7 * 60, end: 8 * 60 + 30, place: 'Gereja Imanuel', note: 'Sekolah Minggu berlangsung bersamaan' },
  { title: 'Kebaktian Minggu II', day: 0, start: 9 * 60 + 30, end: 11 * 60, place: 'Gereja Imanuel', note: 'Dilandasi musik organ & paduan suara' },
  { title: 'Persekutuan Doa Namaposo', day: 3, start: 19 * 60, end: 20 * 60 + 30, place: 'Rumah anggota (rotasi)', note: 'Dipimpin bergantian oleh keluarga namaposo' },
  { title: 'Ibadah Puasa & Doa', day: 5, start: 18 * 60, end: 19 * 60 + 30, place: 'Gereja Imanuel', note: 'Puasa bersama seluruh jemaat' },
  { title: 'Latihan Pujian & Penyembahan', day: 6, start: 16 * 60, end: 17 * 60 + 30, place: 'Ruang Musik Gereja', note: 'Terbuka bagi pemula — sarapan rohani dulu ya!' },
];

// ------------------------------------------------------------
//  KEGIATAN NAMAPOSO (rutin mingguan)
// ------------------------------------------------------------

export interface ActivityItem {
  icon: string; // nama ikon lucide — di-mapping di komponen
  title: string;
  desc: string;
  day: number;
  start: number;
  end: number;
  place: string;
  tag: string;
}

export const ACTIVITIES: ActivityItem[] = [
  {
    icon: 'sunrise', title: 'Doa Pagi Bersama',
    desc: 'Memulai hari dengan ucapan syukur dan doa singkat bersama via grup namaposo.',
    day: 1, start: 5 * 60 + 30, end: 6 * 60, place: 'Online (Grup WA)', tag: 'Doa',
  },
  {
    icon: 'book-open', title: 'Persekutuan & Firman',
    desc: 'Membaca Alkitab, berbagi pemahaman, dan saling menguatkan dalam keluarga besar namaposo.',
    day: 2, start: 19 * 60 + 30, end: 21 * 60, place: 'Rumah ibu Yulie', tag: 'Firman',
  },
  {
    icon: 'home', title: 'Kunjungan Keluarga',
    desc: 'Mengunjungi keluarga anggota yang sakit, baru pindah, atau baru dikaruniai buah hati.',
    day: 4, start: 16 * 60, end: 17 * 60 + 30, place: 'Sesuai jadwal kunjungan', tag: 'Persekutuan',
  },
  {
    icon: 'users', title: 'Persekutuan Ibu-ibu & Arisan',
    desc: 'Berbagi resep, kerajinan tangan, dan arisan kasih sambil makin erat bersaudara.',
    day: 6, start: 10 * 60, end: 12 * 60, place: 'Balai namaposo', tag: 'Persekutuan',
  },
  {
    icon: 'heart-handshake', title: 'Rempug — Kerja Bakti',
    desc: 'Gotong royong membersihkan balai dan lingkungan sekitar, dilanjutkan sarapan bersama.',
    day: 6, start: 7 * 60, end: 9 * 60, place: 'Balai namaposo', tag: 'Pelayanan',
  },
  {
    icon: 'sprout', title: 'Pelayanan Anak & Remaja',
    desc: 'Mengajar sekolah minggu, bermain, dan menanam iman sejak dini bagi anak-anak namaposo.',
    day: 0, start: 9 * 60 + 30, end: 11 * 60, place: 'Ruang Anak Gereja', tag: 'Pelayanan',
  },
];

// ------------------------------------------------------------
//  AGENDA KHUSUS (dihitung relatif terhadap hari ini
//  sehingga selalu tampil sebagai acara yang akan datang)
// ------------------------------------------------------------

export interface SpecialEvent {
  title: string;
  desc: string;
  date: Date;
  time: string;
  place: string;
  accent: string;
}

/** Minggu berikutnya jatuh pada hari tertentu (0=Minggu) dari hari ini */
function nextWeekday(target: number, minDaysAhead: number): Date {
  const today = startOfDay(new Date());
  let d = addDays(today, minDaysAhead);
  while (d.getDay() !== target) d = addDays(d, 1);
  return d;
}

export function getSpecialEvents(): SpecialEvent[] {
  return [
    {
      title: 'Kebaktian Pengucapan Syukur',
      desc: 'Keluarga Bpk. Frits Mandagi mengucap syukur atas 25 tahun pernikahan. Seluruh namaposo diundang hadir.',
      date: nextWeekday(6, 4),
      time: '18:30 WITA',
      place: 'Kediaman Kel. Mandagi',
      accent: 'gold',
    },
    {
      title: 'Pasarkan Namaposo',
      desc: 'Bazar hasil karya anggota: makanan, kerajinan, dan kue kering. Hasil penjualan untuk pelayanan diakonia.',
      date: nextWeekday(0, 8),
      time: '08:00 – 12:00 WITA',
      place: 'Halaman Gereja Imanuel',
      accent: 'terra',
    },
    {
      title: 'Pelatihan Pelayanan Anak',
      desc: 'Workshop kreatif mengajar sekolah minggu bersama kakak-kakak pendidik dari sinode.',
      date: nextWeekday(6, 12),
      time: '09:00 – 14:00 WITA',
      place: 'Ruang Anak Gereja',
      accent: 'forest',
    },
    {
      title: 'Perayaan Ulang Tahun Bulanan',
      desc: 'Merayakan anggota yang berulang tahun bulan ini — kue, pujian, dan doa berkat bersama.',
      date: addDays(startOfDay(new Date()), 18),
      time: '19:00 WITA',
      place: 'Balai Namaposo',
      accent: 'terra',
    },
  ];
}

// ------------------------------------------------------------
//  STRUKTUR ORGANISASI — 20 ORANG
// ------------------------------------------------------------

export interface Member {
  name: string;
  role: string;
  note: string;
  tier: 'naungan' | 'inti' | 'bidang';
}

export const MEMBERS: Member[] = [
  { name: 'Pdt. Yohanes Bumbulan, M.Div', role: 'Pelindung — Gembala Sidang', note: 'Mendampingi dan menopang rohani seluruh keluarga namaposo.', tier: 'naungan' },
  { name: 'Bpk. Alfrets Kaunang', role: 'Penasihat', note: 'Penasihat senior dengan pengalaman pelayanan puluhan tahun.', tier: 'naungan' },

  { name: 'Bpk. Frits Mandagi', role: 'Ketua', note: 'Mengoordinasikan seluruh program dan kegiatan namaposo.', tier: 'inti' },
  { name: 'Ibu Rina Runtuwene', role: 'Wakil Ketua', note: 'Mendampingi ketua dan memastikan program berjalan merata.', tier: 'inti' },
  { name: 'Sdri. Grace Wowor', role: 'Sekretaris', note: 'Mencatat notula, surat-menyurat, dan arsip namaposo.', tier: 'inti' },
  { name: 'Sdr. Joshua Sondakh', role: 'Wakil Sekretaris', note: 'Membantu administrasi dan dokumentasi kegiatan.', tier: 'inti' },
  { name: 'Ibu Meylan Tumbelaka', role: 'Bendahara', note: 'Mengelola kas namaposo dengan transparan dan akuntabel.', tier: 'inti' },
  { name: 'Bpk. Roy Lengkong', role: 'Wakil Bendahara', note: 'Mendampingi bendahara dan mengarsipkan laporan keuangan.', tier: 'inti' },

  { name: 'Sdr. Kevin Tilaar', role: 'Koord. Ibadah & Musik', note: '', tier: 'bidang' },
  { name: 'Ibu Shintia Rawung', role: 'Koord. Pelayanan Anak', note: '', tier: 'bidang' },
  { name: 'Sdr. Daniel Waworuntu', role: 'Koord. Media & Dokumentasi', note: '', tier: 'bidang' },
  { name: 'Bpk. Jack Tuwaidan', role: 'Koord. Diakonia & Sosial', note: '', tier: 'bidang' },
  { name: 'Sdr. Andrey Kalesan', role: 'Koord. Pemuda & Remaja', note: '', tier: 'bidang' },
  { name: 'Ibu Novi Supit', role: 'Koord. Doa & Kunjungan', note: '', tier: 'bidang' },
  { name: 'Ibu Yulie Rattu', role: 'Koord. Persekutuan Ibu-ibu', note: '', tier: 'bidang' },
  { name: 'Bpk. Hendrik Rondonuwu', role: 'Koord. Persekutuan Bapak-bapak', note: '', tier: 'bidang' },
  { name: 'Ibu Fenny Mangindaan', role: 'Koord. Konsumsi', note: '', tier: 'bidang' },
  { name: 'Sdr. Calvin Kamagi', role: 'Anggota — Tim Musik', note: '', tier: 'bidang' },
  { name: 'Ibu Debby Siahaya', role: 'Anggota — Tim Pujian', note: '', tier: 'bidang' },
  { name: 'Bpk. Yos Mokuagow', role: 'Anggota — Humas & Keamanan', note: '', tier: 'bidang' },
];

// ------------------------------------------------------------
//  ULANG TAHUN ANGGOTA
//  (tanggal relatif terhadap hari ini agar selalu relevan)
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
    mk(0, 'Ibu Meylan Tumbelaka', 'Bendahara'),
    mk(2, 'Sdr. Kevin Tilaar', 'Koord. Ibadah & Musik'),
    mk(5, 'Ibu Novi Supit', 'Koord. Doa & Kunjungan'),
    mk(9, 'Sdr. Calvin Kamagi', 'Tim Musik'),
    mk(14, 'Bpk. Alfrets Kaunang', 'Penasihat'),
    mk(20, 'Sdri. Grace Wowor', 'Sekretaris'),
    mk(26, 'Bpk. Yos Mokuagow', 'Humas & Keamanan'),
    mk(33, 'Ibu Debby Siahaya', 'Tim Pujian'),
  ];
}

// ------------------------------------------------------------
//  TOKO NAMAPOSO
// ------------------------------------------------------------

export interface Product {
  name: string;
  category: 'Makanan' | 'Minuman' | 'Kerajinan';
  desc: string;
  price: number;
  unit: string;
  img: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Sambal Roa Otanaha',
    category: 'Makanan',
    desc: 'Sambal ikan roa asap khas Gorontalo, pedas gurih yang bikin nagih.',
    price: 35000, unit: 'botol 200 ml',
    img: 'https://images.pexels.com/photos/39204250/pexels-photo-39204250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Terlaris',
  },
  {
    name: 'Dodol Gorontalo Kelapa',
    category: 'Makanan',
    desc: 'Dodol legit olahan kelapa asli, dimasak perlahan di dapur keluarga kami.',
    price: 45000, unit: 'kotak 500 gr',
    img: 'https://images.pexels.com/photos/39470925/pexels-photo-39470925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Ikan Roa Asap Premium',
    category: 'Makanan',
    desc: 'Ikan roa diasap tradisional, kering, gurih, siap digoreng atau disambal.',
    price: 60000, unit: 'pack 5 ekor',
    img: 'https://images.pexels.com/photos/37179934/pexels-photo-37179934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Kue Kering Nastar Nanas',
    category: 'Makanan',
    desc: 'Nastar selai nanas asli, lumer di mulut, dipanggang tiap pesanan.',
    price: 75000, unit: 'toples 500 gr',
    img: 'https://images.pexels.com/photos/28965344/pexels-photo-28965344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Baru',
  },
  {
    name: 'Kopi Robusta Pinogoran',
    category: 'Minuman',
    desc: 'Biji kopi robusta dataran tinggi Gorontalo, roasted medium, aroma kuat.',
    price: 85000, unit: 'pack 250 gr',
    img: 'https://images.pexels.com/photos/14848712/pexels-photo-14848712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Madu Hutan Otonaha',
    category: 'Minuman',
    desc: 'Madu hutan murni tanpa campuran, dipanen lestari oleh keluarga petani madu.',
    price: 110000, unit: 'botol 500 ml',
    img: 'https://images.pexels.com/photos/7990484/pexels-photo-7990484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Terbatas',
  },
  {
    name: 'Tas Anyaman Pandan',
    category: 'Kerajinan',
    desc: 'Tas pandan anyaman tangan ibu-ibu namaposo, kuat dan cantik untuk harian.',
    price: 150000, unit: 'pcs',
    img: 'https://images.pexels.com/photos/26692148/pexels-photo-26692148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Kain Tenun Gorontalo',
    category: 'Kerajinan',
    desc: 'Tenun tangan motif Gorontalo, cocok untuk busana perayaan dan oleh-oleh.',
    price: 220000, unit: 'lembar 2 m',
    img: 'https://images.pexels.com/photos/24738158/pexels-photo-24738158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export const WA_NUMBER = '6281234567890';

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const fmtIDR = (n: number): string =>
  'Rp ' + n.toLocaleString('id-ID');
