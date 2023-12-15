import React, { useState } from 'react';
import ControlledInput from '../../src/components/Input/ControlledInput';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof ControlledInput> = {
  title: 'components/ControlledInput',
  component: ControlledInput,
};

export default meta;

export function Default() {
  const [value, setValue] = useState('');

  return (
    <ControlledInput
      inputProps={{
        value: value,
        onChange: (e) => setValue(e.target.value),
      }}
      postfix={
        <>
          <p>0/1,000자</p>
        </>
      }
    />
  );
}
