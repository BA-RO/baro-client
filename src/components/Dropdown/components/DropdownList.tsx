import { type PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useDropdownContext } from '..';
import * as styles from '../style.css';

const DropdownList = ({ children }: PropsWithChildren) => {
  const { isOpen, targetRef, size, position } = useDropdownContext();

  return (
    <>
      {isOpen && (
        <ul
          ref={targetRef}
          className={styles.menuList({ size })}
          style={assignInlineVars({
            [styles.top]: `${position.top}px`,
            [styles.left]: `${position.left}px`,
          })}
        >
          {children}
        </ul>
      )}
    </>
  );
};

export default DropdownList;
