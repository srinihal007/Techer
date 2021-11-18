class CannonBall {
constructor(x,y) {
    this.x = x
    this.y = y
    this.r = 30
    var bouncy = {
    isStatic: true 

    


    }
    this.body = Bodies.circle(x,y,this.r,bouncy);
    World.add(world,this.body);
    this.image = loadImage("assets/cannonball.png")
    this.trajectory = []

}   
shoot()     {
    
    var newAngle = cannon.angle * (3.14 / 180)
    var velocity = p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body,{x: velocity.x * (180 / 3.14),y: velocity.y * (180 / 3.14)});

}
remove(index) {
    Matter.Body.setVelocity(this.body,{x:0,y:0});
    setTimeout(()=> {
        World.remove(world,this.body)
        delete balls[index]
    },1000)
}
display(){
let pos = this.body.position
push();
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.r,this.r)
pop();

//getting the position of the cannonball and storing them in the trajectory array
if(this.body.velocity.x > 0 && this.body.position.x > 300) {
let position = [this.body.position.x,this.body.position.y]
this.trajectory.push(position)
}
//this.trajectory = [[1,2],[3,4],[5,6],[7,8],[9,10]]
//this.trajectory[[0][0]] this.trajectory[[0][1]]
//this.trajectory[[1][0]] this.trajectory[[1][1]]
//this.trajectory[[2][0]] this.trajectory[[2][1]] 

//setting Image to trajectory
for(var i = 0; i < this.trajectory.length;i++) {
image(this.image, this.trajectory[i][0],this.trajectory[i][1],5,5)
}
}
}

