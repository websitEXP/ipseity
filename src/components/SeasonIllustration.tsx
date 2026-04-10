import { Season } from '@/context/SeasonContext';

interface SeasonIllustrationProps {
  season: Season;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/** Delicate SVG botanical illustrations per season — no emojis */
const SeasonIllustration = ({ season, className = '', size = 'md' }: SeasonIllustrationProps) => {
  const dims = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-20 h-20' : 'w-10 h-10';

  return (
    <div className={`${dims} ${className} ${size === 'lg' ? 'opacity-85' : 'opacity-60'}`}>
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        {season === 'spring' && (
          /* Delicate wildflower stem */
          <g stroke="hsl(var(--secondary))" strokeWidth="0.8" strokeLinecap="round">
            <path d="M24 42 L24 18" />
            <path d="M24 30 Q18 26 16 22" />
            <path d="M24 26 Q30 22 32 18" />
            <ellipse cx="16" cy="21" rx="3" ry="4" fill="hsl(var(--accent))" fillOpacity="0.4" stroke="hsl(var(--accent))" strokeWidth="0.6" transform="rotate(-15 16 21)" />
            <ellipse cx="32" cy="17" rx="2.5" ry="3.5" fill="hsl(var(--accent))" fillOpacity="0.3" stroke="hsl(var(--accent))" strokeWidth="0.6" transform="rotate(10 32 17)" />
            <circle cx="24" cy="14" r="4" fill="hsl(var(--accent))" fillOpacity="0.35" stroke="hsl(var(--accent))" strokeWidth="0.6" />
            <circle cx="24" cy="14" r="1.5" fill="hsl(var(--secondary))" fillOpacity="0.5" />
            {/* Small leaves */}
            <ellipse cx="20" cy="34" rx="4" ry="1.5" fill="hsl(var(--secondary))" fillOpacity="0.3" transform="rotate(-40 20 34)" />
            <ellipse cx="28" cy="36" rx="3.5" ry="1.3" fill="hsl(var(--secondary))" fillOpacity="0.3" transform="rotate(35 28 36)" />
          </g>
        )}
        {season === 'summer' && (
          /* Sun rays through grass */
          <g strokeLinecap="round">
            {/* Sun rays */}
            <line x1="24" y1="4" x2="24" y2="12" stroke="#F5A623" strokeWidth="0.7" opacity="0.5" />
            <line x1="14" y1="8" x2="18" y2="14" stroke="#F5A623" strokeWidth="0.7" opacity="0.4" />
            <line x1="34" y1="8" x2="30" y2="14" stroke="#F5A623" strokeWidth="0.7" opacity="0.4" />
            <line x1="8" y1="14" x2="14" y2="18" stroke="#F5A623" strokeWidth="0.5" opacity="0.3" />
            <line x1="40" y1="14" x2="34" y2="18" stroke="#F5A623" strokeWidth="0.5" opacity="0.3" />
            {/* Sun circle */}
            <circle cx="24" cy="16" r="5" fill="#F5A623" fillOpacity="0.25" stroke="#F5A623" strokeWidth="0.6" opacity="0.6" />
            {/* Grass blades */}
            <path d="M12 44 Q13 32 10 26" stroke="hsl(var(--secondary))" strokeWidth="0.8" fill="none" opacity="0.4" />
            <path d="M18 44 Q18 30 16 24" stroke="hsl(var(--secondary))" strokeWidth="0.8" fill="none" opacity="0.5" />
            <path d="M24 44 Q24 28 24 22" stroke="hsl(var(--secondary))" strokeWidth="0.8" fill="none" opacity="0.5" />
            <path d="M30 44 Q30 30 32 24" stroke="hsl(var(--secondary))" strokeWidth="0.8" fill="none" opacity="0.5" />
            <path d="M36 44 Q35 32 38 26" stroke="hsl(var(--secondary))" strokeWidth="0.8" fill="none" opacity="0.4" />
          </g>
        )}
        {season === 'autumn' && (
          /* Falling leaf */
          <g>
            <path d="M24 8 Q30 14 28 22 Q26 28 24 34 Q22 28 20 22 Q18 14 24 8Z" fill="hsl(var(--accent))" fillOpacity="0.3" stroke="hsl(var(--accent))" strokeWidth="0.7" />
            <path d="M24 10 L24 34" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.5" />
            <path d="M24 16 Q20 14 18 16" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.4" fill="none" />
            <path d="M24 20 Q28 18 30 20" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.4" fill="none" />
            <path d="M24 24 Q20 22 19 24" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.4" fill="none" />
            {/* Second smaller leaf falling */}
            <path d="M36 16 Q39 19 38 23 Q37 26 36 28 Q35 26 34 23 Q33 19 36 16Z" fill="hsl(var(--secondary))" fillOpacity="0.25" stroke="hsl(var(--secondary))" strokeWidth="0.5" transform="rotate(25 36 22)" />
            {/* Stem detail */}
            <path d="M24 34 Q26 38 24 42" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.4" fill="none" />
          </g>
        )}
        {season === 'winter' && (
          <g stroke="hsl(var(--foreground))" strokeWidth="0.7" strokeLinecap="round" opacity="0.5">
            {/* Main axes */}
            <line x1="24" y1="6" x2="24" y2="42" />
            <line x1="8" y1="15" x2="40" y2="33" />
            <line x1="8" y1="33" x2="40" y2="15" />
            {/* Branches on axis 1 */}
            <line x1="24" y1="12" x2="20" y2="9" />
            <line x1="24" y1="12" x2="28" y2="9" />
            <line x1="24" y1="36" x2="20" y2="39" />
            <line x1="24" y1="36" x2="28" y2="39" />
            {/* Branches on axis 2 */}
            <line x1="13" y1="18" x2="12" y2="14" />
            <line x1="13" y1="18" x2="10" y2="20" />
            <line x1="35" y1="30" x2="36" y2="34" />
            <line x1="35" y1="30" x2="38" y2="28" />
            {/* Branches on axis 3 */}
            <line x1="13" y1="30" x2="10" y2="28" />
            <line x1="13" y1="30" x2="12" y2="34" />
            <line x1="35" y1="18" x2="38" y2="20" />
            <line x1="35" y1="18" x2="36" y2="14" />
            {/* Center */}
            <circle cx="24" cy="24" r="2" fill="hsl(var(--foreground))" fillOpacity="0.2" />
          </g>
        )}
      </svg>
    </div>
  );
};

/** Small inline season icon for badges */
export const SeasonBadge = ({ season, className = '' }: { season: Season; className?: string }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <SeasonIllustration season={season} size="sm" />
      <span className="font-heading text-xs tracking-widest uppercase opacity-60">{season}</span>
    </div>
  );
};

export default SeasonIllustration;
