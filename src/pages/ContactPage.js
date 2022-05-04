import ConnectButton from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../store/header-context';
import { navActions } from '../store/nav-slice';
import { useDispatch } from 'react-redux';

const ContactPage = () => {
  const dispatch = useDispatch();
  dispatch(navActions.changeTransparencySetting(false));

  useEffect(() => {
    dispatch(navActions.removeTransparency());  
    dispatch(navActions.lock());  
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
