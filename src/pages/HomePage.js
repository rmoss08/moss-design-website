import Layout from '../components/Layout';
import HeaderImage from '../components/HeaderImage';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';

const HomePage = () => {
  return (
    <Layout>
      <HeaderImage />
      <Gallery />
      <Services />
    </Layout>
  );
};

export default HomePage;
