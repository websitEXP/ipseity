import { useSeason, Season } from '@/context/SeasonContext';

const CatMascot = () => {
  const { season } = useSeason();

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none select-none">
      <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Cat body - curled up sleeping */}
          <ellipse cx="50" cy="60" rx="28" ry="18" fill="#F5E6D3" stroke="#D4B896" strokeWidth="1" />
          {/* Cat head */}
          <circle cx="35" cy="48" r="12" fill="#F5E6D3" stroke="#D4B896" strokeWidth="1" />
          {/* Ears */}
          <polygon points="28,38 25,28 33,36" fill="#F5E6D3" stroke="#D4B896" strokeWidth="1" />
          <polygon points="38,36 35,26 43,33" fill="#F5E6D3" stroke="#D4B896" strokeWidth="1" />
          {/* Inner ears */}
          <polygon points="29,37 27,30 33,36" fill="#EAADA0" opacity="0.5" />
          <polygon points="39,35 37,28 42,34" fill="#EAADA0" opacity="0.5" />
          {/* Closed eyes */}
          <path d="M30,48 Q33,46 36,48" fill="none" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" />
          {/* Nose */}
          <ellipse cx="33" cy="51" rx="1.5" ry="1" fill="#EAADA0" />
          {/* Tail curled around */}
          <path d="M78,55 Q85,45 80,38 Q75,32 70,38" fill="none" stroke="#D4B896" strokeWidth="3" strokeLinecap="round" />
          {/* Orange patches */}
          <ellipse cx="55" cy="58" rx="10" ry="7" fill="#E8A87C" opacity="0.4" />
          <circle cx="38" cy="45" r="5" fill="#E8A87C" opacity="0.3" />
          {/* Vines */}
          <path d="M10,75 Q15,60 20,65 Q25,70 22,55" fill="none" stroke="#839958" strokeWidth="1.2" opacity="0.6" />
          <path d="M80,70 Q85,60 82,50" fill="none" stroke="#839958" strokeWidth="1.2" opacity="0.6" />
          {/* Small leaves on vines */}
          <ellipse cx="15" cy="62" rx="3" ry="1.5" fill="#839958" opacity="0.5" transform="rotate(-30 15 62)" />
          <ellipse cx="22" cy="57" rx="2.5" ry="1.2" fill="#839958" opacity="0.5" transform="rotate(20 22 57)" />
          <ellipse cx="83" cy="55" rx="3" ry="1.5" fill="#839958" opacity="0.5" transform="rotate(-20 83 55)" />

          {/* Season-specific decorations */}
          {season === 'spring' && (
            <>
              <circle cx="12" cy="55" r="2" fill="#D3968C" opacity="0.7" />
              <circle cx="18" cy="48" r="1.5" fill="#E8B4B8" opacity="0.7" />
              <circle cx="85" cy="48" r="2" fill="#D3968C" opacity="0.6" />
              <circle cx="75" cy="42" r="1.5" fill="#E8B4B8" opacity="0.6" />
              {/* Tiny petals */}
              <circle cx="60" cy="40" r="1" fill="#D3968C" opacity="0.5" />
              <circle cx="45" cy="35" r="1.2" fill="#E8B4B8" opacity="0.5" />
            </>
          )}
          {season === 'summer' && (
            <>
              {/* Butterflies */}
              <g transform="translate(15, 40) scale(0.4)">
                <path d="M0,0 Q-8,-10 -3,-15 Q2,-10 0,0 Q8,-10 3,-15 Q-2,-10 0,0" fill="#F5A623" opacity="0.7" />
              </g>
              <g transform="translate(80, 38) scale(0.35) rotate(20)">
                <path d="M0,0 Q-8,-10 -3,-15 Q2,-10 0,0 Q8,-10 3,-15 Q-2,-10 0,0" fill="#E8572A" opacity="0.6" />
              </g>
              {/* Sun rays */}
              <circle cx="88" cy="25" r="4" fill="#F5A623" opacity="0.3" />
            </>
          )}
          {season === 'autumn' && (
            <>
              {/* Fallen leaves */}
              <ellipse cx="20" cy="72" rx="4" ry="2" fill="#C17817" opacity="0.6" transform="rotate(-15 20 72)" />
              <ellipse cx="65" cy="75" rx="3.5" ry="1.8" fill="#A05A2C" opacity="0.5" transform="rotate(25 65 75)" />
              <ellipse cx="45" cy="78" rx="3" ry="1.5" fill="#D4871C" opacity="0.5" transform="rotate(-30 45 78)" />
              <ellipse cx="80" cy="73" rx="3" ry="1.5" fill="#B86B2A" opacity="0.4" transform="rotate(10 80 73)" />
            </>
          )}
          {season === 'winter' && (
            <>
              {/* Tiny scarf */}
              <path d="M28,56 Q35,58 42,55" fill="none" stroke="#C8D8E8" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M42,55 L44,62" stroke="#C8D8E8" strokeWidth="2" strokeLinecap="round" />
              {/* Snowflakes */}
              <text x="15" y="35" fontSize="5" opacity="0.5">❄</text>
              <text x="75" y="30" fontSize="4" opacity="0.4">❄</text>
              <text x="55" y="25" fontSize="3" opacity="0.3">❄</text>
              <text x="88" y="45" fontSize="4" opacity="0.4">❄</text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default CatMascot;
