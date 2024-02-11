import { useState } from 'react';

import FilterButtons from '@domain/참고하는/components/FilterButtons';
import FilterHeader from '@domain/참고하는/components/FilterHeader';
import * as styles from '@domain/참고하는/components/ReferTab.css';
import 참고하는TemplateCard from '@domain/참고하는/components/참고하는TemplateCard';
import {
  type Category,
  type FilterButton,
  type Refer,
} from '@domain/참고하는/types';

// - `ASK`  (부탁하기)
// - `REPORT`  (보고하기)
// - `CELEBRATE` (축하하기)
// - `THANK` (감사 전하기)
// - `COMFORT` (위로하기)
// - `REGARD` (안부 전하기
// - `ETC` (기타)
const datas: Refer[] = [
  {
    templateId: 0,
    category: 'ask',
    subCategory: '퇴사/이직',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 1200,
    copiedCount: 300,
  },
  {
    templateId: 1,
    category: 'report',
    subCategory: '자료 확인/검토',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
  {
    templateId: 2,
    category: 'celebrate',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 10000,
    copiedCount: 12,
  },
  {
    templateId: 3,
    category: 'thank',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 15,
    copiedCount: 19,
  },
  {
    templateId: 4,
    category: 'comfort',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
  {
    templateId: 5,
    category: 'regard',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
  {
    templateId: 6,
    category: 'ask',
    subCategory: '퇴사/이직',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 1200,
    copiedCount: 300,
  },
  {
    templateId: 7,
    category: 'report',
    subCategory: '자료 확인/검토',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
  {
    templateId: 8,
    category: 'celebrate',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 10000,
    copiedCount: 12,
  },
  {
    templateId: 9,
    category: 'thank',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 15,
    copiedCount: 19,
  },
  {
    templateId: 10,
    category: 'comfort',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
  {
    templateId: 11,
    category: 'regard',
    subCategory: '회의',
    content:
      '끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 끄적이는, 참고하는 포함하여 최대 500자까지 노출 가능합니다. 텍스트 박스 입니다. 단어 마디로 끊어지게 구현해주세요....ㅎㅎㅎ',
    savedCount: 0,
    copiedCount: 0,
  },
];

const 참고하는TabContent = () => {
  const [selectedFilterHeader, setSelectedFilterHeader] =
    useState<Category>('ask');
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<FilterButton>('NEW');

  const handleFilterHeaderSelect = (type: Category) => () =>
    setSelectedFilterHeader(type);

  const handleFilterButtonSelect = (type: FilterButton) => () =>
    setSelectedFilterButton(type);

  return (
    <div className={styles.referPageTabWrapper}>
      <FilterHeader
        selectedFilterHeader={selectedFilterHeader}
        handleFilterHeaderSelect={handleFilterHeaderSelect}
      />
      <FilterButtons
        selectedFilterButton={selectedFilterButton}
        handleFilterButtonSelect={handleFilterButtonSelect}
      />
      <ul className={styles.referCardsWrapper}>
        {datas.map((data) => (
          <참고하는TemplateCard key={data.templateId} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default 참고하는TabContent;
