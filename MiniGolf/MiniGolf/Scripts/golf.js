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
}, {
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
    x: 60 + Math.PI,
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
    x: 135,
    y: 170,
    rad: 20,
    thick: 10,
    xvel: 0,
    yvel: 2.5,
    shape: "circleMov"
}, {
    x: 65,
    y: 160,
    rad: 15,
    thick: 10,
    xvel: 3,
    yvel: 2,
    shape: "circleMov"
}, {
    x: 105,
    y: 240,
    rad: 30,
    thick: 10,
    xvel: 4,
    yvel: 2.5,
    shape: "circleMov"
}, {
    x: 75,
    y: 300,
    rad: 12,
    thick: 10,
    xvel: 5.6,
    yvel: 7,
    shape: "circleMov"
}, {
    x: 135,
    y: 305,
    rad: 13,
    thick: 10,
    xvel: -5,
    yvel: 0,
    shape: "circleMov"
}, {
    x: 145,
    y: 370,
    rad: 25,
    thick: 10,
    xvel: -3,
    yvel: -4,
    shape: "circleMov"
}, {
    x: 245,
    y: 300,
    rad: 20,
    thick: 10,
    xvel: -10,
    yvel: -9,
    shape: "circleMov"
}, {
    x: 200,
    y: 40,
    width: 10,
    height: 30,
    thick: 10,
    xvel: 0,
    yvel: 2,
    shape: "barrierMov"
}, {
    x: 210,
    y: 370,
    width: 10,
    height: 20,
    thick: 10,
    xvel: 0,
    yvel: 2,
    shape: "barrierMov"
}, {
    x: 250,
    y: 370,
    width: 10,
    height: 25,
    thick: 10,
    xvel: 0,
    yvel: 2.2,
    shape: "barrierMov"
}, {
    x: 290,
    y: 370,
    width: 50,
    height: 10,
    thick: 10,
    xvel: 0,
    yvel: 4,
    shape: "barrierMov"
}, {
    x: 390,
    y: 350,
    width: 10,
    height: 10,
    thick: 10,
    xvel: 2,
    yvel: 0,
    shape: "barrierMov"
}, {
    x: 370,
    y: 270,
    width: 10,
    height: 50,
    thick: 10,
    xvel: 0,
    yvel: 1,
    shape: "barrierMov"
}, {
    x: 310,
    y: 280,
    width: 10,
    height: 55,
    thick: 10,
    xvel: 0,
    yvel: 4,
    shape: "barrierMov"
}, {
    x: 330,
    y: 300,
    width: 30,
    height: 10,
    thick: 10,
    xvel: 2,
    yvel: 0,
    shape: "barrierMov"
}, {
    x: 15,
    y: 110,
    width: 325,
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
    x: 215,
    y: 249,
    width: 205,
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
    x: 185,
    y: 175,
    width: 50,
    height: 10,
    thick: 10,
    shape: "barrier"
}, {
    x: 175,
    y: 145,
    width: 10,
    height: 250,
    thick: 10,
    shape: "barrier"
}, {
    x: 185,
    y: 350,
    width: 200,
    height: 10,
    thick: 10,
    shape: "barrier"
}, {
    x: 405,
    y: 40,
    rad: 20,
    thick: 10,
    shape: "circle"
}, {
    x: 385,
    y: 180,
    rad: 15,
    thick: 10,
    shape: "circle"
}, {
    x: 285,
    y: 215,
    rad: 17,
    thick: 10,
    shape: "circle"
}, {
    x: 205,
    y: 130,
    rad: 10,
    thick: 10,
    shape: "circle"
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
var borders = JSON.parse(JSON.stringify(mediumObj));
var myVar;
var stop = 0;

//Map Variables
var xHole = 60;
var yHole = 60;

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
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        switch (borders[i].shape) {
            case "rectEmp":
                ctx.fillStyle = "black";
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                ctx.fillStyle = "forestgreen";
                ctx.fillRect(borders[i].x + borders[i].thick, borders[i].y + borders[i].thick, borders[i].width - 2 * borders[i].thick, borders[i].height - 2 * borders[i].thick);
                break;
            case "barrier":
                ctx.fillStyle = "black";
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                break;
            case "barrierMov":
                ctx.fillStyle = "yellow";
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                ctx.strokeRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                break;
            /*case "speedBoost":
                gradient = ctx.createLinearGradient(borders[i].x, 0, borders[i].x+borders[i].width, 0);
                addColorStops(gradient);
                ctx.fillStyle = gradient;
                ctx.fillRect(borders[i].x, borders[i].y, borders[i].width, borders[i].height);
                break;*/
            case "circle":
                ctx.fillStyle = "black";
                ctx.moveTo(borders[i].x + borders[i].rad, borders[i].y)
                ctx.beginPath();
                ctx.arc(borders[i].x, borders[i].y, borders[i].rad, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                break;
            case "circleMov":
                ctx.fillStyle = "yellow";
                ctx.strokeStyle = "black";
                ctx.moveTo(borders[i].x + borders[i].rad, borders[i].y)
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

//The collision function for the ball
function collision() {
    for (var i = 0; i < borders.length; i++) {
        switch (borders[i].shape) {
            case ("rectEmp"):
                ymin = ((borders[i].y + borders[i].thick + rad));
                ymax = ((borders[i].height - borders[i].thick + borders[i].y - rad));
                xmin = ((borders[i].x + borders[i].thick + rad));
                xmax = ((borders[i].width - borders[i].thick + borders[i].x - rad));

                if (x >= xmax || x <= xmin) {
                    xvel = -xvel;
                }
                if (y <= ymin || y >= ymax) {
                    yvel = - yvel;
                }
                break;
            case ("barrier"):
                ymin = ((borders[i].y - rad));
                ymax = ((borders[i].height + borders[i].y + rad));
                xmin = ((borders[i].x - rad));
                xmax = ((borders[i].width + borders[i].x + rad));

                if (x <= xmax && y >= ymin && y <= ymax && x >= xmin) {
                    if (!(x <= (xmax - Math.abs(xvel / timeScale)) && x >= (xmin + Math.abs(xvel / timeScale)))) {
                        xvel = -xvel;
                    };
                    if (!(y <= (ymax - Math.abs(yvel / timeScale)) && y >= (ymin + Math.abs(yvel / timeScale)))) {
                        yvel = -yvel;
                    } else { xvel = -xvel; yvel = -yvel;}//New test to avoid inserting the ball through corners.
                }
                break;
            case ("barrierMov"):
                ymin = ((borders[i].y - rad) - 30 * Math.abs(borders[i].yvel / timeScale));
                ymax = ((borders[i].height + borders[i].y + rad) + 30 * Math.abs(borders[i].yvel / timeScale));
                xmin = ((borders[i].x - rad) - 30 * Math.abs(borders[i].xvel / timeScale));
                xmax = ((borders[i].width + borders[i].x + rad) + 30 * Math.abs(borders[i].xvel / timeScale));

                if (x <= xmax && y >= ymin && y <= ymax && x >= xmin) {
                    if (!(x <= (xmax - Math.abs(xvel / timeScale)) && x >= (xmin + Math.abs(xvel / timeScale)))) {
                        alert("I am calling this");
                        xvel = -xvel + borders[i].xvel/2;
                        yvel += borders[i].yvel / 2;
                    };//There is a mistake somewhere here that causes the bounce from moving barriers to not always be correct in the y-direction. 
                    if (!(y <= (ymax - Math.abs(yvel / timeScale)) && y >= (ymin + Math.abs(yvel / timeScale)))) {
                        alert("I am calling that");
                        xvel += borders[i].xvel / 2;
                        yvel = -yvel + borders[i].yvel/2;
                    }
                }
                break;
            case ("circle"):
                var dx = borders[i].x - x;
                var dy = borders[i].y - y;
                if (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) <= (borders[i].rad + rad)) {
                    var reflectionPlaneAngle = Math.PI / 2 + Math.acos(dx / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))) * Math.sign(Math.asin(dy / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))));
                    var xvelReflected = xvel * Math.cos(2 * reflectionPlaneAngle) + yvel * Math.sin(2 * reflectionPlaneAngle);
                    var yvelReflected = xvel * Math.sin(2 * reflectionPlaneAngle) - yvel * Math.cos(2 * reflectionPlaneAngle);
                    x += -dx * (1 - Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / borders[i].rad);
                    y += -dy * (1 - Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / borders[i].rad);
                    xvel = xvelReflected;
                    yvel = yvelReflected;
                }
                break;
            case ("circleMov"):
                var dx = x - borders[i].x;
                var dy = y - borders[i].y;
                if (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) <= (borders[i].rad + rad)) {
                    var reflectionPlaneAngle = Math.PI / 2 + Math.acos(dx / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))) * Math.sign(Math.asin(dy / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))));
                    var xvelReflected = xvel * Math.cos(2 * reflectionPlaneAngle) + yvel * Math.sin(2 * reflectionPlaneAngle);
                    var yvelReflected = xvel * Math.sin(2 * reflectionPlaneAngle) - yvel * Math.cos(2 * reflectionPlaneAngle);
                    xvel = xvelReflected + borders[i].xvel;
                    yvel = yvelReflected + borders[i].yvel;
                }
                break;
        };
    }
    slowDown();// * 10 / time;
    x += xvel / timeScale;
    y += yvel / timeScale;
    vel = Math.sqrt(Math.pow(xvel, 2) + Math.pow(yvel, 2));
}

