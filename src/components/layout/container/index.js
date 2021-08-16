import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto ${!isEmpty(className) ? className : ''}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Container;
