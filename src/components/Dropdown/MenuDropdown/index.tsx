import Icon from '@components/Icon';
import { COLORS } from '@styles/tokens';

import Dropdown from '..';

interface MenuDropdownProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const MenuDropdown = ({ onEdit, onDelete }: MenuDropdownProps) => {
  return (
    <Dropdown size="small" placement="bottom-right">
      <Dropdown.Trigger>
        <Icon icon="menu" color={COLORS['Grey/300']} />
      </Dropdown.Trigger>
      <Dropdown.List>
        {onEdit && <Dropdown.Item onClick={onEdit}>수정하기</Dropdown.Item>}
        {onDelete && <Dropdown.Item onClick={onDelete}>삭제하기</Dropdown.Item>}
      </Dropdown.List>
    </Dropdown>
  );
};

export default MenuDropdown;
