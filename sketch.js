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
    noLoop() // end of game
  }
}
