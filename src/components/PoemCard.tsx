import { Poem } from '@/data/poems';
import { seasonEmoji } from '@/context/SeasonContext';
import { Link } from 'react-router-dom';

interface PoemCardProps {
  poem: Poem;
}

const seasonIllustration: Record<string, string> = {
  spring: '🌿🌸',
  summer: '🌻☀️',
  autumn: '🍂🍁',
  winter: '❄️🌲',
};

const PoemCard = ({ poem }: PoemCardProps) => {
  const preview = poem.lines.filter(l => l.length > 0).slice(0, 2);

  return (
    <Link
      to={`/poems/${poem.id}`}
      className="group block"
    >
      <div className="parchment arch-top overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
        {/* Illustration area */}
        <div className="h-20 flex items-center justify-center text-3xl opacity-60 bg-cream-dark/30">
          {seasonIllustration[poem.season]}
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-3">
          {/* Season badge */}
          <span className="inline-block text-xs font-body tracking-widest uppercase text-forest/60 mb-2">
            {seasonEmoji[poem.season]} {poem.season}
          </span>

          <h3 className="font-heading text-xl md:text-2xl text-forest font-semibold mb-3 group-hover:text-rosy transition-colors">
            {poem.title}
          </h3>

          {preview.map((line, i) => (
            <p key={i} className="font-body text-sm text-forest/70 italic leading-relaxed">
              {line}
            </p>
          ))}

          <p className="signature text-sm text-rosy mt-4">
            — ons ferjani
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PoemCard;
