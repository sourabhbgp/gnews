import Date from './date';
import LikeButton from './likeButton';
import HideButton from './hideButton';
import ExternalLink from '../externalLink';
import PropTypes from 'prop-types';

const Card = ({ article, likeStatus, likeCount, onHidePress, onLikePress }) => {
  return (
    <div className="p-6 bg-white rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <ExternalLink url={article?.url}>
        <img
          className="w-full object-cover rounded h-48"
          src={article?.image}
          alt={article?.title}
          width={300}
          height={200}
        />
      </ExternalLink>
      <div className="mt-4">
        <ExternalLink url={article?.source?.url}>
          <span className="text-sm mb-2 text-blue-700 font-base hover:underline">
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

Card.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
  likeStatus: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  onHidePress: PropTypes.func.isRequired,
  onLikePress: PropTypes.func.isRequired,
};

export default Card;
