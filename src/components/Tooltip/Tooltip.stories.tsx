import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const COMPONENT_DESCRIPTION = `
  - \`<Tooltip />\`: 모든 컴포넌트에 대한 컨텍스트와 상태를 제공합니다.
  - \`<Tooltip.Trigger />\`: \`<Tabs.Content />\` 컴포넌트를 활성화하는 컴포넌트입니다. 사용자가 이 컴포넌트 위로 마우스를 올릴 때 Tooltip이 나타납니다.
  - \`<Tooltip.Content />\`: Tooltip에 표시되는 내용을 담당하는 컴포넌트입니다.
`;

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    componentSubtitle:
      '특정 사용자 인터페이스에 대한 보조 설명을 제공하는 컴포넌트',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '200px',
          height: '550px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <>
      <Tooltip>
        <Tooltip.Trigger>
          <div>Minimal</div>
        </Tooltip.Trigger>
        <Tooltip.Content>Minimal Tooltip 설명</Tooltip.Content>
      </Tooltip>
      <Tooltip hasArrow>
        <Tooltip.Trigger>
          <div>Highlight</div>
        </Tooltip.Trigger>
        <Tooltip.Content>Highlight Tooltip 설명</Tooltip.Content>
      </Tooltip>
    </>
  ),
};

export const Minimal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Hover시 Trigger 요소의 상위와 하위에 노출됩니다.',
      },
    },
  },
  args: {
    children: 'Minimal',
    placement: 'bottom',
  },
  argTypes: {
    hasArrow: { control: false },
  },
  render: (args) => (
    <Tooltip hasArrow={false} placement={args.placement}>
      <Tooltip.Trigger>
        <div>{args.children}</div>
      </Tooltip.Trigger>
      <Tooltip.Content>Minimal Tooltip 설명</Tooltip.Content>
    </Tooltip>
  ),
};

export const Highlight: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Hover시 Trigger 요소의 하위에 노출됩니다.',
      },
    },
  },
  args: {
    children: 'Highlight',
    hasArrow: true,
  },
  argTypes: {
    placement: { control: false },
  },
  render: (args) => (
    <Tooltip hasArrow={args.hasArrow} placement="bottom">
      <Tooltip.Trigger>
        <div>{args.children}</div>
      </Tooltip.Trigger>
      <Tooltip.Content>Highlight Tooltip 설명</Tooltip.Content>
    </Tooltip>
  ),
};
