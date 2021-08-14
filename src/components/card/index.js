import Date from './date';
import LikeButton from './likeButton';
import HideButton from './hideButton';

const Card = ({ article }) => {
  return (
    <div className="p-6 bg-white rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <a className="cursor-pointer" target="_blank" href={article?.url} rel="nofollow">
        <img className="w-full object-cover rounded h-48" src={article?.image} alt="" />
      </a>
      <div className="mt-4">
        <a
          className="text-sm mb-2 text-blue-500 font-base hover:underline cursor-pointer"
          target="_blank"
          href={article?.source?.url}>
          {article?.source?.name}
        </a>
        <a className="cursor-pointer" target="_blank" href={article?.url} rel="nofollow">
          <h2 className="text-xl font-bold text-gray-700">{article?.title}</h2>
        </a>
        <p className="text-sm mt-2 text-gray-500">
          <Date dateString={article?.publishedAt} />
        </p>
      </div>
      <div className="mt-3 space-x-4 flex p-1">
        <LikeButton status={false} />
        <HideButton />
      </div>
    </div>
  );
};

export default Card;
