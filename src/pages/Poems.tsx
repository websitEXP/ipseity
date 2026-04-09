import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { poems, getPoemById } from '@/data/poems';
import { Season, seasonEmoji, useSeason } from '@/context/SeasonContext';
import PoemCard from '@/components/PoemCard';

const seasons: (Season | 'all')[] = ['all', 'spring', 'summer', 'autumn', 'winter'];

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
              className={`font-heading text-sm tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                filter === s
                  ? 'bg-forest text-cream'
                  : 'bg-cream-dark/50 text-forest/60 hover:bg-cream-dark hover:text-forest'
              }`}
            >
              {s === 'all' ? '✦ All' : `${seasonEmoji[s]} ${s}`}
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

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="parchment absolute inset-0 -z-10" />

      <div className="max-w-2xl mx-auto px-6">
        <Link to="/poems" className="font-body text-sm text-forest/50 hover:text-forest transition-colors mb-8 inline-block">
          ← back to poems
        </Link>

        <article className="parchment rounded-lg shadow-xl p-8 md:p-12">
          {/* Top illustration */}
          <div className="text-center text-4xl opacity-40 mb-6">
            {seasonEmoji[poem.season]}
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-forest text-center mb-8 font-semibold">
            {poem.title}
          </h1>

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

          <p className="signature text-xl text-rosy text-center mt-10">
            — ons ferjani
          </p>
        </article>
      </div>
    </main>
  );
};

export { PoemsPage, PoemDetail };
