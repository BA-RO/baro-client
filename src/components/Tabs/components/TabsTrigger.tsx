import { type PropsWithChildren } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Icon from '@components/Icon';
import { type Icons } from '@constants/icon';

import { useTabsContext } from '..';
import * as styles from '../style.css';

export interface TabsTriggerProps {
  value: string;
  icon?: { default: Icons; active: Icons };
}

const TabsTrigger = ({
  children,
  value,
  icon,
}: PropsWithChildren<TabsTriggerProps>) => {
  const { type, selectedTab, onSelectTab } = useTabsContext();

  const isActive = selectedTab === value;
  const isActiveFilterTab = isActive && type === 'filter';
  const isActiveSwitcherTab = isActive && type === 'switcher';

  return (
    <li className={styles.tabItem}>
      <button
        className={clsx(
          styles.tabsTrigger({ type }),
          isActiveFilterTab && styles.isActiveFilter,
          isActiveSwitcherTab && styles.isActiveSwitcher,
        )}
        onClick={() => onSelectTab(value)}
      >
        {icon &&
          (!isActive ? (
            <Icon icon={icon?.default} />
          ) : (
            <Icon icon={icon?.active} />
          ))}
        {children}
      </button>
      {isActiveFilterTab && (
        <motion.div className={styles.underline} layoutId="underline" />
      )}
      {isActiveSwitcherTab && <div className={styles.handle} />}
    </li>
  );
};

export default TabsTrigger;
