import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '.';
import SkeletonContent, { RATIOS } from './SkeletonContent';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    componentSubtitle: '컴포넌트의 로딩 상태를 표시하는 데 사용됩니다.',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0.4rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;
type ContentStory = StoryObj<typeof SkeletonContent>;

export const Basic: Story = {
  args: {
    width: '100%',
    height: '48px',
    radius: 'medium',
  },
  render: (args) => <Skeleton {...args} />,
};

export const Text: Story = {
  args: {
    width: '100%',
    height: '12px',
    radius: 'medium',
  },
  render: (args) => <Skeleton {...args} />,
};

export const Circle: Story = {
  args: {
    width: '64px',
    height: '64px',
    radius: 'full',
  },
  render: (args) => <Skeleton {...args} />,
};

export const Content: ContentStory = {
  args: {
    ratios: RATIOS,
  },
  render: (args) => <SkeletonContent ratios={args.ratios} />,
};
