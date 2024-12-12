'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bookmark, Play, Pause, Info } from 'lucide-react';
import type { Verse as VerseType } from '@/types/quran';

interface VerseProps {
  verse: VerseType;
  showTranslation: boolean;
  fontSize: number;
  onPlayAudio: () => void;
  isPlaying: boolean;
}

export function Verse({ verse, showTranslation, fontSize, onPlayAudio, isPlaying }: VerseProps) {
  const [showTafsir, setShowTafsir] = useState(false);

  return (
    <Card className="p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-muted-foreground">
          {verse.surah}:{verse.ayah}
        </span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={onPlayAudio}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTafsir(!showTafsir)}
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        className="font-arabic text-right mb-4 leading-loose"
        style={{ fontSize: `${fontSize}px` }}
      >
        {verse.text}
      </div>

      {showTranslation && (
        <div className="text-muted-foreground">
          {verse.translation}
        </div>
      )}

      {showTafsir && (
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Tafsir</h4>
          {/* Tafsir content will be rendered here */}
        </div>
      )}
    </Card>
  );
}