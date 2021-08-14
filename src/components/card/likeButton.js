import { Like } from '../icons';

const LikeButton = ({ status }) => {
  return (
    <div className="flex items-end">
      <button>
        <Like width={24} fill={status ? '#60A5FA' : '#9CA3AF'} height={24} />
      </button>

      <span className="ml-2 text-sm  text-gray-500">0</span>
    </div>
  );
};

export default LikeButton;
