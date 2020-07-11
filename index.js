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

    function Circle() {
        this.x = x;
        this.dx = dx;
        this.y = y;
        this.dy = dy;
        this.r = r;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2), false;
            c.stroke();
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
        }
    };

    // loop to make multiple (30) randomly placed shapes with varying (random) radii and random colors
    /* for (let i = 0; i < 30; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let r = 10 + Math.random() * 40
        const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
        let randomIndex = Math.floor(Math.random() * colors.length);
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2), false;
        c.strokeStyle = colors[randomIndex];
        c.stroke();
    } */
    

    // animation one circle bouncing back and forth
    let r = 30;
    let x = Math.random() * (innerWidth - 2 * r) + r; // random x that won't cause circle to get stuck on edge
    let dx = 5;
    let y = Math.random() * (innerHeight - 2 * r) + r; // random y that won't cause circle to get stuck on edge
    let dy = 5;

    let circle = new Circle(200, 200, 5, 5, 30);
    
    const animate = () => {
        requestAnimationFrame(animate); // makes animate recursively call itself
        c.clearRect(0, 0, innerWidth, innerHeight);

        circle.draw();
        circle.update();
    }
    animate();

});