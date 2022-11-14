//shout out to Jawon Han for the starry sky idea
//shout out to Jacob Posada for the rain drop idea


let stars = new Array(200);
let boat1;
let drops = [];
let scene = 1;
let birdSpeed = 10;
let birdDirection = 0;

function setup(){
  boatcolor1 = color(255);
  createCanvas(800,800);
  for(let a = 0; a < stars.length; a++) {
    stars[a] = random(800);
  }
  for (let i = 0; i < 250; i++){
    drops[i] = new Rain();
  }
  
  boat1 = new boat(600, 600, 1);
}

function draw(){
  if(scene == 1){
    
 background(11, 14, 40);
  moon(200);
    starrySky();
  ocean();
  wave();
    boat1.display(color(255));
  boat1.move();
  
  for (let i = 0; i < 250; i++){ 
      drops[i].display(); 
      drops[i].fall(); 
      if (drops[i].y > height + 200){
        drops[i] = new Rain(); 
    }
  }
  }
  if(scene == 2){
    background (245, 126, 10, 96)
     noStroke();
  sun();
    birdMove();
    
  
    
  
  fill(95, 140, 211);
  rect(0,500,width,500);
  }
}
  
    
    function wave(){
      noFill();
  stroke(14, 109, 181);
  strokeWeight(45);
  beginShape();
  vertex(0, 560);
  bezierVertex(200, 600, 350, 440, 800, 600);
  endShape();

  noFill();
  stroke(0, 83, 138);
  strokeWeight(15);
  beginShape();
  vertex(0, 560);
  bezierVertex(350, 650, 300, 400, 800, 620);
  endShape();

  noFill();
  stroke(255);
  strokeWeight(10);
  beginShape();
  vertex(0, 600);
  bezierVertex(400, 650, 350, 480, 820, 650);
  endShape();

  noFill();
  stroke(0, 42, 105);
  strokeWeight(20);
  beginShape();
  vertex(0, 630);
  bezierVertex(200, 680, 520, 550, 820, 680);
  endShape();

  noFill();
  stroke(14, 109, 181);
  strokeWeight(20);
  beginShape();
  vertex(0, 680);
  bezierVertex(200, 740, 350, 600, 820, 720);
  endShape();

  noFill();
  stroke(0, 42, 105);
  strokeWeight(25);
  beginShape();
  vertex(0, 730);
  bezierVertex(300, 750, 520, 660, 820, 780);
  endShape();

  noFill();
  stroke(255);
  strokeWeight(8);
  beginShape();
  vertex(0, 700);
  bezierVertex(200, 780, 500, 600, 820, 760);
  endShape();

  noFill();
  stroke(0, 83, 138);
  strokeWeight(25);
  beginShape();
  vertex(0, 770);
  bezierVertex(380, 790, 500, 720, 820, 790);
  endShape();

  noFill();
  stroke(14, 109, 181);
  strokeWeight(15);
  beginShape();
  vertex(0, 780);
  bezierVertex(350, 820, 420, 750, 820, 800);
  endShape();
    }
  
  
function starrySky() {

  fill(255);
  for(let b = 0; b < 200; b += 2) {

  stroke(255, random(0, 255));
  strokeWeight(0.75);
  ellipse(stars[b], stars[b + 1], 2, 2);
  }
}

function moon(moonX) {
  fill(200);
  noStroke();
  ellipse(moonX, moonX, 125, 125);
  fill(11, 14, 40);
  noStroke();
  ellipse(moonX + 35, moonX - 10, 125, 125);
}
  function ocean(){
  fill(95, 140, 211);
  noStroke();
  rect(0, 500, 900, 400);
}
  function sun(){
    fill(246, 222, 12, 96);
    ellipse(400, 400, 100, 100)
  }

function bird(xBird, yBird) {
  stroke(0);
  strokeWeight(3);
  strokeJoin(ROUND);
  line(xBird, yBird, xBird + 10, yBird + 10);
  line(xBird + 10, yBird + 10, xBird, yBird + 20);
}

function birdFlock() {
  for(let j = 30; j <= 200; j += 35) {
    for(let i = 30; i <= j; i += 35) {
      if(j < 205 && i == 30) {
        bird(i, j);
      }
      if(j < 170 && i == 65) {
         bird(i, j);
      }
      if(j < 135 && i == 100) {
        bird(i, j);
      }
    }
  }
}


function birdMove() {
  push();
  translate(birdSpeed, birdDirection);
  scale(0.8);
  birdFlock();
  birdSpeed += 1;
  birdDirection += 0;
  pop();
  if(birdSpeed > 800) {
    birdSpeed = -150;
    birdDirection = 0;
  }
  
}



class Rain {
  constructor () {
    this.x = random (width);
    this.y = random (-3000, 0);
    this.r = random (1, 40);
    this.splash = this.r;
    this.speed = this.r*0.1;
  }
  display() {
    if (this.y > 700 + (this.r*4)) { 
      if (this.splash < 3*this.r) {
        noFill();
        strokeWeight(2);
        stroke (155, 180, 255, this.r*3.5);
        ellipse (this.x, 700 + (this.r*4), this.splash*0.7, this.splash*0.25);
        this.splash+=.5;
      }
    } else { 
      noStroke();
      fill (155, 180, 255, this.r*3.5);
      ellipse (this.x, this.y, this.r*0.08, this.r);
  }
}
  fall() { 
    this.y += this.speed;
  }
}

class boat{
  constructor (x, y, s){
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }
  display(boatcolor){
    fill(boatcolor);
    stroke(boatcolor);
    strokeWeight(3);
    triangle(this.x_, this.y_, this.x_, this.y_ + 100, this.x_+50, this.y_+50);
    quad(this.x_-60, this.y_+100, this.x_+80, this.y_+100, this.x_+50, this.y_ + 200, this.x_-20, this.y_+200);
  }
  move(){
    this.x_ = this.x_ + this.speed;
    
    if (this.x_ > width + 70){
      this.x_ = -100
    }
  }  
}


function mousePressed(){
  scene++;
  if(scene > 2){
    scene = 1;
  }
}
