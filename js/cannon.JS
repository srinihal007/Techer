class Cannon {
constructor(x,y,w,h,angle) {
   this.x = x
   this.y = y
   this.w = w
   this.h = h
   this.angle = angle
   this.cannonImage = loadImage("assets/canon.png");
this.cannonBaseImage = loadImage("assets/cannonBase.png");
}
display(){
//moving the cannon up and down using the left and right arrow keys
if(keyIsDown(UP_ARROW) && this.angle < 70) {
    this.angle = this.angle +1
}
if(keyIsDown(DOWN_ARROW) && this.angle > -30) {
    this.angle = this.angle -1
}
//code to create the cannon gun
push();
translate(this.x,this.y);
rotate(this.angle)
imageMode(CENTER);
image(this.cannonImage,0,0,this.w,this.h);
pop();
//code to create the cannon base
image(this.cannonBaseImage,70,35,200,200);
}

}