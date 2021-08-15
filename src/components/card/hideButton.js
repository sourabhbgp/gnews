import { Hide } from '../icons';

const HideButton = ({ uid, onHidePress }) => {
  return (
    <div className="flex items-end">
      <button onClick={() => onHidePress({ uid })}>
        <Hide width={24} fill={'#9CA3AF'} height={24} />
      </button>
    </div>
  );
};

export default HideButton;
