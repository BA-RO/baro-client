import Image from 'next/image';
import clsx from 'clsx';

import FifthLanding from '@assets/images/fifthLanding.png';
import FourthLanding from '@assets/images/fourthLanding.png';
import SecondLanding from '@assets/images/secondLanding.png';
import ThirdLanding from '@assets/images/thirdLanding.png';
import Icon from '@components/Icon';
import Layout from '@components/Layout';
import { landingFirstRow, landingSecondRow } from '@domain/landing/constants';
import { gmarket } from '@styles/font';

import LandingCard from './components/LandingCard';
import * as styles from './style.css';

const Landing = () => {
  return (
    <Layout isFooter>
      <div className={styles.firstImageWrapper}>
        <div className={styles.titleWrapper}>
          <div>
            <span className={clsx(styles.leftTitle, gmarket.className)}>
              바로 잡아 바로 쓰는,
            </span>
            <div className={styles.logoWrapper}>
              <Icon icon="logo235" width={235} height={76} />
            </div>
          </div>
          <div>
            <div className={styles.rightTextWrapper}>
              <div className={styles.iconWrapper}>
                <Icon icon="sadFace" width={32} height={32} />
              </div>
              <span className={styles.rightText}>
                혹시 상사에게, 동료에게 보낼 글을 쓰기가 막막해서 어려움을 겪은
                적이 있으신가요?
              </span>
            </div>
            <div className={styles.rightTextWrapper}>
              <div className={styles.iconWrapper}>
                <Icon icon="smileFace" width={32} height={32} />
              </div>
              <span className={styles.rightText}>
                바로는 글을 쉽고, 빠르게,
                <br /> 바로 작성할 수 있도록 도와줘요!
              </span>
            </div>
          </div>
        </div>
        <div className={styles.firstRowWrapper}>
          <ul className={styles.firstRowTrack}>
            {landingFirstRow.map((data) => (
              <LandingCard key={data.templateId} data={data} />
            ))}
            {landingFirstRow.map((data) => (
              <LandingCard key={data.templateId} data={data} />
            ))}
          </ul>
        </div>
        <div className={styles.secondRowWrapper}>
          <ul className={styles.seconRowTrack}>
            {landingSecondRow.map((data) => (
              <LandingCard key={data.templateId} data={data} />
            ))}
            {landingSecondRow.map((data) => (
              <LandingCard key={data.templateId} data={data} />
            ))}
          </ul>
        </div>
      </div>
      <Image src={SecondLanding} alt="" className={styles.ladingImage} />
      <Image src={ThirdLanding} alt="" className={styles.ladingImage} />
      <Image src={FourthLanding} alt="" className={styles.ladingImage} />
      <Image src={FifthLanding} alt="" className={styles.ladingImage} />
    </Layout>
  );
};

export default Landing;
