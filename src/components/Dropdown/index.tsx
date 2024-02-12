import {
  createContext,
  type HTMLAttributes,
  type PropsWithChildren,
  type RefObject,
} from 'react';
import clsx from 'clsx';

import useClickAway from '@hooks/useClickAway';
import useDisclosure from '@hooks/useDisclosure';
import usePosition from '@hooks/usePosition';

import DropdownMenuItem from './components/DropdownMenuItem';
import DropdownMenuList from './components/DropdownMenuList';
import DropdownTitle from './components/DropdownTitle';
import DropdownTrigger from './components/DropdownTrigger';
import * as styles from './style.css';

const INIT_POSITION = { top: 0, left: 0 };

interface DropdownContextProps {
  /** dropdown menulist 크기 */
  size?: 'small' | 'medium';
  /** dropdown menulist 위치 */
  placement?: 'bottom-left' | 'bottom-center' | 'bottom-right';
  /** dropdown menulist {top, left} 위치 */
  position: typeof INIT_POSITION;
  /** dropdown menulist 요소의 ref 객체  */
  targetRef: RefObject<HTMLUListElement>;
  /** dropdown menulist css position fixed 적용 여부 */
  fixed?: boolean;
  /** dropdown menulist 열림, 닫힘 상태 */
  isOpen: boolean;
  /** dropdown trigger toggle 함수 */
  onToggle: () => void;
}

interface DropdownRootProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<DropdownContextProps, 'size' | 'placement' | 'fixed'> {
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const DropdownContext = createContext<DropdownContextProps | null>(null);

const DropdownRoot = ({
  children,
  size = 'small',
  placement = 'bottom-left',
  fixed = false,
  ...props
}: PropsWithChildren<DropdownRootProps>) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const dropdownRef = useClickAway({
    onClickAway: onClose,
  });
  const { targetRef, position } = usePosition<HTMLDivElement, HTMLUListElement>(
    {
      defaultTriggerRef: dropdownRef,
      isOpen,
      placement,
      fixed,
    },
  );

  return (
    <DropdownContext.Provider
      value={{
        size,
        placement,
        position,
        targetRef,
        fixed,
        isOpen,
        onToggle,
      }}
    >
      <div
        {...props}
        className={clsx(styles.wrapper, props.className)}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Title: DropdownTitle,
  List: DropdownMenuList,
  Item: DropdownMenuItem,
});

export default Dropdown;
