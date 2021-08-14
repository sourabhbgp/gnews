import Container from '../container';
import Tab from '../../tab';

const Header = ({ activeTab }) => {
  return (
    <header className="border-gray-900 flex items-center">
      <Container>
        <Tab activeTab={activeTab} />
      </Container>
    </header>
  );
};

export default Header;
