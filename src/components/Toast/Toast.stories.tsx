import Button from '@components/Button';
import { TOAST_DURATION_TIME } from '@constants/toast';
import { useToastStore } from '@stores/toast';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
    componentSubtitle: '사용자에게 알려야하는 정보를 보여주는 컴포넌트',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: function Render() {
    const { showToast } = useToastStore();

    return (
      <>
        <Button
          state="enabled"
          size="M"
          onClick={() => showToast({ message: '일반 토스트 노출' })}
        >
          일반 토스트 노출
        </Button>
        <Toast />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 액션이 없는 토스트 (노출시간: 3.5초)',
      },
    },
  },
};

export const WithAction: Story = {
  render: function Render() {
    const { showToast } = useToastStore();

    return (
      <>
        <Button
          state="enabled"
          size="M"
          onClick={() =>
            showToast({
              message: '액션이 있는 토스트 노출',
              type: TOAST_DURATION_TIME.ACTION,
            })
          }
        >
          액션이 있는 토스트 노출
        </Button>
        <Toast />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 액션이 없는 토스트 (노출시간: 5초)',
      },
    },
  },
};
