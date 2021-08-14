import { isEmpty } from 'lodash';

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-6 ${!isEmpty(className) ? className : ''}`}>
      {children}
    </div>
  );
};

export default Container;
