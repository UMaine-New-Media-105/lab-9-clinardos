# Lab-9-clinardos
assignment-3-clinardos created by GitHub Classroom
### [Link](https://editor.p5js.org/clinardos/full/3t-5bGTjY)

<p> For this lab assignment the task was to create 50 copies of a uniques sprite using classes, loops, and arrays. Next the sprites should bounce off the walls in both directions of x and y. So you should end up with 50 sprites bouncing off all walls. 
 <p> I started by creating a new sketch in p5.js. I used a sprite I had created previously that sketches out a robot like sprite. Next I set up a class for this robot with the contributors being: x,y, size, speedX, and speed Y. I then created a show function that would add the robot and a move function that set the speed of the robot and used if() functions to ensure the sprites would bounce off all walls. The class looked like this (I removed all of the code for the robot to slim down the code):
   
``` Javascript 
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
   
// This is where the robot code should be 

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
```

Next I created an array called robots[], and then added a subarray called robots [a] and used a nested loop to create the multiple different sprites with all different variables. This was done in the draw() function after defining variables above the setup() function. This looked like this: 
                                            
``` Javascript 
    for (let a = 0; a < 50; a++) {
    let x = random(width);
    let y = random(height);
    let s = random(0.5, 2.5);
    let speedX = random (0.2,1)
    let speedY = random (0.2,1)
    robots[a] = new Robot(x, y, s, speedX, speedY);
```
   
If you were to copy this code it should look like some variation of this but with moving robots: 
   
   
   <img width="623" alt="Screenshot 2023-04-12 at 2 14 22 PM" src="https://user-images.githubusercontent.com/124199359/231547709-3eefc396-4b63-42f8-af0d-95d1d666041c.png">

   
