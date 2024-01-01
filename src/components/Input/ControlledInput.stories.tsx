import type { Meta, StoryObj } from '@storybook/react';

import { useInput } from '@/src/hooks/useInput';

import ControlledInput from './ControlledInput';

const meta: Meta<typeof ControlledInput> = {
  title: 'Input/ControlledInput',
  component: ControlledInput,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ControlledInput>;

export const Basic: Story = {
  render: function Render() {
    const inputProps = useInput({ id: 'story' });

    return <ControlledInput type={'primary'} inputProps={inputProps} />;
  },
};
