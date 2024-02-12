import { useRef, useState } from 'react';

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

  const bookmarkRef = useRef<HTMLButtonElement>(null);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const closeDialog = () => setIsShowDialog(false);

  const categoryNameKr = CATEGORY[category];

  const handleBookmarkClick = () => setIsShowDialog(!isShowDialog);

  return (
    <Card className={styles.wrapper}>
      <Card.Menu>
        <Button>
          <Icon
            icon="copy"
            className={styles.hover}
            color={COLORS['Grey/300']}
          />
        </Button>
        <Button onClick={handleBookmarkClick} ref={bookmarkRef}>
          <Icon
            icon="bookmarkRefer"
            className={styles.hover}
            color={COLORS['Grey/300']}
          />
        </Button>
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
      {isShowDialog && (
        <FolderDialog
          closeDialog={closeDialog}
          memoFolders={memoFolders}
          ref={bookmarkRef}
        />
      )}
    </Card>
  );
};

export default 참고하는TemplateCard;
