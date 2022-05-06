import Layout from '../components/Layout/Layout';
import BackgroundImage from '../components/BackgroundImage';
import rearViewRendering from '../assets/images/rear-view-rendering.jpg';
import { ProjectGalleryDrawings, ProjectGalleryRenderings } from '../images';
import Gallery from '../components/Gallery';
import styles from './ProjectPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/nav-slice';
import { useEffect } from 'react';

const gallery1 = ProjectGalleryRenderings.slice(0,2);
const gallery2 = ProjectGalleryRenderings.slice(2,4);
const gallery3 = ProjectGalleryRenderings.slice(4);
const gallery4 = ProjectGalleryDrawings.slice(0,2);
const gallery5 = ProjectGalleryDrawings.slice(2);

const ProjectPage = () => {
  const isNavTransparent = useSelector((state) => state.nav.isTransparent);
  const isNavVisible = useSelector((state) => state.nav.isVisible);
  const isNavLocked = useSelector((state) => state.nav.isLocked);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!isNavTransparent) {
      dispatch(navActions.addTransparency());
    }
    if (!isNavVisible) { 
      dispatch(navActions.showNav())
    }
    if (isNavLocked) {
      dispatch(navActions.unlock());
    }
  }, []);

  const introText = (
    <p className="margin">
      Those close to the oligarch insist they do not expect Abramovich to be
      placed on the sanctions list. They suggest he has done nothing to justify
      such action and is merely a successful businessman removed from politics.
      It remains to be seen, too, whether the UK’s Foreign Office and National
      Crime Agency would be able to prove links to Vladimir Putin’s regime to
      justify freezing his British-based assets. As yet no one, from the United
      States to the European Union, has moved to name the 55-year-old as a
      designated individual on their Consolidated List of financial sanctions
      targets. They would not want to risk losing a legal challenge once
      sanctions have been imposed.
    </p>
  );

  return (
    <Layout>
      <BackgroundImage src={rearViewRendering} />
      <h2 className={styles.location}>WEST VANCOUVER, BC</h2>
      {introText}
      <div className="margin">
        <h2>RENDERINGS</h2>
        <Gallery id='pp-gallery-1' images={gallery1} />
        <Gallery id='pp-gallery-2' images={gallery2} />
        <Gallery id='pp-gallery-3' images={gallery3} />
      </div>
      <div className="margin">
        <h2>DRAWINGS</h2>
        <Gallery id='pp-gallery-4' images={gallery4} />
        <Gallery id='pp-gallery-5' images={gallery5} />

      </div>
    </Layout>
  );
};

export default ProjectPage;
