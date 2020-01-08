var rood = 255;
var groen = 255;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(100,255,0);
  frameRate(5);
}

function draw() {
  stroke(255,255,0)
  strokeWeight(5)
  fill(0,0,255);
  ellipse(200, 200, 400, 400);
  rect(150,150,100,100);
  line(0,200,400,200);
  fill(rood,0,0);
  rood = random(0,255);
  ellipse(200, 200, 50, 50);

}