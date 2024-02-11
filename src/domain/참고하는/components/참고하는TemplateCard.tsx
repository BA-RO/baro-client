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

interface 참고하는TemplateCardProps {
  data: Refer;
}

const 참고하는TemplateCard = ({ data }: 참고하는TemplateCardProps) => {
  const { category, subCategory, content, copiedCount, savedCount } = data;

  const categoryNameKr = CATEGORY[category];

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
        <Button>
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
    </Card>
  );
};

export default 참고하는TemplateCard;
