import { createContext, type PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import DropdownButton from '@components/Dropdown/components/DropdownButton';
import DropdownTitle from '@components/Dropdown/components/DropdownTitle';
import * as styles from '@components/Dropdown/style.css';

interface DropdownContextProps {
  type: 'small' | 'medium';
}

interface DropdownProps {
  className?: string;
  onClose: () => void;
}

type DropdownRootProps = DropdownContextProps &
  PropsWithChildren<DropdownProps>;

export const DropdownContext = createContext<DropdownContextProps | null>(null);

const DropdownRoot = ({
  children,
  type,
  className,
  onClose,
}: DropdownRootProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isClickOutside =
        dropdownRef.current && !dropdownRef.current?.contains(e.target as Node);
      isClickOutside && onClose();
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <DropdownContext.Provider
      value={{
        type,
      }}
    >
      <div
        className={clsx(styles.dropdownRoot({ type }), className)}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const Dropdown = Object.assign(DropdownRoot, {
  Title: DropdownTitle,
  Button: DropdownButton,
});

export default Dropdown;
