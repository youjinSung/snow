var i;
var cx=[];
var cy=[];

function setup() { 

	createCanvas(windowWidth, windowHeight);
	frameRate(6);

}

function draw() { 
	
	background(200);
	fill(255); 
	noStroke();
	for (cy[i]=0; cy[i]<windowHeight; cy[i]+=10){
		cx[i]=random(0,windowWidth);
		size=random(5,15);
		ellipse(cx[i], cy[i], size,size);
	}
}
		