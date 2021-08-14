import { isEmpty } from 'lodash';

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto ${!isEmpty(className) ? className : ''}`}>{children}</div>
  );
};

export default Container;
