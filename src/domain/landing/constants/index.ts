import { type ReferContent } from '@domain/참고하는/types';

export const landingFirstRow: ReferContent[] = [
  {
    templateId: 0,
    category: 'ask',
    subCategory: '자료 확인/검토',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n현재 [업무명]에 대한 작업을 진행 중입니다. 관련하여 첨부된 [자료 이름]를 [날짜]까지 확인 후 피드백 주시면 작업을 진행해 나가는 데 큰 도움이 될 것 같습니다.\n시간 괜찮으실 때 확인 부탁드립니다. 회신 기다리겠습니다. 감사합니다.',
    savedCount: 235,
    copiedCount: 1200,
    isArchived: false,
  },
  {
    templateId: 1,
    category: 'report',
    subCategory: '지각/결석',
    content:
      '안녕하세요, [본인 이름] 입니다.\n[사유]로 인해 [날짜] 부재 중입니다. [연락, 메일 또는 메신저]로 관련된 내용 남겨주시면 복귀 후 회신드리겠습니다.\n부재 기간 중 문의가 있으시다면 [업무명]에 대한 내용은 [상사, 동료 또는 후배 이름]께 부탁드립니다.',
    savedCount: 96,
    copiedCount: 582,
    isArchived: false,
  },
  {
    templateId: 2,
    category: 'celebrate',
    subCategory: '회의',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n생신 축하드립니다! 항상 따뜻한 마음으로 팀원들을 잘 챙겨주시고, 저희를 이끌어주셔서 보다 편하게 근무할 수 있었습니다.\n오늘은 소중한 사람들과 함께 행복한 시간을 보내시길 바라겠습니다. 다시 한번 생신 축하드립니다!',
    savedCount: 195,
    copiedCount: 127,
    isArchived: false,
  },
  {
    templateId: 3,
    category: 'thank',
    subCategory: '퇴사/이직',
    content:
      '안녕하세요, 동료 여러분. 다소 안타깝고 슬픈 소식을 전달하게 되어 이렇게 [연락, 메일 또는 메신저] 드립니다.\n[퇴사/이직일]을 기점으로 [회사명]을 떠나게 되었습니다.\n지난 시간 동안 보여주신 따뜻한 지원과 협조에 감사드리며, 앞으로의 여러분의 성공과 행운을 진심으로 기원합니다. 늘 건강하시고 행복하세요.',
    savedCount: 983,
    copiedCount: 1100,
    isArchived: false,
  },
  {
    templateId: 4,
    category: 'comfort',
    subCategory: '조문',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n가슴 아픈 비보에 깊은 애도를 표합니다. 찾아뵙지 못해서 진심으로 죄송합니다.\n마음 잘 추스르시고 고인의 마지막 가시는 길 배웅 잘해 드리길 바랍니다. 혹시 필요한 일이 있다면 언제든지 편하게 말씀 주세요. 삼가 고인의 명복을 빕니다.',
    savedCount: 1000,
    copiedCount: 1200000,
    isArchived: false,
  },
  {
    templateId: 5,
    category: 'regard',
    subCategory: '설날',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n즐거운 명절 설날이네요. 새해에는 뜻하는 바를 모두 이루시고, 즐거운 일들이 많은 풍요로운 한 해되시길 기원합니다.\n새해 복 많이 받으시고, 행복한 설 연휴 보내시길 바랍니다.',
    savedCount: 215,
    copiedCount: 486,
    isArchived: false,
  },
  {
    templateId: 6,
    category: 'etc',
    subCategory: '공지',
    content:
      '[상대이름] [직함] 결혼 소식을 전합니다!\n두 사람이 행복한 가정을 이룰 수 있도록 많은 축복과 격려 부탁드립니다.\n일시 : [날짜]\n장소 : [장소]\n모바일 청첩장 : [URL]',
    savedCount: 37,
    copiedCount: 82,
    isArchived: false,
  },
];

