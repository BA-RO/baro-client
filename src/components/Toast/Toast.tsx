import { useEffect } from 'react';

import { useToast } from '@/src/stores/toastStore';

import { toast } from './style.css';

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
  }, [isToastVisible, hideToast]);

  return (
    <div className={toast({ isActive: isToastVisible })} role="alert">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
