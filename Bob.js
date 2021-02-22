class Bob {
    constructor (x , y, radius){
        var options ={
            isStatic :false,
            density: 0.5
        }
    this.body = Bodies.circle(x , y, radius , options);
    this.radius=radius;
    World.add(world , this.body);
    
    }
    display(){
        push();
        fill("pink");
        circle(this.body.position.x,this.body.position.y,2*this.radius );
        pop();
        
    }
    }