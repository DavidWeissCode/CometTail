class Star {
  constructor() {
    this.x = width
    this.y = Math.random() * 600
    this.r = 10 + Math.random() * 15
  }

  move() {
    this.x -= 4 + starVel
  }

  show() {
    noStroke()
    fill(250, 250, 250)
    ellipse(this.x, this.y, this.r, this.r)
  }
}
