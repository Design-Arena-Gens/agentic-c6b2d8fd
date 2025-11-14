"use client";
import React from 'react';

export default function BrainWaves() {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const raf = React.useRef<number>();
  const t = React.useRef(0);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const gradient = () => {
      const { innerWidth: w, innerHeight: h } = window;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, 'rgba(123,223,242,0.20)');
      g.addColorStop(1, 'rgba(161,232,247,0.04)');
      return g;
    };

    const draw = () => {
      if (!running) return;
      const { innerWidth: w, innerHeight: h } = window;
      ctx.clearRect(0, 0, w, h);

      // Subtle grid dots for depth
      ctx.fillStyle = 'rgba(255,255,255,0.025)';
      for (let y = 0; y < h; y += 48) {
        for (let x = 0; x < w; x += 48) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Layered sine waves inspired by brain rhythms
      const layers = [
        { amp: 18, freq: 0.0075, speed: 0.003, alpha: 0.22, width: 1.6 },
        { amp: 28, freq: 0.005, speed: 0.002, alpha: 0.12, width: 1.2 },
        { amp: 10, freq: 0.014, speed: 0.004, alpha: 0.18, width: 1.0 },
      ];

      layers.forEach((L, i) => {
        ctx.beginPath();
        ctx.lineWidth = L.width;
        ctx.strokeStyle = String(gradient());
        ctx.globalAlpha = L.alpha;
        const baseY = h * (0.25 + 0.25 * i);
        for (let x = 0; x <= w; x += 2) {
          const y = baseY + Math.sin(x * L.freq + t.current * (1 + i) * L.speed * 1200) * L.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // Occasional pulse
      const pulse = (Math.sin(t.current * 0.002) + 1) / 2; // 0..1
      ctx.globalAlpha = 0.06 * pulse;
      ctx.fillStyle = 'rgba(123,223,242,0.35)';
      ctx.beginPath();
      ctx.ellipse(w * 0.7, h * 0.18, 220, 80, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      t.current += 16.6667; // advance by ~frame
      raf.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf.current = requestAnimationFrame(draw);
    return () => {
      running = false;
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
    />
  );
}
