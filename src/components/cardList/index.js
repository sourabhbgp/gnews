import { map, keys, values } from 'lodash';
import Card from '../card';

const CardList = ({
  totalArticles,
  articles,
  likedData,
  onHidePress,
  onLikePress,
}) => {
  if (!totalArticles) return null;

  const checkLiked = (uid, likedData) => {
    let status = false;
    let count = 0;
    let hidden = false;

    map(likedData, (liked) => {
      if (keys(liked)?.[0] === uid) {
        status = values(liked)?.[0]?.status;
        count = values(liked)?.[0]?.count;
        hidden = values(liked)?.[0]?.hidden;
      }
    });

    return { status, count, hidden };
  };

  return (
    <div className="py-8 md:px-4">
      <p className="pl-1">{`Showing ${1} - ${3} of ${totalArticles} results`}</p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-8">
        {map(articles, (article, i) => {
          let { status, count, hidden } = checkLiked(article.url, likedData);

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

export default CardList;
