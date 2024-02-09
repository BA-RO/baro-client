import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';
import clsx from 'clsx';

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
}

interface CardContextProps {
  isVisibleMenu: boolean;
}

export const CardContext = createContext<CardContextProps>({
  isVisibleMenu: false,
});

const CardRoot = ({
  children,
  className,
  color = 'white',
}: PropsWithChildren<CardProps>) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuShow = () => {
    setIsVisible(true);
  };

  const handleMenuHide = () => {
    setIsVisible(false);
  };

  return (
    <CardContext.Provider value={{ isVisibleMenu: isVisible }}>
      <li
        className={clsx(styles.wrapper({ color }), className)}
        onMouseEnter={handleMenuShow}
        onMouseLeave={handleMenuHide}
      >
        {children}
      </li>
    </CardContext.Provider>
  );
};

const CardMenu = ({ children }: PropsWithChildren) => {
  const { isVisibleMenu } = useContext(CardContext);

  return <>{isVisibleMenu && <div className={styles.menu}>{children}</div>}</>;
};

const CardHeader = ({ children }: PropsWithChildren) => {
  return <div className={styles.header}>{children}</div>;
};

const CardBody = ({ children }: PropsWithChildren) => {
  return <div className={styles.body}>{children}</div>;
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