export const landingSecondRow: ReferContent[] = [
  {
    templateId: 0,
    category: 'comfort',
    subCategory: '입원',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n갑작스러운 소식에 많이 놀랐습니다. 저희 팀원 모두 [상대 이름]님의 빠른 회복을 기원하고 있습니다.\n혹시 제가 도와드릴 수 있는 일이 있다면 말씀해주세요.\n건강한 모습으로 다시 뵙겠습니다. 감사합니다.',
    savedCount: 195,
    copiedCount: 127,
    isArchived: false,
  },
  {
    templateId: 1,
    category: 'regard',
    subCategory: '크리스마스/연말',
    content:
      '안녕하세요, [팀 이름] 팀 여러분.\n어느새 올해의 마지막 공휴일인 크리스마스를 맞이하였네요. 행복하고 따듯한 크리스마스 보내시고, 더 건강하고 더 즐거운 새해 맞이하시길 기원합니다.\n남은 12월 마무리 잘 하시길 바랍니다.',
    savedCount: 983,
    copiedCount: 1100,
    isArchived: false,
  },
  {
    templateId: 2,
    category: 'etc',
    subCategory: '칭찬',
    content:
      '[상대 이름]님은 일 처리에 속도감이 있습니다. 업무 요청 시 빠른 공유 및 적극적인 의견 수렴으로 업무가 원활히 진행되도록 노력하시는 부분이 인상적이었습니다. 이에 과제에 대하여 원활한 피드백이 이루어질 수 있는데 이바지 해주셨습니다.감사합니다.',
    savedCount: 45,
    copiedCount: 81,
    isArchived: false,
  },
  {
    templateId: 3,
    category: 'ask',
    subCategory: '정보/권한 요청',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n현재 [업무명] 작업을 진행 중인데, [요청 정보/권한]이 필요해 [메일/메신저/연락]드립니다.\n혹시 가능하다면, [요청 정보/권한]을 제공받을 수 있을까요? 업무를 진행하는 데 꼭 필요한 부분이기에 요청드립니다. 혹시 문제가 있다면 알려주세요.',
    savedCount: 1900,
    copiedCount: 120000,
    isArchived: false,
  },
  {
    templateId: 4,
    category: 'report',
    subCategory: '지각/결석',
    content:
      '안녕하세요, [상대 이름] [직함]님. 아래와 같은 이유로 휴가를 신청하고자 합니다.\n신청 일자 : [날짜]\n사유 : [사유]\n근무하는 동안 회사 업무에 지장이 없도록 미리 일정 조율할 예정입니다. 휴가 신청 내용 확인 부탁드립니다.',
    savedCount: 272,
    copiedCount: 1200,
    isArchived: false,
  },
  {
    templateId: 5,
    category: 'celebrate',
    subCategory: '생일',
    content:
      '안녕하세요, [상대 이름] [직함]님. 생신 축하드립니다!\n항상 따뜻한 마음으로 팀원들을 잘 챙겨주시고, 저희를 이끌어주셔서 보다 편하게 근무할 수 있었습니다. 다소 제 표현력이 부족할 수 있지만, 항상 마음 깊숙이 감사함을 느끼고 있습니다. 오늘은 소중한 사람들과 함께 행복한 시간을 보내시길 바라겠습니다.',
    savedCount: 56,
    copiedCount: 375,
    isArchived: false,
  },
  {
    templateId: 6,
    category: 'thank',
    subCategory: '병문안',
    content:
      '안녕하세요, [상대 이름] [직함]님.\n최근 몸이 좋지 않아 병원에 입원하게 되어 회사 업무에 지장을 드린 것 같아 죄송할 따름입니다. 그럼에도 배려해 주시고, 병문안까지 와주셔서 진심으로 감사합니다.\n보여주신 관심에 보답하고자 열심히 재활에 임하여 하루빨리 복귀할 수 있도록 노력하겠습니다.',
    savedCount: 211,
    copiedCount: 1200,
    isArchived: false,
  },
];
