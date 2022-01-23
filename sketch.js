//Creating variables to store time
var hrs, mins, secs; 

//Creating variables for map function
var hrAngle, minAngle, secAngle; 

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  

  //Storing the time into these variables
  hrs = hour();
  mins = minute();
  secs = seconds();

  //Use map function to compute the angles for the clock
  secAngle = map(secs, 0, 60, 0, 360);
  minAngle = map(mins, 0, 60, 0, 360);
  hrAngle = map(hrs%12, 0, 12, 0, 360);

  //Draw the clock hands using the line function
  //Second Hand
  push();
  rotate(secAngle);
  stroke("green");
  strokeWeight(6);
  line(0,0,180,0);
  pop();

  //Minute Hand
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(6);
  line(0,0,200,0);
  pop();

  //Hour Hand
  push();
  rotate(hrAngle);
  stroke("purple");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  //Use the translate function to draw the hands at (0,0), and rotate 
  translate(400,400); 
  rotate(-90);

  //Draw arc using arc function
  //Second arc
  stroke("green");
  strokeWeight(6);
  arc(0, 0, 610, 610, 0, secAngle);

  //Minute arc
  stroke("blue");
  strokeWeight(6);
  arc(0, 0, 630, 630, 0, minAngle);

  //Hours arc
  stroke("purple");
  strokeWeight(6);
  arc(0, 0, 650, 650, 0, hrAngle);

  drawSprites();
}