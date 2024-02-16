import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import FilterButtons from '@domain/참고하는/components/FilterButtons';
import FilterHeader from '@domain/참고하는/components/FilterHeader';
import * as styles from '@domain/참고하는/components/ReferTab.css';
import 참고하는TemplateCard from '@domain/참고하는/components/참고하는TemplateCard';
import { type Category, type FilterButton } from '@domain/참고하는/types';
import useGetMemoFolders from '@queries/useGetMemoFolders';

import useTemplate from '../queries/useTemplates';

const 참고하는TabContent = () => {
  const { data: memoFoldersData } = useGetMemoFolders();

  const [selectedFilterHeader, setSelectedFilterHeader] =
    useState<Category>('ask');
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<FilterButton>('new');

  const { data: templates } = useTemplate({
    category: selectedFilterHeader,
    sort: selectedFilterButton,
  });

  const handleFilterHeaderSelect = (type: Category) => () =>
    setSelectedFilterHeader(type);

  const handleFilterButtonSelect = (type: FilterButton) => () =>
    setSelectedFilterButton(type);

  if (!templates) return null;

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
      <ResponsiveMasonry columnsCountBreakPoints={{ 768: 2, 1080: 3 }}>
        <Masonry className={styles.referCardsWrapper} gutter="16px">
          {templates?.content.map((template) => (
            <참고하는TemplateCard
              key={template.templateId}
              data={template}
              memoFolders={memoFoldersData}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default 참고하는TabContent;
