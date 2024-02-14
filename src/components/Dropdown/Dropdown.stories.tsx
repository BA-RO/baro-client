import Icon from '@components/Icon';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '.';
import * as styles from './style.css';

const COMPONENT_DESCRIPTION = `
  - \`<Dropdown />\`: 모든 컴포넌트에 대한 컨텍스트와 상태를 제공합니다.
  - \`<Dropdown.Trigger />\`: \`<Dropdown.List />\` 컴포넌트를 활성화하는 컴포넌트입니다. 사용자가 이 컴포넌트를 클릭할 때 Dropdown이 나타납니다.
  - \`<Dropdown.List />\`: Dropdown이 활성화되었을 때 보이는 컴포넌트입니다.
  - \`<Dropdown.Item />\`: Dropdown 항목들을 포함하는 컴포넌트입니다.
`;

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: '다양한 액션을 제공하는 컴포넌트',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Small: Story = {
  args: {
    size: 'small',
    placement: 'bottom-left',
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>버튼</Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Item onClick={action('수정하기 클릭')}>
          수정하기
        </Dropdown.Item>
        <Dropdown.Item onClick={action('삭제하기 클릭')}>
          삭제하기
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  ),
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placement: 'bottom-left',
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>버튼</Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Item onClick={action('수정하기 클릭')}>
          수정하기
        </Dropdown.Item>
        <Dropdown.Item onClick={action('삭제하기 클릭')}>
          삭제하기
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  ),
};

export const FolderDropdown: Story = {
  render: () => (
    <Dropdown size="medium" placement="bottom-center">
      <Dropdown.Trigger>버튼</Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Item onClick={action('기본 폴더 클릭')}>
          바로님의 폴더<span className={styles.badge}>기본</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={action('폴더 이름1 클릭')}>
          폴더 이름1
        </Dropdown.Item>
        <Dropdown.Item onClick={action('폴더 이름2 클릭')}>
          폴더 이름2
        </Dropdown.Item>
        <Dropdown.Item onClick={action('새 폴더 만들기 클릭')}>
          <Icon icon="add" width={20} height={20} />
          <span className={styles.newFolderText}>새 폴더 만들기</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  ),
};

export const UserProfileDropdown: Story = {
  render: () => (
    <Dropdown
      className={styles.dialogWrapper}
      size="medium"
      placement="bottom-right"
    >
      <Dropdown.Trigger className={styles.profile}>
        <Icon icon="profileHeader" width={28} height={28} />
      </Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Title>
          <Icon icon="profileDialog" width={40} height={40} />
          <span className={styles.profileName}>바로님</span>
        </Dropdown.Title>
        <Dropdown.Item onClick={action('계정 설정 클릭')}>
          <Icon icon="setting" width={20} height={20} />
          <span className={styles.buttonText}>계정 설정</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={action('로그아웃 클릭')}>
          <Icon icon="logout" width={20} height={20} />
          <span className={styles.buttonText}>로그아웃</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  ),
};
