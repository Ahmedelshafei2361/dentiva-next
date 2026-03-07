'use client';

import { useEffect, useRef } from 'react';

interface StatItemProps {
  target: number;
  label: string;
}

function StatItem({ target, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item">
      <div className="stat-number" ref={ref}>
        {target.toLocaleString()}<sup>+</sup>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function animateCounter(el: HTMLDivElement, target: number) {
  const duration = 2000;
  const start = performance.now();

  const update = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.innerHTML = current.toLocaleString() + '<sup>+</sup>';
    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <StatItem target={12351} label="Client satisfaction with our service" />
          <StatItem target={16146} label="Completed project by our treatment" />
        </div>
      </div>
    </section>
  );
}
