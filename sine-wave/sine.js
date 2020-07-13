document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // make variable for half of canvas.height
    const vertCenter = canvas.height / 2;

    const c = canvas.getContext("2d");

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })

    const init = () => {
        c.beginPath();
        c.moveTo(0, vertCenter);
        //draw a line for every pixel
        for (let i = 1; i < canvas.width; i ++) {
            let length = 0.03;
            let amp = 100;
            let sineWave = Math.sin(i * length) * amp;
            c.lineTo(i, vertCenter + sineWave);
        }
        c.stroke();
    };
    init();
    
});