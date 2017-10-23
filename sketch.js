let myComet
let gravity = 1

function setup() {
  createCanvas(800, 600)
  myComet = new Comet()
}

function draw() {
  background(50)
  if(keyIsDown(UP_ARROW)) {
    myComet.rise()
  } else {
    myComet.fall()
  }
  myComet.show()
  if(myComet.hasCollision()) {
    noLoop()
  }
}

class Comet {
  constructor() {
    this.x = 200
    this.y = 100
    this.tail = []
  }

  fall() {
    this.y += gravity
    gravity *= 1.05
  }

  rise() {
    this.y += -5
    gravity = 2
  }

  show() {
    noStroke()
    fill(250, 250, 10)
    ellipse(this.x, this.y, 50, 40)

    this.tail.forEach(function(tailItem, tailIndex) {
      fill(25*((29-tailIndex)), 25*(29-tailIndex), 5*(29-tailIndex))
      ellipse(200-(20-tailIndex)*10, tailItem, 2*tailIndex, 2*tailIndex)
    })

    this.tail.push(this.y)
    if(this.tail.length > 20) {
      this.tail.shift()
    }
  }

  hasCollision() {
    return this.y+25 > height || this.y < 0
  }

}
