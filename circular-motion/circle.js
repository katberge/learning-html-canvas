document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        circles = [];
        init();
    });

    // get distance from center
    const getDistance = (x1, y1) => {
        let x2 = window.innerWidth / 2;
        let y2 = window.innerHeight / 2;
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        return distance;
    };

    function Circle(x, y, r, color) {
        this.x = x;
        this.ogX = x
        this.y = y;
        this.ogY = y
        this.r = r;
        this.color = color;
        this.length = getDistance(this.x, this.y);
        this.radians = 0;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color;
            c.fill();
        }
        this.update = () => {
            this.x = this.ogX + (Math.cos(this.radians) * this.length);
            this.y = this.ogY + (Math.sin(this.radians) * this.length);
            this.radians += Math.PI / 32;
        };
    };

    let r;
    let x;
    let y;
    const colors = ["#9cfff9", "#acf2f9", "#bce2f9", "#ccd2f9", "#dcc2f9", "#ecb2f9", "#fca2f9"];
    let circles = [];

    const init = () => {
        for (let i = 0; i < 50; i++) {
            r = 20;
            x = (canvas.width / 2) - (canvas.height / 4) + (Math.random() * (canvas.height / 2));
            y = (canvas.height / 4) + (Math.random() * (canvas.height / 2));
            let randomIndex = Math.floor(Math.random() * colors.length);
            let color = colors[randomIndex];
            circles.push(new Circle(x, y, r, color));
        }
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        circles.forEach(circle => {
            circle.update();
            circle.draw();
        })
    }
    animate();

});
