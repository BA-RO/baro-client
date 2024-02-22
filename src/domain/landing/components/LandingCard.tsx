import Badge from '@components/Badge';
import Card from '@components/Card';
import { CATEGORY_COLOR } from '@constants/config';
import { CATEGORY } from '@domain/참고하는/models';
import { type ReferContent } from '@domain/참고하는/types';
import { formatNumberToCompact } from '@domain/참고하는/utils';

import * as styles from '../style.css';

interface LandingCardProps {
  data: ReferContent;
}

const LandingCard = ({ data }: LandingCardProps) => {
  const { category, subCategory, content, copiedCount, savedCount } = data;

  const categoryNameKr = CATEGORY[category];

  return (
    <Card className={styles.landingCardwrapper}>
      <Card.Header>
        <Badge color={CATEGORY_COLOR[categoryNameKr]}>{categoryNameKr}</Badge>
        <Badge color="grey">{subCategory}</Badge>
      </Card.Header>
      <Card.Body className={styles.cardBody}>{content}</Card.Body>
      <Card.Footer>
        복사 <span>{formatNumberToCompact(copiedCount)}</span> • 저장{' '}
        <span>{formatNumberToCompact(savedCount)}</span>
      </Card.Footer>
    </Card>
  );
};

export default LandingCard;
