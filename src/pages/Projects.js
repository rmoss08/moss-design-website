import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/nav-slice';
import Layout from '../components/Layout/Layout';
import HouseFrontView from '../assets/images/front-view-rendering2.png';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

const Projects = () => {
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
      <div className="margin min-height">
        <h1 className='page-title'>PROJECTS</h1>
        <div className={styles.grid}>
          <Link to="/1234-house">
            <div className={styles.project}>
              <img src={HouseFrontView} />
              <h3>1234 House</h3>
              <h4>West Vancouver, BC</h4>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
