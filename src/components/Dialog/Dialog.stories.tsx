import Icon from '@components/Icon';
import ProfileDialog from '@components/Layout/components/ProfileDialog';
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
      <Dialog type="small" closeDialog={() => {}}>
        <Dialog.Button onClick={() => {}}>수정하기</Dialog.Button>
        <Dialog.Button onClick={() => {}}>삭제하기</Dialog.Button>
      </Dialog>
    </>
  ),
};

export const MediumFolder: Story = {
  render: () => (
    <>
      <Dialog type="medium" closeDialog={() => {}}>
        <Dialog.Button onClick={() => {}}>
          OOO님의 폴더<span className={styles.badge}>기본</span>
        </Dialog.Button>
        <Dialog.Button onClick={() => {}}>폴더 이름1</Dialog.Button>
        <Dialog.Button onClick={() => {}}>폴더 이름2</Dialog.Button>
        <Dialog.Button onClick={() => {}}>
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
  render: () => <ProfileDialog closeDialog={() => {}} />,
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
