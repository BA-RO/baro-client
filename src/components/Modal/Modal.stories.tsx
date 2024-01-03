import type { Meta, StoryObj } from '@storybook/react';

import ModalContainer from './ModalContainer';

const meta: Meta<typeof ModalContainer> = {
  title: 'Components/Modal',
  component: ModalContainer,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ModalContainer>;

export const Second: Story = {
  args: { title: '제목', children: '설명' },
};
