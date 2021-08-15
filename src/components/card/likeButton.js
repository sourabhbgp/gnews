import { Like } from '../icons';

const LikeButton = ({ status, count, onLikePress, uid }) => {
  return (
    <div className="flex items-end">
      <button onClick={() => onLikePress({ uid, status: !status })}>
        <Like width={24} fill={status ? '#60A5FA' : '#9CA3AF'} height={24} />
      </button>

      <span className="ml-2 text-sm  text-gray-500">{count}</span>
    </div>
  );
};

export default LikeButton;
