"use client";
import React from 'react';

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number; // pixels of max translation
}

export default function Magnetic({ strength = 12, children, className = '', ...rest }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(relX, relY);
    const maxDist = Math.max(rect.width, rect.height);
    const mag = Math.min(dist / (maxDist / 2), 1);
    const tx = (relX / (rect.width / 2)) * strength * mag;
    const ty = (relY / (rect.height / 2)) * strength * mag;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0px, 0px, 0)';
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
