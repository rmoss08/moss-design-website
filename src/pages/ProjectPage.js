import Layout from '../components/Layout/Layout';
import BackgroundImage from '../components/BackgroundImage';
import rearViewRendering from '../assets/images/rear-view-rendering.jpg';
import { ProjectGalleryDrawings, ProjectGalleryRenderings } from '../images';
import Gallery from '../components/Gallery';
import styles from './ProjectPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/nav-slice';
import { useEffect } from 'react';

const gallery1 = ProjectGalleryRenderings.slice(0, 2);
const gallery2 = ProjectGalleryRenderings.slice(2, 4);
const gallery3 = ProjectGalleryRenderings.slice(4);
const gallery4 = ProjectGalleryDrawings.slice(0, 2);
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
      dispatch(navActions.showNav());
    }
    if (isNavLocked) {
      dispatch(navActions.unlock());
    }
  }, []);

  const introText = (
    <p className="margin">
      (PLACEHOLDER TEXT: This website is designed for my sister, Chloe. She is a
      Master of Architecture student at the University of British Columbia.
      During her studies, she also works as an architectural designer. Moss
      Design is her business. The website is meant to showcase her work. Chloe’s
      first house project was in West Vancouver, British Columbia. She designed
      the entire house you see before you. This page showcases that project.
      Eventually, this text block will be filled with Chloe’s description of the
      project, setting up image galleries below.)
    </p>
  );

  return (
    <Layout>
      <BackgroundImage src={rearViewRendering} />
      <h2 className={styles.location}>WEST VANCOUVER, BC</h2>
      {introText}
      <div className="margin">
        <h2>RENDERINGS</h2>
        <Gallery id="pp-gallery-1" images={gallery1} distance={0} />
        <Gallery id="pp-gallery-2" images={gallery2} distance={1} />
      </div>
      <div className="margin">
        <h2>DRAWINGS</h2>
        <Gallery id="pp-gallery-4" images={gallery4} distance={2} />
      </div>
    </Layout>
  );
};

export default ProjectPage;
