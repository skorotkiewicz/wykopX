import { RefCallback, useCallback, useRef } from 'react';

const useInfiniteScrolling = (
  disabled: boolean,
  callback: () => void
): RefCallback<HTMLElement> => {
  const observer = useRef<IntersectionObserver>();

  return useCallback(
    (node) => {
      if (disabled) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [disabled, callback]
  );
};

export default useInfiniteScrolling;
