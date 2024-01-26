import Icon from '@components/Icon';
import ProfileDialog from '@components/Layout/components/ProfileDialog';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Dialog from '.';
import * as styles from './style.css';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    componentSubtitle: '다양한 액션을 제공하는 컴포넌트',
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Small: Story = {
  render: () => (
    <>
      <Dialog type="small" closeDialog={action('Dialog 외부 클릭')}>
        <Dialog.Button onClick={action('수정하기 클릭')}>
          수정하기
        </Dialog.Button>
        <Dialog.Button onClick={action('삭제하기 클릭')}>
          삭제하기
        </Dialog.Button>
      </Dialog>
    </>
  ),
};

export const MediumFolder: Story = {
  render: () => (
    <>
      <Dialog type="medium" closeDialog={action('Dialog 외부 클릭')}>
        <Dialog.Button onClick={action('기본 폴더 클릭')}>
          OOO님의 폴더<span className={styles.badge}>기본</span>
        </Dialog.Button>
        <Dialog.Button onClick={action('폴더 이름1 클릭')}>
          폴더 이름1
        </Dialog.Button>
        <Dialog.Button onClick={action('폴더 이름2 클릭')}>
          폴더 이름2
        </Dialog.Button>
        <Dialog.Button onClick={action('새 폴더 만들기 클릭')}>
          <div className={styles.icon}>
            <Icon icon="add" width={20} height={20} />
          </div>
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dialog.Button>
      </Dialog>
    </>
  ),
};

export const MediumProfile: Story = {
  render: () => <ProfileDialog closeDialog={action('Dialog 외부 클릭')} />,
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
