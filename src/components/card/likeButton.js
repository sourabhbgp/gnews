import { Like } from '../icons';
import PropTypes from 'prop-types';

const LikeButton = ({ status, count, onLikePress, uid }) => {
  return (
    <div className="flex items-end">
      <button
        aria-label="like"
        onClick={() => onLikePress({ uid, status: !status })}>
        <Like width={24} fill={status ? '#60A5FA' : '#9CA3AF'} height={24} />
      </button>

      <span className="ml-2 text-sm  text-gray-500">{count}</span>
    </div>
  );
};

LikeButton.propTypes = {
  status: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onLikePress: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

export default LikeButton;
