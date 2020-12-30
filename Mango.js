class Mango{
    constructor(x, y, diametre){
       
        var opptions = {
            isStatic : true,
            restitution : 0,
            friction : 1.0
        }
        this.body = Bodies.circle(x, y, diametre, opptions);
        this.diametre = diametre;
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre,this.diametre);
        pop();

    }
}