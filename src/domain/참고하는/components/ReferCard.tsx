import Badge from '@components/Badge';
import Button from '@components/Button';
import Card from '@components/Card';
import Icon from '@components/Icon';
import { CATEGORY_COLOR } from '@constants/config';
import { CATEGORY } from '@domain/참고하는/models';
import { type Refer } from '@domain/참고하는/types';

import { getNumToK } from '../utils';
import * as styles from './ReferCard.css';

interface ReferCardProps {
  data: Refer;
}

const ReferCard = ({ data }: ReferCardProps) => {
  const { category, subCategory, content, copiedCount, savedCount } = data;

  const categoryNameKr = CATEGORY[category];

  return (
    <Card className={styles.wrapper}>
      <Card.Menu>
        <Button>
          <Icon icon="copy" className={styles.hover} />
        </Button>
        <Button>
          <Icon icon="bookmarkRefer" className={styles.hover} />
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
    </Card>
  );
};

export default ReferCard;
