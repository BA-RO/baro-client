import * as styles from './Navigation.css';
import * as Tab from '@/src/components/Tab/Tab';
import { ROUTES } from '@/src/constants/route';

const TABS = [
  { path: ROUTES.WRITING, text: '끄적이는' },
  { path: ROUTES.REFERENCE, text: '참고하는' },
];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {/* 로고 네비게이션 추가 */}
      <Tab.List>
        {TABS.map((tab) => (
          <Tab.Item key={tab.path} path={tab.path}>
            {tab.text}
          </Tab.Item>
        ))}
      </Tab.List>
    </nav>
  );
};

export default Navigation;
