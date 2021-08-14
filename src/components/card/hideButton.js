import { Hide } from '../icons';

const HideButton = () => {
  return (
    <div className="flex items-end">
      <button>
        <Hide width={24} fill={'#9CA3AF'} height={24} />
      </button>
    </div>
  );
};

export default HideButton;
