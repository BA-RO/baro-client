import { NotionRenderer } from 'react-notion-x';
import { NotionAPI } from 'notion-client';
import { type ExtendedRecordMap } from 'notion-types';

import Layout from '@components/Layout';

interface PrivacyProps {
  blockMap: ExtendedRecordMap;
}

const Privacy = ({ blockMap }: PrivacyProps) => {
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

export default Privacy;

export const getStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage('045e6bc33a544855a4a18c839ff746cc');

  return {
    props: {
      blockMap: recordMap,
    },
  };
};
