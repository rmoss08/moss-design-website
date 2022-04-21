import ConnectLink from '../components/ConnectLink';
import Layout from '../components/Layout/Layout';
import profileImage from '../assets/images/chloe.jpg';

import styles from './AboutPage.module.css';
import { useContext, useLayoutEffect, useEffect } from 'react';
import { HeaderContext } from '../store/header-context';

const aboutText = <p>In the United Kingdom, HM Treasury implements and enforces financial sanctions under the Sanctions and Anti-Money Laundering Act 2018 and through its Office of Financial Sanctions (OFSI), who monitor compliance, assess any suspected breaches and help companies and individuals understand their financial sanctions obligations. The name of the designated individual is recorded with as much supporting information as possible, from a date of birth to a passport number to ensure the right person is being targeted, on the Consolidated List of financial sanctions targets.<br /><br />The OFSI’s aim is to freeze the British assets of a designated individual, barring them access to banking services. Critically, an asset freeze and some financial services restrictions will apply to entities — defined in the OFSI’s general guidance as “a body of persons corporate or unincorporated, or any organisation or association of combination of persons” — owned or controlled, directly or indirectly, by a designated person. Those companies or organisations may not be named on the list in their own right, but are similarly subject to financial sanctions.</p>;

const AboutPage = () => {
  const headerCtx = useContext(HeaderContext);
  
  useEffect(()=> {
    headerCtx.lockNav();
    // headerCtx.removeNavTransparency();
  }, [])

  return (
    <Layout>
      <img src={profileImage} className={styles['profile-pic']} alt="Headshot of Chloe Moss" />
      <div className='margin'>
        <h1>CHLOE MOSS</h1>
        <h3 className={styles['job-title']}>Architectural Designer</h3>
        {aboutText}
        <ConnectLink />
      </div>
    </Layout>
  );
};

export default AboutPage;
