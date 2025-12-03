import { useEffect, useRef } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const confettiRef = useRef<ConfettiPiece[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "#E91E8C", // Pink
      "#FF6B35", // Orange
      "#FFD93D", // Yellow
      "#6BCB77", // Green
      "#4D96FF", // Blue
      "#FF8E9E", // Light pink
      "#FFA94D", // Light orange
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createConfetti = () => {
      const pieces: ConfettiPiece[] = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < count; i++) {
        pieces.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      return pieces;
    };

    const drawConfettiPiece = (piece: ConfettiPiece) => {
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.rotation * Math.PI) / 180);
      ctx.globalAlpha = piece.opacity;
      ctx.fillStyle = piece.color;

      // Draw different shapes
      const shapeType = Math.floor(piece.size) % 3;
      if (shapeType === 0) {
        // Rectangle
        ctx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
      } else if (shapeType === 1) {
        // Circle
        ctx.beginPath();
        ctx.arc(0, 0, piece.size / 3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Triangle
        ctx.beginPath();
        ctx.moveTo(0, -piece.size / 2);
        ctx.lineTo(piece.size / 2, piece.size / 2);
        ctx.lineTo(-piece.size / 2, piece.size / 2);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiRef.current.forEach((piece) => {
        // Mouse interaction - subtle push effect
        const dx = piece.x - mouseRef.current.x;
        const dy = piece.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          piece.speedX += (dx / dist) * force * 0.05;
          piece.speedY += (dy / dist) * force * 0.05;
        }

        // Apply movement with damping
        piece.x += piece.speedX;
        piece.y += piece.speedY;
        piece.rotation += piece.rotationSpeed;

        // Damping
        piece.speedX *= 0.99;
        piece.speedY *= 0.99;

        // Gentle floating motion
        piece.speedX += (Math.random() - 0.5) * 0.02;
        piece.speedY += (Math.random() - 0.5) * 0.02;

        // Keep within bounds with wrapping
        if (piece.x < -20) piece.x = canvas.width + 20;
        if (piece.x > canvas.width + 20) piece.x = -20;
        if (piece.y < -20) piece.y = canvas.height + 20;
        if (piece.y > canvas.height + 20) piece.y = -20;

        drawConfettiPiece(piece);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    resizeCanvas();
    confettiRef.current = createConfetti();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      confettiRef.current = createConfetti();
    });
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

