import { NotionRenderer } from 'react-notion-x';
import { NotionAPI } from 'notion-client';
import { type ExtendedRecordMap } from 'notion-types';

import Layout from '@components/Layout';

interface UseProps {
  blockMap: ExtendedRecordMap;
}

const Use = ({ blockMap }: UseProps) => {
  return (
    <Layout>
      <NotionRenderer
        recordMap={blockMap}
        fullPage
        darkMode={false}
        disableHeader
      />
    </Layout>
  );
};

export default Use;

export const getStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage('50e74a36bd484d888c975f111488a6df');

  return {
    props: {
      blockMap: recordMap,
    },
  };
};
