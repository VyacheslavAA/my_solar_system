import getRandomInt from '../../utils/getRandomInt';

export default class Star {
  constructor(ctx, canvasEl, xPos, yPos, color, howFarStar) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.color = color;
    this.xPos = xPos;
    this.yPos = yPos;
    this.howFarStar = howFarStar;
    this.starWidth = howFarStar;
    this.starHeight = howFarStar;
    this.speed = 0;

    switch (howFarStar) {
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
    const shouldStarFlicker = getRandomInt(0, 1000);

    if (shouldStarFlicker > 990) {
      this.starHeight = this.howFarStar / 2;
      this.starWidth = this.howFarStar / 2;
    } else if (shouldStarFlicker < 10) {
      this.starHeight = this.howFarStar;
      this.starWidth = this.howFarStar;
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