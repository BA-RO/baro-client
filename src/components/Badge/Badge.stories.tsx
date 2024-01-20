import { CATEGORY_COLOR } from '@constants/config';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '.';

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
    children: '부탁하기',
    color: 'blue',
  },
  render: (args) => <Badge color={args.color}>{args.children}</Badge>,
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color={CATEGORY_COLOR['부탁하기']}>부탁하기</Badge>
      <Badge color={CATEGORY_COLOR['보고하기']}>보고하기</Badge>
      <Badge color={CATEGORY_COLOR['축하하기']}>축하하기</Badge>
      <Badge color={CATEGORY_COLOR['위로하기']}>위로하기</Badge>
      <Badge color={CATEGORY_COLOR['감사 전하기']}>감사 전하기</Badge>
      <Badge color={CATEGORY_COLOR['안부 전하기']}>안부 전하기</Badge>
      <Badge color={CATEGORY_COLOR['기타']}>기타</Badge>
    </div>
  ),
};
