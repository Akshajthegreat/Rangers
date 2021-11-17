
var canvas =new fabric.Canvas("mycanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var blockimageobject= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
        blockimageobject= Img;
        blockimageobject.scaleToWidth(block_image_width);
        blockimageobject.scaleToHeight(block_image_height);
        blockimageobject.set({
            top:block_y,
            left:block_x
        });
        canvas.add(blockimageobject);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png");
		console.log("r Key Pressed");

	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
		console.log("g Key Pressed");

	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
		console.log("y Key Pressed");

	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("p Key Pressed");

	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
		console.log("b Key Pressed");

	}
	
}

