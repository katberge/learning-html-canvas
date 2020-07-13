document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // gets amp slider
    const ampSlider = document.querySelector("#amp-slider");
    // set amp variable to the value of ampSlider
    let amp = ampSlider.value;
    // make amp update when ampSlider changes
    ampSlider.oninput = () => {
        amp = ampSlider.value;
    };

    // gets length slider (same methods as amp slider)
    const lengthSlider = document.querySelector("#length-slider");
    let length = lengthSlider.value;
    lengthSlider.oninput = () => {
        length = lengthSlider.value;
    };

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
            let sineWave = Math.sin(i * length) * amp;
            c.lineTo(i, vertCenter + sineWave);
        }
        c.stroke();
    };
    init();

    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        init();
    }
    animate();
});