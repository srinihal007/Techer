//examples of 2 dimonsinal arrays
//var Cool = [["C++","Ruby"],["HTML","Lua"],["Java","Javascript"],["Python","C#"]]
//console.log(Cool[0][0]);
//console.log(Cool.length);
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
let balls = []
let boats = []
let towerImage,backgroundImage
function preload() {
 towerImage = loadImage("assets/tower.png")
 backgroundImage = loadImage("assets/background.gif")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  groundOption = {
  isStatic: true
  }
  towerOption = {
  isStatic: true
  }
ground = Bodies.rectangle(0,height -1, width *2,2,groundOption);
World.add(world,ground);
tower = Bodies.rectangle(160,360,160,310,towerOption);
World.add(world,tower);
angleMode(DEGREES)
angle = 20;
cannon = new Cannon(180,120,130,100,angle)
}


function draw() {
image(backgroundImage,0,0,1200,600)
  Engine.update(engine);
 rectMode(CENTER);
 fill("green")
  rect(ground.position.x,ground.position.y,width *2,2);
  push();
  imageMode(CENTER)
 image(towerImage,tower.position.x,tower.position.y,160,310);
pop();
cannon.display();
//extracting boats 1 by 1 from the boats array and displaying them on the screen using for loop
showBoats();


//cannonBall.display();
for (let i = 0; i < balls.length; i++) {
showCannonBalls(balls[i],i)
  collisionWithBoat(i);
}
}
function collisionWithBoat(index) {
  for (var i = 0; i < boats.length; i++) {
    if(boats[i] !== undefined && balls[index] !== undefined) {
      var collision = Matter.SAT.collides(balls[index].body, boats[i].body);
      if(collision.collided) {
  boats[i].remove(i);
  World.remove(world,balls[index].body)
  delete balls[index];
      }
    }
  }
}

function showBoats(){






if (boats.length > 0) {
  if(boats[boats.length - 1].body.position.x < width - 300 || boats[boats.length - 1] == undefined) {
   var positions = [-40,-60,-70,-20]
   var position = random(positions)
   let boat = new Boat(width , height - 100 , 170 , 170 , position)
 boats.push(boat);
  }
  for(var i = 0; i < boats.length; i++) {
    if(boats[i]) {
      Matter.Body.setVelocity(boats[i].body, {x:-1,y:0})
      boats[i].display();
  
    }
  }
  
}
else {
 let boat = new Boat(width - 80 , height - 60 , 170 , 170 , -80 )
 boats.push(boat);
}
}
function showCannonBalls(ball,index) {
if(ball) {
  ball.display()
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    ball.remove(index)
  }
}
}


















function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
   let cannonBall = new CannonBall(cannon.x,cannon.y)
   balls.push(cannonBall) 

   
  }
}
function keyReleased() {
if(keyCode == RIGHT_ARROW){
balls[balls.length - 1].shoot();
}
}





