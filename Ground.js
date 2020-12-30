class Ground{
    constructor(x,y,w,h){

        var opp = {
            isStatic : true,
            friction : 0.4
        }
        this.body = Bodies.rectangle(x, y, w, h,opp);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        World.add(world, this.body);
    }

    display(){
    
        var groundPos=this.body.position;		
		push();
		translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.w, this.h);
        pop();

    }
}