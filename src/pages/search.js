import Layout from '../components/layout';
import Search from '../components/search';
import CardList from '../components/cardList';
import Pagination from '../components/pagination';
import { totalPagesCount, PER_PAGE_FIRST } from '../utils/pagination';
import { getRequest } from '../requests';
import qs from 'qs';

const SearchPage = ({ locale, totalArticles, articles, defaultTerm }) => {
  const pagesCount = totalPagesCount(totalArticles);

  return (
    <Layout locale={locale}>
      <div className="p-6">
        <Search defaultTerm={defaultTerm} />
        <CardList totalArticles={totalArticles} articles={articles} />
        <Pagination pagesCount={pagesCount} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, query }) => {
  const queryString = qs.stringify({
    token: process.env.NEXT_PUBLIC_TOKEN,
    max: PER_PAGE_FIRST,
    lang: locale,
    q: query?.q,
  });

  const { data } = await getRequest(`?${queryString}`);

  // const data = {};
  return {
    props: {
      locale: locale ?? 'en',
      totalArticles: data?.totalArticles ?? 0,
      articles: data?.articles ?? [],
      defaultTerm: query?.q ?? '',
    },
  };
};

export default SearchPage;
