import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';

const NotFoundPage = () => {
  const isNavTransparent = useSelector((state) => state.nav.isTransparent);
  const isNavVisible = useSelector((state) => state.nav.isVisible);
  const isNavLocked = useSelector((state) => state.nav.isLocked);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!isNavLocked) {
      dispatch(navActions.lock());
    }
    console.log(isNavTransparent)
    if (isNavTransparent) {
      console.log('Removing trans');
      dispatch(navActions.removeTransparency());
    }
    if (!isNavVisible) { 
      dispatch(navActions.showNav())
    }
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
