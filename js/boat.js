class Boat {
    constructor(x,y,w,h,boatPos) {
    let options = {
        restitution: 0.8,
        friction: 1,
        density: 1,
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    this.image = loadImage("assets/boat.png");
    this.boatPosition = boatPos
    World.add(world,this.body);
    }
    remove(index) {
        
        setTimeout(() => {
World.remove(world, boats[index].body)
delete boats[index]
        }, 2000)

    }
display() {
var pos = this.body.position
push();
translate(pos.x,pos.y);
imageMode(CENTER)
image(this.image,0,this.boatPosition,this.width,this.height)
pop();
}
}
