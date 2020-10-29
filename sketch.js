//hi Random person Sai
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(300,100,50,50);
  gameObject3 = createSprite(500,100,50,50);
  gameObject4 = createSprite(700,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
  movingRect.velocityX=-5;
  fixedRect.velocityX=5;
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

//  if(isTouching(movingRect,gameObject2)){  
//    movingRect.shapeColor = "blue";
//    gameObject2.shapeColor = "blue";
//  }else{
//   movingRect.shapeColor = "yellow";
//   gameObject2.shapeColor = "yellow";
//  }
bounceOff(movingRect,fixedRect);
  drawSprites();
}

