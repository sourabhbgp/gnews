import Date from './date';
import LikeButton from './likeButton';
import HideButton from './hideButton';
import ExternalLink from '../externalLink';

const Card = ({ article, likeStatus, likeCount, onHidePress, onLikePress }) => {
  // console.count('render');

  return (
    <div className="p-6 bg-white rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <ExternalLink url={article?.url}>
        <img
          className="w-full object-cover rounded h-48"
          src={article?.image}
          alt=""
        />
      </ExternalLink>
      <div className="mt-4">
        <ExternalLink url={article?.source?.url}>
          <span className="text-sm mb-2 text-blue-500 font-base hover:underline">
            {article?.source?.name}
          </span>
        </ExternalLink>

        <ExternalLink url={article?.url}>
          <h2 className="text-xl font-bold text-gray-700">{article?.title}</h2>
        </ExternalLink>
        <p className="text-sm mt-2 text-gray-500">
          <Date dateString={article?.publishedAt} />
        </p>
      </div>
      <div className="mt-3 space-x-4 flex p-1">
        <LikeButton
          status={likeStatus}
          count={likeCount}
          onLikePress={onLikePress}
          uid={article?.url}
        />
        <HideButton uid={article?.url} onHidePress={onHidePress} />
      </div>
    </div>
  );
};

export default Card;
