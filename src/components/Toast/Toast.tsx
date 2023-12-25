import { useEffect } from 'react';
import clsx from 'clsx';

import { useToast } from '@/src/stores/toastStore';

import { open, toast } from './style.css';

const TOAST_DURATION = 2500;

const Toast = () => {
  const { toastData, hideToast } = useToast();

  const { message, isToastVisible } = toastData;

  useEffect(() => {
    let timer;

    if (isToastVisible) {
      timer = setTimeout(() => hideToast(), TOAST_DURATION);
    }

    return () => clearTimeout(timer);
  }, [isToastVisible]);

  return (
    <div className={clsx(toast, isToastVisible && open)} role="alert">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
