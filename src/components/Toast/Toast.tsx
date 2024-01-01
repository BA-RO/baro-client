import { useEffect } from 'react';

import { useToast } from '@/src/stores/toastStore';

import * as styles from './style.css';

const Toast = () => {
  const { toastData, hideToast } = useToast();

  const { message, type, isToastVisible } = toastData;

  useEffect(() => {
    let timer;

    if (isToastVisible) {
      timer = setTimeout(() => hideToast(), type);
    }

    return () => clearTimeout(timer);
  }, [hideToast, isToastVisible, type]);

  return (
    <div className={styles.toast({ isActive: isToastVisible })} role="alert">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
