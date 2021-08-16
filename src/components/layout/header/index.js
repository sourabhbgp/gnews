import Container from '../container';
import Tab from '../../tab';
import PropTypes from 'prop-types';

const Header = ({ locale }) => {
  return (
    <header className="border-gray-900 flex items-center">
      <Container>
        <Tab locale={locale} />
      </Container>
    </header>
  );
};

Header.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Header;
