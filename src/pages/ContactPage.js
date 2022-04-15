import ConnectButton from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../store/header-context';

const ContactPage = () => {
  const navCtx = useContext(HeaderContext);

  useEffect(() => {
    navCtx.lockNav();
    navCtx.removeNavTransparency();
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
