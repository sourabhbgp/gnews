import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Search from '../components/search';
import CardList from '../components/cardList';
import Pagination from '../components/pagination';
import { totalPagesCount, PER_PAGE_FIRST } from '../utils/pagination';
import { getRequest } from '../requests';
import qs from 'qs';
import { map, keys, values, filter } from 'lodash';

const SearchPage = ({
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
    const data = localStorage.getItem('gnews');
    let updatedData = [];
    if (!data) {
      updatedData = [{ [uid]: { status: true, count: 1 } }];
      setGnewsData(updatedData);
      localStorage.setItem('gnews', JSON.stringify(updatedData));
      return;
    }
    const parsedData = JSON.parse(data);
    let found = false;
    map(parsedData, (each, i) => {
      if (keys(each)?.[0] === uid) {
        found = true;
        let count = values(each)?.[0].count;
        let obj = {
          [uid]: {
            ...values(each)?.[0],
            status,
            count: status ? ++count : --count,
          },
        };
        updatedData = filter(parsedData, (e) => {
          return keys(e)?.[0] !== uid;
        }).concat(obj);
        setGnewsData(updatedData);
        localStorage.setItem('gnews', JSON.stringify(updatedData));
        return;
      }
    });
    if (!found) {
      updatedData = [...parsedData].concat({
        [uid]: { status, count: 1 },
      });
      setGnewsData(updatedData);
      localStorage.setItem('gnews', JSON.stringify(updatedData));
    }
  };

  const onHidePress = ({ uid }) => {
    const data = localStorage.getItem('gnews');
    let updatedData = [];
    if (!data) {
      console.log('First Entry');
      updatedData = [{ [uid]: { hidden: true } }];
      setGnewsData(updatedData);
      localStorage.setItem('gnews', JSON.stringify(updatedData));
      return;
    }
    const parsedData = JSON.parse(data);
    let found = false;
    map(parsedData, (each, i) => {
      if (keys(each)?.[0] === uid) {
        found = true;
        let obj = { [uid]: { ...values(each)?.[0], hidden: true } };
        updatedData = filter(parsedData, (e) => {
          return keys(e)?.[0] !== uid;
        }).concat(obj);
        setGnewsData(updatedData);
        localStorage.setItem('gnews', JSON.stringify(updatedData));
        return;
      }
    });
    if (!found) {
      updatedData = [...parsedData].concat({ [uid]: { hidden: true } });
      setGnewsData(updatedData);
      localStorage.setItem('gnews', JSON.stringify(updatedData));
    }
  };

  return (
    <Layout locale={locale}>
      <div className="p-6">
        <Search defaultTerm={defaultTerm} />
        <CardList
          totalArticles={totalArticles}
          articles={articles}
          likedData={gnewsData}
          onHidePress={onHidePress}
          onLikePress={onLikePress}
        />
        <Pagination pagesCount={pagesCount} currentPageNo={currentPageNo} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale, query: { q, pageNo } }) => {
  const queryString = qs.stringify({
    token: process.env.NEXT_PUBLIC_TOKEN,
    max: PER_PAGE_FIRST,
    lang: locale,
    page: pageNo,
    q,
  });

  const { data } = await getRequest(`?${queryString}`);

  // const data = {};
  return {
    props: {
      locale: locale ?? 'en',
      totalArticles: data?.totalArticles ?? 0,
      articles: data?.articles ?? [],
      defaultTerm: q ?? '',
      currentPageNo: pageNo ?? 1,
    },
  };
};

export default SearchPage;
