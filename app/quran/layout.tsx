import { Suspense } from 'react';
import { SurahList } from '@/components/quran/surah-list';
import { QuranSettings } from '@/components/quran/settings';
import { QuranSkeleton } from '@/components/quran/skeleton';

export default function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <Suspense fallback={<QuranSkeleton type="sidebar" />}>
            <SurahList />
          </Suspense>
        </aside>
        <main className="lg:col-span-6">
          <Suspense fallback={<QuranSkeleton type="content" />}>
            {children}
          </Suspense>
        </main>
        <aside className="lg:col-span-3">
          <QuranSettings />
        </aside>
      </div>
    </div>
  );
}