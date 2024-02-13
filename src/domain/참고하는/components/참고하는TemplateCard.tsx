import { type Folder } from '@api/memoFolder/types';
import Badge from '@components/Badge';
import Button from '@components/Button';
import Card from '@components/Card';
import Icon from '@components/Icon';
import { CATEGORY_COLOR } from '@constants/config';
import * as styles from '@domain/참고하는/components/참고하는TemplateCard.css';
import { CATEGORY } from '@domain/참고하는/models';
import { type Refer } from '@domain/참고하는/types';
import { getNumToK } from '@domain/참고하는/utils';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import FolderDialog from './FolderDialog';

interface 참고하는TemplateCardProps {
  data: Refer;
  memoFolders: Folder[];
}

const 참고하는TemplateCard = ({
  data,
  memoFolders,
}: 참고하는TemplateCardProps) => {
  const { category, subCategory, content, copiedCount, savedCount } = data;

  const { showToast } = useToastStore();

  const categoryNameKr = CATEGORY[category];

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '글이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  return (
    <Card className={styles.wrapper}>
      <Card.Menu>
        <Button onClick={handleCopyClick}>
          <Icon
            icon="copy"
            className={styles.hover}
            color={COLORS['Grey/300']}
          />
        </Button>
        <FolderDialog memoFolders={memoFolders} />
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
