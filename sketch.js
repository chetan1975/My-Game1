var bg,bgImg;
var thief , thiefImg;
var gr , grImg , gr2 , gr3

function preload(){

  bgImg = loadImage("tower.png");
  //PC
  thiefImg = loadImage("Thief.jpg");

  grImg = loadImage ("Gr.jpg")

}

function setup() {
  
  createCanvas(600,600);
  
  bg = createSprite(300,300, 800,400);
  bg.addImage(bgImg);
  bg.scale = 1.1


  thief = createSprite(250,260,50,50);
  thief.addImage(thiefImg);
  thief.scale = 0.1

  gr = createSprite(300,330,50,50)
  gr.addImage (grImg)
  gr.scale = 0.9

  gr2 = createSprite(300,600,50,50)
  gr2.addImage (grImg)
  gr2.scale = 0.9
  
  gr3 = createSprite(300,0,50,50)
  gr3.addImage (grImg)
  gr3.scale = 0.9
  
  
}

function draw() {
  
  background(255,255,255);  
 
  if(keyDown("UP_ARROW") && thief.y >= 159) {
    thief.velocityY = -3;
  }

  thief.velocityY = thief.velocityY + 0.8

  thief.collide(gr)

  // when the thief goes on the next floor 
  // the floor which was above it should move up and a new floor s
  drawSprites();
  
}