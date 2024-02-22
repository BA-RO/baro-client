import { createContext, type PropsWithChildren, useContext } from 'react';
import clsx from 'clsx';

import useDisclosure from '@hooks/useDisclosure';

import * as styles from './style.css';

interface CardProps {
  color?:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red'
    | 'orange'
    | 'purple'
    | 'grey'
    | 'white';
  className?: string;
  defaultIsVisibleMenu?: boolean;
  onBlur?: VoidFunction;
}

interface CardContextProps extends Pick<CardProps, 'defaultIsVisibleMenu'> {
  isVisibleMenu: boolean;
}

export const CardContext = createContext<CardContextProps>({
  isVisibleMenu: false,
});

const CardRoot = ({
  children,
  className,
  defaultIsVisibleMenu = false,
  color = 'white',
}: PropsWithChildren<CardProps>) => {
  const {
    isOpen: isVisible,
    onOpen: onShow,
    onClose: onHide,
  } = useDisclosure();

  return (
    <CardContext.Provider
      value={{ isVisibleMenu: isVisible, defaultIsVisibleMenu }}
    >
      <li
        className={clsx(styles.wrapper({ color }), className)}
        onMouseEnter={() => {
          !defaultIsVisibleMenu && onShow();
        }}
        onMouseLeave={() => {
          !defaultIsVisibleMenu && onHide();
        }}
      >
        {children}
      </li>
    </CardContext.Provider>
  );
};

const CardMenu = ({ children }: PropsWithChildren) => {
  const { isVisibleMenu, defaultIsVisibleMenu } = useContext(CardContext);

  return (
    <>
      {!defaultIsVisibleMenu ? (
        isVisibleMenu && <div className={styles.menu}>{children}</div>
      ) : (
        <div className={styles.menu}>{children}</div>
      )}
    </>
  );
};

const CardHeader = ({ children }: PropsWithChildren) => {
  return <div className={styles.header}>{children}</div>;
};

const CardBody = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx(styles.body, className)}>{children}</div>;
};

const CardFooter = ({ children }: PropsWithChildren) => {
  return <div className={styles.footer}>{children}</div>;
};

const Card = Object.assign(CardRoot, {
  Menu: CardMenu,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
