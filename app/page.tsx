import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, History, Heart, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Islamic Resources Portal</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive gateway to Islamic knowledge and spiritual growth
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/quran/read">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 mb-4 mx-auto text-primary" />
            <h2 className="text-xl font-semibold mb-2 text-center">Quran</h2>
            <p className="text-muted-foreground text-center">
              Read and listen to the Holy Quran with translations and tafsir
            </p>
          </Card>
        </Link>

        <Link href="/hadith">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <History className="h-12 w-12 mb-4 mx-auto text-primary" />
            <h2 className="text-xl font-semibold mb-2 text-center">Hadith</h2>
            <p className="text-muted-foreground text-center">
              Explore authentic collections of Hadith with explanations
            </p>
          </Card>
        </Link>

        <Link href="/duas">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Heart className="h-12 w-12 mb-4 mx-auto text-primary" />
            <h2 className="text-xl font-semibold mb-2 text-center">Duas</h2>
            <p className="text-muted-foreground text-center">
              Daily prayers and supplications for various occasions
            </p>
          </Card>
        </Link>

        <Link href="/community">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 mb-4 mx-auto text-primary" />
            <h2 className="text-xl font-semibold mb-2 text-center">Community</h2>
            <p className="text-muted-foreground text-center">
              Join discussions and connect with fellow Muslims
            </p>
          </Card>
        </Link>
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Prayer Times</h3>
            <p className="text-muted-foreground mb-4">
              Get accurate prayer times for your location
            </p>
            <Button variant="outline" className="w-full">
              View Prayer Times
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Islamic Courses</h3>
            <p className="text-muted-foreground mb-4">
              Learn from qualified scholars online
            </p>
            <Button variant="outline" className="w-full">
              Browse Courses
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-muted-foreground mb-4">
              Support Islamic causes worldwide
            </p>
            <Button variant="outline" className="w-full">
              Make a Donation
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}