import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Action이나 Event를 Trigger하는 컴포넌트',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const MiddleDefault: Story = {
  args: {
    children: 'MiddleDefault',
    size: 'M',
    state: 'default',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'M size, Default state Button',
      },
    },
  },
};

export const MiddleDisabled: Story = {
  args: {
    children: 'MiddleDisabled',
    size: 'M',
    state: 'disabled',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'M size, Disabled state Button',
      },
    },
  },
};

export const MiddleEnabled: Story = {
  args: {
    children: 'MiddleEnabled',
    size: 'M',
    state: 'enabled',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'M size, Enabled state Button',
      },
    },
  },
};

export const LargeDefault: Story = {
  args: {
    children: 'LargeDefault',
    size: 'L',
    state: 'default',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'L size, Default state Button',
      },
    },
  },
};

export const LargeDisabled: Story = {
  args: {
    children: 'LargeDisabled',
    size: 'L',
    state: 'disabled',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'L size, Disabled state Button',
      },
    },
  },
};

export const LargeEnabled: Story = {
  args: {
    children: 'LargeEnabled',
    size: 'L',
    state: 'enabled',
    onClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'L size, Enabled state Button',
      },
    },
  },
};
