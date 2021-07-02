var boy, boy_running, edges;
var path, pathImage;
var invisibleBoundary1;
var invisibleBoundary2;

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");  
}

function setup(){
  createCanvas(600,800);
  
  //create track
  path = createSprite(300, 0, 400, 20);
  path.addImage("path",pathImage);

  path.scale = 2.3;

  //create player
  boy = createSprite(300,620,20,50);
  boy.addAnimation("running", boy_running);

  //adding scale and position to boy     
  boy.scale = 0.12;
  boy.x = 200;

  //creating a invisible boundary1
  invisibleBoundary1 = createSprite(0, 400, 1 , 800);
  invisibleBoundary1.visible = false;

  //creating a invisible boundary2
  invisibleBoundary2 = createSprite(600, 400, 1 , 800);
  invisibleBoundary2.visible = false;

}

function draw() {
  background("white");

  boy.x = World.mouseX
  path.velocityY = 7;

  console.log(invisibleBoundary1)

  console.log(invisibleBoundary2)

  //logging the x position of the boy
  console.log(path.y);

  //resetting the path
  if (path.y > 1040){
    path.y = path.height/2;
  }

  boy.collide(invisibleBoundary1);
  boy.collide(invisibleBoundary2);


  drawSprites();
}
