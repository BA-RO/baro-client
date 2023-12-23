import { type Meta } from '@storybook/react';

import Flex from './Flex';
import { flex } from './style.css';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export default meta;

export const Default = () => {
  return (
    <Flex className={flex}>
      <div>1번</div>
      <div>2번</div>
      <div>3번</div>
    </Flex>
  );
};
