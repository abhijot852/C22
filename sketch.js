const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var circle_options = {
    restitution: 1.0

}
   ground= Bodies.rectangle(0,390,800,20,ground_options);
    World.add(world,ground);
   object= Bodies.rectangle(99,99,50,50,circle_options);
   World.add(world,object);
  

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
  rect(object.position.x,object.position.y,50,50);

}
