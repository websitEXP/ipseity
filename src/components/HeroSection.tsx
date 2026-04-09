import { useSeason, Season } from '@/context/SeasonContext';
import springBg from '@/assets/spring-bg.jpg';
import summerBg from '@/assets/summer-bg.jpg';
import autumnBg from '@/assets/autumn-bg.jpg';
import winterBg from '@/assets/winter-bg.jpg';

const backgrounds: Record<Season, string> = {
  spring: springBg,
  summer: summerBg,
  autumn: autumnBg,
  winter: winterBg,
};

const heroText: Record<Season, string> = {
  spring: 'where new words bloom from old wounds',
  summer: 'burning through the silence like golden light',
  autumn: 'beauty grows even in the ruins',
  winter: 'in the stillness, the poem finds you',
};

const HeroSection = () => {
  const { season } = useSeason();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background images - all rendered, only active one visible */}
      {(['spring', 'summer', 'autumn', 'winter'] as Season[]).map(s => (
        <div
          key={s}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: season === s ? 1 : 0 }}
        >
          <img
            src={backgrounds[s]}
            alt={`${s} background`}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide leading-tight max-w-4xl animate-fade-in">
          somehow everything is poetic
        </h1>
        <p className="signature text-xl md:text-2xl text-cream/80 mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          ons ferjani
        </p>
        <p className="font-body text-base md:text-lg text-cream/60 mt-8 max-w-xl italic animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {heroText[season]}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
