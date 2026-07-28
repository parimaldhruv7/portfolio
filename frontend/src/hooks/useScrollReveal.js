import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element (fade + slide up) the first time it scrolls into view.
 * Respects prefers-reduced-motion by revealing immediately, no animation.
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isRevealed];
}
