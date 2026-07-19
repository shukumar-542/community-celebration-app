import { useRouter } from 'expo-router';
import { useCallback, useRef } from 'react';

export function useDebouncedRouter(delay = 800) {
  const router = useRouter();
  const isNavigating = useRef(false);

  const push = useCallback(
    (href: Parameters<typeof router.push>[0]) => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      router.push(href);
      setTimeout(() => {
        isNavigating.current = false;
      }, delay);
    },
    [router, delay]
  );

  const back = useCallback(() => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    router.back();
    setTimeout(() => {
      isNavigating.current = false;
    }, delay);
  }, [router, delay]);

  return { push, back, router };
}