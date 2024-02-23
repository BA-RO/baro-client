import { type PropsWithChildren } from 'react';

import Icon from '@components/Icon';
import { type Icons } from '@constants/icon';

import * as styles from './style.css';

interface DayMessageProps {
  icon?: Icons;
}

const DayMessage = ({ children, icon }: PropsWithChildren<DayMessageProps>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        {icon && <Icon icon={icon} width={20} height={20} />}
        <span className={styles.text}>{children}</span>
      </div>
    </div>
  );
};

export default DayMessage;
