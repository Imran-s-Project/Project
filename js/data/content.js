/**
 * content.js
 * ----------------------------------------------------------------------
 * Every piece of copy on the site lives here, keyed by `bn` / `en`.
 * The HTML file no longer contains any text — main.js reads this object
 * and builds the DOM at runtime. Edit copy here; nothing else needs to
 * change for the change to show up on the page.
 * ----------------------------------------------------------------------
 */

export const SITE = {
  title: 'Imran Ahmed — Web Developer',
  description:
    'Imran Ahmed — Independent web developer building premium PWAs, Quran apps, and browser-based tools with vanilla JavaScript and Firebase.',
  email: 'project.developer.tech@gmail.com'
};

export const CONTENT = {
  nav: {
    logo: 'IMRAN AHMED',
    links: [
      { href: '#projects', bn: 'প্রজেক্ট', en: 'Projects' },
      { href: '#about', bn: 'সম্পর্কে', en: 'About' },
      { href: '#contact', bn: 'যোগাযোগ', en: 'Contact' }
    ],
    langBn: 'বাং',
    langEn: 'EN'
  },

  hero: {
    eyebrow: { bn: 'ইন্ডিপেন্ডেন্ট ওয়েব ডেভেলপার · বাংলাদেশ', en: 'Independent Web Developer · Bangladesh' },
    name: { bn: 'ইমরান আহমেদ', en: 'Imran Ahmed' },
    tagline: {
      bn: 'প্রিমিয়াম ওয়েব অভিজ্ঞতা তৈরি করি — কুরআন অ্যাপ থেকে শুরু করে পরীক্ষা প্ল্যাটফর্ম পর্যন্ত, প্রতিটি লাইন ভ্যানিলা জাভাস্ক্রিপ্ট আর ফায়ারবেস দিয়ে, কোনো ফ্রেমওয়ার্ক ছাড়াই।',
      en: 'I build premium web experiences — from Quran apps to exam platforms — every line written in vanilla JavaScript and Firebase, no frameworks, no shortcuts.'
    },
    ctaPrimary: { bn: 'প্রজেক্টগুলো দেখুন', en: 'View Projects' },
    ctaGhost: { bn: 'যোগাযোগ করুন', en: 'Get in Touch' },
    scrollHint: { bn: 'স্ক্রল করুন', en: 'SCROLL' }
  },

  about: {
    eyebrow: { bn: 'পরিচিতি', en: 'Introduction' },
    heading: { bn: 'যা নিয়ে কাজ করি', en: 'What I work on' },
    paragraphs: [
      {
        bn: 'আমি বাংলাদেশ থেকে একজন স্বাধীন ওয়েব ডেভেলপার। <strong>ভ্যানিলা জাভাস্ক্রিপ্ট আর ফায়ারবেস</strong> দিয়ে শুরু থেকে শেষ পর্যন্ত ফিচার-সমৃদ্ধ পিডব্লিউএ এবং ব্রাউজার-বেজড টুল তৈরি করি — প্রতিটি মডিউল নিজের হাতে গঠন করা।',
        en: "I'm an independent web developer from Bangladesh. I build feature-rich PWAs and browser-based tools from the ground up with <strong>vanilla JavaScript and Firebase</strong> — every module hand-structured."
      },
      {
        bn: 'আমার কাজের পরিধি একটা বাংলা কুরআন অ্যাপ থেকে শুরু করে একটা পূর্ণাঙ্গ কোলাবোরেটিভ ওয়েব আইডিই, একটা কমিউনিটি ফাউন্ডেশনের ওয়েবসাইট এবং ফায়ারবেস-চালিত এক্সাম প্ল্যাটফর্ম পর্যন্ত বিস্তৃত।',
        en: "My work spans a feature-rich Bengali Quran app, a full collaborative web IDE, a community foundation's website, and a Firebase-powered exam platform."
      },
      {
        bn: 'আমি বিশ্বাস করি সম্পূর্ণ, পরিপাটি এবং "প্রিমিয়াম" ফিচার নিয়ে আসাটাই আসল কাজ — অর্ধেক করা কিছু নয়।',
        en: 'I believe in shipping complete, polished, "premium" implementations — never half-done work.'
      }
    ],
    skillsLabel: { bn: 'দক্ষতা ও টুলস', en: 'Skills & Tools' },
    skills: [
      'JavaScript (ES2023)',
      'Firebase & Firestore',
      'PWA / Service Workers',
      'IndexedDB',
      'Canvas API',
      'Web Components',
      'GitHub OAuth & Pages',
      'Performance Tuning',
      'Bengali-first UX'
    ]
  },

  projectsSection: {
    eyebrow: { bn: 'সিলেক্টেড ওয়ার্ক', en: 'Selected Work' },
    heading: { bn: 'প্রজেক্টসমূহ', en: 'Projects' },
    intro: { bn: 'যেকোনো প্রজেক্টে ক্লিক করলে বিস্তারিত ও লাইভ প্রিভিউ দেখা যাবে।', en: 'Click any project to see the details and a live preview.' },
    viewLabel: { bn: 'দেখুন', en: 'View project' },
    soonLabel: { bn: 'শীঘ্রই আসছে', en: 'Coming soon' }
  },

  contactSection: {
    eyebrow: { bn: 'যোগাযোগ', en: 'Get in touch' },
    heading: { bn: 'চলুন কথা বলি', en: "Let's talk" },
    primaryBlurb: {
      bn: 'নতুন প্রজেক্ট, সহযোগিতা, বা যেকোনো প্রশ্নের জন্য সরাসরি ইমেইল করুন।',
      en: 'For new projects, collaborations, or any question — email directly.'
    },
    primaryCta: { bn: 'ইমেইল পাঠান', en: 'Send an Email' }
  },

  footer: {
    bn: 'ডিজাইন ও তৈরি — ইমরান আহমেদ, ভালোবাসা <span class="heart">♥</span> দিয়ে',
    en: 'Designed & built by Imran Ahmed, with <span class="heart">♥</span>'
  },

  modal: {
    visitLabel: { bn: 'সরাসরি সাইট দেখুন', en: 'Open Live Site' },
    previewLabel: { bn: 'প্রিভিউ লোড হচ্ছে…', en: 'Loading preview…' },
    soonLabel: { bn: 'এই প্রজেক্টটি এখনো প্রস্তুত হচ্ছে।', en: 'This project is still in the works.' },
    closeLabel: { bn: 'বন্ধ করুন', en: 'Close' }
  }
};
