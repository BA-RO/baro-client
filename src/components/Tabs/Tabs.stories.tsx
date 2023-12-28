import Tabs from '.';
import type { TabsRootProps } from './TabsRoot';
import type { StoryObj } from '@storybook/react';
import { type Meta } from '@storybook/react';

const COMPONENT_DESCRIPTION = `
  - \`<Tabs />\`: 모든 컴포넌트에 대한 컨텍스트와 상태를 제공합니다.
  - \`<Tabs.List />\`: \`<Tabs.Trigger />\` 컴포넌트들을 위한 Wrapper 컴포넌트입니다.
  - \`<Tabs.Trigger />\`: 선택된 탭에 해당되는 컨텐츠를 표시하기 위한 버튼입니다.
  - \`<Tabs.Content />\`: 선택된 탭에 해당되는 컨텐츠를 보여줍니다.
`;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      defaultValue: '끄적이는',
      description: 'Tabs 컴포넌트의 선택된 탭을 정의합니다.',
      options: ['끄적이는', '참고하는'],
      control: 'inline-radio',
    },
  },
  parameters: {
    componentSubtitle: '한 번에 하나씩 표시될 컨텐츠들의 집합입니다.',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {
    defaultValue: '끄적이는',
  },
  render: (args: TabsRootProps) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Trigger value="끄적이는">끄적이는</Tabs.Trigger>
        <Tabs.Trigger value="참고하는">참고하는</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="끄적이는">끄적이는 내용</Tabs.Content>
      <Tabs.Content value="참고하는">참고하는 내용</Tabs.Content>
    </Tabs>
  ),
};
