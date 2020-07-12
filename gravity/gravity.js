document.addEventListener("DOMContentLoaded", () => {
    // creates variable to reference the canvas
    const canvas = document.querySelector("canvas");

    // sets canvas width and height to the dimensions of the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // makes canvas width responsive to window resizing
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })

    // adds methods/functions to draw 2d shapes 
    const c = canvas.getContext("2d");
    
    // makes Circle contructor
    function Circle(x, y, dx, dy, r, color) {
        this.x = x;
        this.dx = dx;
        this.y = y;
        this.dy = dy;
        this.r = r;
        this.minRadius = r - 17;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2), false;
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color; 
            c.fill(); // fills in the stroke shape
        };
        this.update = () => {
            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy;
            }
            this.y += this.dy;
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
    for (let i = 0; i < 50; i++) {
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

    // redraws the circles like when the pages load  for when the window resizes
    const init = () => {
        circles = [];
        for (let i = 0; i < 50; i++) {
            r = 10 + Math.random() * 40;
            x = Math.random() * (innerWidth - 2 * r) + r;
            y = Math.random() * (innerHeight - 2 * r) + r;
            dx = Math.random() * 5;
            dy = Math.random() * 5;
            let randomIndex = Math.floor(Math.random() * colors.length);
            circles.push(new Circle(x, y, dx, dy, r, colors[randomIndex]));
        }
    }

});