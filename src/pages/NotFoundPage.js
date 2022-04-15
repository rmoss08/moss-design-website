import Layout from '../components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../store/header-context';

const NotFoundPage = () => {
  const navCtx = useContext(HeaderContext);
  
  useEffect(()=> {
    navCtx.lockNav();
    navCtx.removeNavTransparency();
  }, [])

  return (
    <Layout>
      <div className='margin min-height'>
        <h1>Error 404</h1>
        <p>Woops! This page does not exist.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
