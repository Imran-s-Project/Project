/**
 * projects.js — project data.
 * Shape (informal): { id, index, nameBn, nameEn, descBn, descEn,
 *                      detailBn, detailEn, tags[], url|null, status: 'live'|'soon' }
 */

export const projects = [
  {
    id: 'quranbangla',
    index: '01',
    nameBn: 'কুরআন বাংলা (AlQuran PWA)',
    nameEn: 'QuranBangla (AlQuran PWA)',
    descBn: 'ফিচার-সমৃদ্ধ বাংলা কুরআন পিডব্লিউএ — ওয়ার্ড-বাই-ওয়ার্ড অনুবাদ, তাফসির, হিফজ ট্র্যাকার ও সিজদাহ চিহ্নিতকরণসহ।',
    descEn: 'A feature-rich Bengali Quran PWA with word-by-word translation, tafsir, a hifz tracker, and sajdah marking.',
    detailBn:
      'সম্পূর্ণ অফলাইন-প্রথম আর্কিটেকচারে তৈরি — ইনডেক্সডবি স্টোরেজ, সার্ভিস ওয়ার্কার ক্যাশিং, এবং একটি রিডার-মোড টুলবার যা পড়ার সময় নেভিগেশনকে সরিয়ে প্রসঙ্গ-সংবেদনশীল নিয়ন্ত্রণ দেয়। ১১৪টি সূরার জন্য শানে নুযূল ও ফযীলত যুক্ত করা হয়েছে বাংলায়।',
    detailEn:
      'Built offline-first with IndexedDB storage and service-worker caching, plus a context-aware reader-mode toolbar that replaces navigation while reading. Includes Bengali shan-e-nuzul and virtues (fazilat) for all 114 surahs.',
    tags: ['PWA', 'Firebase', 'IndexedDB', 'Service Worker'],
    url: 'https://quranbangla.vercel.app',
    status: 'live'
  },
  {
    id: 'quranview',
    index: '02',
    nameBn: 'QuranView',
    nameEn: 'QuranView',
    descBn: 'কুরআন পড়ার অভিজ্ঞতাকে কেন্দ্র করে তৈরি সহায়ক প্ল্যাটফর্ম, পরিচ্ছন্ন রিডার-মোড ও রিসাইটার অডিওসহ।',
    descEn: 'A companion Quran reading experience built around a clean reader mode with reciter audio support.',
    detailBn: 'রিসাইটার অডিও স্ট্রিমিং এবং রিজিউমেবল ডাউনলোড ব্যবস্থাপনার উপর ফোকাস করে তৈরি, যাতে ধীরগতির নেটওয়ার্কেও পড়া বাধাগ্রস্ত না হয়।',
    detailEn: 'Focused on reciter audio streaming and resumable download management so reading never breaks even on slow networks.',
    tags: ['PWA', 'Audio Streaming'],
    url: 'https://quranview.vercel.app',
    status: 'live'
  },
  {
    id: 'techverse',
    index: '03',
    nameBn: 'TechVerse',
    nameEn: 'TechVerse',
    descBn: 'কোলাবোরেটিভ ব্রাউজার-বেজড কোড আইডিই — লাইভ প্রিভিউ, ইন-ব্রাউজার টার্মিনাল ও গিটহাব ডিপ্লয়মেন্টসহ।',
    descEn: 'A collaborative browser-based code IDE with live preview, an in-browser terminal, and GitHub deployment.',
    detailBn:
      'ফায়ারস্টোর-চালিত রিয়েল-টাইম প্রজেক্ট শেয়ারিং, গিটহাব ওঅথ ইন্টিগ্রেশন, ডিফ ভিউয়ারসহ গিট প্যানেল, এবং ডিভাইস ইমুলেশনসহ লাইভ প্রিভিউ। ক্যানভাস-বেজড নিউরাল নেটওয়ার্ক অ্যানিমেশন লগইন স্ক্রিনে।',
    detailEn:
      'Real-time project sharing over Firestore, GitHub OAuth integration, a Git panel with diff viewer, and a live preview with device emulation. A canvas-based neural network animation powers the login screen.',
    tags: ['Firestore', 'GitHub OAuth', 'Canvas'],
    url: 'https://techversesite.vercel.app',
    status: 'live'
  },
  {
    id: 'rupsha-foundation',
    index: '04',
    nameBn: 'রূপসা জনকল্যাণ ফাউন্ডেশন',
    nameEn: 'Rupsha Jonokollan Foundation',
    descBn: 'কমিউনিটি কল্যাণ ফাউন্ডেশনের জন্য মডুলার, রিয়েল-টাইম ডোনেশন আপডেটসহ পূর্ণাঙ্গ মাল্টি-পেজ ওয়েবসাইট।',
    descEn: 'A full multi-page website for a community welfare foundation with real-time donation updates.',
    detailBn: 'মনোলিথিক index.html কে মডুলার external CSS ও JS ফাইলে রিফ্যাক্টর করা হয়েছে। ফায়ারস্টোর থেকে সরাসরি ফিড হওয়া একটি রিয়েল-টাইম ডোনেশন পপ-আপ ব্যানার রয়েছে।',
    detailEn: 'Refactored from a monolithic index.html into modular external CSS and JS files. Includes a real-time donation pop-up banner fed directly from Firestore.',
    tags: ['Firestore', 'Modular CSS/JS'],
    url: 'https://rupshajonokollanfoundation.vercel.app',
    status: 'live'
  },
  {
    id: 'rupsha-jf',
    index: '05',
    nameBn: 'রূপসা জেএফ',
    nameEn: 'Rupsha JF',
    descBn: 'রূপসা ফাউন্ডেশনের অল্টারনেট, সংক্ষিপ্ত ডোমেইন — একই মিশন, দ্রুত শেয়ারের জন্য।',
    descEn: "The foundation\u2019s alternate short-form domain \u2014 same mission, quicker to share.",
    detailBn: 'দ্রুত শেয়ারযোগ্য একটি সংক্ষিপ্ত ডোমেইনে ফাউন্ডেশনের মূল কন্টেন্ট ও ডোনেশন ফিচার হোস্ট করা।',
    detailEn: "Hosts the foundation\u2019s core content and donation features on a shorter, easy-to-share domain.",
    tags: ['Vercel', 'Static + Firestore'],
    url: 'https://rupshajf.vercel.app',
    status: 'live'
  },
  {
    id: 'testora',
    index: '06',
    nameBn: 'টেস্টোরা',
    nameEn: 'Testora',
    descBn: 'বাংলা ভাষার পরীক্ষা ও কুইজ প্ল্যাটফর্ম, ফায়ারবেসের উপর নির্মিত — এই মুহূর্তে সক্রিয়ভাবে তৈরি হচ্ছে।',
    descEn: "A Bengali-language exam and quiz platform built on Firebase \u2014 currently in active development.",
    detailBn: 'ফায়ারস্টোর সিকিউরিটি রুলস, শিক্ষার্থীদের জন্য পরীক্ষা দৃশ্যমানতা এবং একটি রিডিজাইন করা লগইন UI নিয়ে কাজ চলছে।',
    detailEn: 'Currently being built out with Firestore security rules, exam visibility for students, and a redesigned login UI.',
    tags: ['Firebase', 'In Progress'],
    url: null,
    status: 'soon'
  }
];
