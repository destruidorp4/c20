
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var bola1;
var trampolim;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var bola1_options ={
    restitution: 1.2
  }
  var trampolim_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  bola1 = Bodies.circle(300,20,10, bola1_options);
  World.add(world,bola1)
  
  trampolim = Bodies.rectangle(300, 200, 200, 20, trampolim_options);
  World.add(world, trampolim)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(bola1.position.x,bola1.position.y, 30)
  rect(trampolim.position.x, trampolim.position.y, 200,10)

  
  
}

