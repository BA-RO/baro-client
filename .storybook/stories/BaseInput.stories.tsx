import React from 'react';
import BaseInput from '../../src/components/Input/BaseInput';
import { type Meta } from '@storybook/react';

const meta: Meta<typeof BaseInput> = {
  title: 'BaseInput',
  component: BaseInput,
};

export default meta;

export function Default() {
  return <BaseInput controlledInputProps={{ value: '', onChange: () => {} }} />;
}
