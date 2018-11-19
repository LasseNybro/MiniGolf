//Map JSON
var simpleObj = [{
    x: 15,
    y: 15,
    width: 415,
    height: 215,
    thick: 10,
    shape: "rectEmp"
}, {
        x: 200,
        y: 110,
        rad: 50,
        thick: 10,
        shape: "circle"
    },{
        x: 390,
        y: 120,
        shape: "hole"
    }, {
        x: 45,
        y: 130,
        shape: "start"
    }]

var mediumObj = [{
    x: 15,
    y: 15,
    width: 415,
    height: 415,
    thick: 10,
    shape: "rectEmp"
}, {
    x: 15,
    y: 175,
    width: 120,
    height: 10,
    thick: 10,
        shape: "barrier"
    }, {
        x: 250,
        y: 50,
        width: 50,
        height: 100,
        thick: 10,
        shape: "barrier"
    }, {
        x: 90,
        y: 300,
        width: 300,
        height: 25,
        thick: 10,
        shape: "barrier"
    }, {
        x: 315,
        y: 200,
        width: 115,
        height: 10,
        thick: 10,
        shape: "barrier"
    }, {
        x: 200,
        y: 15,
        width: 10,
        height: 285,
        thick: 10,
        shape: "barrier"
    }/*, {
        x: 200,
        y: 325,
        width: 100,
        height: 95,
        thick: 0,
        shape: "speedBoost"
    }*/, {
        x: 390,
        y: 60,
        shape: "hole"
    }, {
        x: 60+Math.PI,
        y: 50 + Math.PI,
        shape: "start"
    }]

var impossibleObj = [{
    x: 15,
    y: 15,
    width: 415,
    height: 415,
    thick: 10,
    shape: "rectEmp"
}, {
    x: 15,
    y: 105,
    width: 320,
    height: 10,
    thick: 10,
    shape: "barrier"
}, {
    x: 370,
    y: 115,
    width: 50,
    height: 10,
    thick: 10,
    shape: "barrier"
}, {
    x: 335,
    y: 105,
    width: 10,
    height: 100,
    thick: 10,
    shape: "barrier"
}, {
    x: 245,
    y: 230,
    width: 185,
    height: 10,
    thick: 10,
    shape: "barrier"
}, {
    x: 235,
    y: 170,
    width: 10,
    height: 70,
    thick: 10,
    shape: "barrier"
    }, {
        x: 235,
        y: 115,
        width: 10,
        height: 40,
        thick: 10,
        shape: "barrier"
    }, {
    x: 215,
    y: 215,
    shape: "hole"
}, {
    x: 30 + Math.PI,
    y: 40 + Math.PI,
    shape: "start"
}];

//Loading in the map
var simple = document.getElementById("simMap");
var medium = document.getElementById("medMap");
var impossible = document.getElementById("impMap");

//General Variables
var canvas = document.getElementById("golfMap");
var ctx = canvas.getContext('2d');
var button = document.getElementById("button");
var time = 1; //timestep size
var timeScale = (100 / time);
var totTime = 0;
var arbFac = 5;
var arrowHead = 10;
var borders = mediumObj;
var myVar;
var stop = 0;

//Map Variables
var xHole=60;
var yHole=60;

//Golf Ball Variables
var angle = document.getElementById("angle");
var pow = document.getElementById("pow");
var xstart = 60 + Math.PI; //initial values
var ystart = 50 + Math.PI; //initial values
var shots = 0; //counts the total number of shots
var xvel = 0;
var yvel = 0;
var vel = 0;
var acc = -0.25;
var rad = 5;

//Dragshot Variables
var xClick;
var yClick;
var press;
var dragDiv = document.getElementById("dragShot");

//Draw Functions

/*function addColorStops(gradient) {
    gradient.addColorStop(Math.floor(0 + totTime - Math.floor(totTime)), "yellow");
    gradient.addColorStop(Math.floor(0.25 + totTime - Math.floor(totTime)), "orange");
    gradient.addColorStop(Math.floor(0.5 + totTime - Math.floor(totTime)), "red");
    gradient.addColorStop(Math.floor(0.75 + totTime - Math.floor(totTime)), "orange");
    gradient.addColorStop(Math.floor(1.0 + totTime - Math.floor(totTime)), "yellow");
}*/

function drawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < borders.length; i++) {
        switch (borders[i].shape) {
            case "rectEmp":
                ctx.fillStyle = "black";
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                ctx.fillStyle = "forestgreen";
                ctx.fillRect(borders[i].x + borders[i].thick, borders[i].y + borders[i].thick, borders[i].width - 2* borders[i].thick, borders[i].height - 2* borders[i].thick);
                break;
            case "barrier":
                ctx.fillStyle = "black";
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                break;
            /*case "speedBoost":
                gradient = ctx.createLinearGradient(borders[i].x, 0, borders[i].x+borders[i].width, 0);
                addColorStops(gradient);
                ctx.fillStyle = gradient;
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                break;*/
            case "circle":
                ctx.fillStyle = "black";
                ctx.strokeStyle = "black";
                ctx.moveTo(borders[i].x + borders[i].rad, borders[i].y) //Something here is off, it doesn't move to "hole" before it draws the "hole", and it is being drawn twice...
                ctx.beginPath();
                ctx.arc(borders[i].x, borders[i].y, borders[i].rad, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                break;
            case "hole":
                xHole = borders[i].x;
                yHole = borders[i].y;
                ctx.fillStyle = "grey";
                ctx.strokeStyle = "black";
                ctx.moveTo(xHole + rad + 1, yHole)
                ctx.beginPath();
                ctx.arc(xHole, yHole, rad + 1, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                break;
            case "start":
                xstart = borders[i].x;
                ystart = borders[i].y;
                break;
        }
    }
}

// Setting starting position for golfball
var x = xstart;
var y = ystart;

/*function drawHole() {
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(xHole,yHole,rad+1,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}*/

function drawBall() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

//Checking end condition and collisions
function goal() {
    if (x < xHole + rad
        && x > xHole - rad
        && y < yHole + rad
        && y > yHole - rad
        && vel < 50) {
        x = xHole;
        y = yHole;
        if (shots == 1) {
            document.getElementById("messages").innerHTML += ("HOLE IN ONE! That is impressive!<br/>");
        } else {
        document.getElementById("messages").innerHTML += ("Congratulations! You got it in the hole in only " + shots + " shots.<br/>");
        }
        shots = 0;
        vel = 0;
        clearInterval(myVar);
        pow.setAttribute("disabled", "disabled");
        angle.setAttribute("disabled", "disabled");
        button.setAttribute("disabled", "disabled");
    };
}

function collision() {
    for (var i = 0; i < borders.length; i++) {
        switch (borders[i].shape) {
            case ("rectEmp"):
                /*if (x >= (borders[i].width - borders[i].thick + borders[i].x - rad)
                    || x <= (borders[i].x + borders[i].thick + rad)) {
                    if (y >= (borders[i].height - borders[i].thick + borders[i].y - rad)
                        || y <= (borders[i].y + borders[i].thick + rad)) {
                        xvel = -xvel;
                        yvel = -yvel;
                    } else {
                        xvel = -xvel;
                    }
                } else if (y >= (borders[i].height - borders[i].thick + borders[i].y - rad)
                    || y <= (borders[i].y + borders[i].thick + rad)) {
                    yvel = -yvel;
                }*/
                ymin = ((borders[i].y + borders[i].thick + rad));
                ymax = ((borders[i].height - borders[i].thick + borders[i].y - rad));
                xmin = ((borders[i].x + borders[i].thick + rad));
                xmax = ((borders[i].width - borders[i].thick + borders[i].x - rad));

                if (x >= xmax || x <= xmin) {
                    xvel = -1.01*xvel;
                }
                if (y <= ymin || y >= ymax) {
                    yvel = -1.01*yvel;
                }

                //Make a new collision checker, for x and y individually and handle the case of both of them by checking both of them.

                /*    if (x >= xmax || y <= ymin || y >= ymax || x <= xmin) {
                    if (!(x <= (xmax - Math.abs(5 * xvel / timeScale)) && x >= (xmin + Math.abs(5 * xvel / timeScale)))) {
                        xvel = -xvel;
                    } else if (!(y >= (ymax + Math.abs(5 * yvel / timeScale)) && y <= (ymin + Math.abs(5 * yvel / timeScale)))) {
                        yvel = -yvel;
                    } else {
                        xvel = -xvel;
                        yvel = -yvel;
                    }
                }*/
                break;
            case ("barrier"):
                ymin = ((borders[i].y - rad));
                ymax = ((borders[i].height + borders[i].y + rad));
                xmin = ((borders[i].x - rad));
                xmax = ((borders[i].width + borders[i].x + rad));

                if (x <= xmax && y >= ymin && y <= ymax && x >= xmin) {
                    if (!(x <= (xmax - Math.abs(xvel / timeScale)) && x >= (xmin + Math.abs( xvel / timeScale)))) {
                        xvel = -xvel;
                    };
                    if (!(y <= (ymax - Math.abs( yvel / timeScale)) && y >= (ymin + Math.abs( yvel / timeScale)))) {
                        yvel = -yvel;
                    }
                }
                break;
            case ("circle"):

        };
    }
    slowDown()*10/time;
    x += xvel / timeScale;
    y += yvel / timeScale;
    vel = Math.sqrt(Math.pow(xvel, 2) + Math.pow(yvel, 2));
}

//Accounting for realism
function slowDown() {
        xvel *= 1 + acc / (timeScale * arbFac);
        yvel *= 1 + acc / (timeScale * arbFac);
}

//Function to run functions and ending each shot
function runFunctions() {
    totTime += time / 1000;
    drawMap();
    goal();
    drawBall();
    collision();
    if (vel <= 3.5 && vel >0) {
        clearInterval(myVar);
        document.getElementById("messages").innerHTML += String(shots) + " : It didn't go in, try again! <br/>"
        pow.removeAttribute("disabled");
        angle.removeAttribute("disabled");
        button.removeAttribute("disabled");
    }
}

//Function to convert numbers inputted into a shot
function shot() {
    vel = pow.value*10;
    if (pow.value > 10 || pow.value < 1) {
        pow.customError = true;
        pow.setCustomValidity("Must be in the range 1-10");
        pow.checkValidity();
        document.getElementById("messages").innerHTML += ("Power must be in the range 1-10, try again with a valid power value...<br/>");
        vel = 0;
        clearInterval(myVar);
        stop = 1;
    }
    pow.setAttribute("disabled", "disabled");
    angle.setAttribute("disabled", "disabled");
    button.setAttribute("disabled", "disabled");
    if (stop == 1) {
        pow.removeAttribute("disabled");
        angle.removeAttribute("disabled");
        button.removeAttribute("disabled");
        stop = 0;
    }
    xvel = Math.cos(angle.value/180*Math.PI) * vel;
    yvel = Math.sin(angle.value / 180 * Math.PI) * vel;
    shots += 1;
    myVar = setInterval(runFunctions, time);
};

//Add a function to allow dragging on canvas element to shoot, convert the distance dragged to power and the direction to angle, and insert these into the input boxes. That should allow for drag shooting.
//Function to draw the direction arrow
function drawArrow() {
    drawMap();
    drawBall();
    var size = 0;
    if (pow.value > 10) {
        size = 105
    } else if (pow.value <= 1) {
        size = 15
    } else {
        size = pow.value + 5;
    }
    var dir = angle.value;
    var xsize = Math.cos(dir * Math.PI / 180)*size;
    var ysize = Math.sin(dir * Math.PI / 180) * size;
    var xLeftProng = Math.cos((dir) * Math.PI / 180 - 60) * arrowHead;
    var yLeftProng = Math.sin((dir) * Math.PI / 180-60) * arrowHead;
    var xRightProng = Math.cos((dir) * Math.PI / 180+60) * arrowHead;
    var yRightProng = Math.sin((dir) * Math.PI / 180+60) * arrowHead;
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x ,y);
    ctx.lineTo(x + xsize, y + ysize);
    ctx.lineTo(x + xsize + xLeftProng, y + ysize + yLeftProng);
    ctx.lineTo(x + xsize + xRightProng, y + ysize + yRightProng);
    ctx.lineTo(x + xsize, y + ysize);
    ctx.closePath();
    ctx.stroke();
}

