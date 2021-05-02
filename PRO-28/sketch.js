var options ={
isStatic:false,
restitution:0,
density:1.2,
friction:1
}

detectollisiom(stoneObj,mango1);
detectollisiom(stoneObj,mango2);
detectollisiom(stoneObj,mango3);
detectollisiom(stoneObj,mango4);
detectollisiom(stoneObj,mango5);



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function keyPressed (){
	if(keyCode===32){
	Matter.Body.setposition(stoneObj.body,{x:235,y:420})
	launcherobject.attach(stoneObj.body);
	}
	}

function detectollision(stone,mango){
mangobodyPosition=mango.body.position
stoneBodyposition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
Matter.Body.setStatic(mango.body,false);
}


}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



