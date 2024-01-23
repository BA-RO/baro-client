import { useContext } from 'react';

import { DialogContext } from '../components/Dialog';

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);

  if (!ctx) {
    throw new Error(
      'useDialogContext hook must be used within a Dialog component',
    );
  }

  return ctx;
};
