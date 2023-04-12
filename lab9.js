// Caitlin Linardos
// Lab 9

// establishing Array
let robots = [];
// Defining variables
let x
let y
let s
let speedX
let robot1 
let speedY

function setup() {
  createCanvas(500, 500);
  // robot1 = new Robot (100,200,1,2);
    for (let a = 0; a < 50; a++) {
    let x = random(width);
    let y = random(height);
    let s = random(0.5, 2.5);
    let speedX = random (0.2,1)
    let speedY = random (0.2,1)
    robots[a] = new Robot(x, y, s, speedX, speedY);

}
}

function draw() {
  background("aliceblue");
  
  for (let a =0; a< 50;a++){
  robots[a].show();
  robots[a].move();
  }
  // robot1.show();

}

class Robot {
  constructor (x,y,s,speedX,speedY){
    this.x = x 
    this.y = y
    this.s = s
    this.speedX = speedX
    this.speedY = speedY
  }
  show() {
  push()
  translate(this.x, this.y);
  scale (this.s);
  stroke (50);
  strokeWeight (0.46)

  // Antenna
  line(25, 2, 25, 10);
  
  
  // Head
  fill ('aquamarine')
  rect (7,7,36)
  
  fill ("teal")
  rect (8.5,8.5,33)

  fill("aquamarine");
  rect(10, 10, 30);
  
  
  // Ears
  fill ("aquamarine")
  rect (1,14.5,6,20)
  rect (43,14.5,6,20)

  fill("teal");
  rect(3, 16, 4, 17);
  rect(43, 16, 4, 17);
  
  fill ("aquamarine")
  rect (4.7,17.5,2.3,14)
  rect (43,17.5,2.3,14)
  
  
// Eyes
  fill("teal");
  rect(14.2, 15, 9);
  rect(27.2, 15, 9);

  fill ("aquamarine")
  rect(15.5, 16.3, 6.5);
  rect(28.5, 16.3, 6.5);
  
  fill (50)
  rect (16.5,17.3,4.5)
  rect (29.5,17.3,4.5)
  
  fill ("aliceblue")
  //rect (19,19.5,1.8)
  //rect (32,19.5,1.8)
  
  ellipse (18.7,19.5,2)
  ellipse (31.7,19.5,2)
  
  
  
// Mouth
  fill("teal");
  ellipse(25, 33, 10);
  

  fill(50);
  ellipse(25, 33, 7);
  
  fill ('salmon')
  ellipse (25,34.45, 5.9,4)
  
  
// Antenna bulb
  fill("salmon");
  ellipse(25, 2, 3.5);
  pop()
}
  move() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY
    
      if (this.x >= width || this.x <= 0) {
    this.speedX = this.speedX * -1;
         if (this.y >= height || this.y <= 0) {
    this.speedY = this.speedY * -1;
  
  }
  }
  }
}
