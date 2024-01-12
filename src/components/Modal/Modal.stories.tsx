import { useModalStore } from '@stores/modal';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const DeleteArticle: Story = {
  render: function Render() {
    const { openModal } = useModalStore();

    openModal('deleteArticle');

    return <Modal />;
  },
};
