class Paper
{
	constructor(x,y,radius)
	{
		var options={
            isStatic:false,
            'restitution':0.2,
            'friction':1,
            'density':1.2
			}

           
            this.body=Bodies.circle(x, y,radius, options);
            this.radius = 50;
            this.radius = 50;
         
         this.image = loadImage("paper.png");
         World.add(world, this.body);
         

	}
	display()
	{
			
       ellipseMode(RADIUS);
       push()
       var paperpos = this.body.position;
       translate(paperpos.x,paperpos.y);
       fill ("yellow");
       imageMode (CENTER);
       image (this.image,0,0,this.radius,this.radius);
       pop()
			
	}

}