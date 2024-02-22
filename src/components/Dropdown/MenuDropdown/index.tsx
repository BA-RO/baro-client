import TooltipButton from '@components/Button/components/TooltipButton';

import Dropdown from '..';

interface MenuDropdownProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const MenuDropdown = ({ onEdit, onDelete }: MenuDropdownProps) => {
  return (
    <Dropdown size="small" placement="bottom-right">
      <Dropdown.Trigger>
        <TooltipButton icon="menu" content="더보기" isDropdown />
      </Dropdown.Trigger>
      <Dropdown.List>
        {onEdit && <Dropdown.Item onClick={onEdit}>수정하기</Dropdown.Item>}
        {onDelete && <Dropdown.Item onClick={onDelete}>삭제하기</Dropdown.Item>}
      </Dropdown.List>
    </Dropdown>
  );
};

export default MenuDropdown;
