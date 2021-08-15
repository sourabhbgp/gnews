import Layout from '../components/layout';
import Search from '../components/search';
import CardList from '../components/cardList';
import Pagination from '../components/pagination';
import { totalPagesCount, PER_PAGE_FIRST } from '../utils/pagination';
import { getRequest } from '../requests';
import query from 'qs';

const Home = ({ locale, totalArticles, articles }) => {
  const pagesCount = totalPagesCount(totalArticles);

  return (
    <Layout locale={locale}>
      <div className="p-6">
        <Search />
        <CardList totalArticles={totalArticles} articles={articles} />
        <Pagination pagesCount={pagesCount} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const queryString = query.stringify({
    token: process.env.NEXT_PUBLIC_TOKEN,
    max: PER_PAGE_FIRST,
    lang: locale,
  });

  const { data } = await getRequest(`?${queryString}`);
  return {
    props: {
      locale: locale ?? 'en',
      totalArticles: data?.totalArticles ?? 0,
      articles: data?.articles ?? [],
    },

    // error handling remained

    /**
     * Revalidate means that if a new request comes to server, then every 5 min it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 300,
  };
};

export default Home;
