import { useContext } from 'react';

import { TooltipContext } from '../components/Tooltip';

export const useTooltipContext = () => {
  const ctx = useContext(TooltipContext);

  if (!ctx) {
    throw new Error(
      'useTooltipContext hook must be used within a Tooltip component',
    );
  }

  return ctx;
};
