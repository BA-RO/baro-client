import { useState } from 'react';

import Icon from '@components/Icon';
import Layout from '@components/Layout';
import ProfileForm from '@domain/계정설정/Form';
import * as styles from '@domain/계정설정/index.css';

const ProfilePage = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  console.log(isProfileHovered);

  return (
    <Layout isShowFooter>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          <Icon
            icon={'profile'}
            width={96}
            height={96}
            wrapperClassName={styles.profileImageWrapper}
            postfix={<Icon icon={'picture'} width={32} height={32} />}
            postfixClassName={styles.profileImagePostfix}
            onHover={() => setIsProfileHovered(true)}
          />

          {isProfileHovered && (
            <div
              className={styles.profileDim}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              <Icon icon={'close'} color="white" width={32} height={32} />
            </div>
          )}
        </div>
        <ProfileForm />
        <div className={styles.textButtonWrapper}>
          <button className={styles.textButton}>로그아웃</button>
          <button className={styles.textButton}>회원탈퇴</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
