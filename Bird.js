class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smokeimage = loadImage("smoke.png");
    this.trejectory = [];
  }

  display() {
    super.display();

    if(this.body.velocity.x > 5 && this.body.position.x > 200){

    var pos = [this.body.position.x, this.body.position.y]

    this.trejectory.push(pos);
    
  }

    for(var i = 0; i < this.trejectory.length; i++){

      image(this.smokeimage, this.trejectory[i][0] , this.trejectory[i][1]);

    }
  }
}
