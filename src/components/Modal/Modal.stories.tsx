import Button from '@components/Button';
import { useModalStore } from '@stores/modal';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
    componentSubtitle: '별도의 레이어에서 사용자의 동작을 받는 컴포넌트',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const DeleteArticle: Story = {
  render: function Render() {
    const { openModal } = useModalStore();

    return (
      <>
        <Button
          state="enabled"
          size="M"
          onClick={() => openModal('deleteArticle')}
        >
          글 삭제 모달 노출
        </Button>
        <Modal />
      </>
    );
  },
};

export const Login: Story = {
  render: function Render() {
    const { openModal } = useModalStore();

    return (
      <>
        <Button state="enabled" size="M" onClick={() => openModal('login')}>
          로그인 모달 노출
        </Button>
        <Modal />
      </>
    );
  },
};
