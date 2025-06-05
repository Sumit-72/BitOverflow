'use client';

import { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

export default function FeatureCardClientWrapper({ features }: { features: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const features = entry.target.querySelectorAll('.feature-card');
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {features.map((feature, index) => {
        const Icon = Icons[feature.icon as keyof typeof Icons];
        return (
          <div key={index} className="feature-card opacity-0 translate-y-8">
            <FeatureCard
              icon={Icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          </div>
        );
      })}
    </div>
  );
}
