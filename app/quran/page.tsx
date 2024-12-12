import { Card } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function QuranPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">The Noble Quran</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <BookOpen className="h-12 w-12 mb-4 mx-auto text-primary" />
          <h2 className="text-xl font-semibold mb-2 text-center">Continue Reading</h2>
          <p className="text-muted-foreground text-center">
            Resume from your last reading position
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <BookOpen className="h-12 w-12 mb-4 mx-auto text-primary" />
          <h2 className="text-xl font-semibold mb-2 text-center">Browse Surahs</h2>
          <p className="text-muted-foreground text-center">
            View and select from the list of Surahs
          </p>
        </Card>
      </div>
    </div>
  );
}