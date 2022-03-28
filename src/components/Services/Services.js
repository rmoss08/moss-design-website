import Service from './Service';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 's1',
    title: 'RENDERING',
    description:
      'A multiple of how much money they earn every year? How many fans or Facebook followers they have? Or the number of shirts they sell? By looking at how much the club down the road went for and playing a game of higher or lower?',
  },
  {
    id: 's2',
    title: 'EMOTIONAL SUPPORT',
    description:
      'Another method was proposed by a “Michael C” in the comments section. A musicals lover, Michael riffed on the song Seasons of Love from Rent and suggested the value of a club should be measured in highlights, victories, players, titles and love.',
  },
  {
    id: 's3',
    title: 'INTERIOR DESIGN',
    description:
      "So, how much will someone pay for Chelsea, England’s fourth-most successful team, global football’s eighth-richest club, the recently-crowned world champions — especially now Roman Abramovich has stuck a great big 'For Sale' sign outside?",
  },
  {
    id: 's4',
    title: 'BESPOKE',
    description:
      'Before we go any further with these forays into uncharted territory, let us make one thing very clear: none of this really matters when compared to what is happening in Ukraine. It is only football and money, after all.',
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
  return <div className={styles.services}>{serviceComponents}</div>;
};

export default Services;
