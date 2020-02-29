var flyX;
var flyY;
var flySpeedx = 7;
var flySpeedy = 7;
var visible = true;
var flySound;

function preload() {
  soundFormats("mp3");
  flySound = loadSound("fly.mp3");
   soundFormats("wav");
  slurpSound = loadSound("slurp.wav");
}

function relocatefly() {
  flyX = random(width);
  flyY = random(height);
  visible = true;
  frameRate(60);
  flySound.play();
}



function setup() {
  createCanvas(600, 600);
  flyX = random(width);
  flyY = random(height);
  flySound.play();
}

function draw() {
  background(220);


  //dark green leg
  noStroke();
  fill(0, 180, 0);
  rect(80, 530, 440, 70, 35, 35, 35, 35);
  rect(120, 430, 90, 170, 45, 45, 45, 45);
  rect(390, 430, 90, 170, 45, 45, 45, 45);
  rect(140, 470, 320, 130, 45, 45, 45, 45);


  //light green leg
  fill(0, 210, 0);
  rect(200, 420, 90, 180, 45, 45, 45, 45);
  rect(310, 420, 90, 180, 45, 45, 45, 45);
  rect(200, 420, 200, 90, 45, 45, 45, 45);
  //dark green ball between legs
  fill(0, 180, 0);
  circle(300, 510, 20);
  //head
  fill(0, 240, 0);
  rect(140, 220, 320, 200, 100, 100, 100, 100);
  rect(160, 155, 120, 200, 100, 100, 100, 100);
  rect(320, 155, 120, 200, 100, 100, 100, 100);
  //nose
  fill(0, 180, 0);
  circle(280, 270, 20);
  circle(320, 270, 20);

  //mouse
  rect(230, 340, 140, 20, 10, 10, 10, 10);



  //eye
  noStroke();
  fill(255);
  circle(220, 230, 90);
  circle(380, 230, 90);
  //fly
  if (visible) {
    fill(0, 0, 0)
    ellipse(flyX, flyY, 20);
    flyX += random(-7, 4);
    flyY += random(-2, 8);
    flyX = flyX + flySpeedx
    flyY = flyY + flySpeedy


    if (flyX > width) {
      flySpeedx = -flySpeedx;
      flyX = width;
    }
    if (flyX < 0) {
      flySpeedx = -flySpeedx;
      flyX = 0;
    }
    if (flyY > height) {
      flyY = height;
      flySpeedy = -flySpeedy;
    }
    if (flyY < 0) {
      flyY = 0;
      flySpeedy = -flySpeedy;
    }
  }
  //eye movement
  if (mouseX < width / 2 & mouseY < height / 2) {
    fill(0, 0, 0);
    circle(210, 210, 30);
    circle(370, 210, 30);
  } else if (mouseX < width / 2 & height / 2 < mouseY < height) {
    fill(0, 0, 0);
    circle(210, 250, 30);
    circle(370, 250, 30);
  } else if (width / 2 < mouseX < width & mouseY < height / 2) {
    fill(0, 0, 0);
    circle(230, 210, 30);
    circle(390, 210, 30);
  } else if (width / 2 < mouseX < width & height / 2 < mouseY < height) {
    fill(0, 0, 0);
    circle(230, 250, 30);
    circle(390, 250, 30);
  }
  if (mouseIsPressed) {
    
    
    if (dist(mouseX, mouseY, flyX, flyY) < 20) {

flySound.stop();
slurpSound.play();
      // draw a line from the center of the frong mouth to mouseX, mouseY
      frameRate(2.5);
      fill(0, 180, 0);
      arc(300, 340, 150, 90, 0, 3.15);
      strokeWeight(20);
      stroke(255, 0, 0);
      line(300, 360, mouseX, mouseY);


      visible = false;
      // also, teleport the fly to somewhere new
      // and play a sound
      setTimeout(relocatefly, random(5000, 7000))

    }



  }
}
