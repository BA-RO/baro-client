import { useEffect } from 'react';

import { useToastStore } from '@stores/toast';

import * as styles from './style.css';

const Toast = () => {
  const { toastData, hideToast } = useToastStore();

  const { message, type, isToastVisible } = toastData;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

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
