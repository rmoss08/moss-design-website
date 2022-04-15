import Layout from '../components/Layout';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import { HeaderImages, ProjectGalleryDrawings, ProjectGalleryRednerings } from '../images';
import Gallery from '../components/Gallery/Gallery';
import styles from './ProjectPage.module.css';

const ProjectPage = () => {
  const rearViewRendering = HeaderImages[1];

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
      <HeaderImage
        imageSrc={rearViewRendering.src}
        imageAlt={rearViewRendering.alt}
      />
      <h2 className={styles.location}>WEST VANCOUVER, BC</h2>
      {introText}
      <div className="margin">
        <h2>RENDERINGS</h2>
        <Gallery images={ProjectGalleryRednerings} />
      </div>
      <div className="margin">
        <h2>DRAWINGS</h2>
        <Gallery images={ProjectGalleryDrawings} />
      </div>
    </Layout>
  );
};

export default ProjectPage;
