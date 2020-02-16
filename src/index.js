import initialize from './initialize';
import Planet from './objects/Planet';
import Star from './objects/Star';
import getRandomInt from './utils/getRandomInt';
import getImages from './utils/getImages';
import setElementSize from './eventHandlers/setElementSize';
import inputCheck from './eventHandlers/inputCheck';

import './../assets/styles/main.scss';

const [context, canvasEl] = initialize();
const images = getImages();
const inputElements = document.querySelectorAll('input');
let planetParameters = {
  width: 55,
  height: 55,
  radius: 60,
  is3d: true,
  path: false
};
let planets;
let stars;

const planetsInit = (newPlanetParameters) => {
  planets = [];

  planetParameters = {
    ...planetParameters,
    ...newPlanetParameters
  };

  const planetSettings = {
    context,
    canvasEl,
    x: canvasEl.width / 2,
    y: canvasEl.height / 2,
    radius: 0,
    radian: 1
  };

  images.forEach((image, idx) => {
    const zIndex = idx;
    const speed = (10 - idx) * 0.001;
    const planetHeight = idx === 0 ? planetParameters.width * 3 : planetParameters.height;
    const planetWidth = idx === 0 ? planetParameters.width * 3 : planetParameters.width;
    const isSun = idx === 0;

    planets.push(new Planet({
      ...planetSettings,
      speed,
      image,
      zIndex,
      planetHeight,
      planetWidth,
      isSun,
      is3d: planetParameters.is3d,
      path: planetParameters.path
    }));

    planetSettings.radian *= getRandomInt(0, 2 * Math.PI);
    planetSettings.radius += planetParameters.radius;
  });
};

const starsInit = () => {
  const starsCount = 600;
  const numberOfStarGroups = 3;
  const nearStars = [];
  const mediumStars = [];
  const farStars = [];
  const colors = ['#0952BD', '#A5BFF0', '#118CD6'];

  for(let currentStarGroup = 0; currentStarGroup < numberOfStarGroups; currentStarGroup++) {
    let howFarStar;

    switch (currentStarGroup) {
      case 0:
        howFarStar = 1;
        break;

      case 2:
        howFarStar = 1.5;
        break;

      case 3:
        howFarStar = 2;
        break;
    }

    for(let i = 0; i < starsCount / numberOfStarGroups; i++) {
      const xPos = getRandomInt(0, canvasEl.offsetWidth);
      const yPos = getRandomInt(0, canvasEl.offsetHeight);
  
      farStars.push(
        new Star(context, canvasEl, xPos, yPos, colors[currentStarGroup], howFarStar)
      );
    }
  }

  stars = [
    ...nearStars,
    ...mediumStars,
    ...farStars,
  ];
};

const skyInit = () => {
  context.fillStyle = '#121212';

  context.fillRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);
};

const initObjects = () => {
  starsInit();
  planetsInit();
};

const animation = () => {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  skyInit();

  stars.forEach(star => star.update());

  planets.sort((prevPlanet, nextPlanet) => prevPlanet.zIndex - nextPlanet.zIndex);
  planets.forEach(planet => planet.update());

  requestAnimationFrame(animation);
};

window.addEventListener('resize', (evt) => setElementSize(evt, canvasEl, initObjects));

for(let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener('input', (evt) => inputCheck(evt, planetsInit));
}

initObjects();
animation();
