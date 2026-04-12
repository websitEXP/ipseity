import { Poem } from '@/data/poems';
import SeasonIllustration, { SeasonBadge } from '@/components/season-illustration';
import { Link } from 'react-router-dom';

interface PoemCardProps {
  poem: Poem;
}

const seasonTint: Record<string, string> = {
  spring: 'bg-[hsl(10_50%_68%/0.06)]',
  summer: 'bg-[hsl(40_90%_60%/0.08)]',
  autumn: 'bg-[hsl(30_60%_50%/0.06)]',
  winter: 'bg-[hsl(210_30%_80%/0.08)]',
};

const PoemCard = ({ poem }: PoemCardProps) => {
  const preview = poem.lines.filter(l => l.length > 0).slice(0, 2);

  return (
    <Link to={`/poems/${poem.id}`} className="group block">
      <div className={`parchment arch-top overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 ${seasonTint[poem.season]}`}>
        {/* Illustration area */}
        <div className="h-20 flex items-center justify-center bg-cream-dark/30">
          <SeasonIllustration season={poem.season} size="lg" />
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-3">
          <SeasonBadge season={poem.season} className="mb-2" />

          <h3 className="font-heading text-xl md:text-2xl text-forest font-semibold mb-3 group-hover:text-forest/80 transition-colors">
            {poem.title}
          </h3>

          {preview.map((line, i) => (
            <p key={i} className="font-body text-sm text-forest/70 italic leading-relaxed line-clamp-2">
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
