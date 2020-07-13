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

    let mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    })

    function Circle(r, color) {
        this.x = 0;
        this.y = 0;
        this.r = r;
        this.color = color;
        this.length = 30 + Math.random() * 100;
        this.radians = Math.random() * Math.PI * 2;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color;
            c.fill();
        }
        this.update = () => {
            this.x = mouse.x + (Math.cos(this.radians) * this.length);
            this.y = mouse.y + (Math.sin(this.radians) * this.length);
            this.radians += (this.length + 40) * 0.0003;
        };
    };

    let r;
    const colors = ["#9cfff9", "#acf2f9", "#bce2f9", "#ccd2f9", "#dcc2f9", "#ecb2f9", "#fca2f9"];
    let circles = [];

    const init = () => {
        for (let i = 0; i < 80; i++) {
            r = 1 + Math.random() * 4;
            let randomIndex = Math.floor(Math.random() * colors.length);
            let color = colors[randomIndex];
            circles.push(new Circle(r, color));
        }
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.fillStyle = "rgba(255,255,255, 0.2)"; // smaller opacities make bigger trails
        c.fillRect(0, 0, innerWidth, innerHeight);
        circles.forEach(circle => {
            circle.update();
            circle.draw();
        })
    }
    animate();

});
