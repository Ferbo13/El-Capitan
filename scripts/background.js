class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "img/cap_climbing.jpg";
    this.h = h,
      this.w = w,

      this.x = 0;
    this.y = 0;
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
