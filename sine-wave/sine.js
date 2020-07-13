document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })

    const init = () => {
        c.beginPath();
        c.moveTo(0, canvas.height / 2);
        c.lineTo(canvas.width, canvas.height / 2);
        c.stroke();
    };
    init();
    
});