export default class Planet {
  constructor({context, canvasEl, x, y, radius, speed, radian, image, zIndex, planetWidth, planetHeight, isSun, is3d, path}) {
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
    this.is3d = is3d;
    this.path = path;
  }

  drawPlanet = () => {
    const coordinateX = this.x - (this.planetWidth / 2);
    const coordinateY = this.y - (this.planetHeight / 2);
    this.ctx.drawImage(this.image, coordinateX, coordinateY, this.planetWidth, this.planetHeight);
  };

  drawPath = () => {
    this.ctx.beginPath();

    this.ctx.strokeStyle = '#707070';
    this.ctx.strokeWidth = 1;

    this.ctx.arc(this.initialX, this.initialY, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.closePath();
  };

  update = () => {
    this.radian += this.speed;
    const sin = Math.sin(this.radian);
    const cos = Math.cos(this.radian);
    const trajectoryDiameter = this.radius * 2;
    const incline = this.is3d ? 2.5 : 1;

    if (sin < 0 && this.zIndex > 0 ||
      sin > 0 && this.zIndex < 0) {
      this.zIndex = -this.zIndex;
    }

    if (!this.isSun && this.is3d) {
      const path = trajectoryDiameter - (this.radius * sin + this.radius);
      const pathPercent = (100 * path) / trajectoryDiameter;
      const scale = (pathPercent * this.initialPlanetWidth) / 115;

      this.planetHeight = this.initialPlanetHeight - scale;
      this.planetWidth = this.initialPlanetWidth - scale;
    }

    this.x = this.initialX + cos * this.radius * incline;
    this.y = this.initialY + sin * this.radius;

    if (!this.is3d && this.path) {
      this.drawPath();
    }

    this.drawPlanet();
  };
}