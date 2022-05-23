import ConnectButton from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';
import HouseGifSrc from '../assets/images/deconstructed-house.gif';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const isNavTransparent = useSelector((state) => state.nav.isTransparent);
  const isNavVisible = useSelector((state) => state.nav.isVisible);
  const isNavLocked = useSelector((state) => state.nav.isLocked);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNavLocked) {
      dispatch(navActions.lock());
    }
    console.log(isNavTransparent);
    if (isNavTransparent) {
      console.log('Removing trans');
      dispatch(navActions.removeTransparency());
    }
    if (!isNavVisible) {
      dispatch(navActions.showNav());
    }
  }, [isNavLocked, isNavTransparent, isNavVisible]);

  return (
    <Layout>
      <div className={`margin min-height ${styles.grid}`}>
        <div>
          <h1 className='page-title'>CONTACT</h1>
          <p>
            (PLACEHOLDER TEXT: If you have a house project in mind, I would love to hear from you.
            Click the button below to send me an email.)
          </p>
          <ConnectButton />
        </div>
        <img
          src={HouseGifSrc}
          className={styles['house-gif']}
          alt="GIF of animated house being deconstructed"
        />
      </div>
    </Layout>
  );
};

export default ContactPage;
