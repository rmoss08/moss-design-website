import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="margin">
        <h1>Error 404</h1>
        <h2>Woops! This page does not exist</h2>
        <LoadingSpinner />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
