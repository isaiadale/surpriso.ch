import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  velocity: number;
}

export const ConfettiBurst = ({ isActive }: { isActive: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      const colors = [
        "hsl(330, 85%, 55%)", // Pink
        "hsl(25, 95%, 55%)",  // Orange
        "hsl(45, 95%, 60%)",  // Yellow
        "hsl(200, 85%, 55%)", // Blue
        "hsl(150, 70%, 50%)", // Green
        "hsl(280, 70%, 60%)", // Purple
      ];

      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: 50,
          y: 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          angle: Math.random() * 360,
          velocity: Math.random() * 100 + 50,
        });
      }
      setParticles(newParticles);

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      {particles.map((particle) => {
        const rad = (particle.angle * Math.PI) / 180;
        const endX = 50 + Math.cos(rad) * particle.velocity;
        const endY = 50 + Math.sin(rad) * particle.velocity;

        return (
          <div
            key={particle.id}
            className="absolute rounded-full animate-confetti-burst"
            style={{
              left: "50%",
              top: "50%",
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              "--end-x": `${endX - 50}%`,
              "--end-y": `${endY - 50}%`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};
