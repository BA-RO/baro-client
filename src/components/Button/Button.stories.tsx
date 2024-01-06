import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
};

export const MiddleDisabled: Story = {
  args: {
    children: 'MiddleDisabled',
    size: 'M',
    state: 'disabled',
    onClick: () => {},
  },
};

export const MiddleEnabled: Story = {
  args: {
    children: 'MiddleEnabled',
    size: 'M',
    state: 'enabled',
    onClick: () => {},
  },
};

export const LargeDefault: Story = {
  args: {
    children: 'LargeDefault',
    size: 'L',
    state: 'default',
    onClick: () => {},
  },
};

export const LargeDisabled: Story = {
  args: {
    children: 'LargeDisabled',
    size: 'L',
    state: 'disabled',
    onClick: () => {},
  },
};

export const LargeEnabled: Story = {
  args: {
    children: 'LargeEnabled',
    size: 'L',
    state: 'enabled',
    onClick: () => {},
  },
};
