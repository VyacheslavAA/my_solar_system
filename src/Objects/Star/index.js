import getRandomInt from './../../utils/getRandomInt';

export default class Star {
  constructor(ctx, canvasEl, xPos, yPos, color, howStarFar) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.color = color;
    this.xPos = xPos;
    this.yPos = yPos;
    this.howStarFar = howStarFar;
    this.starWidth = howStarFar;
    this.starHeight = howStarFar;
    this.speed = 0;

    switch (howStarFar) {
      case 1:
        this.speed = 0.003;
        break;

      case 1.5:
        this.speed = 0.017;
        break;

      case 2:
        this.speed = 0.04;
        break;
    }
  }

  drawStars = () => {
    this.ctx.fillStyle = this.color;

    this.ctx.fillRect(this.xPos, this.yPos, this.starWidth, this.starHeight);
  };

  update = () => {
    const heightOfCanvas = this.canvasEl.offsetHeight;
    const widthOfCanvas = this.canvasEl.offsetWidth;

    if (getRandomInt(0, 1000) > 990) {
      this.starHeight = this.howStarFar / 2;
      this.starWidth = this.howStarFar / 2;
    } else if (getRandomInt(0, 1000) < 10) {
      this.starHeight = this.howStarFar;
      this.starWidth = this.howStarFar;
    }

    this.yPos += this.speed;
    this.xPos += this.speed;

    if (this.yPos > heightOfCanvas) {
      this.yPos = 1;
    } else if (this.xPos > widthOfCanvas) {
      this.xPos = 1;
    }

    this.drawStars();
  };
}