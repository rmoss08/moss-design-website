import Layout from '../components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../store/header-context';
import LoadingSpinner from '../components/LoadingSpinner';

const NotFoundPage = () => {
  const headerCtx = useContext(HeaderContext);
  
  useEffect(()=> {
    headerCtx.lockNav();
    // headerCtx.removeNavTransparency();
  }, [])

  return (
    <Layout>
      <div className='margin min-height'>
        <h1>Error 404</h1>
        <p>Woops! This page does not exist.</p>
        <LoadingSpinner />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
