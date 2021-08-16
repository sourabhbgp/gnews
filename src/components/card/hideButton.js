import { Hide } from '../icons';
import PropTypes from 'prop-types';

const HideButton = ({ uid, onHidePress }) => {
  return (
    <div className="flex items-end">
      <button aria-label="hide" onClick={() => onHidePress({ uid })}>
        <Hide width={24} fill={'#9CA3AF'} height={24} />
      </button>
    </div>
  );
};

HideButton.propTypes = {
  uid: PropTypes.string.isRequired,
  onHidePress: PropTypes.func.isRequired,
};

export default HideButton;
