export default class Ball {
  ctx;
  canvasEl;
  x = 0;
  y = 0;
  delayX = 0;
  delayY = 0;
  rad = 0;
  gravity = 0.5;
  friction = 0.5;

  constructor(ctx, x, y, delayX, delayY, rad, canvasEl, gravity = 0.5, friction = 0.9) {
    this.x = x;
    this.y = y;
    this.delayX = delayX;
    this.delayY = delayY;
    this.rad = rad;
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.friction = friction;
    this.gravity = gravity;
  }

  jump = () => {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ff00aa';
    this.ctx.strokeStyle = '#99004d';
    this.ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  };

  updateJump = () => {
    if (this.y > (this.canvasEl.height - this.rad)) {
      this.delayY = -this.delayY * this.friction;
    } else {
      this.delayY += this.gravity;
    }

    this.y += this.delayY;

    this.jump();
  };
}