import { Season } from '@/context/season-context';

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
          /* Wildflower stems with blooms — blush pink */
          <g stroke="hsl(var(--accent))" strokeWidth="0.8" strokeLinecap="round" fill="none">
            {/* Left stem */}
            <path d="M16 44 Q16 30 14 20" />
            <path d="M14 20 Q12 18 10 19" />
            <path d="M14 20 Q14 16 16 14" />
            <ellipse cx="10" cy="17" rx="3" ry="4" fill="hsl(var(--accent))" fillOpacity="0.35" stroke="hsl(var(--accent))" strokeWidth="0.6" transform="rotate(-20 10 17)" />
            <circle cx="10" cy="17" r="1.2" fill="hsl(var(--secondary))" fillOpacity="0.5" />
            <ellipse cx="16" cy="12" rx="3.5" ry="4.5" fill="hsl(var(--accent))" fillOpacity="0.3" stroke="hsl(var(--accent))" strokeWidth="0.6" />
            <circle cx="16" cy="12" r="1.5" fill="hsl(var(--secondary))" fillOpacity="0.5" />
            {/* Right stem */}
            <path d="M32 44 Q32 28 34 18" />
            <path d="M34 18 Q36 16 38 17" />
            <path d="M34 18 Q34 14 32 12" />
            <ellipse cx="38" cy="15" rx="3" ry="4" fill="hsl(var(--accent))" fillOpacity="0.35" stroke="hsl(var(--accent))" strokeWidth="0.6" transform="rotate(15 38 15)" />
            <circle cx="38" cy="15" r="1.2" fill="hsl(var(--secondary))" fillOpacity="0.5" />
            <ellipse cx="32" cy="10" rx="3" ry="4" fill="hsl(var(--accent))" fillOpacity="0.4" stroke="hsl(var(--accent))" strokeWidth="0.6" />
            <circle cx="32" cy="10" r="1.5" fill="hsl(var(--secondary))" fillOpacity="0.5" />
            {/* Leaves */}
            <ellipse cx="14" cy="32" rx="4.5" ry="1.8" fill="hsl(var(--secondary))" fillOpacity="0.3" transform="rotate(-45 14 32)" />
            <ellipse cx="34" cy="34" rx="4" ry="1.5" fill="hsl(var(--secondary))" fillOpacity="0.3" transform="rotate(40 34 34)" />
            <ellipse cx="18" cy="38" rx="3.5" ry="1.3" fill="hsl(var(--secondary))" fillOpacity="0.25" transform="rotate(30 18 38)" />
          </g>
        )}
        {season === 'summer' && (
          /* Sunflower with grass stems and sun rays — warm golden */
          <g strokeLinecap="round" fill="none">
            {/* Sun rays */}
            <line x1="24" y1="2" x2="24" y2="8" stroke="#F5A623" strokeWidth="0.8" opacity="0.6" />
            <line x1="14" y1="5" x2="17" y2="10" stroke="#F5A623" strokeWidth="0.7" opacity="0.5" />
            <line x1="34" y1="5" x2="31" y2="10" stroke="#F5A623" strokeWidth="0.7" opacity="0.5" />
            <line x1="8" y1="10" x2="13" y2="14" stroke="#F5A623" strokeWidth="0.6" opacity="0.4" />
            <line x1="40" y1="10" x2="35" y2="14" stroke="#F5A623" strokeWidth="0.6" opacity="0.4" />
            <line x1="6" y1="18" x2="11" y2="18" stroke="#F5A623" strokeWidth="0.5" opacity="0.3" />
            <line x1="42" y1="18" x2="37" y2="18" stroke="#F5A623" strokeWidth="0.5" opacity="0.3" />
            {/* Sunflower */}
            <circle cx="24" cy="16" r="4" fill="#F5A623" fillOpacity="0.35" stroke="#F5A623" strokeWidth="0.7" />
            <circle cx="24" cy="16" r="2" fill="#E8572A" fillOpacity="0.4" />
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const px = 24 + Math.cos(rad) * 6;
              const py = 16 + Math.sin(rad) * 6;
              return <ellipse key={i} cx={px} cy={py} rx="2" ry="1" fill="#F5A623" fillOpacity="0.3" transform={`rotate(${angle} ${px} ${py})`} />;
            })}
            {/* Stems */}
            <path d="M24 20 L24 44" stroke="hsl(var(--secondary))" strokeWidth="0.8" opacity="0.5" />
            <path d="M16 44 Q17 34 14 26" stroke="hsl(var(--secondary))" strokeWidth="0.7" opacity="0.4" />
            <path d="M32 44 Q31 34 34 26" stroke="hsl(var(--secondary))" strokeWidth="0.7" opacity="0.4" />
            {/* Leaves */}
            <ellipse cx="20" cy="30" rx="4" ry="1.5" fill="hsl(var(--secondary))" fillOpacity="0.3" transform="rotate(-40 20 30)" />
            <ellipse cx="28" cy="34" rx="3.5" ry="1.3" fill="hsl(var(--secondary))" fillOpacity="0.25" transform="rotate(35 28 34)" />
          </g>
        )}
        {season === 'autumn' && (
          /* Three falling maple leaves — warm amber */
          <g>
            {/* Large leaf */}
            <path d="M20 6 Q26 12 24 18 Q22 24 20 30 Q18 24 16 18 Q14 12 20 6Z" fill="hsl(var(--accent))" fillOpacity="0.4" stroke="hsl(var(--accent))" strokeWidth="0.8" />
            <path d="M20 8 L20 30" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.6" />
            <path d="M20 14 Q17 12 15 14" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.5" fill="none" />
            <path d="M20 18 Q23 16 25 18" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.5" fill="none" />
            <path d="M20 22 Q17 20 16 22" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.5" fill="none" />
            <path d="M20 30 Q22 34 20 38" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.4" fill="none" />
            {/* Medium leaf - right */}
            <path d="M34 14 Q38 18 36 23 Q35 27 34 30 Q33 27 32 23 Q30 18 34 14Z" fill="hsl(var(--secondary))" fillOpacity="0.3" stroke="hsl(var(--secondary))" strokeWidth="0.6" transform="rotate(20 34 22)" />
            <path d="M34 16 L34 30" stroke="hsl(var(--secondary))" strokeWidth="0.4" opacity="0.4" transform="rotate(20 34 22)" />
            <path d="M34 30 Q35 33 34 36" stroke="hsl(var(--secondary))" strokeWidth="0.4" opacity="0.3" fill="none" />
            {/* Small leaf - bottom left */}
            <path d="M10 28 Q13 31 12 35 Q11 37 10 39 Q9 37 8 35 Q7 31 10 28Z" fill="hsl(var(--accent))" fillOpacity="0.25" stroke="hsl(var(--accent))" strokeWidth="0.5" transform="rotate(-15 10 34)" />
            <path d="M10 39 Q11 41 10 44" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.3" fill="none" />
          </g>
        )}
        {season === 'winter' && (
          /* Bare branch with snow — ice blue */
          <g stroke="hsl(var(--foreground))" strokeWidth="0.8" strokeLinecap="round" opacity="0.6">
            {/* Main branch */}
            <path d="M12 40 Q16 32 24 24 Q32 16 38 8" fill="none" strokeWidth="1" />
            {/* Sub branches */}
            <path d="M18 34 Q14 30 12 26" fill="none" />
            <path d="M22 28 Q26 26 30 28" fill="none" />
            <path d="M28 20 Q24 16 22 12" fill="none" />
            <path d="M32 14 Q36 14 38 16" fill="none" />
            <path d="M34 12 Q32 8 34 6" fill="none" />
            {/* Twigs */}
            <path d="M14 28 Q12 26 10 28" fill="none" strokeWidth="0.5" />
            <path d="M22 14 Q20 12 18 14" fill="none" strokeWidth="0.5" />
            <path d="M38 8 Q40 6 42 8" fill="none" strokeWidth="0.5" />
            {/* Snow dots */}
            <circle cx="12" cy="25" r="1.8" fill="hsl(var(--foreground))" fillOpacity="0.15" stroke="none" />
            <circle cx="22" cy="11" r="1.5" fill="hsl(var(--foreground))" fillOpacity="0.15" stroke="none" />
            <circle cx="30" cy="28" r="1.3" fill="hsl(var(--foreground))" fillOpacity="0.12" stroke="none" />
            <circle cx="38" cy="7" r="2" fill="hsl(var(--foreground))" fillOpacity="0.15" stroke="none" />
            <circle cx="34" cy="5" r="1" fill="hsl(var(--foreground))" fillOpacity="0.1" stroke="none" />
            <circle cx="16" cy="33" r="1.5" fill="hsl(var(--foreground))" fillOpacity="0.12" stroke="none" />
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
