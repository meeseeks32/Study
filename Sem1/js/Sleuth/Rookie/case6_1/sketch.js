/*

Officer: 2481930
CaseNum: 303-0-97525810-2481930

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	Whilst the mouse is being dragged:
	- Make secretSafeKey_a equal to 28

	When any key is pressed:
	- Make secretSafeKey_a equal to 9

	When the mouse button is released:
	- Make secretSafeKey_a equal to 20

	Whilst the mouse is moving:
	- Make secretSafeKey_a equal to 0

	Whilst the mouse is being dragged:
	- Make secretSafeKey_b equal to 31

	When the mouse button is released:
	- Make secretSafeKey_b equal to 49

	When any key is released:
	- Make secretSafeKey_b equal to 5

	When any key is pressed:
	- Make secretSafeKey_b equal to 53



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var secretSafeKey_a;
var secretSafeKey_b;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secretSafeKey_a = 0;
	secretSafeKey_b = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    secretSafeKey_a = 0;
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
    secretSafeKey_a = 28;
    secretSafeKey_b = 31;
}

function mousePressed()
{
	console.log("mousePressed");
    
}

function mouseReleased()
{
	console.log("mouseReleased");
    secretSafeKey_a = 20;
    secretSafeKey_b = 49;
}

function keyPressed()
{
	console.log("keyPressed", key);
    secretSafeKey_a = 9;
    secretSafeKey_b = 53;
}

function keyReleased()
{
	console.log("keyReleased", key);
    secretSafeKey_b = 5;
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{


	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, secretSafeKey_a, 43);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(secretSafeKey_b);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
