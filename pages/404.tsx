import NotFound from '@assets/images/notFound.svg';
import Layout from '@components/Layout';
import * as styles from '@styles/notFound.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.notFoundPageWrapper}>
        <NotFound />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
