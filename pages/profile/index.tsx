import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

import Icon from '@components/Icon';
import Layout from '@components/Layout';
import { ROUTES } from '@constants/routes';
import ExitModal from '@domain/계정설정/components/ExitModal';
import ProfileForm from '@domain/계정설정/components/Form';
import * as styles from '@domain/계정설정/index.css';
import useExitAccount from '@domain/계정설정/mutations/useExitAccount';
import useUpdateProfileImage from '@domain/계정설정/mutations/useUpdateProfileImage';
import useGetProfile from '@domain/계정설정/queries/useGetProfile';
import useModal from '@hooks/useModal';
import { STORAGE_KEY } from '@models/storage';

const ProfilePage = () => {
  const router = useRouter();
  const my = useGetProfile();
  const exitModalProps = useModal();
  const { mutate: exitAccount } = useExitAccount();
  const { updateImage: updateProfileImage, deleteImage: deleteProfileImage } =
    useUpdateProfileImage();
  const [profileImg, setProfileImg] = useState<string>();
  const [isHover, setIsHover] = useState(false);
  const [exitCause, setExitCause] = useState<string | null>(null);

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

  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setProfileImg(`${reader.result}`);
    reader.readAsDataURL(file);

    setTimeout(() => {
      updateProfileImage.mutate(`${reader.result}`);
    }, 10);
  };

  const handleDeleteUploadedImage = () => {
    setProfileImg(undefined);
    deleteProfileImage.mutate();
  };

  return (
    <Layout isFooter>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          {profileImg ? (
            <div
              style={{ position: 'relative' }}
              onBlur={() => setIsHover(false)}
            >
              <Image
                src={profileImg}
                alt="업로드 된 프로필 이미지"
                width={96}
                height={96}
                className={styles.uploadPostImg}
                onMouseEnter={() => setIsHover(true)}
              />

              {isHover ? (
                <div
                  className={styles.profileDim}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <button onClick={handleDeleteUploadedImage}>
                    <Icon icon={'closeActive'} width={32} height={32} />
                  </button>
                </div>
              ) : null}
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
          <button
            className={styles.textButtonTextWrapper}
            onClick={() => {
              localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
              Cookies.remove(STORAGE_KEY.REFRESH_TOKEN);
              router.push(ROUTES.LANDING);
            }}
          >
            <span className={styles.textButton}>로그아웃</span>
          </button>
          <button
            className={styles.textButtonTextWrapper}
            onClick={exitModalProps.handleOpen}
          >
            <span className={styles.textButton}>회원탈퇴</span>
          </button>
        </div>
      </div>

      {exitModalProps.isOpen && (
        <ExitModal
          selectCause={exitCause}
          exitMutate={exitAccount}
          onContentClick={(cause: string) => setExitCause(cause)}
          onModalCloseClick={exitModalProps.handleClose}
        />
      )}
    </Layout>
  );
};

export default ProfilePage;
