import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Search from '../components/search';
import CardList from '../components/cardList';
import Pagination from '../components/pagination';
import { totalPagesCount, PER_PAGE_FIRST } from '../utils/pagination';
import { getRequest } from '../requests';
import qs from 'qs';
import { onHide } from '../utils/hidden';
import { onLike } from '../utils/like';

const Home = ({
  locale,
  totalArticles,
  articles,
  defaultTerm,
  currentPageNo,
}) => {
  const pagesCount = totalPagesCount(totalArticles);
  const [gnewsData, setGnewsData] = useState([]);

  useEffect(() => {
    const gnewsData = localStorage.getItem('gnews');

    if (gnewsData) {
      let parsedGnews = JSON.parse(gnewsData);
      setGnewsData(parsedGnews);
    }
  }, []);

  const onLikePress = ({ status, uid }) => {
    const updatedData = onLike({ status, uid });
    setGnewsData(updatedData);
  };

  const onHidePress = ({ uid }) => {
    const updatedData = onHide({ uid });
    setGnewsData(updatedData);
  };

  return (
    <Layout locale={locale}>
      <div className="p-6">
        <Search defaultTerm={defaultTerm} />
        <CardList
          totalArticles={totalArticles}
          articles={articles}
          gnewsData={gnewsData}
          onHidePress={onHidePress}
          onLikePress={onLikePress}
        />
        <Pagination pagesCount={pagesCount} currentPageNo={currentPageNo} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const queryString = qs.stringify({
    token: process.env.NEXT_PUBLIC_TOKEN,
    max: PER_PAGE_FIRST,
    lang: locale,
  });
  try {
    const { data } = await getRequest(`?${queryString}`);

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        locale: locale ?? 'en',
        totalArticles: data?.totalArticles ?? 0,
        articles: data?.articles ?? [],
        defaultTerm: '',
        currentPageNo: 1,
      },

      /**
       * Revalidate means that if a new request comes to server, then every 5 min it will check
       * if the data is changed, if it is changed then it will update the
       * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
       */
      revalidate: 300,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
