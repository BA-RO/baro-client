import Flex from './Flex';
import { type Meta } from '@storybook/react';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export default meta;

export function Default() {
  return (
    <Flex
      align="center"
      justify="center"
      gap="10px"
      marginX="80px"
      paddingX="10px"
    >
      <div>1번</div>
      <div>2번</div>
      <div>3번</div>
    </Flex>
  );
}
