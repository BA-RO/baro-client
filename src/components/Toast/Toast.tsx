import { useEffect } from 'react';
import clsx from 'clsx';
import { shallow } from 'zustand/shallow';

import { useToastStore } from '@/src/stores/toastStore';

import { open, toast } from './style.css';

const TOAST_DURATION = 2500;

const Toast = () => {
  const { toastData, hideToast } = useToastStore(
    (state) => ({
      toastData: state.toastData,
      hideToast: state.hideToast,
    }),
    shallow,
  );

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
