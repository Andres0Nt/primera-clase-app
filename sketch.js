var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);

}

function draw() 
{
  background(30);

  //movimiento del sprite hacia la derecha
  if(keyDown("right")){
    box.position.x=box.position.x+5;
  }
  //movimiento del sprite hacia la izquierda
  if(keyDown("left")){
    box.position.x=box.position.x-5;
  }
  //movimiento del sprite hacia arriba
  if(keyDown("up")){
    box.position.y=box.position.y-5;
  }
   //movimiento del sprite hacia abajo
   if(keyDown("down")){
    box.position.y=box.position.y+5;
  }
drawSprites();
}




