import { useEffect } from 'react';
import { TOAST_DURATION_TIME } from '@models/toastModel';
import { useToastStore } from '@stores/toastStore';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: function Render() {
    const { showToast } = useToastStore();

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

export const WithAction: Story = {
  render: function Render() {
    const { showToast } = useToastStore();

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
