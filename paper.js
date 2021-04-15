class paper{
    constructor(x, y, radius){
        var options={
            'isStatic':false,
            'resolution':0.3,
            'friction':0,
            'density':1.2
        }
        var maxSides = 100;
        this.x = x;
        this.y = y;
        this.width = radius;
        this.height = radius;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, radius, options, maxSides);
        World.add(world, this.body);
    }
    display(){

        var paperPos=this.body.position;

        push();
        // translate(paperPos.x, paperPos.y+32);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();

        // I can't get this to work
        if (keyCode === UP_ARROW){
            Matter.Body.applyForce(this.body, this.body.position, {x:130, y:-145});
        }
    }
}