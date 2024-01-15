import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';

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
}

interface CardContextProps {
  isVisibleMenu: boolean;
}

export const CardContext = createContext<CardContextProps>({
  isVisibleMenu: false,
});

const Card = ({ children, color = 'white' }: PropsWithChildren<CardProps>) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuShow = () => {
    setIsVisible(true);
  };

  const handleMenuHide = () => {
    setIsVisible(false);
  };

  return (
    <CardContext.Provider value={{ isVisibleMenu: isVisible }}>
      <div
        className={styles.wrapper({ color })}
        onMouseEnter={handleMenuShow}
        onMouseLeave={handleMenuHide}
      >
        {children}
      </div>
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

Card.Menu = CardMenu;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
