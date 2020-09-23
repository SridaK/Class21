var fixedRect, movingRect,rect1;
var rect2, rect3;
function setup() {

  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor="green"
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"
  rect1 = createSprite(200, 300, 50, 50);
  rect2 = createSprite(200, 600, 50, 50)
  rect3 = createSprite(200, 100, 50, 50);
  rect2.velocityY = -5;
  rect3.velocityY = 5;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //functions with arguments/parameters
  if(isTouching(movingRect,rect1)){
    rect1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    rect1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  bouncing(rect2, rect3);//function call
  drawSprites();
}
//function with arguments and return values;
