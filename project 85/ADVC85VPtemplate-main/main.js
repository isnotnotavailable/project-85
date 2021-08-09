canvas= document.getElementById('mycanvas')
ctx = canvas.getContext("2d")

random_name = Math.floor(Math.random() * 4);

rover_width = 100;
rover_height = 90;

rover_img ="car2.png"

rover_x = 10;
rover_y = 10;

function add() {
 background_imgTag = parkingLot.parkingLot; 
 background_imgTag.onload = uploadBackground;
 background_imgTag.src = background_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed)
if(keyPressed == '38')
{
    up();
    console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = "+ rover_x + "| y = "+rover_y);
        uploadBackground();
        uploadrover();

    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When up down is pressed, x = "+ rover_x + "| y = "+rover_y);
        uploadBackground();
        uploadrover();

    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x=rover_x - 10;
        console.log("When up left is pressed, x = "+ rover_x + "| y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x=rover_x + 10;
        console.log("When up right is pressed, x = "+ rover_x + "| y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}