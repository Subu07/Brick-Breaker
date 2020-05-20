export default class Paddle {
  constructor(gameWidth, gameHeight) {
    console.log("Paddle object is created.");
    this.width = 150;
    this.height = 30;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  draw(ctx) {
    console.log("paddle");

    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
