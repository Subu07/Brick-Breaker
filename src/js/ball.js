class Ball {
  constructor(gameWidth, gameHeight) {
    // IMAGES
    this.img = document.getElementById("img_ball");

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.speed = {
      x: 2,
      y: 2,
    };

    this.position = {
      x: 10,
      y: 10,
    };

    this.ballSize = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.ballSize,
      this.ballSize
    );
  }
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if(this.position.x+ this.ballSize > this.gameWidth || this.position.x<0){
        this.speed.x = - this.speed.x;
    }

      if (this.position.y + this.ballSize> this.gameHeight || this.position.y < 0) {
          this.speed.y = - this.speed.y;
      }

  }
}

export default Ball;
