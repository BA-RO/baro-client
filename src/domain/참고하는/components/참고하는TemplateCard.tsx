import { useQueryClient } from '@tanstack/react-query';

import { type Folder } from '@api/memoFolder/types';
import Badge from '@components/Badge';
import TooltipButton from '@components/Button/components/TooltipButton';
import Card from '@components/Card';
import FolderDropdown from '@components/Dropdown/FolderDropdown';
import { CATEGORY_COLOR } from '@constants/config';
import * as styles from '@domain/참고하는/components/참고하는TemplateCard.css';
import { CATEGORY } from '@domain/참고하는/models';
import { type ReferContent } from '@domain/참고하는/types';
import { getNumToK } from '@domain/참고하는/utils';
import { useToastStore } from '@stores/toast';

import useCopyTemplate from '../queries/useCopyTemplate';
import useDeleteTemplate from '../queries/useDeleteTemplate';
import useSaveTemplate from '../queries/useSaveTemplate';

interface 참고하는TemplateCardProps {
  data: ReferContent;
  memoFolders: Folder[];
}

const 참고하는TemplateCard = ({
  data,
  memoFolders,
}: 참고하는TemplateCardProps) => {
  const {
    templateId,
    category,
    subCategory,
    content,
    copiedCount,
    savedCount,
    isArchived,
  } = data;

  const { showToast } = useToastStore();

  const queryClient = useQueryClient();
  const { mutateAsync: copyTemplate } = useCopyTemplate();
  const { mutate: saveTemplate } = useSaveTemplate();
  const { mutate: deleteTemplate } = useDeleteTemplate();

  const categoryNameKr = CATEGORY[category];

  const handleCopyClick = async () => {
    await copyTemplate(templateId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['templates'],
        }),
          navigator.clipboard.writeText(content);
        showToast({
          message:
            '글이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
        });
      },
    });
  };

  const handleFolderClick = (memoFolderId: Folder['id']) => {
    saveTemplate({ templateId, memoFolderId });
  };

  const handleUnsave = () => {
    deleteTemplate(templateId);
  };

  return (
    <Card className={styles.wrapper}>
      <Card.Menu>
        <TooltipButton icon="copy" content="복사" onClick={handleCopyClick} />
        <FolderDropdown
          isArchived={isArchived}
          memoFolders={memoFolders}
          onClickFolder={handleFolderClick}
          onClickBookmark={handleUnsave}
        />
      </Card.Menu>
      <Card.Header>
        <Badge color={CATEGORY_COLOR[categoryNameKr]}>{categoryNameKr}</Badge>
        <Badge color="grey">{subCategory}</Badge>
      </Card.Header>
      <Card.Body>{content}</Card.Body>
      <Card.Footer>
        복사 <span>{getNumToK(copiedCount)}</span> • 저장{' '}
        <span>{getNumToK(savedCount)}</span>
      </Card.Footer>
    </Card>
  );
};

export default 참고하는TemplateCard;
