import { useEffect, useState } from 'react';

export function useMotion() {
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setMotion(!query.matches);

    onChange();
    query.addEventListener('change', onChange);

    return () => query.removeEventListener('change', onChange);
  }, [setMotion]);

  return motion;
}
