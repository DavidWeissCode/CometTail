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

  hasCollision() {
    let myColl = false
    if(this.y+25 > height || this.y < 0) {
      myColl = true
    }
    myStars.forEach(function(myStarsItem) {
      if(Math.sqrt(
         Math.pow(myComet.x - myStarsItem.x, 2) +
         Math.pow(myComet.y - myStarsItem.y, 2))
            < 10 + myStarsItem.r) {
        myColl = true
      }
    })
    return myColl
  }

  rise() {
    this.y += -5
    gravity = 1
  }

  show() {
    noStroke()
    fill(250, map(this.y, 400, 600, 150, 0), 10)
    ellipse(this.x, this.y, 40, 40)

    this.tail.forEach(function(tailItem, tailIndex) {
      //fill(25*((29-tailIndex)), 25*(29-tailIndex), 5*(29-tailIndex))
      fill(250, map(tailItem, 400, 600, 150, 0), 10)
      ellipse(200-(20-tailIndex)*10, tailItem, 2*tailIndex, 2*tailIndex)
    })

    this.tail.push(this.y)
    if(this.tail.length > 20) {
      this.tail.shift()
    }
  }

}
