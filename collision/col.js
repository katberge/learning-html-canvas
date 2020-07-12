document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

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
        this.color = color;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color;
            c.fill();
        }
        this.mouseMove = () => {
            this.x = mouse.x;
            this.y = mouse.y;
        }
    }

    let circle = new Circle(canvas.width / 2, canvas.height / 2, 70, "black");
    let movingCircle = new Circle(mouse.x, mouse.y, 30, "blue");

    // animate function
    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.draw();
        movingCircle.draw();
        movingCircle.mouseMove();
    }
    animate();
});