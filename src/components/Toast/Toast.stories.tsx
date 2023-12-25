import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/src/stores/toastStore';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: function Render() {
    const { showToast } = useToast();

    useEffect(() => {
      showToast({ message: '나나나나나나' });

      const interval = setInterval(
        () => showToast({ message: '나나나나나나' }),
        4000,
      );

      return () => clearInterval(interval);
    }, []);

    return <Toast />;
  },
};
