import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TOAST_DURATION_TIME } from '@/src/models/toastModel';
import { useToast } from '@/src/stores/toastStore';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const 단순확인: Story = {
  render: function Render() {
    const { showToast } = useToast();

    useEffect(() => {
      showToast({ message: '테스트', type: TOAST_DURATION_TIME.SHOW });

      const interval = setInterval(
        () => showToast({ message: '테스트', type: TOAST_DURATION_TIME.SHOW }),
        TOAST_DURATION_TIME.SHOW + 1000,
      );

      return () => clearInterval(interval);
    }, [showToast]);

    return <Toast />;
  },
};

export const 액션유도: Story = {
  render: function Render() {
    const { showToast } = useToast();

    useEffect(() => {
      showToast({ message: '테스트', type: TOAST_DURATION_TIME.ACTION });

      const interval = setInterval(
        () =>
          showToast({ message: '테스트', type: TOAST_DURATION_TIME.ACTION }),
        TOAST_DURATION_TIME.ACTION + 1000,
      );

      return () => clearInterval(interval);
    }, [showToast]);

    return <Toast />;
  },
};