//Check if ball ends inside objects
function insideObjectsCheck() {
    for (var i = 0; i < borders.length; i++) {
        switch (borders[i].shape) {
            case ("rectEmp"):
                ymin = ((borders[i].y + borders[i].thick + rad));
                ymax = ((borders[i].height - borders[i].thick + borders[i].y - rad));
                xmin = ((borders[i].x + borders[i].thick + rad));
                xmax = ((borders[i].width - borders[i].thick + borders[i].x - rad));
                if (x < xmin) {
                    x = xmin;
                } else if (x > xmax) {
                    x = xmax;
                }
                if (y < ymin) {
                    y = ymin;
                } else if (y > ymax) {
                    y = ymax;
                }
                break;
            /*case ("barrierMov"):
                ymin = ((borders[i].y - rad));
                ymax = ((borders[i].height + borders[i].y + rad));
                xmin = ((borders[i].x - rad));
                xmax = ((borders[i].width + borders[i].x + rad));
                if (x + 5 * xvel / timeScale < xmax
                    && y - 5 * yvel / timeScale > ymin
                    && y + 5 * yvel / timeScale < ymax
                    && x - 5 * xvel / timeScale > xmin) {
                    
                    
                }
                break;*/
            case ("circleMov"):
            case ("circle"):
                var dx = x - borders[i].x;
                var dy = y - borders[i].y;
                var dL = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                var angle = Math.acos(dx / dL) * Math.sign(Math.asin(dy / dL));
                if (dL < (borders[i].rad + rad)) {
                    x = (borders[i].rad + rad) * Math.cos(angle) + borders[i].x;
                    y = (borders[i].rad + rad) * Math.sin(angle) + borders[i].y;
                }
                break;
        };
    }
}

