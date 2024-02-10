import Layout from '@components/Layout';
import ProfileForm from '@domain/계정설정/Form';
import * as styles from '@domain/계정설정/index.css';

const ProfilePage = () => {
  return (
    <Layout isShowFooter>
      <div className={styles.container}>
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
