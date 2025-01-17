class Stone {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/stone.png") 
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image, 0, 0, 30, 30);
      pop();
    }
  };
  