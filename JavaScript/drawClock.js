// Find the canvas Id Element
var canvas = document.querySelector("canvas");
// Get the contest of the Canvas Element as 2D
var ctx = canvas.getContext("2d");
// Get the height and width of the Canvas
ctx.canvas.width  = document.getElementById('photoCard').clientWidth;
ctx.canvas.height = document.getElementById('photoCard').clientHeight;
// Get the radius of the Canvas for the Clock
var radius = canvas.height / 2;
// Remap the position of the Clock to the centre of the Canvas
ctx.translate(radius, radius);
//Reduce the clock radius 90% to draw the clock inside the canvas
radius = radius * 0.90;

/**
 * @desc Draws the backgroud for the face of the clock
 *
 * @param Object ctx - the context of the Canvas Element in 2D
 * @param int radius - the wanted radius for the Clock
 */
function drawFace(ctx, radius) {
    "use strict";
    // Draw a white background for the Clock's face
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw the hands and border of the Clock's face
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.95, 0, radius * 1.15);
    ctx.strokeStyle = '#0F2F5B';
    ctx.lineWidth=5;
    ctx.stroke();
    // Draw the center (nose) for the Clock's face
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#0353A4';
    ctx.fill();
}

/**
 * @desc Draw the numbers for the Clock's face
 * 
 * @param Object ctx - the context of the Canvas Element in 2D
 * @param int radius - the wanted radius for the Clock
 */
function drawNumbers(ctx, radius) {
    "use strict";
    var ang, num;
    // The style for the drawing the numbers
    ctx.font = radius * 0.15 + "2px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    // Loop though each number need to be drawn
    for (num = 1; num < 13; num++) {
        // Draw the correct position for the current number being drawn
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

/**
 * @desc Draw the hand's for the Clock
 *
 * @param Object ctx - the context of the Canvas Element in 2D
 * @param int pos - the wanted for the Clock's hands
 * @param int length - the wanted length for the Clock's hands
 * @param int width - the wanted width for the Clock's hands
 *
 */
function drawHand(ctx, pos, length, width) {
    "use strict";
    // Draw the clocks hand
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

/**
 * @desc Draw the current time on the Clock
 *
 * @param Object ctx - the context of the Canvas Element in 2D
 * @param int radius - the wanted radius for the Clock
 */
function drawTime(ctx, radius) {
    "use strict";
    // Get the current time
    var now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    // Get the correct poistion for the hour of the current time
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
    // Draw the hour hand according to the current time 
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    // Get the correct position for the minutes of the current time
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    // Draw the minute hand according to the current time
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // Get the correct position for the seconds for the current time
    second = (second * Math.PI / 30);
    // Draw the second hand according to the current time
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

/**
 * @desc Draw the face, numbers, hands and time of the clock. Resize the clock 
 *       as the window is resized.
 * @param none
 */

var draw = function () {
    "use strict";
    // Refresh the background dimensions when the canvas is rezied
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.canvas.width  = document.getElementById('photoCard').clientWidth;
    ctx.canvas.height = document.getElementById('photoCard').clientHeight;
    // Get the radius of the Canvas for the Clock
    var radius = canvas.height / 2;
    // Remap the position of the Clock to the centre of the Canvas
    ctx.translate(radius, radius);
    //Reduce the clock radius 90% to draw the clock inside the canvas
    radius = radius * 0.90;
    
    // Draw the whole Clock
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

// Redraw on a interval of on second
setInterval(draw, 1000);