/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Icon from '@components/Icon';

import * as styles from './style.css';

interface ExitModalListItemProps {
  isChecked: boolean;
  content: string;
  onContentClick: (cause: string) => void;
}

const ExitModalListItem = ({
  isChecked,
  content,
  onContentClick,
}: ExitModalListItemProps) => {
  return (
    <li
      className={styles.listItem({ selected: isChecked })}
      onClick={() => onContentClick(content)}
    >
      <Icon icon={isChecked ? 'checkBoxActive' : 'checkBox'} />
      <p className={styles.listItemText}>{content}</p>
    </li>
  );
};

export default ExitModalListItem;