//The collision of moving circles with other obstacles
function collisionMovs() {
    for (var j = 0; j < borders.length; j++) {
        var xvel = borders[j].xvel;
        var yvel = borders[j].yvel;
        var x1 = borders[j].x;
        var y1 = borders[j].y;
        if (borders[j].shape == "circleMov") {
            var rad = borders[j].rad;
            for (var i = 0; i < borders.length; i++) {
                switch (borders[i].shape) {
                    case ("rectEmp"):
                        ymin = ((borders[i].y + borders[i].thick + rad));
                        ymax = ((borders[i].height - borders[i].thick + borders[i].y - rad));
                        xmin = ((borders[i].x + borders[i].thick + rad));
                        xmax = ((borders[i].width - borders[i].thick + borders[i].x - rad));

                        if (x1 >= xmax || x1 <= xmin) {
                            xvel = -xvel;
                        }
                        if (y1 <= ymin || y1 >= ymax) {
                            yvel = -yvel;
                        }
                        break;
                    case ("barrier"):
                        ymin = ((borders[i].y - rad));
                        ymax = ((borders[i].height + borders[i].y + rad));
                        xmin = ((borders[i].x - rad));
                        xmax = ((borders[i].width + borders[i].x + rad));

                        if (x1 <= xmax && y1 >= ymin && y1 <= ymax && x1 >= xmin) {
                            if (!(x1 <= (xmax - Math.abs(xvel / timeScale)) && x1 >= (xmin + Math.abs(xvel / timeScale)))) {
                                xvel = -xvel;
                            };
                            if (!(y1 <= (ymax - Math.abs(yvel / timeScale)) && y1 >= (ymin + Math.abs(yvel / timeScale)))) {
                                yvel = -yvel;
                            }
                        }
                        break;
                    case ("circle"):
                        var dx = borders[i].x - x1;
                        var dy = borders[i].y - y1;
                        if (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) <= (borders[i].rad + rad)) {
                            var reflectionPlaneAngle = Math.PI / 2 + Math.acos(dx / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))) * Math.sign(Math.asin(dy / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))));
                            var xvelReflected = xvel * Math.cos(2 * reflectionPlaneAngle) + yvel * Math.sin(2 * reflectionPlaneAngle);
                            var yvelReflected = xvel * Math.sin(2 * reflectionPlaneAngle) - yvel * Math.cos(2 * reflectionPlaneAngle);
                            xvel = xvelReflected;
                            yvel = yvelReflected;
                        }
                        break;
                    case ("circleMov"):
                        if (j != i) {
                            var dx = borders[i].x - x1;
                            var dy = borders[i].y - y1;
                            var velScale = Math.sqrt((Math.pow(borders[i].xvel, 2) + Math.pow(borders[i].yvel, 2)) / (Math.pow(xvel, 2) + Math.pow(yvel, 2)));
                            if (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) <= (borders[i].rad + rad)) {
                                var reflectionPlaneAngle = Math.PI / 2 + Math.acos(dx / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))) * Math.sign(Math.asin(dy / (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))));
                                var xvelReflected = xvel * velScale * Math.cos(2 * reflectionPlaneAngle) + yvel * Math.sin(2 * reflectionPlaneAngle);
                                var yvelReflected = xvel * velScale * Math.sin(2 * reflectionPlaneAngle) - yvel * Math.cos(2 * reflectionPlaneAngle);
                                xvel = xvelReflected;
                                yvel = yvelReflected;
                            }
                        }
                        break;
                    case ("barrierMov"):
                        if (j != i) {
                            ymin = ((borders[i].y - rad));
                            ymax = ((borders[i].height + borders[i].y + rad));
                            xmin = ((borders[i].x - rad));
                            xmax = ((borders[i].width + borders[i].x + rad));
                            if (x1 <= xmax && y1 >= ymin && y1 <= ymax && x1 >= xmin) {
                                if (!(x1 <= (xmax - Math.abs(xvel / timeScale)) && x1 >= (xmin + Math.abs(xvel / timeScale)))) {
                                    xvel = -xvel;
                                };
                                if (!(y1 <= (ymax - Math.abs(yvel / timeScale)) && y1 >= (ymin + Math.abs(yvel / timeScale)))) {
                                    yvel = -yvel;
                                }
                            }
                        }
                        break;
                };
            }
            borders[j].xvel = xvel;
            borders[j].yvel = yvel;
            borders[j].x += xvel / timeScale;
            borders[j].y += yvel / timeScale;
        }
        if (borders[j].shape == "barrierMov") {
            var width = borders[j].width;
            var height = borders[j].height;
            for (var i = 0; i < borders.length; i++) {
                switch (borders[i].shape) {
                    case ("rectEmp"):
                        ymin = ((borders[i].y + borders[i].thick));
                        ymax = ((borders[i].height - borders[i].thick + borders[i].y - height));
                        xmin = ((borders[i].x + borders[i].thick));
                        xmax = ((borders[i].width - borders[i].thick + borders[i].x - width));
                        if (x1 >= xmax || x1 <= xmin) {
                            xvel = -xvel;
                        }
                        if (y1 <= ymin || y1 >= ymax) {
                            yvel = -yvel;
                        }
                        break;
                    case ("barrier"):
                        ymin = ((borders[i].y - height));
                        ymax = ((borders[i].height + borders[i].y));
                        xmin = ((borders[i].x - width));
                        xmax = ((borders[i].width + borders[i].x));
                        if (x1 <= xmax && y1 >= ymin && y1 <= ymax && x1 >= xmin) {
                            if (!(x1 <= (xmax - Math.abs(xvel / timeScale)) && x1 >= (xmin + Math.abs(xvel / timeScale)))) {
                                xvel = -xvel;
                            };
                            if (!(y1 <= (ymax - Math.abs(yvel / timeScale)) && y1 >= (ymin + Math.abs(yvel / timeScale)))) {
                                yvel = -yvel;
                            }
                        }
                        break;
                    case ("barrierMov"):
                        if (j != i) {
                            ymin = ((borders[i].y - height));
                            ymax = ((borders[i].height + borders[i].y));
                            xmin = ((borders[i].x - width));
                            xmax = ((borders[i].width + borders[i].x));
                            if (x1 <= xmax && y1 >= ymin && y1 <= ymax && x1 >= xmin) {
                                if (!(x1 <= (xmax - Math.abs(xvel / timeScale)) && x1 >= (xmin + Math.abs(xvel / timeScale)))) {
                                    xvel = -xvel;
                                };
                                if (!(y1 <= (ymax - Math.abs(yvel / timeScale)) && y1 >= (ymin + Math.abs(yvel / timeScale)))) {
                                    yvel = -yvel;
                                }
                            }
                        }
                        break;
                }
            }
            borders[j].xvel = xvel;
            borders[j].yvel = yvel;
            borders[j].x += xvel / timeScale;
            borders[j].y += yvel / timeScale;
            //Trying to check whether the moving object enters the area of the ball, and then to move the ball when it happens
            /*if (x <= borders[j].width + borders[j].x && y >= borders[j].y - height && y <= borders[j].height + borders[j].y && x >= borders[j].x - width) {
                alert("I trigger");
                if (!(x <= (borders[j].width + borders[j].x - Math.abs(xvel / timeScale)))) {
                    alert("I am here xmax");
                    x = (borders[j].width + borders[j].x - Math.abs(xvel / timeScale));
                } else if (!(x >= (((borders[j].width + borders[j].x)) + Math.abs(xvel / timeScale)))) {
                    x = ((borders[j].width + borders[j].x));
                    alert("I am here xmin");
                }
                if (!(y <= (borders[j].height + borders[j].y - Math.abs(yvel / timeScale)))) {
                    y = borders[j].height + borders[j].y
                    alert("I am here ymax");
                } else if (!(y >= (borders[j].y - height + Math.abs(yvel / timeScale)))) {
                    y = borders[j].y - height;
                    alert("I am here ymin");
                }
            }*/
        }
    }
    
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
    collisionMovs();
    insideObjectsCheck();
    if (vel <= 3.5 && vel > 0) {
        clearInterval(myVar);
        document.getElementById("messages").innerHTML += String(shots) + " : It didn't go in, try again! <br/>"
        pow.removeAttribute("disabled");
        angle.removeAttribute("disabled");
        button.removeAttribute("disabled");
    }
}

