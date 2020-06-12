function setup() {
  createCanvas(800,400);
  movingrect=createSprite(100,100,40,40) 
  fixedrect=createSprite(200,200,20,20)
  movingrect.shapeColor='green'
  fixedrect.shapeColor='green'
}

function draw() {
  background(255,255,255);
  movingrect.y=mouseY
  movingrect.x=mouseX
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
     fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
     movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
     fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      fixedrect.shapeColor='red'
      movingrect.shapeColor='red'
    }else{
      movingrect.shapeColor='green'
      fixedrect.shapeColor='green' 
    }
    
  drawSprites();
}