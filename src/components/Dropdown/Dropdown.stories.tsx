import Icon from '@components/Icon';
import ProfileDialog from '@components/Layout/components/ProfileDialog';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '.';
import * as styles from './style.css';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: '다양한 액션을 제공하는 컴포넌트',
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Small: Story = {
  render: () => (
    <>
      <Dropdown type="small" onClose={action('Dropdown 외부 클릭')}>
        <Dropdown.Button onClick={action('수정하기 클릭')}>
          수정하기
        </Dropdown.Button>
        <Dropdown.Button onClick={action('삭제하기 클릭')}>
          삭제하기
        </Dropdown.Button>
      </Dropdown>
    </>
  ),
};

export const MediumFolder: Story = {
  render: () => (
    <>
      <Dropdown type="medium" onClose={action('Dropdown 외부 클릭')}>
        <Dropdown.Button onClick={action('기본 폴더 클릭')}>
          바로님의 폴더<span className={styles.badge}>기본</span>
        </Dropdown.Button>
        <Dropdown.Button onClick={action('폴더 이름1 클릭')}>
          폴더 이름1
        </Dropdown.Button>
        <Dropdown.Button onClick={action('폴더 이름2 클릭')}>
          폴더 이름2
        </Dropdown.Button>
        <Dropdown.Button onClick={action('새 폴더 만들기 클릭')}>
          <div className={styles.icon}>
            <Icon icon="add" width={20} height={20} />
          </div>
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dropdown.Button>
      </Dropdown>
    </>
  ),
};

export const MediumProfile: Story = {
  render: () => <ProfileDialog closeDialog={action('Dropdown 외부 클릭')} />,
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
