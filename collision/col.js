document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    // get cursor position and assign it to mouse object
    let mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    })

    // Circle constructor
    function Circle(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 5;
        this.dy = 5;
        this.color = color;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.strokeStyle = this.color;
            c.stroke();
            c.fillStyle = this.color;
        };
        this.update = () => {
            //if ()
        };
    };

    // colors array
    const colors = ["#f4d573", "#afdde3","#b7a5e3", "#eeaddb", "#88eab1", "#7392f4", "#f49573", "#f47392", "#c1ea88"];

    // creates two new Circles 
    let circles = [];
    for (let i = 0; i < 100; i++) {
        let r = 20;
        let x = r + (Math.random() * (canvas.width - (2 * r)));
        let y = r + (Math.random() * (canvas.height - (2 * r)));
        let randomIndex = Math.floor(Math.random() * colors.length);
        let color = colors[randomIndex];
        circles.push(new Circle(x, y, r, color));
    };

    // get distance between the circles 
    const getDistance = (x1, x2, y1, y2) => {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        return distance;
    };

    // check if collided
    const checkCollide = (circle1, circle2) => {
        let x1 = circle1.x;
        let x2 = circle2.x;
        let y1 = circle1.y;
        let y2 = circle2.y;
        let r1 = circle1.r;
        let r2 = circle2.r;
        if (getDistance(x1, x2, y1, y2) <= r1 + r2) {
            circle1.color = "black";
            circle2.color = "black";
        }
    };

    // animate function
    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < circles.length; i++) {
            circles[i].draw();
        }
        for (let i = 0; i < circles.length; i++) {
            for (let j = i + 1; j < circles.length; j++) {
                checkCollide(circles[i], circles[j]);
            }
        }
    }
    animate();
});