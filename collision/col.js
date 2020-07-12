document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    // Circle constructor
    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.stroke();
            c.fill();
        }
    }
});