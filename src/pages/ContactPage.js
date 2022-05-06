import ConnectButton from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';

const ContactPage = () => {
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
      <div className={`margin min-height`}>
        <h1>CONTACT</h1>
        <p>I'd love to hear from you. Send me an email to get in touch.</p>
        <ConnectButton />
      </div>
    </Layout>
  );
};

export default ContactPage;
