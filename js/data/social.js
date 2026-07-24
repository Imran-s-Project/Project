/**
 * social.js — social / contact link data.
 * Shape: { id, name, handle, url, icon }
 */

export const socialLinks = [
  { id: 'github', name: 'GitHub', handle: 'imran-s-project', url: 'https://github.com/imran-s-project', icon: 'github' },
  { id: 'facebook', name: 'Facebook', handle: 'techverse.eee.cse', url: 'https://facebook.com/techverse.eee.cse', icon: 'facebook' },
  { id: 'youtube', name: 'YouTube', handle: '@imran.ahmedd', url: 'https://youtube.com/@imran.ahmedd', icon: 'youtube' },
  { id: 'instagram', name: 'Instagram', handle: 'imran.ahmedddddd', url: 'https://instagram.com/imran.ahmedddddd', icon: 'instagram' },
  { id: 'x', name: 'X (Twitter)', handle: '@imranahmed-bd', url: 'https://x.com/imranahmed-bd', icon: 'x' },
  { id: 'vercel', name: 'Vercel', handle: 'imran-s-project', url: 'https://vercel.com/imran-s-project', icon: 'vercel' },
  { id: 'gmail', name: 'Gmail', handle: 'project.developer.tech@gmail.com', url: 'mailto:project.developer.tech@gmail.com', icon: 'mail' }
];

export const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.02 2.83-.02 3.22 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.15 3.23-1.67 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.6 0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.62-.07-4.81s.01-3.56.07-4.81c.15-3.23 1.67-4.77 4.92-4.92C8.4 2.2 8.8 2.2 12 2.2zm0 3.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.5-10.6a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2h3.32l-7.25 8.29L23 22h-6.66l-5.22-6.83L4.9 22H1.58l7.76-8.87L1 2h6.84l4.72 6.24L18.24 2zm-1.16 18h1.84L7.02 3.9H5.05L17.08 20z"/></svg>',
  vercel: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 22 20 H2 Z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 .3V6l8 5.5L20 6v-.7l-8 5.2-8-5.2zM20 8.4l-7.4 4.8a1 1 0 0 1-1.2 0L4 8.4V19h16V8.4z"/></svg>'
};
