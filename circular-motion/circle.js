document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
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

    function Particle(r, color) {
        this.x = mouse.x;
        this.y = mouse.y;
        this.r = r;
        this.color = color;
        this.length = 30 + Math.random() * 100;
        this.radians = Math.random() * Math.PI * 2;
        this.draw = (prev) => {
            c.beginPath();
            c.lineWidth = this.r;
            console.log(prev.x, prev.y, this.x, this.y)
            c.moveTo(prev.x, prev.y);
            c.lineTo(this.x, this.y);
            c.strokeStyle = color;
            c.stroke();
        }
        this.update = () => {
            //get past x and y
            this.previous = {
                x: this.x,
                y: this.y
            }
            this.x = mouse.x + (Math.cos(this.radians) * this.length);
            this.y = mouse.y + (Math.sin(this.radians) * this.length);
            this.radians += (this.length + 40) * 0.0003;
            this.draw(this.previous);
        };
    };

    let r;
    const colors = ["#9cfff9", "#acf2f9", "#bce2f9", "#ccd2f9", "#dcc2f9", "#ecb2f9", "#fca2f9"];
    let particles = [];

    const init = () => {
        for (let i = 0; i < 80; i++) {
            r = 1 + Math.random() * 4;
            let randomIndex = Math.floor(Math.random() * colors.length);
            let color = colors[randomIndex];
            particles.push(new Particle(r, color));
        }
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.fillStyle = "rgba(255,255,255, 0.05)"; // smaller opacities make bigger trails
        c.fillRect(0, 0, innerWidth, innerHeight);
        particles.forEach(particle => {
            particle.update();
        })
    }
    animate();

});
