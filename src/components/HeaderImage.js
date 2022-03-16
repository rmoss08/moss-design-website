import Image from '../assets/images/front-view-rendering.jpg';
// import styles from './HeaderImage.module.css';

const HeaderImage = () => {
    const imageStyle = `
        background-image: url(${Image})
    `

    return <div style={imageStyle}></div>
};

export default HeaderImage;