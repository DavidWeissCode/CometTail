let myComet
let myStars = []
let gravity = 1
let starVel = 1

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

  if(Math.round(millis()/1000, 0) % 2 === 0) {
    starVel += 0.01
  }

  if(myComet.hasCollision()) {
    textSize(32)
    text("Score: " + Math.round(millis()/1000, 0), width/2 - 50, height/2)
    noLoop() // end of game
  }
}
