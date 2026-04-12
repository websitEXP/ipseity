import { useSeason, Season } from '@/context/season-context';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const particleConfigs: Record<Season, { count: number; color: string; shape: 'petal' | 'dot' | 'leaf' | 'snowflake' }> = {
  spring: { count: 25, color: '#D3968C', shape: 'petal' },
  summer: { count: 30, color: '#F5A623', shape: 'dot' },
  autumn: { count: 20, color: '#C17817', shape: 'leaf' },
  winter: { count: 35, color: '#C8D8E8', shape: 'snowflake' },
};

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { season } = useSeason();
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const config = particleConfigs[season];
    particlesRef.current = Array.from({ length: config.count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: season === 'summer' ? -(Math.random() * 0.3 + 0.1) : Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = config.color;

        if (config.shape === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (config.shape === 'leaf') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (config.shape === 'snowflake') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Update
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap
        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.x < -10) p.x = canvas.width + 10;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [season]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleEffect;
