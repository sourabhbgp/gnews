import Layout from '../components/layout';

const Home = ({ locale }) => {
  return (
    <Layout locale={locale}>
      <div className="py-6">Home</div>
      <p>{`Locale : ${locale}`}</p>
    </Layout>
  );
};

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      locale: locale ?? '',
    },
  };
};

export default Home;

// search box
// card list box
// pagination box
