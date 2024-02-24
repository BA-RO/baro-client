import { type Folder } from '@api/memoFolder/types';
import Button from '@components/Button';
import TooltipButton from '@components/Button/components/TooltipButton';
import Dropdown from '@components/Dropdown';
import Icon from '@components/Icon';
import useGetMyProfile from '@queries/useGetMyProfile';
import { useModalStore } from '@stores/modal';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

interface FolderDropdownProps {
  isArchived: boolean;
  memoFolders: Folder[];
  onClickFolder: (id: Folder['id']) => void;
  onClickBookmark?: () => void;
}

const FolderDropdown = ({
  isArchived,
  memoFolders,
  onClickFolder,
  onClickBookmark,
}: FolderDropdownProps) => {
  const { openModal } = useModalStore();

  const { data } = useGetMyProfile();

  if (isArchived) {
    return (
      <>
        {onClickBookmark ? (
          <Button onClick={onClickBookmark} className={styles.deleteBookmark}>
            <Icon icon="bookmark" color={COLORS['Blue/Default']} />
          </Button>
        ) : (
          <Icon icon="bookmark" color={COLORS['Blue/Default']} />
        )}
      </>
    );
  }

  return (
    <Dropdown size="medium" placement="bottom-center">
      <Dropdown.Trigger>
        <TooltipButton icon="bookmark" content="저장" isDropdown />
      </Dropdown.Trigger>
      <Dropdown.List>
        {memoFolders.map(({ id, name }) => (
          <Dropdown.Item key={id} onClick={() => onClickFolder(id)}>
            {name === '기본' ? (
              <span>
                {data?.nickname}님의 폴더
                <span className={styles.badge}>기본</span>
              </span>
            ) : (
              <span>{name}</span>
            )}
          </Dropdown.Item>
        ))}
        <Dropdown.Item onClick={() => openModal('makeFolder')}>
          <Icon icon="add" width={20} height={20} />
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default FolderDropdown;

export type FolderDropdownType = Parameters<typeof FolderDropdown>[0];
