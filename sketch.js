const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ground;



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 var balloption={
   restitution:0.8
 }
  ball=Bodies.circle(200,200,20,balloption);
  World.add(world,ball);
  var groundoption={
    isStatic:true
  }
  ground=Bodies.rectangle(50,390,400,20,groundoption);
  World.add(world,ground);

}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
}