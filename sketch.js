var sea, seamoving;
var ship, shipmoving;

function preload(){

 seamoving  = loadAnimation("sea.png") ;
  shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea= createSprite(200,160,20,50);
  sea.addAnimation("sea", seamoving);
  sea.x = sea.width /10;
  sea.velocityX = -4;
  sea.scale= 0.3
  
  ship=createSprite(200,200,20,20);
  ship.addAnimation("ship",shipmoving);
  ship.scale= 0.2;
  
  
  
}

function draw() {
  background("skyblue");
 
 if (sea.x < 0) {
  sea.x = sea.width / 10;
}
  
  
  drawSprites();  
}