function restart(obj) {
    switch(obj) {
        case 0:
            borders = simpleObj;
            document.getElementById("messages").innerHTML = "You are playing the simple map, good luck!<br/>";
            break;
        case 1:
            borders = mediumObj;
            document.getElementById("messages").innerHTML = "You are playing the medium map, good luck!<br/>";
            break;
        case 2:
            borders = impossibleObj;
            document.getElementById("messages").innerHTML = "You are playing the impossible map, good luck!<br/>";
            break;
    }
    drawMap();
    x = xstart;
    y = ystart;
    drawBall();
    if (myVar!=null) {
        clearInterval(myVar)
    };
    pow.removeAttribute("disabled");
    angle.removeAttribute("disabled");
    button.removeAttribute("disabled");
    shots = 0;
}

//Dragshot kode
function dragShot(event) {
    var rect = dragDiv.getBoundingClientRect();
    xClick = event.clientX - rect.left;
    yClick = event.clientY - rect.top;
    press = 1;
}

function mouseMove(event) {
    if (press == 1) {
        var factor = 10;
        var rect = dragDiv.getBoundingClientRect();
        xMouse = event.clientX - rect.left;
        yMouse = event.clientY - rect.top;
        deltax = xClick - xMouse;
        deltay = yClick - yMouse;
        var ang = Math.acos(deltax / Math.sqrt(Math.pow(deltax, 2) + Math.pow(deltay, 2))) / Math.PI * 180;
        var power = Math.sqrt(Math.pow(deltax, 2) + Math.pow(deltay, 2)) / factor;
        if (power > 10) { power = 10; }
        else if (power < 1) { power = 1; }
        pow.value = power;
        angle.value = ang;
    }
}

button.addEventListener("click", shot);
simple.addEventListener("click", function () { restart(0)});
medium.addEventListener("click", function () { restart(1)});
impossible.addEventListener("click", function () { restart(2)});
pow.addEventListener("input", drawArrow);
angle.addEventListener("input", drawArrow);
canvas.addEventListener("onmousedown", dragShot);
canvas.addEventListener("mousemove", mouseMove);
//canvas.addEventListener("onmouseup", mouseShot); //This function has not been created yet.

drawMap();
drawBall();
document.getElementById("messages").innerHTML = "You are playing the medium map, good luck!<br/>";