class Ball {
  constructor(game) {
    // IMAGES
    this.img = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.speed = {
      x: 4,
      y: 4,
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

    // WALL ON LEFT OR RIGHT
    if (
      this.position.x + this.ballSize > this.gameWidth ||
      this.position.x < 0
    ) {
      this.speed.x = -this.speed.x;
    }
    // WALL ON TOP AND BOTTOM
    if (
      this.position.y + this.ballSize > this.gameHeight ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    // CHECK COLLISION WITH PADDLE
    let bottomOfBall = this.position.y + this.ballSize;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.ballSize <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.ballSize;
    }
  }
}

export default Ball;