//Function to convert numbers inputted into a shot
function shot() {
    vel = pow.value * 10;
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
    xvel = Math.cos(angle.value / 180 * Math.PI) * vel;
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
    var xsize = Math.cos(dir * Math.PI / 180) * size;
    var ysize = Math.sin(dir * Math.PI / 180) * size;
    var xLeftProng = Math.cos((dir) * Math.PI / 180 - 60) * arrowHead;
    var yLeftProng = Math.sin((dir) * Math.PI / 180 - 60) * arrowHead;
    var xRightProng = Math.cos((dir) * Math.PI / 180 + 60) * arrowHead;
    var yRightProng = Math.sin((dir) * Math.PI / 180 + 60) * arrowHead;
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + xsize, y + ysize);
    ctx.lineTo(x + xsize + xLeftProng, y + ysize + yLeftProng);
    ctx.lineTo(x + xsize + xRightProng, y + ysize + yRightProng);
    ctx.lineTo(x + xsize, y + ysize);
    ctx.closePath();
    ctx.stroke();
}

function restart(obj) {
    switch (obj) {
        case 0:
            borders = JSON.parse(JSON.stringify(simpleObj));
            document.getElementById("messages").innerHTML = "You are playing the simple map, good luck!<br/>";
            break;
        case 1:
            borders = JSON.parse(JSON.stringify(mediumObj));
            document.getElementById("messages").innerHTML = "You are playing the medium map, good luck!<br/>";
            break;
        case 2:
            borders = JSON.parse(JSON.stringify(impossibleObj));
            document.getElementById("messages").innerHTML = "You are playing the impossible map, good luck!<br/>";
            break;
    }
    drawMap();
    x = xstart;
    y = ystart;
    drawBall();
    if (myVar != null) {
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
simple.addEventListener("click", function () { restart(0) });
medium.addEventListener("click", function () { restart(1) });
impossible.addEventListener("click", function () { restart(2) });
pow.addEventListener("input", drawArrow);
angle.addEventListener("input", drawArrow);
canvas.addEventListener("onmousedown", dragShot);
canvas.addEventListener("mousemove", mouseMove);
//canvas.addEventListener("onmouseup", mouseShot); //This function has not been created yet.

drawMap();
drawBall();
document.getElementById("messages").innerHTML = "You are playing the medium map, good luck!<br/>";