import earthImg from './../../assets/images/earth.png';
import sunImg from './../../assets/images/58a5f93c3fb2515a48559365.png';
import uranImg from './../../assets/images/768px-Uranus2.png';
import marsImg from './../../assets/images/mars-globe-valles-marineris-enhanced-800.png';
import mercuryImg from './../../assets/images/mercury_800.png';
import neptunImg from './../../assets/images/neptune_800.png';
import jupiterImg from './../../assets/images/planet_jupiter_mid_cosmos_agency.png';
import saturnImg from './../../assets/images/saturn.png';
import venusImg from './../../assets/images/venus_magellan.png';

const getImages = () => {
  const images = [
    sunImg,
    mercuryImg,
    venusImg,
    earthImg,
    marsImg,
    saturnImg,
    jupiterImg,
    uranImg,
    neptunImg
  ];
  let result = [];

  images.forEach(img => {
    let image = new Image();

    image.src = img;
    result.push(image);
  });
  
  return result;
};

export default getImages;