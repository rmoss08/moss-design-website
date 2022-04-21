import { useLayoutEffect, useState } from 'react';
import styles from './Gallery.module.css';
import useScrollPoisiton from '../hooks/use-scroll-position';

const Gallery = (props) => {
  const yPos = useScrollPoisiton().y;

  const galleryImgs = props.images.map((image) => (
    <img
      key={image.id}
      src={image.src}
      alt={image.alt}
    />
  ));

  let galleryClasses;
  
  if (yPos < 300) {
    galleryClasses = `hidden ${styles.gallery}`;
  } else {
    galleryClasses = `visible ${styles.gallery}`;
  }

  return (
    <div id={props.id} className={galleryClasses}>
      {galleryImgs}
    </div>
  );
};

export default Gallery;
