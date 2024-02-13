import Image from 'next/image';
import { type ChangeEvent, useMemo, useState } from 'react';

import Icon from '@components/Icon';
import Layout from '@components/Layout';
import ProfileForm from '@domain/계정설정/Form';
import * as styles from '@domain/계정설정/index.css';
import useExitAccount from '@domain/계정설정/mutations/useExitAccount';
import useGetProfile from '@domain/계정설정/queries/useGetProfile';

const ProfilePage = () => {
  const my = useGetProfile();
  const { mutate: exitAccount } = useExitAccount();
  const [profileImg, setProfileImg] = useState<string>();

  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setProfileImg(`${reader.result}`);
    reader.readAsDataURL(file);
  };

  const profileImage = useMemo(() => {
    if (!my.profileImageUrl) {
      return (
        <Icon
          icon={'profile'}
          width={96}
          height={96}
          wrapperClassName={styles.profileImageWrapper}
          postfix={<Icon icon={'picture'} width={32} height={32} />}
          postfixClassName={styles.profileImagePostfix}
        />
      );
    }

    return (
      <Image
        src={my.profileImageUrl}
        alt="프로필 이미지"
        width={96}
        height={96}
      />
    );
  }, [my.profileImageUrl]);

  return (
    <Layout isShowFooter>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          {profileImg ? (
            <div style={{ position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImg}
                alt="업로드 된 프로필 이미지"
                width={96}
                height={96}
                className={styles.uploadPostImg}
              />
              <div className={styles.profileDim}>
                <Icon icon={'closeActive'} width={32} height={32} />
              </div>
            </div>
          ) : (
            <label htmlFor="profile-input">
              {profileImage}
              <input
                type="file"
                id="profile-input"
                accept="image/*"
                onChange={handleProfileImageChange}
                style={{ display: 'none' }}
              />
            </label>
          )}
        </div>
        <ProfileForm
          name={my.name}
          nickname={my.nickname}
          authType={my.oAuthServiceType}
          email={my.email}
        />
        <div className={styles.textButtonWrapper}>
          {/* TODO: 로그아웃 연결 */}
          <button className={styles.textButton}>로그아웃</button>
          <button className={styles.textButton} onClick={() => exitAccount()}>
            회원탈퇴
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
