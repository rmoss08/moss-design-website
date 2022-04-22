import Layout from '../components/Layout/Layout';
import HeaderImage from '../components/HeaderImage';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery';
import { HeaderImages, HomePageGalleryImages } from '../images';

const frontViewRendering = HeaderImages[0];

const gallery1 = HomePageGalleryImages.slice(0, 2);
const gallery2 = HomePageGalleryImages.slice(2, 4);

const HomePage = () => {

  const g = document.getElementById('hp-gallery-1');
  console.log(g);

  return (
    <Layout>
      <HeaderImage
        imageSrc={frontViewRendering.src}
        imageAlt={frontViewRendering.alt}
      />
      <Gallery id='hp-gallery-1' images={gallery1} />
      <Gallery id='hp-gallery-2' images={gallery2} />
      <Services />
    </Layout>
  );
};

export default HomePage;
