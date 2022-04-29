import Layout from '../components/Layout/Layout';
import BackgroundImage from '../components/BackgroundImage';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery';
import frontViewRendering from '../assets/images/front-view-rendering-square.png';
import { HomePageGalleryImages } from '../images';

const gallery1 = HomePageGalleryImages.slice(0, 2);
const gallery2 = HomePageGalleryImages.slice(2, 4);

const HomePage = () => {
  return (
    <Layout>
      <BackgroundImage src={frontViewRendering} />
      <Gallery id="hp-gallery-1" images={gallery1} />
      <Gallery id="hp-gallery-2" images={gallery2} />
      <Services />
    </Layout>
  );
};

export default HomePage;
