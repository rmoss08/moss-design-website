import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch } from 'react-redux';

const NotFoundPage = () => {
  const dispatch = useDispatch();
  dispatch(navActions.changeTransparencySetting(false));

  useEffect(() => {
    dispatch(navActions.removeTransparency());  
    dispatch(navActions.lock());  
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
