import type { Meta } from '@storybook/react';

import WriteInput from '.';

const meta: Meta<typeof WriteInput> = {
  title: 'WriteInput',
  component: WriteInput,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
