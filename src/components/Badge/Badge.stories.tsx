import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    componentSubtitle: '카테고리를 나타내는 컴포넌트',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    text: '바로',
    color: 'blue',
  },
  render: (args) => <Badge {...args} />,
};
