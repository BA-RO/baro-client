import { type Folder } from '@api/memoFolder/types';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Icon from '@components/Icon';
import * as styles from '@domain/참고하는/components/FolderDialog.css';
import { useModalStore } from '@stores/modal';
import { COLORS } from '@styles/tokens';

import useDeleteTemplate from '../queries/useDeleteTemplate';
import useSaveTemplate from '../queries/useSaveTemplate';
import { type ReferContent } from '../types';

interface FolderDialogProps
  extends Pick<ReferContent, 'templateId' | 'isArchived'> {
  memoFolders: Folder[];
}

const FolderDialog = ({
  templateId,
  isArchived,
  memoFolders,
}: FolderDialogProps) => {
  const { openModal } = useModalStore();
  const { mutateAsync: saveTemplate } = useSaveTemplate();
  const { mutateAsync: deleteTemplate } = useDeleteTemplate();

  const handleFolderClick = (memoFolderId: number) => async () =>
    await saveTemplate({ templateId, memoFolderId });

  const handleDeleteTemplateClick = async () => {
    await deleteTemplate(templateId);
  };

  if (isArchived)
    return (
      <Button onClick={handleDeleteTemplateClick}>
        <Icon
          icon="bookmarkRefer"
          className={styles.hoverBlue}
          color={COLORS['Grey/300']}
        />
      </Button>
    );

  return (
    <Dropdown size="medium" placement="bottom-center">
      <Dropdown.Trigger>
        <Icon
          icon="bookmarkRefer"
          className={styles.hover}
          color={COLORS['Grey/300']}
        />
      </Dropdown.Trigger>
      <Dropdown.List>
        {memoFolders.map(({ id, name }) => {
          if (name === '기본')
            return (
              <Dropdown.Item key={id} onClick={handleFolderClick(id)}>
                OOO님의 폴더<span className={styles.badge}>기본</span>
              </Dropdown.Item>
            );
          return (
            <Dropdown.Item key={id} onClick={handleFolderClick(id)}>
              {name}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Item onClick={() => openModal('makeFolder')}>
          <div className={styles.icon}>
            <Icon icon="add" width={20} height={20} />
          </div>
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default FolderDialog;
