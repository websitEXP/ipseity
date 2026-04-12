import HeroSection from '@/components/HeroSection';
import PoemCard from '@/components/PoemCard';
import { getFeaturedPoems } from '@/data/poems';

const Index = () => {
  const featured = getFeaturedPoems();

  return (
    <main>
      <HeroSection />

      {/* Featured poems section */}
      <section className="relative py-16 md:py-24">
        <div className="parchment absolute inset-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-forest text-center mb-2 font-light">
            Featured Poems
          </h2>
          <p className="font-body text-center text-forest/50 italic mb-12">
            a few words plucked from the seasons
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featured.map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
