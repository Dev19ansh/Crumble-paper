class Paper{
	constructor(x,y,r)
	{
		var options = {
		restitution:0.3,
		friction:0,
		density:1.2
	}
		
		this.body=Bodies.circle(x,y, r, options)
		this.r=r
		World.add(world, this.body);
        this.image = loadImage("paper.png");

	}
	display()
	{
			var paperpos=this.body.position;		
			
			translate(paperpos.x, paperpos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, 60,60);

			
	}

}