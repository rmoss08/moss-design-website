import ConnectLink from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import profileImage from '../assets/images/chloe.jpg';

import styles from './AboutPage.module.css';
import { useLayoutEffect, useEffect } from 'react';
import { navActions } from '../store/nav-slice';
import { useDispatch, useSelector } from 'react-redux';

const aboutText = (
  <p>
    (PLACEHOLDER TEXT: This website is designed for my sister, Chloe. She is a
    Master of Architecture student at the University of British Columbia. During
    her studies, she also works as an architectural designer. Moss Design is her
    business. The website is meant to showcase her work.)
    <br />
    <br />
    (PLACEHOLDER TEXT: The plan for this page is to introduce Chloe to visitors.
    It’s an opportunity for her to explain her qualifications and design
    philosophy. There is also a Connect button at the bottom re-directing the
    visitor to their native email app in case they want to contact her.)
  </p>
);

const AboutPage = () => {
  console.log('AboutPage rendered');
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
      dispatch(navActions.removeTransparency());
    }
    if (!isNavVisible) {
      dispatch(navActions.showNav());
    }
  }, [isNavLocked, isNavTransparent, isNavVisible]);

  return (
    <Layout>
      <div className={`margin min-height ${styles['about-page']}`}>
        <img
          src={profileImage}
          className={styles['profile-pic']}
          alt="Headshot of Chloe Moss"
        />
        <div>
          <h1>CHLOE MOSS</h1>
          <h3 className={styles['job-title']}>Architectural Designer</h3>
          {aboutText}
          <ConnectLink />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
