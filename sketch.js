let myComet
let myStars = []
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

  if(Math.random() < 0.1) {
    myStars.push(new Star())
  }
  myStars.forEach(function(myStarsItem, myStarsIndex) {
    myStarsItem.move()
    myStarsItem.show()
    if(myStarsItem.x + myStarsItem.r < 0) {
      myStars.splice(myStarsIndex, 1)
    }
  })


  if(myComet.hasCollision()) {
    noLoop() // end of game
  }
}
