import Message from '@assets/images/message.svg';
import Card from '@components/Card';
import DayMessage from '@components/DayMessage';
import Icon from '@components/Icon';
import Responsive from '@components/Responsive';

import * as styles from './style.css';

const EXAMPLE_CARD = [
  {
    title: '자료 확인 요청',
    description:
      '안녕하세요, 바로님. 현재 baro 추천 상품 팝업 프로젝트에 대한 세부 기획 작업 진행 중입니다. 관련하여 첨부된 pdf 파일을 차주 목요일까지 확인 후 피드백 주시면 프로젝트 진행에 큰 도움이 될 것 같습니다. 감사합니다.',
  },
  {
    title: '권한 요청',
    description:
      '안녕하세요, 바로님. 다름이 아니라 업무 진행을 위해 JIRA 권한을 받고자 하는데 시간 괜찮으실 때 권한 추가해 주실 수 있을까요?',
  },
  {
    title: '일정 참석 요청',
    description:
      '바로님, 최종으로 업무 산출물 공유 드리기 전에 여쭤보고 싶은 마이너한 부분들이 있습니다. 혹시 시간 괜찮으실 때 논의 가능하실까요?',
  },
];

interface GuideProps {
  hasMemo: boolean;
}

const Guide = ({ hasMemo }: GuideProps) => {
  return (
    <>
      {hasMemo ? (
        <p className={styles.guide}>
          <span className={styles.guideText}>
            끄적인 글은 일주일 후에 사라져요! 오래 간직하고 싶다면 저장해주세요
          </span>
          <Icon icon="smileFace" width={20} height={20} />
        </p>
      ) : (
        <div className={styles.newMemberGuide}>
          <div className={styles.guideImage}>
            <Message />
          </div>
          <DayMessage>끄적이는 예시</DayMessage>
          <Responsive>
            {EXAMPLE_CARD.map(({ title, description }) => (
              <Card key={title} color="grey">
                <Card.Header>{title}</Card.Header>
                <Card.Body>{description}</Card.Body>
              </Card>
            ))}
          </Responsive>
        </div>
      )}
    </>
  );
};

export default Guide;
