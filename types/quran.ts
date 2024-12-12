export interface Verse {
  id: number;
  surah: number;
  ayah: number;
  text: string;
  translation: string;
  transliteration: string;
}

export interface Surah {
  id: number;
  name: string;
  nameArabic: string;
  nameTransliteration: string;
  versesCount: number;
  revelationType: 'Meccan' | 'Medinan';
  description: string;
}

export interface Reciter {
  id: number;
  name: string;
  style: string;
  audioUrl: string;
}

export interface Tafsir {
  verseId: number;
  text: string;
  source: string;
  author: string;
}