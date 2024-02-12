import { type PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import Portal from '@components/Portal';
import { PORTAL_ID } from '@constants/portal';

import { useDropdownContext } from '..';
import * as styles from '../style.css';

const DropdownMenuList = ({ children }: PropsWithChildren) => {
  const { size, targetRef, position, fixed, isOpen } = useDropdownContext();

  return (
    <>
      {isOpen && (
        <Portal id={PORTAL_ID['DROPDOWN']}>
          <ul
            ref={targetRef}
            className={styles.menuList({ size })}
            style={assignInlineVars({
              [styles.position]: fixed ? 'fixed' : 'absolute',
              [styles.top]: `${position.top}px`,
              [styles.left]: `${position.left}px`,
            })}
          >
            {children}
          </ul>
        </Portal>
      )}
    </>
  );
};

export default DropdownMenuList;
