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

    function Circle(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.draw = () => {
            c.beginPath();
            c.arc(x, y, r, 0, Math.PI * 2, false);
            c.strokeStyle = color;
            c.stroke();
            c.fillStyle = color;
            c.fill();
        }
        this.update = () => {};
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
        for (let i = 0; i < circles.length; i ++){
            circles[i].draw();
        }
    }
    animate();

});
