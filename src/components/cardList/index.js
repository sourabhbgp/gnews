import { map, keys, values } from 'lodash';
import Card from '../card';
import PropTypes from 'prop-types';

const CardList = ({
  totalArticles,
  articles,
  gnewsData,
  onHidePress,
  onLikePress,
}) => {
  if (!totalArticles) return null;

  const checkLiked = (uid, gnewsData) => {
    let status = false;
    let count = 0;
    let hidden = false;

    map(gnewsData, (liked) => {
      if (keys(liked)?.[0] === uid) {
        status = values(liked)?.[0]?.status;
        count = values(liked)?.[0]?.count;
        hidden = values(liked)?.[0]?.hidden;
      }
    });

    return { status, count, hidden };
  };
  // const startCardNumber = (currentPage, maxPerPage) => {};
  // const endCardNumber = (currentPage, maxPerPage) => {};

  return (
    <div className="py-8 md:px-4">
      {/* <p className="pl-1">{`Showing ${1} - ${3} of ${totalArticles} results`}</p> */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-8">
        {map(articles, (article, i) => {
          let { status, count, hidden } = checkLiked(article.url, gnewsData);

          if (hidden) return null;

          return (
            <Card
              article={article}
              key={i}
              likeStatus={status}
              likeCount={count}
              onHidePress={onHidePress}
              onLikePress={onLikePress}
            />
          );
        })}
      </div>
    </div>
  );
};

CardList.propTypes = {
  totalArticles: PropTypes.number.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      source: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    })
  ),
  onHidePress: PropTypes.func.isRequired,
  onLikePress: PropTypes.func.isRequired,
  gnewsData: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
