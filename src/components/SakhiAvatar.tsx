import React from 'react';

type SakhiAvatarProps = {
  className?: string;
};

const MaitriAvatar: React.FC<SakhiAvatarProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 96 96" role="img" aria-label="Maitri AI assistant avatar">
    <defs>
      <linearGradient id="bg" x1="0" x2="96" y1="0" y2="96" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff7f3" />
        <stop offset="1" stopColor="#fbe7ff" />
      </linearGradient>
      <linearGradient id="hair" x1="24" x2="72" y1="24" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2d2b54" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="skin" x1="34" x2="62" y1="28" y2="68" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffe7ce" />
        <stop offset="1" stopColor="#d8a37d" />
      </linearGradient>
      <linearGradient id="saree" x1="20" x2="76" y1="44" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fb7185" />
        <stop offset="0.5" stopColor="#f472b6" />
        <stop offset="1" stopColor="#c026d3" />
      </linearGradient>
      <linearGradient id="pallu" x1="24" x2="76" y1="34" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#fde68a" />
      </linearGradient>
      <linearGradient id="gold" x1="24" x2="72" y1="24" y2="86" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fde68a" />
        <stop offset="1" stopColor="#d97706" />
      </linearGradient>
    </defs>

    <circle cx="48" cy="48" r="46" fill="url(#bg)" />
    <circle cx="48" cy="48" r="44" fill="none" stroke="#c026d3" strokeWidth="2" opacity="0.75" />

    <path d="M24 90c4-26 16-40 24-40s20 14 24 40H24z" fill="url(#saree)" />
    <path d="M27 89c5-20 18-30 21-30s16 10 21 30H27z" fill="#a21caf" opacity="0.95" />
    <path d="M23 66c15-8 26-12 49-3" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeWidth="3" opacity="0.9" />

    <path d="M30 47c3-22 15-32 26-32s23 10 26 32c1 7 0 15-5 20-6-12-15-19-26-19s-20 7-25 19c-5-5-6-12-6-20z" fill="url(#hair)" />
    <path d="M33 45c1-14 8-24 20-24s20 10 20 24-8 26-20 26-20-12-20-26z" fill="url(#skin)" />
    <path d="M33 45c6-3 11-9 17-18 6 9 12 15 21 18-1-14-8-24-20-24s-20 10-20 24z" fill="url(#hair)" />

    <path d="M35 47c3-2 7-1 10 2" fill="none" stroke="#111827" strokeLinecap="round" strokeWidth="1.7" />
    <path d="M56 47c3-2 6-1 9 2" fill="none" stroke="#111827" strokeLinecap="round" strokeWidth="1.7" />
    <circle cx="39" cy="50" r="2" fill="#111827" />
    <circle cx="56" cy="50" r="2" fill="#111827" />
    <circle cx="39.8" cy="49" r="0.7" fill="#ffffff" />
    <circle cx="56.8" cy="49" r="0.7" fill="#ffffff" />
    <path d="M44 60c4 4 10 4 14 0" fill="none" stroke="#9d174d" strokeLinecap="round" strokeWidth="2.2" />
    <path d="M48 53c0 3 1 5 2 5" fill="none" stroke="#a8604d" strokeLinecap="round" strokeWidth="1.2" opacity="0.75" />
    <circle cx="49" cy="38" r="2.4" fill="#dc2626" />

    <path d="M33 49c5 4 10 8 16 10" fill="none" stroke="#fde68a" strokeLinecap="round" strokeWidth="2.5" />
    <path d="M33 51c7 6 14 10 22 12" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeWidth="2.6" />
    <path d="M38 38c6-7 16-7 22 0" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeWidth="3" />

    <ellipse cx="28" cy="52" rx="3" ry="4" fill="url(#gold)" />
    <ellipse cx="66" cy="52" rx="3" ry="4" fill="url(#gold)" />
    <path d="M61 54c4 0 5 3 5 6 0 2-1 3-3 4" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeWidth="1.5" />
    <circle cx="64" cy="60" r="1.1" fill="#fde68a" />

    <path d="M38 68c-7 4-10 10-11 18" fill="none" stroke="#d8a37d" strokeLinecap="round" strokeWidth="4.5" />
    <path d="M58 68c7 4 10 10 11 18" fill="none" stroke="#d8a37d" strokeLinecap="round" strokeWidth="4.5" />
    <path d="M38 72c-4 5-6 9-8 16" fill="none" stroke="#fb7185" strokeLinecap="round" strokeWidth="3.4" />
    <path d="M58 72c4 5 6 9 8 16" fill="none" stroke="#7c3aed" strokeLinecap="round" strokeWidth="3.4" />

    <path d="M44 76c2 4 3 9 4 11" fill="none" stroke="#d8a37d" strokeLinecap="round" strokeWidth="4.2" />
    <path d="M52 76c-2 4-3 9-4 11" fill="none" stroke="#d8a37d" strokeLinecap="round" strokeWidth="4.2" />
    <path d="M45 79c1 4 2 7 3 10" fill="none" stroke="#c026d3" strokeLinecap="round" strokeWidth="2.8" />
    <path d="M51 79c-1 4-2 7-3 10" fill="none" stroke="#c026d3" strokeLinecap="round" strokeWidth="2.8" />
    <path d="M45 84c2-2 6-2 8 0-1 4-7 4-8 0z" fill="#f6d0b1" stroke="#b46b4b" strokeWidth="0.7" />
    <path d="M48 78v11" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeWidth="1.3" />

    <path d="M22 54c10-2 18-12 25-20" fill="none" stroke="url(#pallu)" strokeLinecap="round" strokeWidth="6" opacity="0.9" />
    <path d="M74 54c-10-2-18-12-25-20" fill="none" stroke="url(#pallu)" strokeLinecap="round" strokeWidth="6" opacity="0.9" />
  </svg>
);

export default MaitriAvatar;
