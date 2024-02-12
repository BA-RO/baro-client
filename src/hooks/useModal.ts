import { useState } from 'react';

const useModal = <T extends { initialOpen: boolean }>(initialData?: T) => {
  const [isOpen, setIsOpen] = useState(initialData?.initialOpen ?? false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return { isOpen, handleOpen, handleClose };
};

export default useModal;
