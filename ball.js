class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':0.5
          
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      
      
      World.add(world, this.body);
    }


    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("red");
      fill("yellow");
      ellipse(0, 0, this.r);
      pop();
    }
  };
  