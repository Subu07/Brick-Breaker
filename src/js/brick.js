class Brick {
  constructor(game, position) {
    // IMAGES
    this.img = document.getElementById("img_brick");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = position;

    this.width = 52;
    this.height = 24;
  }

  update() {

  }

  draw(ctx){
      ctx.drawImage(
          this.img,
          this.position.x,
          this.position.y,
          this.width,
          this.height
      );
    
  }
}

export default Brick;
