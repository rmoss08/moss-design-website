import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery';
import { HeaderImages, HomePageGalleryImages } from '../images';

const frontViewRendering = HeaderImages[0];

const HomePage = () => {
  return (
    <Layout>
      <HeaderImage
        imageSrc={frontViewRendering.src}
        imageAlt={frontViewRendering.alt}
      />
      <Gallery id='hp-gallery-1' images={HomePageGalleryImages} />
      <Services />
    </Layout>
  );
};

export default HomePage;
