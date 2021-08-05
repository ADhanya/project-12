var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaves, leavesImg;
var apples, applesImg, appleImg,apple;

function preload()
{  
//load images;
  
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
 createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples();
apple = createSprite(random(50,350),40,10,10);
// add image to apple sprite - 
apple.addImage(appleImg);
//scale the sprite if required-
apple.scale=0.1;
// give the velocity so that the apples moves downwards-
apple.velocityY= +2;
// give life time 
apple.lifetime = 250;
//make the apples appear at random
apple.y = Math.round(random(0,0)); //(change the numbers but how much not sure..**)

function createLeaves();
leaves = createSprite();
leaves.addImage(leavesImg);   //(apparently you need to add orange leaves..should i change the img?..**)
leaves.scale = 0.2
leaves.velocityY = +1;
leaves.lifetime = 250;

//(output isnt showing.ask teacher..**)
//(move rabbit using mouse x..**)

function draw() {
  background(0);
                                                                 //(i have added code for random apples and leaves and framecount with % but i
var select_sprites = Math.round(random(1,2));                           //dont understand why output isnt coming..**)

if(frameCount % 80 == 0)
 {
  if (select_sprites == 1) {
    //call createApples function; (//not sure if this is how you call function ..**)
    createApples();                                                                                       
  }
  else {
    //call createLeaves function; (//not sure if this is how u call function..**)
    createLeaves();
  }
}
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();                                                                           
};
