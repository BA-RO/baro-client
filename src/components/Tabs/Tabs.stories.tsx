import { type ReactNode, useState } from 'react';

import type { StoryObj } from '@storybook/react';
import { type Meta } from '@storybook/react';

import Tabs, { type TabsRootProps } from '.';
import { type TabsTriggerProps } from './components/TabsTrigger';

interface TabsMeta extends TabsRootProps, TabsTriggerProps {
  tabListChildrenProp: ReactNode;
  tabContentChildrenProp: ReactNode;
  tabContentValueProp: string;
}

const CATEGORY = {
  TABS: 'Tabs',
  TABS_LIST: 'Tabs.List',
  TABS_TRIGGER: 'Tabs.Trigger',
  TABS_CONTENT: 'Tabs.Content',
};

const COMPONENT_DESCRIPTION = `
  - \`<Tabs />\`: 모든 컴포넌트에 대한 컨텍스트와 상태를 제공합니다.
  - \`<Tabs.List />\`: \`<Tabs.Trigger />\` 컴포넌트들을 위한 Wrapper 컴포넌트입니다.
  - \`<Tabs.Trigger />\`: 선택된 탭에 해당되는 컨텐츠를 표시하기 위한 버튼입니다.
  - \`<Tabs.Content />\`: 선택된 탭에 해당되는 컨텐츠를 보여줍니다.
`;

const meta: Meta<TabsMeta> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    type: {
      description: 'Tabs 컴포넌트의 종류',
      table: {
        category: CATEGORY.TABS,
      },
    },
    selectedTab: {
      description: 'Tabs 컴포넌트의 초기에 활성화될 탭의 기본값',
      table: {
        category: CATEGORY.TABS,
      },
    },
    handleTabSelect: {
      description: 'Tabs 컴포넌트 스와이프 동작이 일어날 때 실행되는 함수',
      table: {
        category: CATEGORY.TABS,
      },
    },
    tabListChildrenProp: {
      name: 'children',
      description: '여러 개의 Tabs.Trigger 컴포넌트를 감싸줍니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TABS_LIST,
      },
    },
    value: {
      description:
        'Tabs.Trigger 컴포넌트와 Tabs.Content 컴포넌트를 연결하는 고유한 값',
      table: {
        type: { summary: 'string' },
        category: CATEGORY.TABS_TRIGGER,
      },
    },
    icon: {
      description: 'Tabs.Trigger 컴포넌트 내 아이콘',
      table: {
        type: { summary: 'Icons' },
        category: CATEGORY.TABS_TRIGGER,
      },
    },
    tabContentChildrenProp: {
      name: 'children',
      description: '활성화되었을 때 보여줄 컨텐츠를 감싸줍니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TABS_CONTENT,
      },
    },
    tabContentValueProp: {
      name: 'value',
      description:
        'Tabs.Trigger 컴포넌트와 Tabs.Content 컴포넌트를 연결하는 고유한 값',
      table: {
        type: { summary: 'string' },
        category: CATEGORY.TABS_CONTENT,
      },
    },
  },
  parameters: {
    componentSubtitle: '여러 내용을 한 화면에서 전환하며 볼 수 있는 컴포넌트',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Filter: Story = {
  render: function Render() {
    const [value, setValue] = useState('끄적이는');

    return (
      <Tabs
        type="filter"
        selectedTab={value}
        handleTabSelect={(value) => setValue(value)}
      >
        <Tabs.List>
          <Tabs.Trigger value="끄적이는">끄적이는</Tabs.Trigger>
          <Tabs.Trigger value="참고하는">참고하는</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="끄적이는">
          <div>끄적이는 내용</div>
        </Tabs.Content>
        <Tabs.Content value="참고하는">
          <div>참고하는 내용</div>
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const FilterWithIcon: Story = {
  render: function Render() {
    const [value, setValue] = useState('끄적이는');

    return (
      <Tabs
        type="filter"
        selectedTab={value}
        handleTabSelect={(value) => setValue(value)}
      >
        <Tabs.List>
          <Tabs.Trigger
            value="끄적이는"
            icon={{ default: 'pencilDefault', active: 'pencilActive' }}
          >
            끄적이는
          </Tabs.Trigger>
          <Tabs.Trigger
            value="참고하는"
            icon={{ default: 'templateDefault', active: 'templateActive' }}
          >
            참고하는
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="끄적이는">
          <div>끄적이는 내용</div>
        </Tabs.Content>
        <Tabs.Content value="참고하는">
          <div>참고하는 내용</div>
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const Switcher: Story = {
  render: function Render() {
    const [value, setValue] = useState('끄적이는');

    return (
      <Tabs
        type="switcher"
        selectedTab={value}
        handleTabSelect={(value) => setValue(value)}
      >
        <Tabs.List>
          <Tabs.Trigger value="끄적이는">끄적이는</Tabs.Trigger>
          <Tabs.Trigger value="참고하는">참고하는</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="끄적이는">
          <div>끄적이는 내용</div>
        </Tabs.Content>
        <Tabs.Content value="참고하는">
          <div>참고하는 내용</div>
        </Tabs.Content>
      </Tabs>
    );
  },
};

export const SwitcherWithIcon: Story = {
  render: function Render() {
    const [value, setValue] = useState('끄적이는');

    return (
      <Tabs
        type="switcher"
        selectedTab={value}
        handleTabSelect={(value) => setValue(value)}
      >
        <Tabs.List>
          <Tabs.Trigger
            value="끄적이는"
            icon={{ default: 'pencilDefault', active: 'pencilActive' }}
          >
            끄적이는
          </Tabs.Trigger>
          <Tabs.Trigger
            value="참고하는"
            icon={{ default: 'templateDefault', active: 'templateActive' }}
          >
            참고하는
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="끄적이는">
          <div>끄적이는 내용</div>
        </Tabs.Content>
        <Tabs.Content value="참고하는">
          <div>참고하는 내용</div>
        </Tabs.Content>
      </Tabs>
    );
  },
};
