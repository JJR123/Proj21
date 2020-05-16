var wall, thickness; 
var bullet, speed, weight; 

speed=Math.random(223,321) 
weight=Math.random(30,52) 
thickness=Math.random(22,83); 

function setup() {
  createCanvas(1600,400);
  //createSprite(400,200,50,50);
  car=createSprite(50,200,50,50);  
  wall=createSprite(1200,200,thickness,height/2);  
  
  car.velocityX=speed; 
  console.log(car); 
}

function draw() {
  background(0,0,0);   
  wall.shapeColor=color(80,80,80);    
  car.shapeColor="white";



if(hasCollided(bullet,wall)==true) 
{ 
  bullet.velocityX=0; 
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness); 

  if(damage>10) 
  { 
    wall.shapeColor=color(255,0,0); 
  } 
  if(damage<10) 
  { 
    wall.shapeColor=color(0,255,0); 
  }
} 


  hasCollided();
  drawSprites();
} 

function hasCollided(Lbullet, Lwall) 
{ 
  bulletRightEdge=lbullet.x+lbullet.width; 
  wallLeftEdge=lwall.x; 
  if(bulletRightEdge>=wallLeftEdge) 
  { 
    return true; 
  } 
    return false;
}