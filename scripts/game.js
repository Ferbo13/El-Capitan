var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,

  init: function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.h = this.canvas.height
    this.w = this.canvas.width
    this.start();
  },


  start: function () {
    this.reset();
  },

  reset: function () {
    this.background = new Background(this.w, this.h, this.ctx)
    this.player = new Player(this.ctx)

    this.background.draw()
    this.player.draw()

  }
}