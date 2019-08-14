export default class Planet {
  ctx;
  canvasEl;
  x = 0;
  y = 0;
  initialX = 0;
  initialY = 0;
  radian = 0;
  speed = 0;
  radius = 0;
  image = '';
  zIndex = 0;
  planetWidth;
  planetHeight;
  planetMinWidth = 45;
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
    this.planetHeight = planetHeight
    this.isSun = isSun;
  }

  drawPlanet = () => {
    const coordX = this.x - (this.planetWidth / 2);
    const coordY = this.y - (this.planetHeight / 2);
    this.ctx.drawImage(this.image, coordX, coordY, this.planetWidth, this.planetHeight);
  };

  updateCoord = () => {
    this.radian += this.speed;

    if (Math.sin(this.radian) < 0 && this.zIndex > 0 ||
      Math.sin(this.radian) > 0 && this.zIndex < 0) {
      this.zIndex = -this.zIndex;
    }

    if (!this.isSun) {
      this.planetHeight += Math.cos(this.radian) * 0.2;
      this.planetWidth += Math.cos(this.radian) * 0.2;
    }

    this.x = this.initialX + Math.cos(this.radian) * this.radius * 6;
    this.y = this.initialY + Math.sin(this.radian) * this.radius;

    this.drawPlanet();
  };
}