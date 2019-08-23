export default class Planet {
  ctx;
  canvasEl;
  x;
  y;
  initialX;
  initialY;
  radian;
  speed;
  radius;
  image;
  zIndex;
  planetWidth;
  planetHeight;
  initialPlanetWidth;
  initialPlanetHeight;
  isSun;

  constructor({context, canvasEl, x, y, radius, speed, radian, image, zIndex, planetWidth, planetHeight, isSun}) {
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.initialY = y;
    this.speed = speed;
    this.ctx = context;
    this.canvasEl = canvasEl;
    this.radius = radius;
    this.radian = radian;
    this.image = image;
    this.zIndex = zIndex;
    this.planetWidth = planetWidth;
    this.planetHeight = planetHeight;
    this.initialPlanetWidth = planetWidth;
    this.initialPlanetHeight = planetHeight;
    this.isSun = isSun;
  }

  drawPlanet = () => {
    const coordinateX = this.x - (this.planetWidth / 2);
    const coordinateY = this.y - (this.planetHeight / 2);
    this.ctx.drawImage(this.image, coordinateX, coordinateY, this.planetWidth, this.planetHeight);
  };

  update = () => {
    this.radian += this.speed;
    const sin = Math.sin(this.radian);
    const cos = Math.cos(this.radian);
    const trajectoryDiameter = this.radius * 2;

    if (sin < 0 && this.zIndex > 0 ||
      sin > 0 && this.zIndex < 0) {
      this.zIndex = -this.zIndex;
    }

    if (!this.isSun) {
      const path = trajectoryDiameter - (this.radius * sin + this.radius);
      const pathPercent = (100 * path) / trajectoryDiameter;
      const scale = (pathPercent * this.initialPlanetWidth) / 115;

      this.planetHeight = this.initialPlanetHeight - scale;
      this.planetWidth = this.initialPlanetWidth - scale;
    }

    // this.planetWidth = this.initialPlanetWidth / 1.5;
    // this.planetHeight = this.initialPlanetHeight / 1.5;

    this.x = this.initialX + cos * this.radius * 2.5;
    this.y = this.initialY + sin * this.radius;

    this.drawPlanet();
  };
}