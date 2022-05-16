import Layout from '../components/Layout/Layout';
import BackgroundImage from '../components/BackgroundImage';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery';
import frontViewRendering from '../assets/images/front-view-rendering-square.png';
import { HomePageGalleryImages } from '../images';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/nav-slice';
import { useEffect } from 'react';

const gallery1 = HomePageGalleryImages.slice(0, 2);
const gallery2 = HomePageGalleryImages.slice(2, 4);

const HomePage = () => {
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

  return (
    <Layout>
      <BackgroundImage src={frontViewRendering} />
      <Gallery id="hp-gallery-1" images={gallery1} distance={0} />
      <Gallery id="hp-gallery-2" images={gallery2} distance={1} />
      <Services />
    </Layout>
  );
};

export default HomePage;
