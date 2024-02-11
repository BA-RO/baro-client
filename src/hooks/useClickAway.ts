import { useEffect, useRef } from 'react';

interface UseClickAway {
  onClickAway: () => void;
}

const useClickAway = ({ onClickAway }: UseClickAway) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      const isClickAway =
        ref.current && !ref.current?.contains(e.target as Node);

      isClickAway && onClickAway?.();
    };

    document.addEventListener('click', handleClickAway);

    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  }, [onClickAway]);

  return ref;
};

export default useClickAway;
