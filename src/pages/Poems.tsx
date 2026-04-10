import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { poems, getPoemById } from '@/data/poems';
import { Season, useSeason } from '@/context/SeasonContext';
import PoemCard from '@/components/PoemCard';
import SeasonIllustration, { SeasonBadge } from '@/components/SeasonIllustration';
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

const seasons: (Season | 'all')[] = ['all', 'spring', 'summer', 'autumn', 'winter'];

const seasonTint: Record<string, string> = {
  spring: 'bg-[hsl(10_50%_68%/0.04)]',
  summer: 'bg-[hsl(40_90%_60%/0.05)]',
  autumn: 'bg-[hsl(30_60%_50%/0.04)]',
  winter: 'bg-[hsl(210_30%_80%/0.06)]',
};

const PoemsPage = () => {
  const [filter, setFilter] = useState<Season | 'all'>('all');
  const filtered = filter === 'all' ? poems : poems.filter(p => p.season === filter);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="parchment absolute inset-0 -z-10" />

      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-forest text-center mb-2 font-light">
          Poems
        </h1>
        <p className="font-body text-center text-forest/50 italic mb-10">
          words released from the ribcage
        </p>

        {/* Filter bar */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {seasons.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`font-heading text-sm tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                filter === s
                  ? 'bg-forest text-cream'
                  : 'bg-cream-dark/50 text-forest/60 hover:bg-cream-dark hover:text-forest'
              }`}
            >
              {s === 'all' ? (
                '✦ All'
              ) : (
                <>
                  <SeasonIllustration season={s} size="sm" />
                  {s}
                </>
              )}
            </button>
          ))}
        </div>

        {/* Poem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </div>
    </main>
  );
};

const PoemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const poem = getPoemById(id || '');

  if (!poem) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="parchment absolute inset-0 -z-10" />
        <div className="text-center">
          <h1 className="font-heading text-3xl text-forest mb-4">Poem not found</h1>
          <Link to="/poems" className="font-body text-rosy hover:underline">← Back to poems</Link>
        </div>
      </main>
    );
  }

  const bg = backgrounds[poem.season];

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      {/* Season background - blurred */}
      <div className="fixed inset-0 -z-20">
        <img src={bg} alt="" className="w-full h-full object-cover blur-sm scale-105" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <Link to="/poems" className="font-body text-sm text-cream/70 hover:text-cream transition-colors mb-8 inline-block">
          ← back to poems
        </Link>

        <article className={`parchment rounded-2xl shadow-2xl p-8 md:p-12 ${seasonTint[poem.season]}`}>
          {/* Top illustration */}
          <div className="flex justify-center mb-6">
            <SeasonIllustration season={poem.season} size="lg" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-forest text-center mb-4 font-semibold">
            {poem.title}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-forest/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
            <div className="h-px w-12 bg-forest/15" />
          </div>

          <div className="space-y-1">
            {poem.lines.map((line, i) => (
              <p
                key={i}
                className={`font-body text-base md:text-lg text-forest/80 leading-relaxed text-center italic ${
                  line === '' ? 'h-6' : ''
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8 mb-4">
            <div className="h-px w-8 bg-forest/10" />
            <div className="w-1 h-1 rounded-full bg-forest/15" />
            <div className="h-px w-8 bg-forest/10" />
          </div>

          <p className="signature text-xl text-rosy text-center">
            — ons ferjani
          </p>
        </article>
      </div>
    </main>
  );
};

export { PoemsPage, PoemDetail };
