'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuranSettings {
  fontSize: number;
  showTranslation: boolean;
  selectedReciter: string;
  translationLanguage: string;
  setFontSize: (size: number) => void;
  setShowTranslation: (show: boolean) => void;
  setSelectedReciter: (reciter: string) => void;
  setTranslationLanguage: (language: string) => void;
}

export const useQuranSettings = create<QuranSettings>()(
  persist(
    (set) => ({
      fontSize: 20,
      showTranslation: true,
      selectedReciter: '',
      translationLanguage: 'english',
      setFontSize: (size) => set({ fontSize: size }),
      setShowTranslation: (show) => set({ showTranslation: show }),
      setSelectedReciter: (reciter) => set({ selectedReciter: reciter }),
      setTranslationLanguage: (language) => set({ translationLanguage: language }),
    }),
    {
      name: 'quran-settings',
    }
  )
);