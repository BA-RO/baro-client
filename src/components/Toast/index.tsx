import { useEffect } from 'react';

import Portal from '@components/Portal';
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

  if (!message) return null;

  return (
    <Portal id="toast-root">
      <div className={styles.toast({ isActive: isToastVisible })} role="alert">
        <span className={styles.toastText}>{message}</span>
      </div>
    </Portal>
  );
};

export default Toast;
