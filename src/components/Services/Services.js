import Service from './Service';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 's1',
    title: 'EXTERIOR DESIGN',
    description:
      '(PLACEHOLDER TEXT: This website is designed for my sister, Chloe. She is a Master of Architecture student at the University of British Columbia. During her studies, she also works as an architectural designer. Moss Designs is her business. The website is meant to showcase her work.)',
  },
  {
    id: 's2',
    title: 'INTERIOR DESIGN',
    description:
    '(PLACEHOLDER TEXT: The website is almost finished. There is another feature I want to add, we need higher resolution pictures for the header image, Chloe needs to make some additional renderings to fill up the website with images, and copywrite what she wants the website to say.)',
  },
  {
    id: 's3',
    title: 'REGULATORY CONSULTING',
    description:
      "(PLACEHOLDER TEXT: So, for now, most of the text is just placeholder text featuring my explanations about the website. This section is meant to describe some of the services Chloe offers as an architectural designer.)",
  },
  {
    id: 's4',
    title: 'RENDERINGS',
    description:
      '(PLACEHOLDER TEXT: You’ll notice the website is mainly image based. Architecture is obviously a very visual medium. As such, the website has been designed with a magazine feel in mind which should draw attention to Chloe’s amazing work.)',
  },
];

const Services = () => {
  const serviceComponents = SERVICES.map((service) => (
    <Service
      key={service.id}
      title={service.title}
      description={service.description}
    />
  ));
  return <div className={`margin ${styles.services}`}>{serviceComponents}</div>;
};

export default Services;
