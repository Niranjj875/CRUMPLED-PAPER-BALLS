class Ball {
    constructor(x,y,radius) {
        var option = {
            isStatic:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius
        World.add(world, this.body);

    }
display(){
    ellipseMode(RADIUS)
      fill ("Blue")
       circle(this.body.position.x , this.body.position.y , this.radius);
}

};