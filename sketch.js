
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

var engine, world;
var ball ; 



function setup() {
	createCanvas(800, 700);

  var ball_option ={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(100,600,10);
ground = new Ground (400 , 680,800,20);

leftSide = new Cup (550,620,20,100);
bottom = new Cup (610, 660,100,20);
rightSide = new Cup (670,620,20,100); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === D){
	Matter.Body.applyForce(ball.body, ball.body.postion, {x:15 , y: -15 })
	}

}