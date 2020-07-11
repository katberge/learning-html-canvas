document.addEventListener("DOMContentLoaded", () => {
    // creates variable to reference the canvas
    const canvas = document.querySelector("canvas");
    // sets canvas width and height to the dimensions of the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // adds methods/functions to draw 2d shapes 
    const c = canvas.getContext("2d");

    /*
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

    */

    // adds interactive animation (goes with mouse moving)
    // declares mouse variable for interactive animation
    let mouse = {
        x: undefined,
        y: undefined
    }

    // adds eventlisterner function for when the cursor moves
    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    });

    // makes Circle contructor
    function Circle(x, y, dx, dy, r, color) {
        this.x = x;
        this.dx = dx;
        this.y = y;
        this.dy = dy;
        this.r = r;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2), false;
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color; 
            c.fill(); // fills in the stroke shape
        };
        this.update = () => {
            if (this.x + this.r > innerWidth || this.x - this.r < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            // interactivity with mouse
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                this.r += 3;
            } else if (this.r > 5) {
                this.r -= 1;
            }
        }
    };
    
    // initialize variables
    let r;
    let x;
    let y;
    let dx;
    let dy;
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let circles = [];


    // loop to make multiple (30) randomly placed circles with random radii, random colors, and random speeds
    for (let i = 0; i < 500; i++) {
        r = 10 + Math.random() * 40;
        x = Math.random() * (innerWidth - 2 * r) + r;
        y = Math.random() * (innerHeight - 2 * r) + r;
        dx = Math.random() * 5;
        dy = Math.random() * 5;
        let randomIndex = Math.floor(Math.random() * colors.length);
        circles.push(new Circle(x, y, dx, dy, r, colors[randomIndex]));
    }
    
    // animation one circle bouncing back and forth
    const animate = () => {
        requestAnimationFrame(animate); // makes animate recursively call itself
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < circles.length; i++) {
            circles[i].draw();
            circles[i].update();
        }
    }
    animate();

});