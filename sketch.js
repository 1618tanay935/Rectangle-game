var MovingRect
var FixedRect 




function setup() {
  createCanvas(800,400);
  MovingRect= createSprite(400,200,80,30)
  MovingRect.shapeColor= "green";
  MovingRect.debug="true"
  FixedRect= createSprite(600,400,50,80)
  FixedRect.shapeColor="green";
  FixedRect.debug="true"

}



function draw() {
  MovingRect.x=World.mouseX
  FixedRect.y=World.mouseY

  if (FixedRect.x- MovingRect.x< FixedRect.width/2 + MovingRect.width/2 & MovingRect.x -FixedRect.x< FixedRect.width/2 + MovingRect.width/2
    ){
   MovingRect.shapeColor="red"
   FixedRect.shapeColor="red"
   
  }
  else { 
    MovingRect.shapeColor="green"
    FixedRect.shapeColor="green"

  }
  
  background(255,255,255);  
  drawSprites();
}