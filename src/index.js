import initialize from './initialize';
import Planet from './Objects/Planet';
import getRandomInt from './utils/getRandomInt';
import getImages from './utils/getImages';

import './../assets/styles/main.scss';

const [context, canvasEl] = initialize();
const planetSettings = {
  context,
  canvasEl,
  x: canvasEl.width / 2,
  y: canvasEl.height / 2,
  radius: 0,
  radian: 1
};
const images = getImages();
let planets = [];

images.forEach((image, idx) => {
  const zIndex = idx;
  const speed = (10 - idx) * 0.0015;
  const planetHeight = idx === 0 ? 150 : 75;
  const planetWidth = idx === 0 ? 150 : 75;
  const isSun = idx === 0 ? true : false;

  planets.push(new Planet({
    ...planetSettings,
    speed,
    image,
    zIndex,
    planetHeight,
    planetWidth,
    isSun
  }));

  planetSettings.radian *= getRandomInt(0, 2 * Math.PI);
  planetSettings.radius += 20;
});

const animation = () => {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  planets.sort((prevPlanet, nextPlanet) => prevPlanet.zIndex - nextPlanet.zIndex);
  planets.forEach(planet => planet.updateCoord());

  requestAnimationFrame(animation);
};

animation();