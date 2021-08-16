import Header from './header';
// import Footer from './footer';
import Container from './container';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import SEO from '../../../next-seo.config';

const Layout = ({ children, locale }) => {
  return (
    <div className="min-h-screen flex  flex-col">
      <DefaultSeo {...SEO} />
      <Header locale={locale} />
      <Container className={'flex-1 bg-gray-100'}>{children}</Container>
      {/* <Footer /> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.string.isRequired,
};

export default Layout;
