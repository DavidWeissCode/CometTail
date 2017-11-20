class Star {
  constructor() {
    this.x = width
    this.y = Math.random() * 600
    this.r = Math.random() * 25
  }

  move() {
    this.x -= 5
  }

  show() {
    noStroke()
    fill(250, 250, 250)
    ellipse(this.x, this.y, this.r, this.r)
  }
}
