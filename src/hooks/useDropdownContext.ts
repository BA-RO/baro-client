import { useContext } from 'react';

import { DropdownContext } from '../components/Dropdown';

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);

  if (!ctx) {
    throw new Error(
      'useDropdownContext hook must be used within a Dropdown component',
    );
  }

  return ctx;
};
