import bathroomEnsuite from './assets/images/bathroom-ensuite.jpg';
import livingRoom from './assets/images/living-room.jpg';
// import frontViewRendering from './assets/images/front-view-rendering.jpg';
// import frontViewRendering from './assets/images/front-view-rendering2.png';
import frontViewRendering from './assets/images/front-view-rendering-square.png';
import rearViewRendering from './assets/images/rear-view-rendering.jpg';
import bathroom from './assets/images/bathroom.JPG';
import frontDoor from './assets/images/front-door.jpg';
import masterBedroom from './assets/images/master-bedroom.jpg';
import basementFloorPlan from './assets/images/floor-plan-basement.png';
import mainLevelFloorPlan from './assets/images/floor-plan-main-level.png';
import upperLevelFloorPlan from './assets/images/floor-plan-upper-level.png';

export const BackgroundImages = [
  {
    id: 'front-view-rendering',
    src: frontViewRendering,
    alt: 'Rendering of house from the front',
  },
  {
    id: 'rear-view-rendering',
    src: rearViewRendering,
    alt: 'Rendering of house from the rear',
  },
];

export const HomePageGalleryImages = [
  { id: 'front-door', src: frontDoor, alt: 'Front door' },
  { id: 'master-bedroom', src: masterBedroom, alt: 'Master bedroom' },
  { id: 'bathroom', src: bathroom, alt: 'Bathroom' },
  { id: 'living-room', src: livingRoom, alt: 'Living room' },
];

export const ProjectGalleryRednerings = [
  { id: 'front-door', src: frontDoor, alt: 'Front door' },
  { id: 'master-bedroom', src: masterBedroom, alt: 'Master bedroom' },
  { id: 'bathroom', src: bathroom, alt: 'Bathroom' },
  { id: 'living-room', src: livingRoom, alt: 'Living room' },
  { id: 'ensuite-bathroom', src: bathroomEnsuite, alt: 'Ensuite bathroom' },
]  

export const ProjectGalleryDrawings = [
  { id: 'floor-plan-basement', src: basementFloorPlan, alt: 'Basement floor plan' },
  { id: 'floor-plan-main-level', src: mainLevelFloorPlan, alt: 'Main level floor plan' },
  { id: 'floor-plan-upper-level', src: upperLevelFloorPlan, alt: 'Upper level floor plan' },
];