var blood,maze,ball,maze1
function preload(){
  bloodImg=loadImage ("blood.png")
  mazeImg=loadImage ("maze.png")
  maze1Img=loadImage("maze1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-180);
  blood = createSprite(400, 200, 50, 50);
  blood.addImage(bloodImg);
  blood.scale=0.09;
  maze = createSprite(100,110)
  maze.addImage(mazeImg);
  maze.width=200;
  maze.height=5;
  maze.scale=0.5;
  maze1 = createSprite(500,100)
  maze1.addImage(maze1Img);
  maze1.width=200;
  maze1.height=5;
  maze1.scale=0.5;
  
  
 // maze1.addImage(maze1Img);
 // maze1.scale= 0.5;
 // maze1 = createSprite(25,100)
}

function draw() {
  background(231,76,100);
  if(keyDown (UP_ARROW) ){
    blood.y = blood.y-4;
  }
  if(keyDown (DOWN_ARROW)){
blood.y=blood.y+4;
  }
  if (keyDown(LEFT_ARROW)){
    blood.x=blood.x-4;
  }
if (keyDown(RIGHT_ARROW)){
  blood.x=blood.x+4;
}

  
  drawSprites();
}
