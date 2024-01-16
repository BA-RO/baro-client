import Icon from '@components/Icon';
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
      <Dialog type="small">
        <Dialog.Button onClick={() => {}}>수정하기</Dialog.Button>
        <Dialog.Button onClick={() => {}}>삭제하기</Dialog.Button>
      </Dialog>
    </>
  ),
};

export const MediumFolder: Story = {
  render: () => (
    <>
      <Dialog type="medium">
        <Dialog.Button onClick={() => {}}>
          OOO님의 폴더<span className={styles.badge}>기본</span>
        </Dialog.Button>
        <Dialog.Button onClick={() => {}}>폴더 이름1</Dialog.Button>
        <Dialog.Button onClick={() => {}}>폴더 이름2</Dialog.Button>
        <Dialog.Button onClick={() => {}}>
          <Icon className={styles.addIcon} icon="add" />
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dialog.Button>
      </Dialog>
    </>
  ),
};

export const MediumProfile: Story = {
  render: () => (
    <>
      <Dialog type="medium">
        <Dialog.Title>
          <Icon className={styles.profileIcon} icon="profileDialog" />
          <div className={styles.circle} />
          <span className={styles.iconTitleText}>바로가나다라마바님</span>
        </Dialog.Title>
        <Dialog.Button onClick={() => {}}>
          <Icon className={styles.addIcon} icon="setting" />
          <span className={styles.iconRegularText}>계정 설정</span>
        </Dialog.Button>
        <Dialog.Button onClick={() => {}}>
          <Icon className={styles.addIcon} icon="logout" />
          <span className={styles.iconRegularText}>로그아웃</span>
        </Dialog.Button>
      </Dialog>
    </>
  ),
};
