class Player {
  constructor(ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "img/player_ok.png";
    this.h = 100
    this.w = 100

    this.x = 600;
    this.y = 500;
  }

  draw() {
    this.img.onload = () => {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
  }
}

