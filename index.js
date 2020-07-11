document.addEventListener("DOMContentLoaded", () => {
    // creates variable to reference the canvas
    const canvas = document.querySelector("canvas");
    // sets canvas width and height to the dimensions of the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // adds methods/functions to draw 2d shapes 
    const c = canvas.getContext("2d");
    // creates a filled in rectangle
    // c.fillRect(x, y , w, h) where x & y are start coordinates and w & h are width and height
    c.fillStyle = "rgb(255, 87, 51)" // changes color of filled shape
    c.fillRect(100, 100, 200, 50);
    // draws a line (moveTo and strokeTo take xy coordinates)
    c.beginPath();
    c.moveTo(700, 200);
    c.lineTo(400, 500);
    c.lineTo(700, 500);
    c.lineTo(700, 300);
    c.strokeStyle = "#900c3f" // changes color of lines
    c.stroke();
    // draws a circle
    // arc(x, y, radius, startAngle, endAngle, anticlockwise?: boolean)
    c.beginPath();
    c.arc(300, 150, 20, 0, Math.PI * 2), false;
    c.stroke();
});