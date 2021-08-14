import Layout from '../components/layout';
import Search from '../components/search';
import CardList from '../components/cardList';
import Data from '../../sample.json';
import Pagination from '../components/pagination';
import { totalPagesCount, PER_PAGE_FIRST } from '../utils/pagination';

const Home = ({ locale, data }) => {
  const pagesCount = totalPagesCount(data?.totalArticles ?? 0);

  return (
    <Layout locale={locale}>
      <div className="p-6">
        <Search />
        <CardList data={data} />
        <Pagination pagesCount={pagesCount} />
      </div>
    </Layout>
  );
};

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      locale: locale ?? 'en',
      data: Data ?? {},
    },
  };
};

export default Home;

// card list box
// pagination box
