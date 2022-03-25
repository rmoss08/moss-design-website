import Layout from '../components/Layout';
import HeaderImage from '../components/HeaderImage';
import Services from '../components/Services/Services';

const HomePage = () => {
  return (
    <Layout>
      <HeaderImage />
      <h1>Hello world!</h1>
      <p>How are you doing?</p>
      <Services />
    </Layout>
  );
};

export default HomePage;
