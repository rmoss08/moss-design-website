import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch } from 'react-redux';

const NotFoundPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(navActions.lock());  
    dispatch(navActions.removeTransparency());  
    dispatch(navActions.addSticky());  
  }, []);

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
